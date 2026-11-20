import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LocaleSwitch from "@/components/LocaleSwitch";
import type { AppData } from "@/data/apps";
import type { LegalBlock, LegalDoc, LegalLocale } from "@/data/rollbye-legal";
import { localeHref, rollbyeLegalPaths, ui } from "@/data/rollbye-legal";
import { breadcrumbJsonLd } from "@/lib/seo";

type AppLegalArticleProps = {
    app: AppData;
    locale: LegalLocale;
    path: string;
    doc: LegalDoc;
    breadcrumbName: string;
};

function slugify(heading: string) {
    return heading
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function Section({ block }: { block: LegalBlock }) {
    return (
        <section id={slugify(block.heading)} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{block.heading}</h2>
            {block.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                </p>
            ))}
            {block.bullets && block.bullets.length > 0 ? (
                <ul className="space-y-3 mb-2">
                    {block.bullets.map((item) => (
                        <li key={item} className="flex items-start text-slate-600 leading-relaxed">
                            <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {item}
                        </li>
                    ))}
                </ul>
            ) : null}
        </section>
    );
}

export default function AppLegalArticle({
    app,
    locale,
    path,
    doc,
    breadcrumbName,
}: AppLegalArticleProps) {
    const labels = ui[locale];
    const related = [
        { href: rollbyeLegalPaths.privacy, label: labels.privacy },
        { href: rollbyeLegalPaths.terms, label: labels.terms },
        { href: rollbyeLegalPaths.deleteData, label: labels.deleteData },
        { href: rollbyeLegalPaths.support, label: labels.support },
    ].filter((item) => item.href !== path);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: app.name, path: `/apps/${app.id}` },
                    { name: breadcrumbName, path },
                ])}
            />
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                    <Link
                        href={localeHref(`/apps/${app.id}`, locale)}
                        className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> {labels.backToApp}
                    </Link>
                    <LocaleSwitch path={path} locale={locale} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{doc.title}</h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">{doc.summary}</p>
                    <div className="mt-4 flex items-center text-sm text-slate-500">
                        <span className="inline-block w-4 h-[1px] bg-slate-400 mr-2"></span>
                        {doc.updatedLabel}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-12 space-y-8">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-3">
                                    {labels.relatedPages === "Related pages" ? "Contents" : "İçindekiler"}
                                </h3>
                                <nav className="space-y-1">
                                    {doc.sections.map((block) => (
                                        <a
                                            key={block.heading}
                                            href={`#${slugify(block.heading)}`}
                                            className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                        >
                                            {block.heading}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-3">
                                    {labels.relatedPages}
                                </h3>
                                <nav className="space-y-1">
                                    {related.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={localeHref(item.href, locale)}
                                            className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-9 space-y-16">
                        {doc.sections.map((block) => (
                            <Section key={block.heading} block={block} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
