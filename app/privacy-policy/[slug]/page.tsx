import { apps } from "@/data/apps";
import { notFound } from "next/navigation";
import AppPrivacyPolicy from "@/components/AppPrivacyPolicy";
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
        return { title: "Privacy Policy" };
    }

    return pageMetadata({
        title: `${app.name} Privacy Policy`,
        description: `Privacy policy for ${app.name}, including ads, analytics, crash information, and how to contact Boa Apps Studio.`,
        path: `/privacy-policy/${app.id}`,
    });
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    return <AppPrivacyPolicy app={app} canonicalPath={`/privacy-policy/${app.id}`} />;
}
