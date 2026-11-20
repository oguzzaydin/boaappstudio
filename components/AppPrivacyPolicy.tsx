import { ArrowLeft, Shield, Mail, BarChart, Database, Lock } from "lucide-react";
import { Bug, CheckCircle, Eye, Smartphone, XCircle, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import LocaleSwitch from "@/components/LocaleSwitch";
import type { AppData } from "@/data/apps";
import type { LegalLocale } from "@/data/rollbye-legal";
import { breadcrumbJsonLd } from "@/lib/seo";

const IconMap = {
    Shield,
    Mail,
    BarChart,
    CheckCircle,
    Lock,
    Eye,
    Smartphone,
    Bug,
    XCircle,
    Database,
    MapPin,
};

const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
    const Icon = IconMap[name as keyof typeof IconMap] || Shield;
    return <Icon className={className} />;
};

const defaultAdmob = {
    name: "Google AdMob",
    description:
        "We use Google AdMob to display advertisements. AdMob may use device identifiers and location data on its own side to show ads that are relevant to you.",
};

const chrome = {
    en: {
        back: (name: string) => `Back to ${name}`,
        contents: "Contents",
        items: [
            "Introduction",
            "Policy Highlights",
            "Information We Collect",
            "Advertising & Analytics",
            "Data Security",
            "Children's Privacy",
            "Your Rights and Data Deletion",
            "Contact Us",
        ],
        haveQuestion: "Have Question?",
        privacyTeam: "Our dedicated privacy team is here to help.",
        privacyPolicy: "Privacy Policy",
        packageName: "Package name:",
        lastUpdated: "Last Updated:",
        policyHighlights: "Policy Highlights",
        intro1: (
            <>
                At <strong>Boa Apps Studio</strong>, we take your privacy seriously. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
            </>
        ),
        intro2: "By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. We use Your Personal Data to provide and improve the Service.",
        informationWeCollect: "Information We Collect",
        noData: "Good news! This app does not collect any data.",
        advertising: "Advertising & Analytics",
        advertisingIntroDefault:
            "To maintain our app as a free service, we may work with third-party advertisers and analytics providers.",
        googlePrivacy: "Google Privacy Policy ↗",
        dataSecurity: "Data Security",
        dataSecurityBody:
            "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
        childrensPrivacy: "Children's Privacy",
        noAccount: (name: string) => `${name} does not ask you to create an account.`,
        noRealCalls: " The app does not make or receive real phone calls.",
        childrenDefaultAdmob:
            "As described above, the app may display advertisements through Google AdMob",
        childrenAnalytics:
            " and uses Google Firebase Analytics and Firebase Crashlytics for usage statistics and crash logs.",
        childrenCrash: " and may collect basic crash information to improve stability.",
        childrenSell: " We do not sell, rent, or trade your personal data to third parties.",
        childrenContact: "If you have a question about a child's use of this app, contact us at",
        rights: "Your Rights and Data Deletion",
        rightsBody: "You can request access to your data, or ask us to delete it, by emailing",
        deletePage: "You can also review how deletions work on our",
        deletePageLink: "data deletion page",
        contactUs: "Contact Us",
        contactBody: "If you have any questions about this Privacy Policy, You can contact us via email.",
    },
    tr: {
        back: (name: string) => `${name} sayfasına dön`,
        contents: "İçindekiler",
        items: [
            "Giriş",
            "Politika özeti",
            "Topladığımız bilgiler",
            "Reklam ve analitik",
            "Veri güvenliği",
            "Çocukların gizliliği",
            "Haklarınız ve verilerin silinmesi",
            "Bize ulaşın",
        ],
        haveQuestion: "Sorunuz mu var?",
        privacyTeam: "Gizlilik ekibimiz yardıma hazır.",
        privacyPolicy: "Gizlilik Politikası",
        packageName: "Paket adı:",
        lastUpdated: "Son güncelleme:",
        policyHighlights: "Politika özeti",
        intro1: (
            <>
                <strong>Boa Apps Studio</strong> olarak gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, Hizmeti kullanırken bilgilerinizin toplanması, kullanılması ve açıklanmasına ilişkin uygulamalarımızı ve gizlilik haklarınızı açıklar.
            </>
        ),
        intro2: "Hizmeti kullanarak, bilgilerinizin bu Gizlilik Politikası uyarınca toplanmasını ve kullanılmasını kabul etmiş olursunuz. Kişisel verilerinizi Hizmeti sunmak ve geliştirmek için kullanırız.",
        informationWeCollect: "Topladığımız bilgiler",
        noData: "Bu uygulama herhangi bir veri toplamaz.",
        advertising: "Reklam ve analitik",
        advertisingIntroDefault:
            "Uygulamayı ücretsiz tutabilmek için üçüncü taraf reklam ve analitik sağlayıcılarıyla çalışabiliriz.",
        googlePrivacy: "Google Gizlilik Politikası ↗",
        dataSecurity: "Veri güvenliği",
        dataSecurityBody:
            "Kişisel verilerinizin güvenliği bizim için önemlidir; ancak İnternet üzerinden hiçbir iletim veya elektronik saklama yönteminin %100 güvenli olmadığını unutmayın. Verilerinizi korumak için ticari olarak kabul edilebilir yöntemler kullanmaya çalışsak da mutlak güvenliği garanti edemeyiz.",
        childrensPrivacy: "Çocukların gizliliği",
        noAccount: (name: string) => `${name} hesap oluşturmanızı istemez.`,
        noRealCalls: " Uygulama gerçek telefon aramaları yapmaz veya almaz.",
        childrenDefaultAdmob:
            "Yukarıda açıklandığı gibi, uygulama Google AdMob üzerinden reklam gösterebilir",
        childrenAnalytics:
            " ve kullanım istatistikleri ile kilitlenme günlükleri için Google Firebase Analytics ve Firebase Crashlytics kullanır.",
        childrenCrash: " ve kararlılığı artırmak için temel kilitlenme bilgisi toplayabilir.",
        childrenSell: " Kişisel verilerinizi üçüncü taraflara satmaz, kiralamaz veya takas etmeyiz.",
        childrenContact: "Bu uygulamanın bir çocuk tarafından kullanılması hakkında sorunuz varsa bize şuradan ulaşın:",
        rights: "Haklarınız ve verilerin silinmesi",
        rightsBody: "Verilerinize erişim talep edebilir veya silinmesini isteyebilirsiniz:",
        deletePage: "Silme sürecini ayrıca",
        deletePageLink: "veri silme sayfamızda",
        contactUs: "Bize ulaşın",
        contactBody: "Bu Gizlilik Politikası hakkında sorularınız varsa bize e-posta ile ulaşabilirsiniz.",
    },
};

