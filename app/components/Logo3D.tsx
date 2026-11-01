"use client";

import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  CanvasTexture,
  ExtrudeGeometry,
  SRGBColorSpace,
  type Group,
  type MeshStandardMaterialParameters,
} from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

const SVG_URL = "/images/pml-logo.svg";
const HDRI_URL = "/hdri/studio.hdr";

/** Brand orange → near-white, matching the PML chrome reference. */
const ORANGE_WHITE = "#ff7a00";

type Logo3DProps = {
  /** Chrome base color for the extruded mark. */
  color?: MeshStandardMaterialParameters["color"];
  className?: string;
  style?: CSSProperties;
};

function useOrangeWhiteMap() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#c43a00");
    gradient.addColorStop(0.28, "#ff5a00");
    gradient.addColorStop(0.55, "#ff7a00");
    gradient.addColorStop(0.78, "#ffc56a");
    gradient.addColorStop(1, "#fff8e8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function StudioEnvironment() {
  const { scene } = useThree();

  useEffect(() => {
    // Warm HDR alone reads as bronze on metal — keep it subtle.
    scene.environmentIntensity = 0.42;
    return () => {
      scene.environmentIntensity = 1;
    };
  }, [scene]);

  return <Environment files={HDRI_URL} />;
}

function ExtrudedSvgLogo({ color }: { color: Logo3DProps["color"] }) {
  const data = useLoader(SVGLoader, SVG_URL);
  const gradientMap = useOrangeWhiteMap();

  const geometries = useMemo(() => {
    const shapes = data.paths.flatMap((path) => path.toShapes());
    return shapes.map(
      (shape) =>
        new ExtrudeGeometry(shape, {
          depth: 28,
          bevelEnabled: true,
          bevelThickness: 2.2,
          bevelSize: 1.6,
          bevelOffset: 0,
          bevelSegments: 3,
          curveSegments: 12,
        }),
    );
  }, [data]);

  useEffect(() => {
    return () => {
      for (const geometry of geometries) geometry.dispose();
      gradientMap?.dispose();
    };
  }, [geometries, gradientMap]);

  return (
    <Center>
      <group rotation={[Math.PI, 0, 0]} scale={0.0065}>
        {geometries.map((geometry, index) => (
          <mesh key={index} geometry={geometry} castShadow receiveShadow>
            <meshStandardMaterial
              color={color}
              map={gradientMap}
              metalness={1}
              roughness={0.1}
              envMapIntensity={0.95}
            />
          </mesh>
        ))}
      </group>
    </Center>
  );
}

function RotatingLogo({
  color,
  reducedMotion,
  dragging,
}: {
  color: Logo3DProps["color"];
  reducedMotion: boolean;
  dragging: boolean;
}) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (reducedMotion || dragging) return;
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y += delta * 0.35;
  });

  return (
    <group ref={groupRef}>
      <ExtrudedSvgLogo color={color} />
    </group>
  );
}

function LogoScene({
  color,
  reducedMotion,
}: {
  color: Logo3DProps["color"];
  reducedMotion: boolean;
}) {
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <ambientLight intensity={0.45} color="#fff7f0" />
      {/* White key — chrome highlights toward trắng */}
      <directionalLight position={[5, 6, 4]} intensity={1.35} color="#ffffff" />
      {/* Orange fill — keeps body cam, not đồng */}
      <directionalLight position={[-4, 2, 3]} intensity={0.85} color="#ff8a2a" />
      <directionalLight position={[0, -3, 5]} intensity={0.35} color="#ffe0c0" />
      <StudioEnvironment />
      <RotatingLogo
        color={color}
        reducedMotion={reducedMotion}
        dragging={dragging}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.7}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </>
  );
}

function Placeholder({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at 50% 45%, color-mix(in srgb, #ff7a00 16%, transparent), transparent 62%)",
      }}
    />
  );
}

/** Auto-rotating chrome PML mark (R3F). Mounts the canvas only while in view. */
export default function Logo3D({
  color = ORANGE_WHITE,
  className = "",
  style,
}: Logo3DProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin: "120px 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shellClass = ["logo-3d", "h-64 w-full lg:h-[480px]", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={rootRef}
      className={shellClass}
      style={{ touchAction: "pan-y", ...style }}
    >
      {inView ? (
        <Suspense fallback={<Placeholder />}>
          <Canvas
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            dpr={[1, 2]}
            camera={{ position: [0, 0, 6], fov: 40, near: 0.1, far: 100 }}
            style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
          >
            <LogoScene color={color} reducedMotion={reducedMotion} />
          </Canvas>
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
