import Link from "next/link";
import type { LegalLocale } from "@/data/rollbye-legal";
import { localeHref } from "@/data/rollbye-legal";

type LocaleSwitchProps = {
  path: string;
  locale: LegalLocale;
};

export default function LocaleSwitch({ path, locale }: LocaleSwitchProps) {
  const itemClass = (active: boolean) =>
    `px-2.5 py-1 rounded-md transition-colors ${
      active
        ? "bg-slate-900 text-white"
        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
    }`;

  return (
    <nav
      className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-[11px] font-bold tracking-wide"
      aria-label="Language"
    >
      <Link href={localeHref(path, "en")} hrefLang="en" className={itemClass(locale === "en")}>
        EN
      </Link>
      <Link href={localeHref(path, "tr")} hrefLang="tr" className={itemClass(locale === "tr")}>
        TR
      </Link>
    </nav>
  );
}
