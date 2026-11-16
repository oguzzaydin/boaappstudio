import { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
    const appUrls = apps.map((app) => ({
        url: `${BASE_URL}/apps/${app.id}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const appPrivacyUrls = apps.map((app) => ({
        url: `${BASE_URL}/privacy-policy/${app.id}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    const appTermsUrls = apps.map((app) => ({
        url: `${BASE_URL}/terms-of-service/${app.id}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

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
    ];
}
