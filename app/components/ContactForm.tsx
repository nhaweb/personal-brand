"use client";

import { useLocale } from "../i18n/LocaleProvider";
import Arrow from "./Arrow";

/** Contact form shared by the header overlay and the /contact page.
 *  Submits via mailto so it works without a backend. */
export default function ContactForm({ className = "" }: { className?: string }) {
  const { t } = useLocale();

  function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const note = String(data.get("note") || "").trim();
    const subject = encodeURIComponent(
      name
        ? t.form.subjectWithName.replace("{name}", name)
        : t.form.subjectFallback,
    );
    const body = encodeURIComponent(
      [
        `${t.form.mailName}: ${name}`,
        `${t.form.mailEmail}: ${email}`,
        "",
        note,
      ].join("\n"),
    );
    window.location.href = `mailto:pmluanvn@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className={`contact-form${className ? ` ${className}` : ""}`}
      onSubmit={submitContact}
    >
      <label>
        {t.form.name}
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        {t.form.email}
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        {t.form.note}
        <textarea name="note" rows={5} required />
      </label>
      <button type="submit" className="btn btn--accent">
        {t.form.send}
        <Arrow />
      </button>
    </form>
  );
}
