import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppLanding from "@/components/AppLanding";
import { applyAppLocale } from "@/data/rollbye-i18n";
import { parseLegalLocale, rollbyeLegalPaths } from "@/data/rollbye-legal";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
    searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === "rollbye");
    if (!base) {
        return { title: "Rollbye" };
    }
    const app = applyAppLocale(base, locale);
    return pageMetadata({
        title: app.name,
        description: app.description,
        path: rollbyeLegalPaths.app,
        image: app.ogImage,
    });
}

export default async function Page({ searchParams }: PageProps) {
    const locale = parseLegalLocale((await searchParams).lang);
    const base = apps.find((app) => app.id === "rollbye");
    if (!base) {
        notFound();
    }
    return (
        <AppLanding
            app={applyAppLocale(base, locale)}
            locale={locale}
            showLocaleSwitch
        />
    );
}
