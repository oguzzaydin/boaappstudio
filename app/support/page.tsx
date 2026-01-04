"use client";

import { useState } from "react";
import { Mail, MessageCircle, HelpCircle, Shield, FileText, Check, Copy, ArrowRight, Headset } from "lucide-react";
import Link from 'next/link';

export default function SupportPage() {
    const [copied, setCopied] = useState(false);
    const email = "contact@boaappstudio.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Hero Section */}
            <div className="bg-white border-b border-slate-100 pb-16 pt-20">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
                            We are here to help.
                        </h1>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 rotation-3">
                            <Headset className="h-7 w-7" />
                        </div>
                    </div>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-500 leading-relaxed">
                        Transparency and user satisfaction are our top priorities. Whether you have a question about our privacy practices, need help with an app, or just want to say hello, we want to hear from you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="mailto:contact@boaappstudio.com"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Email Support
                        </Link>
                        <Link
                            href="/#faq"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-100 px-8 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200"
                        >
                            View FAQs
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl space-y-20">

                    {/* Contact Section Title */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                    </div>

                    {/* Contact Card */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2">

                            {/* Left Side: General Info */}
                            <div className="p-8 sm:p-12 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                        <MessageCircle className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-slate-900">General Inquiries & Support</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        For issues regarding account access, billing, or technical bugs. We maintain strict privacy standards and never share your data.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 w-fit px-4 py-2 rounded-full">
                                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
                                        Typically replies within 24 hours
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Email Action */}
                            <div className="flex flex-col justify-center bg-slate-50/80 p-8 sm:p-12 border-t md:border-t-0 md:border-l border-slate-100">
                                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Support Email</p>
                                <h3 className="mb-8 text-xl sm:text-2xl font-black text-slate-900 break-all tracking-tight">
                                    {email}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={copyToClipboard}
                                        className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="mr-2 h-4 w-4 text-emerald-500" /> Copied
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="mr-2 h-4 w-4" /> Copy
                                            </>
                                        )}
                                    </button>
                                    <Link
                                        href={`mailto:${email}`}
                                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <Mail className="mr-2 h-4 w-4" /> Email Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Self-Help Section */}
                    <div id="faqs">
                        <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold text-slate-900">Self-Help Resources</h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* FAQ Card */}
                            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                                    <HelpCircle className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-slate-900">Frequently Asked Questions</h3>
                                <p className="mb-6 text-sm text-slate-500 leading-relaxed">
                                    Find answers to common questions about features, troubleshooting, and app permissions.
                                </p>
                                <Link href="/#faq" className="inline-flex items-center text-sm font-bold text-blue-600 transition-colors hover:text-blue-700">
                                    Read FAQs <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>

                            {/* Privacy Policy Card */}
                            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-slate-900">Privacy Policy</h3>
                                <p className="mb-6 text-sm text-slate-500 leading-relaxed">
                                    Learn exactly how we handle your data with complete transparency and care.
                                </p>
                                <Link href="/privacy-policy" className="inline-flex items-center text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700">
                                    View Policy <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>

                            {/* Terms Card */}
                            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-slate-900">Terms of Service</h3>
                                <p className="mb-6 text-sm text-slate-500 leading-relaxed">
                                    Understand the rules and regulations that govern the use of our applications.
                                </p>
                                <Link href="/terms-of-service" className="inline-flex items-center text-sm font-bold text-purple-600 transition-colors hover:text-purple-700">
                                    Read Terms <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
