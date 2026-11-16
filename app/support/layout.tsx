import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Support",
  description: "Contact Boa Apps Studio for help with an app, a privacy question, or a general inquiry.",
  path: "/support",
});

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Support", path: "/support" },
        ])}
      />
      {children}
    </>
  );
}
