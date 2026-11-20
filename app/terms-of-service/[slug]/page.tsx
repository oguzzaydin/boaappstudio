import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppTermsOfService from "@/components/AppTermsOfService";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return apps
        .filter((app) => !app.privacyPolicy.startsWith("/apps/"))
        .map((app) => ({
            slug: app.id,
        }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        return { title: "Terms of Service" };
    }

    return pageMetadata({
        title: `${app.name} Terms of Service`,
        description: `Terms of service for ${app.name}, published by Boa Apps Studio.`,
        path: `/terms-of-service/${app.id}`,
    });
}

export default async function TermsOfServicePage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    return <AppTermsOfService app={app} canonicalPath={`/terms-of-service/${app.id}`} />;
}
