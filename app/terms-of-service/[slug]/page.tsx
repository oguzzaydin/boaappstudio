import { apps } from "@/data/apps";
import { ArrowLeft, CheckCircle, Smartphone, Info, Mail, AlertCircle, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return apps.map((app) => ({
        slug: app.id,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function TermsOfServicePage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    const lastUpdated = "October 24, 2025"; // Placeholder or could be added to data model

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Top Navigation */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <Link href={`/apps/${app.id}`} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to {app.name}
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        By using {app.name} or our website, you agree to these terms. We believe in transparency and fair usage, without hidden clauses.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-slate-500">
                        <span className="inline-block w-4 h-[1px] bg-slate-400 mr-2"></span>
                        Last Updated: {lastUpdated}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-12">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-3">Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    'Acceptance of Terms',
                                    'Use License',
                                    'Privacy & Data',
                                    'User Conduct',
                                    'Disclaimer',
                                    'Limitation of Liability',
                                    'Contact Us'
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-16">

                        {/* 1. Acceptance of Terms */}
                        <section id="acceptance-of-terms" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Boa App Studio ("we", "us", or "our") operates the mobile application <strong>{app.name}</strong> (the "Service").
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using the Service, you confirm that you accept these Terms of Service and agree to comply with them. If you do not agree to these terms, you must not use our Service.
                            </p>
                        </section>

                        {/* 2. Use License */}
                        <section id="use-license" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We grant you a personal, non-exclusive, non-transferable, revocable license to use our mobile applications for your personal, non-commercial use, subject to these Terms.
                            </p>
                            <p className="text-slate-600 font-medium mb-2">You agree not to:</p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on the Service;",
                                    "Remove any copyright or other proprietary notations from the materials;",
                                    "Transfer the materials to another person or \"mirror\" the materials on any other server;",
                                    "Use the Service for any illegal purpose or in violation of any local, state, national, or international law."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                                        <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="rounded-xl bg-blue-50 p-6 border border-blue-100 flex gap-4">
                                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    <strong>Open Source Note:</strong> Some of our components may be Open Source. For those specific projects, the MIT License or Apache 2.0 License provided in the respective repositories takes precedence over this general license where applicable.
                                </p>
                            </div>
                        </section>

                        {/* 3. Privacy & Data Transparency */}
                        <section id="privacy-data" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Privacy & Data Transparency</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Your privacy is our core value. We design our apps to function offline-first whenever possible and minimize data collection.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We do not sell your personal data. Our detailed data practices are outlined in our <Link href={`/privacy-policy/${app.id}`} className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>. By using our Services, you understand that any data processing will occur as described therein.
                            </p>
                        </section>

                        {/* 4. User Conduct */}
                        <section id="user-conduct" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Conduct</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You are solely responsible for your conduct while using our Service. We want to maintain a safe and productive environment for all users.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Harassment, intimidation, or the posting of objectionable content through any interactive features of our apps is strictly prohibited and may result in the termination of your access.
                            </p>
                        </section>

                        {/* 5. Disclaimer */}
                        <section id="disclaimer" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Disclaimer</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The materials on Boa App Studio's services are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.
                            </p>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section id="limitation-of-liability" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                In no event shall Boa App Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Service, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        {/* 7. Contact Us */}
                        <section id="contact-us" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                If you have any questions about these Terms of Service, please contact us. We aim to respond to all legal inquiries within 5 business days.
                            </p>

                            <a
                                href="mailto:legal@boaappstudio.com"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-4 text-sm font-bold text-slate-900 border border-slate-200 shadow-sm transition-all hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <Mail className="mr-2 h-4 w-4 text-slate-500" />
                                legal@boaappstudio.com
                            </a>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
