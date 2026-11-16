import AppList from "@/components/AppList";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Apps",
  description: "Mobile apps from Boa Apps Studio, including Fake Incoming Call - Prank for Android.",
  path: "/apps",
});

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Apps", path: "/apps" },
        ])}
      />
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Our Apps
        </h1>
        <p className="text-lg text-slate-600">
          Browse the mobile apps published by Boa Apps Studio.
        </p>
      </div>

      <AppList />
    </div>
  );
}
