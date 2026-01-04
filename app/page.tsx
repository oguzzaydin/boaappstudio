import AppCard from "@/components/AppCard";
import FAQ from "@/components/FAQ";
import { faqData } from "@/data/faq";
import { apps } from "@/data/apps";

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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}

        {/* 'More Coming Soon' Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-slate-50 p-6 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <span className="text-xl">🛠️</span>
          </div>
          <h3 className="mb-1 text-lg font-semibold text-slate-900">More Coming Soon</h3>
          <p className="text-sm text-slate-500">
            We are currently building new tools for health and fitness.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
