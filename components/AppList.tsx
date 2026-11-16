import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";

export default function AppList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app, index) => (
        <AppCard key={app.id} app={app} priority={index === 0} />
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
  );
}
