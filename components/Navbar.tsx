"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Zap, X, ChevronDown } from "lucide-react";
import { apps } from "@/data/apps";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAppsOpen, setIsMobileAppsOpen] = useState(true);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileApps = () => setIsMobileAppsOpen(!isMobileAppsOpen);

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-14 w-14 overflow-hidden rounded-lg shadow-sm transition-transform group-hover:scale-105">
                            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            Boa App Studio
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">

                    {/* Apps Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors py-2">
                            Apps
                            <svg className="ml-1 h-3 w-3 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 pt-2">
                            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                                <div className="p-2 space-y-1">
                                    {apps.map((app) => (
                                        <Link
                                            key={app.id}
                                            href={`/apps/${app.id}`}
                                            className="block px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-blue-50 border border-blue-100">
                                                    {app.icon ? (
                                                        <Image
                                                            src={app.icon}
                                                            alt={app.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center text-blue-500">
                                                            <Zap className="h-5 w-5" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm text-slate-900">{app.name}</p>
                                                    <p className="text-xs text-slate-500 line-clamp-1">{app.tagline}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-2 text-center">
                                    <Link href="/" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                                        View All Apps →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/support" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Support
                    </Link>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <Link
                        href="mailto:contact@boaappstudio.com"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md active:transform active:scale-95"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white shadow-lg absolute w-full left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="p-4 space-y-1">

                        {/* Mobile Apps Section */}
                        <div className="py-2">
                            <button
                                onClick={toggleMobileApps}
                                className="flex w-full items-center justify-between py-2 text-base font-medium text-slate-900"
                            >
                                <span>Apps</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${isMobileAppsOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isMobileAppsOpen && (
                                <div className="mt-2 space-y-1 pl-2 border-l-2 border-slate-100 ml-2">
                                    {apps.map((app) => (
                                        <Link
                                            key={app.id}
                                            href={`/apps/${app.id}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                                        >
                                            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-blue-50 border border-blue-100">
                                                {app.icon ? (
                                                    <Image
                                                        src={app.icon}
                                                        alt={app.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center text-blue-500">
                                                        <Zap className="h-4 w-4" />
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-sm font-medium text-slate-600">{app.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="h-px bg-slate-100 my-2"></div>

                        <Link
                            href="/support"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg"
                        >
                            Support
                        </Link>
                        <Link
                            href="/privacy-policy"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg"
                        >
                            Privacy Policy
                        </Link>

                        <div className="pt-4 mt-4">
                            <Link
                                href="mailto:contact@boaappstudio.com"
                                className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-blue-700 shadow-sm active:scale-95"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
