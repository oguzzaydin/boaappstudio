import Link from "next/link";
import Image from "next/image";
import { AppData } from "@/data/apps";
import { ArrowRight, Zap } from "lucide-react";

interface AppCardProps {
    app: AppData;
}

export default function AppCard({ app }: AppCardProps) {
    return (
        <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="mb-5 flex items-start justify-between">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 overflow-hidden shadow-sm">
                    {app.icon && app.icon.startsWith("/") ? (
                        <Image
                            src={app.icon}
                            alt={`${app.name} icon`}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <Zap className="h-7 w-7" />
                    )}
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                    v{app.version}
                </span>
            </div>

            {/* Coming Soon Badge Overlay */}
            {(!app.storeLinks.appStore || app.storeLinks.appStore === "#") && (!app.storeLinks.googlePlay || app.storeLinks.googlePlay === "#") && (
                <div className="absolute top-6 right-6 z-10">
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md border border-white/20 tracking-wider">
                        COMING SOON
                    </span>
                </div>
            )}

            <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {app.name}
            </h3>
            <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-500">
                {app.description}
            </p>

            {/* Feature Badges - take first 2 */}
            <div className="mb-6 flex flex-wrap gap-2">
                {app.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
                        {feature}
                    </span>
                ))}
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{app.monetization}</span>
                <Link
                    href={`/apps/${app.id}`}
                    className="flex items-center text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                >
                    View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
