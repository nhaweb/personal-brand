"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useLocale } from "../i18n/LocaleProvider";

const IDLE_MS = 2400;

function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5.25 3.4v9.2l7.6-4.6z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M5.5 3.5v9M10.5 3.5v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.75 6.25h2.1L8.5 3.4v9.2l-3.65-2.85h-2.1z" fill="currentColor" />
      <path
        d="M10.75 5.9a3 3 0 0 1 0 4.2M12.5 4.2a5.4 5.4 0 0 1 0 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.75 6.25h2.1L8.5 3.4v9.2l-3.65-2.85h-2.1z" fill="currentColor" />
      <path
        d="M10.75 6.25l3.5 3.5M14.25 6.25l-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M2.5 5.5v-3h3M10.5 2.5h3v3M13.5 10.5v3h-3M5.5 13.5h-3v-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CollapseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M5.5 2.5v3h-3M10.5 2.5v3h3M13.5 10.5h-3v3M2.5 10.5h3v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function formatTime(seconds: number) {
  const s = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function bufferedEnd(video: HTMLVideoElement) {
  const ranges = video.buffered;
  for (let i = 0; i < ranges.length; i += 1) {
    if (ranges.start(i) <= video.currentTime && video.currentTime <= ranges.end(i)) {
      return ranges.end(i);
    }
  }
  return 0;
}

/**
 * Band section clip with a YouTube-style control bar. Auto-plays (muted)
 * once the clip reaches the viewport middle, pauses when it leaves. A hand
 * pause sticks: scrolling never restarts the clip until the user plays it
 * again. Controls fade out while playing and wake on pointer movement.
 */
