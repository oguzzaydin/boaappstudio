import { ArrowLeft, Info, Mail } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LocaleSwitch from "@/components/LocaleSwitch";
import type { AppData } from "@/data/apps";
import type { LegalBlock, LegalLocale } from "@/data/rollbye-legal";
import { localeHref } from "@/data/rollbye-legal";
import { breadcrumbJsonLd } from "@/lib/seo";

const defaultLastUpdated = {
    en: "October 24, 2025",
    tr: "24 Ekim 2025",
};

const chrome = {
    en: {
        back: (name: string) => `Back to ${name}`,
        title: "Terms of Service",
        intro: (name: string) =>
            `By using ${name} or our website, you agree to these terms. We believe in transparency and fair usage, without hidden clauses.`,
        lastUpdated: "Last Updated:",
        contents: "Contents",
        items: [
            "Acceptance of Terms",
            "Use License",
            "Privacy & Data",
            "User Conduct",
            "Disclaimer",
            "Limitation of Liability",
            "Contact Us",
        ],
        s1: "1. Acceptance of Terms",
        s1p1: (name: string) => (
            <>
                Boa App Studio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the mobile application <strong>{name}</strong> (the &quot;Service&quot;).
            </>
        ),
        s1p2: "By accessing or using the Service, you confirm that you accept these Terms of Service and agree to comply with them. If you do not agree to these terms, you must not use our Service.",
        s2: "2. Use License",
        s2p1: "We grant you a personal, non-exclusive, non-transferable, revocable license to use our mobile applications for your personal, non-commercial use, subject to these Terms.",
        s2agree: "You agree not to:",
        s2bullets: [
            "Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on the Service;",
            "Remove any copyright or other proprietary notations from the materials;",
            'Transfer the materials to another person or "mirror" the materials on any other server;',
            "Use the Service for any illegal purpose or in violation of any local, state, national, or international law.",
        ],
        openSource: (
            <>
                <strong>Open Source Note:</strong> Some of our components may be Open Source. For those specific projects, the MIT License or Apache 2.0 License provided in the respective repositories takes precedence over this general license where applicable.
            </>
        ),
        s3: "3. Privacy & Data Transparency",
        s3p1: "Your privacy is our core value. We design our apps to function offline-first whenever possible and minimize data collection.",
        s3p2a: "We do not sell your personal data. Our detailed data practices are outlined in our ",
        s3p2b: "Privacy Policy",
        s3p2c: ". By using our Services, you understand that any data processing will occur as described therein.",
        s4: "4. User Conduct",
        s4p1: "You are solely responsible for your conduct while using our Service. We want to maintain a safe and productive environment for all users.",
        s4p2: "Harassment, intimidation, or the posting of objectionable content through any interactive features of our apps is strictly prohibited and may result in the termination of your access.",
        s5: "5. Disclaimer",
        s5p1: (
            <>
                The materials on Boa App Studio&apos;s services are provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </>
        ),
        s5p2: "Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.",
        s6: "6. Limitation of Liability",
        s6p1: "In no event shall Boa App Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Service, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        s7: "7. Contact Us",
        s7p1: "If you have any questions about these Terms of Service, please contact us. We aim to respond to all legal inquiries within 5 business days.",
    },
    tr: {
        back: (name: string) => `${name} sayfasına dön`,
        title: "Kullanım Koşulları",
        intro: (name: string) =>
            `${name} uygulamasını veya web sitemizi kullanarak bu koşulları kabul etmiş olursunuz. Gizli maddeler olmadan, şeffaf ve adil kullanım yanlısıyız.`,
        lastUpdated: "Son güncelleme:",
        contents: "İçindekiler",
        items: [
            "Koşulların kabulü",
            "Kullanım lisansı",
            "Gizlilik ve veri",
            "Kullanıcı davranışı",
            "Sorumluluk reddi",
            "Sorumluluğun sınırlanması",
            "Bize ulaşın",
        ],
        s1: "1. Koşulların kabulü",
        s1p1: (name: string) => (
            <>
                Boa App Studio (&quot;biz&quot; veya &quot;bizim&quot;) <strong>{name}</strong> mobil uygulamasını (&quot;Hizmet&quot;) işletir.
            </>
        ),
        s1p2: "Hizmete erişerek veya onu kullanarak bu Kullanım Koşullarını kabul ettiğinizi ve bunlara uyacağınızı onaylarsınız. Bu koşulları kabul etmiyorsanız Hizmeti kullanmamalısınız.",
        s2: "2. Kullanım lisansı",
        s2p1: "Mobil uygulamalarımızı kişisel ve ticari olmayan kullanım için, bu Koşullara bağlı olarak kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisansla kullanma hakkı veriyoruz.",
        s2agree: "Aşağıdakileri yapmamayı kabul edersiniz:",
        s2bullets: [
            "Hizmetteki malzeme ve yazılımları değiştirmek, kopyalamak, türev çalışmalar hazırlamak, kaynak koda dönüştürmek veya tersine mühendislik yapmak;",
            "Malzemelerdeki telif hakkı veya diğer mülkiyet bildirimlerini kaldırmak;",
            "Malzemeleri başka bir kişiye aktarmak veya başka bir sunucuda yansıtmak;",
            "Hizmeti yasa dışı bir amaçla veya yerel, ulusal ya da uluslararası hukuku ihlal ederek kullanmak.",
        ],
        openSource: (
            <>
                <strong>Açık kaynak notu:</strong> Bazı bileşenlerimiz açık kaynak olabilir. Bu projeler için ilgili depolardaki MIT veya Apache 2.0 lisansı, geçerli olduğu yerde bu genel lisanstan önce gelir.
            </>
        ),
        s3: "3. Gizlilik ve veri şeffaflığı",
        s3p1: "Gizliliğiniz temel değerimizdir. Uygulamalarımızı mümkün olduğunca çevrimdışı öncelikli çalışacak ve veri toplamayı en aza indirecek şekilde tasarlarız.",
        s3p2a: "Kişisel verilerinizi satmayız. Ayrıntılı veri uygulamalarımız ",
        s3p2b: "Gizlilik Politikası",
        s3p2c: " metninde açıklanır. Hizmetlerimizi kullanarak, veri işlemenin orada anlatıldığı gibi gerçekleşeceğini kabul etmiş olursunuz.",
        s4: "4. Kullanıcı davranışı",
        s4p1: "Hizmeti kullanırken davranışlarınızdan yalnızca siz sorumlusunuz. Tüm kullanıcılar için güvenli ve yapıcı bir ortam sürdürmek isteriz.",
        s4p2: "Uygulamalarımızın etkileşimli özelliklerinde taciz, korkutma veya sakıncalı içerik paylaşımı kesinlikle yasaktır ve erişiminizin sonlandırılmasıyla sonuçlanabilir.",
        s5: "5. Sorumluluk reddi",
        s5p1: (
            <>
                Boa App Studio hizmetlerindeki malzemeler &quot;olduğu gibi&quot; sunulur. Açık veya zımni hiçbir garanti vermez, satılabilirlik, belirli bir amaca uygunluk veya fikri mülkiyetin ihlal edilmemesi dahil diğer tüm garantileri reddederiz.
            </>
        ),
        s5p2: "Ayrıca web sitemizdeki malzemelerin doğruluğu, olası sonuçları veya güvenilirliği ya da bu siteye bağlı diğer siteler hakkında herhangi bir beyan veya garantide bulunmayız.",
        s6: "6. Sorumluluğun sınırlanması",
        s6p1: "Boa App Studio veya tedarikçileri, Hizmetteki malzemelerin kullanımından veya kullanılamamasından doğan (veri veya kâr kaybı ya da iş kesintisi dahil) hiçbir zarardan, böyle bir zararın olasılığı sözlü veya yazılı olarak bildirilmiş olsa bile sorumlu tutulamaz.",
        s7: "7. Bize ulaşın",
        s7p1: "Bu Kullanım Koşulları hakkında sorularınız varsa lütfen bize ulaşın. Yasal taleplere 5 iş günü içinde yanıt vermeyi hedefliyoruz.",
    },
};

