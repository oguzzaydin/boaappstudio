import { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { rollbyeLegalPaths } from "@/data/rollbye-legal";
import { FIC_APP_ID, FIC_UPDATED, ficLegalPaths } from "@/data/fakeincomingcall-legal";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;
const ROLLBYE_UPDATED = "2026-11-20";

export default function sitemap(): MetadataRoute.Sitemap {
    // Apps whose legal pages live under /apps/<slug>/ are listed separately below.
    const catalogApps = apps.filter((app) => !app.privacyPolicy.startsWith("/apps/"));

    const appUrls = apps.map((app) => ({
        url: `${BASE_URL}/apps/${app.id}`,
        lastModified:
            app.id === "rollbye"
                ? ROLLBYE_UPDATED
                : app.id === FIC_APP_ID
                  ? FIC_UPDATED
                  : CONTENT_UPDATED,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const appPrivacyUrls = catalogApps.map((app) => ({
        url: `${BASE_URL}/privacy-policy/${app.id}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    const appTermsUrls = catalogApps.map((app) => ({
        url: `${BASE_URL}/terms-of-service/${app.id}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    const rollbyeLegalUrls = [
        rollbyeLegalPaths.privacy,
        rollbyeLegalPaths.terms,
        rollbyeLegalPaths.deleteData,
        rollbyeLegalPaths.support,
    ].flatMap((path) => [
        {
            url: `${BASE_URL}${path}`,
            lastModified: ROLLBYE_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${BASE_URL}${path}?lang=tr`,
            lastModified: ROLLBYE_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ]);

    const ficLegalUrls = [
        ficLegalPaths.privacy,
        ficLegalPaths.terms,
        ficLegalPaths.deleteData,
    ].flatMap((path) => [
        {
            url: `${BASE_URL}${path}`,
            lastModified: FIC_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${BASE_URL}${path}?lang=tr`,
            lastModified: FIC_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ]);

    return [
        {
            url: BASE_URL,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${BASE_URL}/apps`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/support`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/terms-of-service`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/cookie-policy`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        ...appUrls,
        ...appPrivacyUrls,
        ...appTermsUrls,
        ...rollbyeLegalUrls,
        ...ficLegalUrls,
    ];
}