const sidebarIds = [
    "introduction",
    "policy-highlights",
    "information-we-collect",
    "advertising-&-analytics",
    "data-security",
    "children's-privacy",
    "your-rights-and-data-deletion",
    "contact-us",
];

type AppPrivacyPolicyProps = {
    app: AppData;
    canonicalPath: string;
    locale?: LegalLocale;
    showLocaleSwitch?: boolean;
};

export default function AppPrivacyPolicy({
    app,
    canonicalPath,
    locale = "en",
    showLocaleSwitch = false,
}: AppPrivacyPolicyProps) {
    const t = chrome[locale];
    const noRealCalls = Boolean(
        app.privacyHighlights?.some((item) => item.title === "No Real Calls")
    );
    const advertisingServices = app.advertisingServices ?? [defaultAdmob];
    const advertisingIntro = app.advertisingIntro ?? t.advertisingIntroDefault;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: app.name, path: `/apps/${app.id}` },
                    { name: "Privacy Policy", path: canonicalPath },
                ])}
            />
            {/* Top Navigation */}
            <div className="bg-white border-b border-slate-200">
                <div className={"container mx-auto px-4 py-4 sm:px-6 lg:px-8" + (showLocaleSwitch ? " flex items-center justify-between gap-4" : "")}>
                    <Link href={`/apps/${app.id}`} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {t.back(app.name)}
                    </Link>
                    {showLocaleSwitch ? <LocaleSwitch path={canonicalPath} locale={locale} /> : null}
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <nav className="space-y-1">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-3">{t.contents}</h3>
                                {t.items.map((item, index) => (
                                    <a
                                        key={sidebarIds[index]}
                                        href={`#${sidebarIds[index]}`}
                                        className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>

                            <div className="rounded-xl bg-white p-6 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{t.haveQuestion}</h4>
                                <p className="text-sm text-slate-500 mb-4">{t.privacyTeam}</p>
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
                                <h2 className="text-xl font-medium text-slate-500">{t.privacyPolicy}</h2>
                                {app.packageName ? (
                                    <p className="text-sm text-slate-500 mt-1">{t.packageName} {app.packageName}</p>
                                ) : null}
                                <p className="text-sm text-slate-400 mt-1">{t.lastUpdated} {app.lastUpdated}</p>
                            </div>
                        </div>

                        {/* Policy Highlights */}
                        {app.privacyHighlights && app.privacyHighlights.length > 0 && (
                            <div id="policy-highlights">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">{t.policyHighlights}</h3>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {app.privacyHighlights.map((highlight, idx) => (
                                        <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                                            <div className={`mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-${highlight.color}-100 text-${highlight.color}-600`}>
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
                                {t.intro1}
                            </p>
                            <p className="text-sm text-slate-500">
                                {t.intro2}
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div id="information-we-collect">
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">{t.informationWeCollect}</h3>
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
                                        <p className="text-emerald-800 font-medium">{t.noData}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Advertising & Analytics */}
                        <div id="advertising-&-analytics">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">{t.advertising}</h3>
                            </div>
                            <p className="text-slate-600 mb-6">{advertisingIntro}</p>

                            <div className="grid gap-4">
                                {advertisingServices.map((service) => (
                                    <div key={service.name} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-2">{service.name}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline">{t.googlePrivacy}</a>
                                    </div>
                                ))}
                                {app.analyticsServices?.map((service) => (
                                    <div key={service.name} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-2">{service.name}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline">{t.googlePrivacy}</a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Security */}
                        <div id="data-security">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">{t.dataSecurity}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {t.dataSecurityBody}
                            </p>
                        </div>

                        <div id="children's-privacy">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">{t.childrensPrivacy}</h3>
                            </div>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    {t.noAccount(app.name)}
                                    {noRealCalls ? t.noRealCalls : ""}
                                </p>
                                <p>
                                    {app.childrenPrivacyNote ? (
                                        app.childrenPrivacyNote
                                    ) : (
                                        <>
                                            {t.childrenDefaultAdmob}
                                            {app.analyticsServices && app.analyticsServices.length > 0
                                                ? t.childrenAnalytics
                                                : t.childrenCrash}
                                            {t.childrenSell}
                                        </>
                                    )}
                                </p>
                                <p>
                                    {t.childrenContact}{" "}
                                    <a href="mailto:contact@boaappstudio.com" className="font-bold text-blue-600 hover:underline">
                                        contact@boaappstudio.com
                                    </a>.
                                </p>
                            </div>
                        </div>

                        <div id="your-rights-and-data-deletion">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-bold text-slate-900">{t.rights}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {t.rightsBody}{" "}
                                <a href="mailto:contact@boaappstudio.com" className="font-bold text-blue-600 hover:underline">
                                    contact@boaappstudio.com
                                </a>.
                            </p>
                            {app.deleteDataUrl ? (
                                <p className="text-slate-600 leading-relaxed mt-4">
                                    {t.deletePage}{" "}
                                    <Link href={app.deleteDataUrl} className="font-bold text-blue-600 hover:underline">
                                        {t.deletePageLink}
                                    </Link>
                                    {locale === "tr" ? " inceleyebilirsiniz." : "."}
                                </p>
                            ) : null}
                        </div>

                        {/* Contact */}
                        <div id="contact-us" className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                                <Mail className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.contactUs}</h3>
                            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                                {t.contactBody}
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