export default function BandVideo() {
  const { t } = useLocale();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrubbingRef = useRef(false);
  const idleTimerRef = useRef<number | null>(null);
  const lastVolumeRef = useRef(1);
  // A hand pause wins over scroll: once set, auto-play never fires.
  const userPausedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [scrub, setScrub] = useState<number | null>(null);
  const [idle, setIdle] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const wake = useCallback(() => {
    setIdle(false);
    if (idleTimerRef.current != null) window.clearTimeout(idleTimerRef.current);
    idleTimerRef.current = window.setTimeout(() => setIdle(true), IDLE_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (idleTimerRef.current != null) window.clearTimeout(idleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Play gate: shrunk to a line across the viewport middle, so the clip
    // starts exactly when it reaches the middle and pauses once past it.
    const middleLine = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!userPausedRef.current && !reduce) {
              void video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    middleLine.observe(video);

    // Hard stop whenever the section is fully out of the viewport.
    const inView = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) video.pause();
        }
      },
      { threshold: 0 },
    );
    inView.observe(video);

    return () => {
      middleLine.disconnect();
      inView.disconnect();
    };
  }, []);

  // Mirror the element's real state (autoplay policies can override us) so
  // the controls always show the truth.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlay = () => {
      setPlaying(true);
      wake();
    };
    const syncPause = () => {
      setPlaying(false);
      wake();
    };
    const syncVolume = () => {
      setMuted(video.muted);
      setVolume(video.volume);
    };
    const syncTime = () => {
      const dur = video.duration;
      if (Number.isFinite(dur) && dur > 0) setDuration(dur);
      if (scrubbingRef.current) return;
      setCurrent(video.currentTime);
      setBuffered(bufferedEnd(video));
    };
    const syncFullscreen = () => setFullscreen(document.fullscreenElement != null);

    video.addEventListener("play", syncPlay);
    video.addEventListener("pause", syncPause);
    video.addEventListener("volumechange", syncVolume);
    video.addEventListener("timeupdate", syncTime);
    video.addEventListener("progress", syncTime);
    video.addEventListener("durationchange", syncTime);
    document.addEventListener("fullscreenchange", syncFullscreen);

    // Metadata may have loaded (and its events fired) before hydration
    // attached the listeners above — read whatever the element already
    // knows so the timeline is never stuck at zero.
    const knownDuration = video.duration;
    if (Number.isFinite(knownDuration) && knownDuration > 0) {
      setDuration(knownDuration);
    }
    setCurrent(video.currentTime);
    setBuffered(bufferedEnd(video));
    setMuted(video.muted);
    setVolume(video.volume);

    return () => {
      video.removeEventListener("play", syncPlay);
      video.removeEventListener("pause", syncPause);
      video.removeEventListener("volumechange", syncVolume);
      video.removeEventListener("timeupdate", syncTime);
      video.removeEventListener("progress", syncTime);
      video.removeEventListener("durationchange", syncTime);
      document.removeEventListener("fullscreenchange", syncFullscreen);
    };
  }, [wake]);

  const seekTo = useCallback((at: number) => {
    setCurrent(at);
    const video = videoRef.current;
    if (video) video.currentTime = at;
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false; // hand control back to scroll
      void video.play().catch(() => {});
    } else {
      userPausedRef.current = true; // sticks across scrolls
      video.pause();
    }
    wake();
  }, [wake]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.muted) {
      const restore = lastVolumeRef.current > 0 ? lastVolumeRef.current : 1;
      video.volume = restore;
      video.muted = false;
    } else {
      if (video.volume > 0) lastVolumeRef.current = video.volume;
      video.muted = true;
    }
  }, []);

  const onVolumeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const next = clamp01(Number(e.currentTarget.value));
    video.volume = next;
    if (next > 0) {
      lastVolumeRef.current = next;
      if (video.muted) video.muted = false;
    } else if (!video.muted) {
      video.muted = true;
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    } else if (wrapper.requestFullscreen) {
      void wrapper.requestFullscreen().catch(() => {});
    }
  }, []);

  // Timeline scrubbing — pointer capture keeps the drag even off the bar.
  // The element is the source of truth for duration; React state only
  // drives the UI, so a late metadata event can never brick the bar.
  const elementDuration = useCallback(() => {
    const video = videoRef.current;
    if (!video) return 0;
    const dur = video.duration;
    return Number.isFinite(dur) && dur > 0 ? dur : 0;
  }, []);

  const timeAt = useCallback(
    (clientX: number) => {
      const el = timelineRef.current;
      const dur = elementDuration();
      if (!el || dur <= 0) return 0;
      const rect = el.getBoundingClientRect();
      return clamp01((clientX - rect.left) / rect.width) * dur;
    },
    [elementDuration],
  );

  const onTimelineDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (elementDuration() <= 0) return;
      e.preventDefault();
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Without capture the drag still works while hovering the bar.
      }
      scrubbingRef.current = true;
      const at = timeAt(e.clientX);
      seekTo(at);
      setScrub(at);
    },
    [elementDuration, seekTo, timeAt],
  );

  const onTimelineMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!scrubbingRef.current || elementDuration() <= 0) return;
      const at = timeAt(e.clientX);
      seekTo(at);
      setScrub(at);
    },
    [elementDuration, seekTo, timeAt],
  );

  const onTimelineUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!scrubbingRef.current) return;
      scrubbingRef.current = false;
      seekTo(timeAt(e.clientX));
      setScrub(null);
    },
    [seekTo, timeAt],
  );

  const onTimelineKey = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      const dur = elementDuration();
      if (dur <= 0) return;
      const now = scrub ?? current;
      let at: number;
      if (e.key === "ArrowLeft") at = Math.max(0, now - 5);
      else if (e.key === "ArrowRight") at = Math.min(dur, now + 5);
      else if (e.key === "Home") at = 0;
      else if (e.key === "End") at = dur;
      else return;
      e.preventDefault();
      scrubbingRef.current = false;
      setScrub(null);
      seekTo(at);
    },
    [current, elementDuration, scrub, seekTo],
  );

  const shown = scrub ?? current;
  const playedPct = duration > 0 ? `${(shown / duration) * 100}%` : "0%";
  const bufferedPct =
    duration > 0 ? `${Math.min(100, (buffered / duration) * 100)}%` : "0%";

  const classes =
    "band-video" +
    (playing ? " is-playing" : "") +
    (idle && playing && scrub == null ? " is-idle" : "");

  return (
    <div
      ref={wrapperRef}
      className={classes}
      onPointerMove={wake}
      onPointerDown={wake}
      onPointerLeave={wake}
    >
      <video
        ref={videoRef}
        className="band-video__el"
        src="/video/hiep_vo_bds_gioi_thieu.mp4"
        poster="/images/ai/band-skyline.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={t.band.videoAlt}
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
      />

      <div className="band-video__big">
        <button
          type="button"
          className="band-video__big-btn"
          onClick={togglePlay}
          aria-label={t.band.play}
          tabIndex={playing ? -1 : 0}
        >
          <PlayIcon size={22} />
        </button>
      </div>

      <div className="band-video__controls">
        <div
          ref={timelineRef}
          className={
            "band-video__timeline" + (scrub != null ? " is-scrubbing" : "")
          }
          role="slider"
          tabIndex={0}
          aria-label={t.band.timeline}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(shown)}
          aria-valuetext={`${formatTime(shown)} / ${formatTime(duration)}`}
          onPointerDown={onTimelineDown}
          onPointerMove={onTimelineMove}
          onPointerUp={onTimelineUp}
          onPointerCancel={onTimelineUp}
          onKeyDown={onTimelineKey}
        >
          <div className="band-video__track">
            <span className="band-video__buffered" style={{ width: bufferedPct }} />
            <span className="band-video__played" style={{ width: playedPct }} />
            <span
              className="band-video__thumb"
              style={{ left: playedPct }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="band-video__bar">
          <button
            type="button"
            className="band-video__btn"
            onClick={togglePlay}
            aria-label={playing ? t.band.pause : t.band.play}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <div className="band-video__volume">
            <button
              type="button"
              className="band-video__btn"
              onClick={toggleMute}
              aria-label={muted ? t.band.unmute : t.band.mute}
            >
              {muted ? <SoundOffIcon /> : <SoundOnIcon />}
            </button>
            <input
              className="band-video__range"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              aria-label={t.band.volume}
              onChange={onVolumeInput}
            />
          </div>

          {duration > 0 && (
            <span className="band-video__time nums">
              {formatTime(shown)} / {formatTime(duration)}
            </span>
          )}

          <span className="band-video__spacer" aria-hidden="true" />

          <button
            type="button"
            className="band-video__btn"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? t.band.exitFullscreen : t.band.fullscreen}
          >
            {fullscreen ? <CollapseIcon /> : <ExpandIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
