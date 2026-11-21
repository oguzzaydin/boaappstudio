import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy/rollbye",
        destination: "/apps/rollbye/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service/rollbye",
        destination: "/apps/rollbye/terms",
        permanent: true,
      },
      {
        source: "/privacy-policy/fake-incoming-call-prank",
        destination: "/apps/fakeincomingcall/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service/fake-incoming-call-prank",
        destination: "/apps/fakeincomingcall/terms",
        permanent: true,
      },
      {
        source: "/apps/fake-incoming-call-prank",
        destination: "/apps/fakeincomingcall",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
