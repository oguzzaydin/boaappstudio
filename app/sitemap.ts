import { MetadataRoute } from "next";
import { apps } from "@/data/apps";

const BASE_URL = "https://boaappstudio.com"; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const appUrls = apps.map((app) => ({
        url: `${BASE_URL}/apps/${app.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const appPrivacyUrls = apps.map((app) => ({
        url: `${BASE_URL}/privacy-policy/${app.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    const appTermsUrls = apps.map((app) => ({
        url: `${BASE_URL}/terms-of-service/${app.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${BASE_URL}/support`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/cookie-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        ...appUrls,
        ...appPrivacyUrls,
        ...appTermsUrls,
    ];
}
