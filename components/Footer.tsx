import { apps } from "@/data/apps";
import { Twitter, Linkedin, Mail, Shield, CheckCircle, Zap, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

                    {/* Brand Section - Takes up half the width (6 cols) */}
                    <div className="md:col-span-2 lg:col-span-6 space-y-4">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                            </div>
                            <span>Boa App Studio</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Building transparent, privacy-focused tools for everyday productivity. No hidden clauses, just great software.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {/* X (Twitter) */}
                            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            {/* Instagram */}
                            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-pink-600 transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-blue-700 transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            {/* Facebook */}
                            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            {/* Reddit */}
                            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-orange-600 transition-colors" aria-label="Reddit">
                                <Zap className="h-4 w-4" />
                            </a>
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
                        © {new Date().getFullYear()} Boa App Studio. All rights reserved.
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
