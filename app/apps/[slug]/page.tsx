import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppLanding from "@/components/AppLanding";
import { pageMetadata } from "@/lib/seo";

// Apps with their own folder under app/apps/ (EN/TR legal pages).
const DEDICATED_APP_IDS = ["rollbye", "fakeincomingcall"];

// SSG: Generate params for catalog apps that do not have a dedicated folder
export async function generateStaticParams() {
    return apps
        .filter((app) => !DEDICATED_APP_IDS.includes(app.id))
        .map((app) => ({
            slug: app.id,
        }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

// SEO: Generate metadata for each app
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        return {
            title: "App Not Found",
        };
    }

    return pageMetadata({
        title: app.name,
        description: app.description,
        path: `/apps/${app.id}`,
        image: app.ogImage,
        imageAlt: app.ogImageAlt,
        imageWidth: app.ogImageWidth,
        imageHeight: app.ogImageHeight,
    });
}

export default async function AppDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    return <AppLanding app={app} />;
}
