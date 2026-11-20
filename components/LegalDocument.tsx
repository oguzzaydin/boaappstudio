import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import {
  type LegalDoc,
  type LegalLocale,
  contacts,
  localeHref,
  rollbyeLegalPaths,
  ui,
} from "@/data/rollbye-legal";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export function legalMetadata(
  path: string,
  locale: LegalLocale,
  title: string,
  description: string,
) {
  const languages = {
    en: rollbyeAbsolute(path),
    tr: `${rollbyeAbsolute(path)}?lang=tr`,
  };
  const base = pageMetadata({
    title,
    description,
    path,
  });
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages,
    },
  };
}

function rollbyeAbsolute(path: string) {
  return `${SITE_URL}${path}`;
}

export function LegalLocaleSwitch({
  path,
  locale,
}: {
  path: string;
  locale: LegalLocale;
}) {
  const other: LegalLocale = locale === "en" ? "tr" : "en";
  const labels = ui[locale];
  return (
    <nav className="mt-6 flex items-center justify-center gap-3 text-sm" aria-label="Language">
      <span className="font-semibold text-slate-900">{labels.langName}</span>
      <span className="text-slate-300" aria-hidden="true">
        ·
      </span>
      <Link
        href={localeHref(path, other)}
        className="font-medium text-blue-600 hover:underline"
        hrefLang={other}
      >
        {labels.otherLangName}
      </Link>
    </nav>
  );
}

export function LegalDocument({
  locale,
  path,
  icon,
  doc,
}: {
  locale: LegalLocale;
  path: string;
  icon?: ReactNode;
  doc: LegalDoc;
}) {
  const labels = ui[locale];
  const related = [
    { href: rollbyeLegalPaths.privacy, label: labels.privacy },
    { href: rollbyeLegalPaths.terms, label: labels.terms },
    { href: rollbyeLegalPaths.deleteData, label: labels.deleteData },
    { href: rollbyeLegalPaths.support, label: labels.support },
  ].filter((item) => item.href !== path);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: labels.breadcrumbHome, path: "/" },
          { name: labels.breadcrumbApps, path: "/apps" },
          { name: "Rollbye", path: rollbyeLegalPaths.app },
          { name: doc.title, path },
        ])}
      />
      <div className="border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href={localeHref(rollbyeLegalPaths.app, locale)}
            className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {labels.backToApp}
          </Link>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-blue-100 p-3 text-blue-600">
              {icon ?? <Shield className="h-8 w-8" />}
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {doc.title}
            </h1>
            <p className="text-lg text-slate-600">{doc.summary}</p>
            <p className="mt-4 text-sm text-slate-500">{doc.updatedLabel}</p>
            <LegalLocaleSwitch path={path} locale={locale} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
          {doc.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-slate-700">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  {section.bullets.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              {locale === "tr" ? "İletişim" : "Contact"}
            </h2>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="mb-2 font-medium text-slate-900">
                {locale === "tr" ? "Destek:" : "Support:"}{" "}
                <a href={`mailto:${contacts.support}`} className="text-blue-600 hover:underline">
                  {contacts.support}
                </a>
              </p>
              <p className="mb-2 font-medium text-slate-900">
                {locale === "tr" ? "Hukuk:" : "Legal:"}{" "}
                <a href={`mailto:${contacts.legal}`} className="text-blue-600 hover:underline">
                  {contacts.legal}
                </a>
              </p>
              <p className="font-medium text-slate-900">
                {locale === "tr" ? "Genel:" : "General:"}{" "}
                <a href={`mailto:${contacts.general}`} className="text-blue-600 hover:underline">
                  {contacts.general}
                </a>
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">{labels.relatedPages}</h2>
            <ul className="space-y-2">
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(item.href, locale)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
