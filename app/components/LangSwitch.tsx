"use client";

import { useLocale } from "../i18n/LocaleProvider";
import type { Locale } from "../i18n/dictionaries";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VI" },
];

export default function LangSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`lang-switch${className ? ` ${className}` : ""}`}
      role="group"
      aria-label={t.common.langSwitch}
    >
      {options.map((opt, i) => (
        <span key={opt.value} className="lang-switch__pair">
          {i > 0 ? <span className="lang-switch__sep" aria-hidden="true" /> : null}
          <button
            type="button"
            className={`lang-switch__btn${locale === opt.value ? " is-active" : ""}`}
            aria-pressed={locale === opt.value}
            onClick={() => setLocale(opt.value)}
          >
            {opt.label}
          </button>
        </span>
      ))}
    </div>
  );
}
