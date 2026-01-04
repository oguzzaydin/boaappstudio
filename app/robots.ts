import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = "https://boaappstudio.com"; // Replace with actual domain

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
