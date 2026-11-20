import { ArrowLeft, CheckCircle, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { LegalLocaleSwitch } from "@/components/LegalDocument";
import {
  appPageCopy,
  localeHref,
  parseLegalLocale,
  rollbyeLegalPaths,
  ui,
} from "@/data/rollbye-legal";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  const copy = appPageCopy[locale];
  const base = pageMetadata({
    title: `${copy.title}: ${copy.tagline}`,
    description: copy.description,
    path: rollbyeLegalPaths.app,
  });
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: {
        en: `${SITE_URL}${rollbyeLegalPaths.app}`,
        tr: `${SITE_URL}${rollbyeLegalPaths.app}?lang=tr`,
      },
    },
  };
}

export default async function RollbyeAppPage({ searchParams }: PageProps) {
  const locale = parseLegalLocale((await searchParams).lang);
  const copy = appPageCopy[locale];
  const labels = ui[locale];
  const legalLinks = [
    { href: rollbyeLegalPaths.privacy, label: labels.privacy },
    { href: rollbyeLegalPaths.terms, label: labels.terms },
    { href: rollbyeLegalPaths.deleteData, label: labels.deleteData },
    { href: rollbyeLegalPaths.support, label: labels.support },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: labels.breadcrumbHome, path: "/" },
          { name: labels.breadcrumbApps, path: "/apps" },
          { name: "Rollbye", path: rollbyeLegalPaths.app },
        ])}
      />
      <div className="border-b border-slate-100 bg-white">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/apps"
            className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {labels.breadcrumbApps}
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-[2rem] border border-slate-100 bg-blue-50 text-blue-600 shadow-sm">
              <Smartphone className="h-12 w-12" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                {copy.tagline}
              </p>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {copy.title}
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">{copy.description}</p>
              <LegalLocaleSwitch path={rollbyeLegalPaths.app} locale={locale} />
            </div>
          </div>

          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">{copy.featuresHeading}</h2>
            <ul className="space-y-3">
              {copy.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-10 text-sm text-slate-500">{copy.storeNote}</p>

          <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {copy.legalHeading}
              </h2>
            </div>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
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
