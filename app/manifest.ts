import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Boa Apps Studio",
        short_name: "Boa Apps",
        description: "Transparent, privacy-focused tools designed for everyday productivity.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2563eb", // Blue-600
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
