import { apps } from "@/data/apps";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { socialProfiles } from "@/lib/seo";

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
        </svg>
    );
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

const socialIcons = {
    YouTube: Youtube,
    Instagram,
    TikTok: TikTokIcon,
    X: XIcon,
} as const;

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

                    {/* Brand Section - Takes up half the width (6 cols) */}
                    <div className="md:col-span-2 lg:col-span-6 space-y-4">
                        <Image
                            src="/logo-wordmark.webp"
                            alt="Boa Apps Studio"
                            width={1600}
                            height={350}
                            className="h-8 w-auto"
                        />
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Building transparent, privacy-focused tools for everyday productivity. No hidden clauses, just great software.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {socialProfiles.map((profile) => {
                                const Icon = socialIcons[profile.name];
                                return (
                                    <a
                                        key={profile.name}
                                        href={profile.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={profile.name}
                                        className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Links - Remaining 6 cols divided by 2 */}

                    {/* Apps Column - Cols 7-9 */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-slate-900 mb-4 text-sm tracking-wide uppercase opacity-90">Our Apps</h3>
                        <ul className="space-y-3">
                            {apps.map((app) => (
                                <li key={app.id}>
                                    <Link href={`/apps/${app.id}`} className="text-sm text-slate-500 hover:text-blue-600 transition-colors block">
                                        {app.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/apps" className="text-sm text-slate-500 hover:text-blue-600 transition-colors block">
                                    All apps
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column - Cols 10-12 */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-slate-900 mb-4 text-sm tracking-wide uppercase opacity-90">Company</h3>
                        <ul className="space-y-3">

                            <li>
                                <Link href="/support" className="text-sm text-slate-500 hover:text-blue-600 transition-colors block">
                                    Support Center
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:contact@boaappstudio.com" className="text-sm text-slate-500 hover:text-blue-600 transition-colors block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Boa Apps Studio. All rights reserved.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        {/* Horizontal Legal Links */}
                        <div className="flex items-center gap-4 md:gap-6 text-xs text-slate-500">
                            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookie-policy" className="hover:text-blue-600 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