const sidebarIds = [
    "acceptance-of-terms",
    "use-license",
    "privacy-data",
    "user-conduct",
    "disclaimer",
    "limitation-of-liability",
    "contact-us",
];

type AppTermsOfServiceProps = {
    app: AppData;
    canonicalPath: string;
    locale?: LegalLocale;
    showLocaleSwitch?: boolean;
    lastUpdated?: string;
    privacyNote?: string;
    /** App-specific sections rendered after "Use License"; numbering shifts. */
    extraSections?: LegalBlock[];
    /** Optional localized privacy link; defaults to app.privacyPolicy. */
    privacyHref?: string;
};

type BaseSectionKey = "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7";

const stripNumber = (heading: string) => heading.replace(/^\d+\.\s*/, "");

export default function AppTermsOfService({
    app,
    canonicalPath,
    locale = "en",
    showLocaleSwitch = false,
    lastUpdated,
    privacyNote,
    extraSections = [],
    privacyHref,
}: AppTermsOfServiceProps) {
    const t = chrome[locale];
    const updated = lastUpdated ?? defaultLastUpdated[locale];
    const extraIds = extraSections.map((_, index) => `app-terms-${index + 1}`);
    const shift = extraSections.length;
    const heading = (key: BaseSectionKey) => {
        const base = Number(key.slice(1));
        const number = base <= 2 ? base : base + shift;
        return `${number}. ${stripNumber(t[key])}`;
    };
    const navItems = t.items.map((label, index) => ({ id: sidebarIds[index], label }));
    navItems.splice(
        2,
        0,
        ...extraSections.map((block, index) => ({ id: extraIds[index], label: block.heading }))
    );
    const appHref = showLocaleSwitch ? localeHref(`/apps/${app.id}`, locale) : `/apps/${app.id}`;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: app.name, path: `/apps/${app.id}` },
                    { name: "Terms of Service", path: canonicalPath },
                ])}
            />
            {/* Top Navigation */}
            <div className="bg-white border-b border-slate-200">
                <div className={"container mx-auto px-4 py-4 sm:px-6 lg:px-8" + (showLocaleSwitch ? " flex items-center justify-between gap-4" : "")}>
                    <Link href={appHref} className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {t.back(app.name)}
                    </Link>
                    {showLocaleSwitch ? <LocaleSwitch path={canonicalPath} locale={locale} /> : null}
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{t.title}</h1>
                    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        {t.intro(app.name)}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-slate-500">
                        <span className="inline-block w-4 h-[1px] bg-slate-400 mr-2"></span>
                        {t.lastUpdated} {updated}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-12">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-3">{t.contents}</h3>
                            <nav className="space-y-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-16">

                        <section id="acceptance-of-terms" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s1")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {t.s1p1(app.name)}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t.s1p2}
                            </p>
                        </section>

                        <section id="use-license" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s2")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {t.s2p1}
                            </p>
                            <p className="text-slate-600 font-medium mb-2">{t.s2agree}</p>
                            <ul className="space-y-3 mb-6">
                                {t.s2bullets.map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                                        <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="rounded-xl bg-blue-50 p-6 border border-blue-100 flex gap-4">
                                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    {t.openSource}
                                </p>
                            </div>
                        </section>

                        {extraSections.map((block, index) => (
                            <section key={extraIds[index]} id={extraIds[index]} className="scroll-mt-24">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    {`${index + 3}. ${block.heading}`}
                                </h2>
                                {block.paragraphs?.map((paragraph) => (
                                    <p key={paragraph} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                                {block.bullets && block.bullets.length > 0 ? (
                                    <ul className="space-y-3 mt-4">
                                        {block.bullets.map((item) => (
                                            <li key={item} className="flex items-start text-slate-600 leading-relaxed">
                                                <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </section>
                        ))}

                        <section id="privacy-data" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s3")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {t.s3p1}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t.s3p2a}
                                <Link href={privacyHref ?? app.privacyPolicy} className="text-blue-600 hover:underline font-medium">{t.s3p2b}</Link>
                                {t.s3p2c}
                            </p>
                            {privacyNote ? (
                                <p className="text-slate-600 leading-relaxed mt-4">{privacyNote}</p>
                            ) : null}
                        </section>

                        <section id="user-conduct" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s4")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {t.s4p1}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t.s4p2}
                            </p>
                        </section>

                        <section id="disclaimer" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s5")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {t.s5p1}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                {t.s5p2}
                            </p>
                        </section>

                        <section id="limitation-of-liability" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{heading("s6")}</h2>
                            <p className="text-slate-600 leading-relaxed">
                                {t.s6p1}
                            </p>
                        </section>

                        <section id="contact-us" className="scroll-mt-24">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{heading("s7")}</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {t.s7p1}
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
