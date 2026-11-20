import { apps } from "@/data/apps";
import { ArrowLeft, Bug, CheckCircle, Lock, Eye, Shield, Smartphone, MapPin, BarChart, XCircle, Database, Mail, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

// Helper to render dynamic icons
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
    const icons: Record<string, LucideIcon> = {
        Bug, CheckCircle, Lock, Eye, Shield, Smartphone, MapPin, BarChart, XCircle, Database
    };
    const Icon = icons[name] || Shield;
    return <Icon className={className} />;
};

export async function generateStaticParams() {
    return apps
        .filter((app) => !app.privacyPolicy.startsWith("/apps/"))
        .map((app) => ({
            slug: app.id,
        }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        return { title: "Privacy Policy" };
    }

    return pageMetadata({
        title: `${app.name} Privacy Policy`,
        description: `Privacy policy for ${app.name}, including ads, analytics, crash information, and how to contact Boa Apps Studio.`,
        path: `/privacy-policy/${app.id}`,
    });
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    const noRealCalls = app.privacyHighlights?.some((highlight) => highlight.title === "No Real Calls");

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: app.name, path: `/apps/${app.id}` },
                    { name: "Privacy Policy", path: `/privacy-policy/${app.id}` },
                ])}
            />
            {/* Top Bar / Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <Link href={`/apps/${app.id}`} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to {app.name}
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation (Hidden on mobile) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Contents</h3>
                                <nav className="space-y-3">
                                    {['Introduction', 'Policy Highlights', 'Information We Collect', 'Advertising & Analytics', 'Data Security', 'Children\'s Privacy', 'Your Rights and Data Deletion', 'Contact Us'].map((item) => (
                                        <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="block text-sm font-medium text-slate-500 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 pl-3 transition-all scroll-smooth">
                                            {item}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            <div className="rounded-xl bg-white p-6 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">Have Question?</h4>
                                <p className="text-sm text-slate-500 mb-4">Our dedicated privacy team is here to help.</p>
                                <a href="mailto:contact@boaappstudio.com" className="text-sm font-bold text-blue-600 hover:underline">
                                    contact@boaappstudio.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-16">

                        {/* Header Section */}
                        <div id="introduction" className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100">
                                {app.icon && app.icon.startsWith("/") ? (
                                    <Image src={app.icon} alt={app.name} fill className="object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-blue-600 text-white">
                                        <Shield className="h-8 w-8" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">{app.name}</h1>
                                <h2 className="text-xl font-medium text-slate-500">Privacy Policy</h2>
                                {app.packageName ? (
                                    <p className="text-sm text-slate-500 mt-1">Package name: {app.packageName}</p>
                                ) : null}
                                <p className="text-sm text-slate-400 mt-1">Last Updated: {app.lastUpdated}</p>
                            </div>
                        </div>

                        {/* Policy Highlights */}
                        {app.privacyHighlights && app.privacyHighlights.length > 0 && (
                            <div id="policy-highlights">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Policy Highlights</h3>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {app.privacyHighlights.map((highlight, idx) => (
                                        <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                                            <div className={`mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-${highlight.color}-100 text-${highlight.color}-600`}>
                                                {/* Note: In production dynamic classes need full definition, using style for simplicity if color is strictly mapped or safe-listing */}
                                                <IconRenderer name={highlight.icon} className={`h-4 w-4 text-${highlight.color}-600`} />
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">{highlight.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{highlight.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Introduction Text */}
                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg leading-relaxed text-slate-600">
                                At <strong>Boa Apps Studio</strong>, we take your privacy seriously. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
                            </p>
                            <p className="text-sm text-slate-500">
                                By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. We use Your Personal Data to provide and improve the Service.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div id="information-we-collect">
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Information We Collect</h3>
                            </div>

                            {app.collectionLimits ? (
                                <p className="text-slate-600 leading-relaxed mb-6">{app.collectionLimits}</p>
                            ) : null}

                            <div className="space-y-4">
                                {app.dataCollection && app.dataCollection.length > 0 ? (
                                    app.dataCollection.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                                            <div className="mt-1 shrink-0 text-slate-400">
                                                <IconRenderer name={item.icon} className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="rounded-xl bg-emerald-50 p-6 border border-emerald-100">
                                        <p className="text-emerald-800 font-medium">Good news! This app does not collect any data.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Advertising & Analytics */}
                        <div id="advertising-&-analytics">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Advertising & Analytics</h3>
                            </div>
                            <p className="text-slate-600 mb-6">To maintain our app as a free service, we may work with third-party advertisers and analytics providers.</p>

                            <div className="grid gap-4">
                                <div className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Google AdMob</h4>
                                    <p className="text-sm text-slate-600 mb-3">We use Google AdMob to display advertisements. AdMob may use device identifiers and location data on its own side to show ads that are relevant to you.</p>
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline">Google Privacy Policy ↗</a>
                                </div>
                                {app.analyticsServices?.map((service) => (
                                    <div key={service.name} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-2">{service.name}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline">Google Privacy Policy ↗</a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Security */}
                        <div id="data-security">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Data Security</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                            </p>
                        </div>

                        <div id="children's-privacy">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Children&apos;s Privacy</h3>
                            </div>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    {app.name} does not ask you to create an account.
                                    {noRealCalls ? " The app does not make or receive real phone calls." : ""}
                                </p>
                                <p>
                                    As described above, the app may display advertisements through Google AdMob
                                    {app.analyticsServices && app.analyticsServices.length > 0
                                        ? " and uses Google Firebase Analytics and Firebase Crashlytics for usage statistics and crash logs."
                                        : " and may collect basic crash information to improve stability."}{" "}
                                    We do not sell, rent, or trade your personal data to third parties.
                                </p>
                                <p>
                                    If you have a question about a child&apos;s use of this app, contact us at{" "}
                                    <a href="mailto:contact@boaappstudio.com" className="font-bold text-blue-600 hover:underline">
                                        contact@boaappstudio.com
                                    </a>.
                                </p>
                            </div>
                        </div>

                        <div id="your-rights-and-data-deletion">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">Your Rights and Data Deletion</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                You can request access to your data, or ask us to delete it, by emailing{" "}
                                <a href="mailto:contact@boaappstudio.com" className="font-bold text-blue-600 hover:underline">
                                    contact@boaappstudio.com
                                </a>.
                            </p>
                        </div>

                        {/* Contact */}
                        <div id="contact-us" className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                                <Mail className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Contact Us</h3>
                            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                                If you have any questions about this Privacy Policy, You can contact us via email.
                            </p>
                            <a
                                href="mailto:contact@boaappstudio.com"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                contact@boaappstudio.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
