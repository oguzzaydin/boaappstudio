import AppList from "@/components/AppList";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { faqData } from "@/data/faq";
import { faqNode, organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Boa App Studio – Privacy-Focused Mobile Apps",
  description: "Transparent, privacy-focused mobile apps from Boa App Studio, including Fake Incoming Call - Prank.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Our Applications
        </h1>
        <p className="text-lg text-slate-600">
          We build transparent, privacy-focused tools designed for everyday productivity.
          No hidden data collection, no dark patterns, just clean code.
        </p>
      </div>

      <AppList />

      {/* FAQ Section */}
      <FAQ />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [organizationJsonLd(), websiteJsonLd(), faqNode(faqData)],
        }}
      />
    </div>
  );
}
