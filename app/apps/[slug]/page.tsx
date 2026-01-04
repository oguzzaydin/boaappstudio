import { apps } from "@/data/apps";
import { ArrowLeft, CheckCircle, Shield, Smartphone, Info, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

// SSG: Generate params for all apps
export async function generateStaticParams() {
    return apps.map((app) => ({
        slug: app.id,
    }));
}

// SEO: Generate metadata for each app
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        return {
            title: "App Not Found",
        };
    }

    return {
        title: app.name,
        description: app.description,
        openGraph: {
            title: `${app.name} | Boa App Studio`,
            description: app.description,
            images: app.icon ? [app.icon] : [],
            url: `/apps/${app.id}`,
        },
        twitter: {
            card: "summary",
            title: `${app.name} | Boa App Studio`,
            description: app.description,
            images: app.icon ? [app.icon] : [],
        },
    };
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function AppDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const app = apps.find((a) => a.id === slug);

    if (!app) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Top Navigation / Breadcrumb */}
            <div className="border-b border-slate-100 bg-white">
                <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Apps
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
                <div className="grid gap-8 lg:gap-16 lg:grid-cols-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8 lg:space-y-16">

                        {/* Header Section with Icon, Title, Description, and Badges */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-[2rem] bg-blue-50 border border-slate-100 shadow-sm">
                                {app.icon && app.icon.startsWith("/") ? (
                                    <Image
                                        src={app.icon}
                                        alt={`${app.name} icon`}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-blue-600">
                                        <Smartphone className="h-12 w-12" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">{app.name}</h1>
                                <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6">{app.description}</p>

                                {/* Smart Store Badges */}
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-2">
                                    {/* App Store */}
                                    {app.storeLinks.appStore && (
                                        app.storeLinks.appStore !== "#" ? (
                                            <Link href={app.storeLinks.appStore} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:-translate-y-0.5">
                                                <Image src="/badges/app-store.svg" alt="Download on the App Store" width={140} height={42} className="h-[42px] w-auto" />
                                            </Link>
                                        ) : (
                                            <div className="relative group cursor-not-allowed select-none transition-opacity">
                                                <Image src="/badges/app-store.svg" alt="Coming Soon to App Store" width={140} height={42} className="h-[42px] w-auto" />
                                                <div className="absolute -top-2.5 -right-3 bg-slate-900 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm border border-white tracking-wider">
                                                    SOON
                                                </div>
                                            </div>
                                        )
                                    )}

                                    {/* Google Play */}
                                    {app.storeLinks.googlePlay && (
                                        app.storeLinks.googlePlay !== "#" ? (
                                            <Link href={app.storeLinks.googlePlay} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:-translate-y-0.5">
                                                <Image src="/badges/google-play.svg" alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto" />
                                            </Link>
                                        ) : (
                                            <div className="relative group cursor-not-allowed select-none transition-opacity">
                                                <Image src="/badges/google-play.svg" alt="Coming Soon to Google Play" width={140} height={42} className="h-[42px] w-auto" />
                                                <div className="absolute -top-2.5 -right-3 bg-slate-900 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm border border-white tracking-wider">
                                                    SOON
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Screenshots Section */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Smartphone className="h-5 w-5 text-blue-600" />
                                <h2 className="text-xl font-bold text-slate-900">App Interface</h2>
                            </div>

                            <ScreenshotCarousel screenshots={app.screenshots} appName={app.name} />

                            <p className="mt-4 text-center text-xs text-slate-400 italic">
                                Images represent the current version of the application on compatible devices.
                            </p>
                        </div>

                        {/* About & Features Section */}
                        <div className="grid gap-12">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Info className="h-5 w-5 text-blue-600" />
                                    <h2 className="text-xl font-bold text-slate-900">About this App</h2>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                    <p>{app.description} {app.tagline}</p>
                                    <p>We prioritized performance and privacy. The app starts instantly and saves your state automatically, so you never lose your place.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Key Features:</h3>
                                <ul className="space-y-3">
                                    {app.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                                            <span className="text-slate-600 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Monetization Transparency Box */}
                        <div className="rounded-2xl bg-blue-50/50 p-8 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                    <Info className="h-4 w-4" />
                                </div>
                                <h3 className="font-bold text-slate-900">Monetization Transparency</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-1">
                                This application is {app.monetization.toLowerCase()}. To support our development and server costs, we may display small banner advertisements or offer optional premium features.
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We carefully select ad partners to ensure ads are non-intrusive and do not interfere with functionality.
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 space-y-6 lg:space-y-8">

                        {/* Privacy & Legal Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Privacy & Legal</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href={app.privacyPolicy} className="flex items-center group text-slate-600 hover:text-blue-600 transition-colors">
                                        <Shield className="mr-3 h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                                        <span className="font-medium">Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/terms-of-service/${app.id}`} className="flex items-center group text-slate-600 hover:text-blue-600 transition-colors">
                                        <CheckCircle className="mr-3 h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                                        <span className="font-medium">Terms of Service</span>
                                    </Link>
                                </li>
                            </ul>

                            <hr className="my-6 border-slate-100" />

                            <div className="text-xs text-slate-400 leading-relaxed">
                                <strong className="text-slate-600 font-semibold block mb-1">Data Usage:</strong>
                                We respect your privacy. This app does not collect precise location data or access your contacts. Advertising IDs may be used for ad relevance.
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Support</h3>
                            <p className="text-sm text-slate-600 mb-4 font-medium">Found a bug or have a suggestion?</p>

                            <Link
                                href={`mailto:support@boaappstudio.com?subject=Support Request for ${app.name}`}
                                className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                <Mail className="mr-2 h-4 w-4" /> support@boaappstudio.com
                            </Link>
                            <p className="mt-2 text-xs text-slate-400">Response time: Within 24-48 hours</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
