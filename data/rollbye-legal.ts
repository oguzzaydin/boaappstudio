export type LegalLocale = "en" | "tr";

export const rollbyeLegalPaths = {
  app: "/apps/rollbye",
  privacy: "/apps/rollbye/privacy",
  terms: "/apps/rollbye/terms",
  deleteData: "/apps/rollbye/delete-data",
  support: "/apps/rollbye/support",
} as const;

export function parseLegalLocale(value?: string | string[]): LegalLocale {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === "tr" ? "tr" : "en";
}

export function localeHref(path: string, locale: LegalLocale): string {
  return locale === "tr" ? `${path}?lang=tr` : path;
}

export type LegalBlock = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  title: string;
  summary: string;
  updatedLabel: string;
  sections: LegalBlock[];
};

export const ui = {
  en: {
    langName: "English",
    otherLangName: "Türkçe",
    breadcrumbHome: "Home",
    breadcrumbApps: "Apps",
    backToApp: "Back to Rollbye",
    relatedPages: "Related pages",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    deleteData: "Delete your data",
    support: "Support",
  },
  tr: {
    langName: "Türkçe",
    otherLangName: "English",
    breadcrumbHome: "Ana sayfa",
    breadcrumbApps: "Uygulamalar",
    backToApp: "Rollbye sayfasına dön",
    relatedPages: "İlgili sayfalar",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    deleteData: "Verilerinizi silin",
    support: "Destek",
  },
} as const;

export const contacts = {
  support: "support@boaappstudio.com",
  legal: "legal@boaappstudio.com",
  general: "contact@boaappstudio.com",
  site: "https://boaappstudio.com",
} as const;

export const privacyDocs: Record<LegalLocale, LegalDoc> = {
  en: {
    title: "Privacy Policy — Rollbye",
    summary:
      "Rollbye is a photo and video cleaner from Boa Apps Studio. Your library is processed on your device. This policy describes the limited data that purchase, advertising, analytics, and crash tools may process, and how you can give or withdraw consent.",
    updatedLabel: "Effective date: 20 November 2026",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "The controller for Rollbye is Boa Apps Studio. This policy applies only to the Rollbye mobile apps on iOS and Android and to these legal pages. The Boa Apps Studio website has a separate website privacy policy.",
          "Contact: support@boaappstudio.com (app support and data requests), legal@boaappstudio.com (legal), contact@boaappstudio.com (general).",
        ],
      },
      {
        heading: "2. What the app does",
        paragraphs: [
          "Rollbye helps you review photos and videos stored on your device, month by month, keep items or move them into a Delete Box, and optionally use on-device tools (for example screenshots, large videos, similar or blurry groups). Optional Premium is sold through the App Store or Google Play. The free version on Android and iOS may show a single native ad on the month-summary screen.",
        ],
      },
      {
        heading: "3. Photos and videos stay on your device",
        paragraphs: [
          "Library content is read and analysed on the device only. We do not operate a Rollbye backend or user database for your media. There is no Rollbye account and no cloud sync of your photos or videos through us. Uninstalling the app removes local progress stored by Rollbye; it does not by itself delete your photos.",
          "We request photo and video library access because that is the core feature, and optionally notification permission for a weekly reminder scheduled on the device. Rollbye does not request contacts, camera, microphone, or precise location.",
        ],
      },
      {
        heading: "4. Data processed by us and our partners",
        paragraphs: [
          "Rollbye itself does not upload your media. The following categories may be processed depending on platform, your consent, and whether you use purchases or the free (ad-supported) tier.",
        ],
        bullets: [
          "Firebase Analytics (Android and iOS): app usage events and technical identifiers (such as an app-instance or installation identifier, app version, and device or locale information). Used to understand feature use and improve the product. Initialized only after you grant consent in the Google User Messaging Platform (UMP) form, where that form is shown.",
          "Firebase Crashlytics (Android and iOS): crash logs, stack traces, and technical identifiers needed to diagnose failures. Initialized only after UMP consent, where that form is shown.",
          "Google AdMob and advertising identifiers (free tier on Android and iOS; not in Premium or the Huawei AppGallery build): a single native ad may appear on the month-summary screen. AdMob may process the advertising identifier, advertising data (such as ad impressions and interactions), device and app information, approximate location derived from your IP address, and diagnostics, as described by Google. Google may share this advertising data with its advertising partners under Google’s policies. On Android this is the advertising ID. On iOS, AdMob may access the device’s advertising identifier (IDFA) only if you allow tracking in Apple’s App Tracking Transparency (ATT) prompt; if you decline, the IDFA is not available and only non-personalised ads are shown. On iOS the App Store privacy label lists advertising data and the device identifier as used for tracking.",
          "UMP consent and iOS ATT permission (UMP is required for ads on Android and iOS and for starting Analytics and Crashlytics where we show the form; on iOS the ATT prompt is shown after UMP and a short in-app explanation, and only once): your choices are stored so we can honour them. You can change them later as described below.",
          "RevenueCat and the app stores: payments are processed by Apple or Google. RevenueCat receives an anonymous app user identifier and purchase or entitlement status so we can unlock Premium and restore purchases. RevenueCat does not receive your photos or videos.",
          "Support email: if you write to us, we process your email address and the content of your message in order to reply. We do not use support mail for advertising.",
          "Local notifications and local settings: reminder schedules, language, theme, Delete Box identifiers, and similar progress stay on the device.",
        ],
      },
      {
        heading: "5. Consent and how to withdraw it",
        paragraphs: [
          "Where required (including the EEA, UK, and other regions we configure), a UMP form is shown before ads are requested and before Firebase Analytics or Crashlytics are started. If you decline analytics or crash reporting, those SDKs are not initialized. If you decline ads personalization, we honour that choice in line with Google’s APIs; a non-personalized ad may still be shown in the free version where allowed. On iOS, if you decline the ATT prompt or later turn tracking off, AdMob does not receive the IDFA and only non-personalized ads are shown.",
          "You can withdraw or change consent later: open Settings → Privacy options in Rollbye to reopen the UMP form, reset or delete the advertising ID in your Android system settings, or on iOS turn off “Allow Apps to Request to Track” or Rollbye’s tracking permission in Settings → Privacy & Security → Tracking. Withdrawing consent does not affect data processed for a purchase you already made through Apple or Google, which remains necessary to honour that purchase.",
        ],
      },
      {
        heading: "6. Sharing, selling, and transfers",
        paragraphs: [
          "We do not sell your personal data. We share only what is needed with the processors named above (Google for Firebase, UMP, and AdMob; RevenueCat for entitlements; Apple or Google for store payments). Those providers may process data in the United States or other countries under their own terms and safeguards. We do not use your photo library for advertising.",
        ],
      },
      {
        heading: "7. Retention",
        paragraphs: [
          "On-device Rollbye state remains until you reset it in the app or uninstall the app. Purchase records are kept by Apple or Google, and by RevenueCat, for as long as needed to provide Premium and meet accounting or legal duties. Analytics, crash, and advertising data are retained by Google according to their product settings and terms. Support emails are kept only as long as needed to resolve your request and meet legal requirements.",
        ],
      },
      {
        heading: "8. Children",
        paragraphs: [
          "Rollbye is not directed at children under 13 (or the higher minimum age required in your country) and is not submitted as a “designed for children” or Kids app. We do not knowingly collect personal information from children. If you believe a child used the app in a way that sent data to Google (ads, analytics, or crash logs after consent), email support@boaappstudio.com and we will help delete what we or our processors can delete. The free version may show ads for adult users.",
        ],
      },
      {
        heading: "9. Your rights",
        paragraphs: [
          "Depending on where you live, you may have rights under the GDPR, UK GDPR, KVKK, CCPA/CPRA, or similar laws, including access, correction, deletion, restriction, objection, and portability, and the right to lodge a complaint with a supervisory authority. To exercise these rights for data we or our processors hold, see the delete-data page or email support@boaappstudio.com. Media in your gallery is under your control in the system Photos or Gallery apps and in Rollbye’s Delete Box.",
        ],
      },
      {
        heading: "10. Changes",
        paragraphs: [
          "If we add or remove an SDK, or change what we collect, we will update this page and the store Data Safety / privacy labels in the same release. The effective date above will change.",
        ],
      },
    ],
  },
  tr: {
    title: "Gizlilik Politikası — Rollbye",
    summary:
      "Rollbye, Boa Apps Studio’nun fotoğraf ve video temizleyicisidir. Kütüphaneniz cihazınızda işlenir. Bu politika; satın alma, reklam, analitik ve çökme araçlarının işleyebileceği sınırlı veriyi ve onayınızı nasıl verip geri alabileceğinizi açıklar.",
    updatedLabel: "Yürürlük tarihi: 20 Kasım 2026",
    sections: [
      {
        heading: "1. Kim olduğumuz",
        paragraphs: [
          "Rollbye için veri sorumlusu Boa Apps Studio’dur. Bu politika yalnızca iOS ve Android’deki Rollbye uygulamaları ile bu yasal sayfalar için geçerlidir. Boa Apps Studio sitesinin ayrı bir gizlilik politikası vardır.",
          "İletişim: support@boaappstudio.com (uygulama desteği ve veri talepleri), legal@boaappstudio.com (hukuk), contact@boaappstudio.com (genel).",
        ],
      },
      {
        heading: "2. Uygulama ne yapar",
        paragraphs: [
          "Rollbye, cihazınızda saklanan fotoğraf ve videoları ay ay incelemenize, tutmanıza veya Silme Kutusu’na almanıza ve isteğe bağlı olarak cihazda çalışan araçları (örneğin ekran görüntüleri, büyük videolar, benzer veya bulanık gruplar) kullanmanıza yardım eder. İsteğe bağlı Premium, App Store veya Google Play üzerinden satılır. Android ve iOS ücretsiz sürümde ay sonu özetinde tek bir yerleşik reklam görünebilir.",
        ],
      },
      {
        heading: "3. Fotoğraf ve videolar cihazınızda kalır",
        paragraphs: [
          "Kütüphane içeriği yalnızca cihazda okunur ve analiz edilir. Medyanız için bir Rollbye sunucusu veya kullanıcı veritabanı işletmeyiz. Rollbye hesabı yoktur; fotoğraf veya videolarınızı bizim üzerimizden buluta eşlemeyiz. Uygulamayı kaldırmak, Rollbye’ın tuttuğu yerel ilerlemeyi siler; fotoğraflarınızı kendiliğinden silmez.",
          "Çekirdek işlev için fotoğraf ve video kütüphanesi izni, isteğe bağlı olarak da cihazda zamanlanan haftalık hatırlatma için bildirim izni isteriz. Rollbye rehber, kamera, mikrofon veya kesin konum izni istemez.",
        ],
      },
      {
        heading: "4. Bizim ve ortaklarımızın işlediği veri",
        paragraphs: [
          "Rollbye medyanızı yüklemez. Aşağıdaki kategoriler platforma, onayınıza ve satın alma veya reklamlı ücretsiz katmanı kullanıp kullanmadığınıza göre işlenebilir.",
        ],
        bullets: [
          "Firebase Analytics (Android ve iOS): uygulama kullanım olayları ve teknik kimlikler (uygulama örneği veya kurulum kimliği, uygulama sürümü, cihaz ve dil bilgisi gibi). Özellik kullanımını anlamak ve ürünü geliştirmek için kullanılır. Google Kullanıcı Mesajlaşma Platformu (UMP) formu gösterildiğinde, yalnızca onay verdikten sonra başlatılır.",
          "Firebase Crashlytics (Android ve iOS): arızaları teşhis etmek için çökme günlükleri, yığın izleri ve teknik kimlikler. UMP formu gösterildiğinde yalnızca onaydan sonra başlatılır.",
          "Google AdMob ve reklam kimlikleri (Android ve iOS ücretsiz katman; Premium’da ve Huawei AppGallery sürümünde yok): ay sonu özetinde tek bir yerleşik reklam görünebilir. AdMob, Google’ın açıkladığı şekilde reklam kimliğini, reklam verilerini (gösterim ve etkileşimler gibi), cihaz ve uygulama bilgilerini, IP adresinden türetilen yaklaşık konumu ve tanılama verilerini işleyebilir. Google, politikalarına göre bu reklam verilerini reklam ortaklarıyla paylaşabilir. Android’de bu, reklam kimliğidir. iOS’ta AdMob cihazın reklam kimliğine (IDFA) yalnızca Apple’ın Uygulama İzleme Şeffaflığı (ATT) isteminde izlemeye izin verirseniz erişebilir; reddederseniz IDFA kullanılamaz ve yalnızca kişiselleştirilmemiş reklam gösterilir. iOS’ta App Store gizlilik etiketi, reklam verilerini ve cihaz kimliğini izleme amaçlı olarak listeler.",
          "UMP onayı ve iOS ATT izni (UMP, Android ve iOS’ta reklamlar ve formu gösterdiğimiz yerlerde Analytics ile Crashlytics’in başlaması için gerekir; iOS’ta ATT istemi UMP’den ve kısa bir uygulama içi açıklamadan sonra, yalnızca bir kez gösterilir): seçimleriniz bu tercihlere uymamız için saklanır. Aşağıda anlatıldığı gibi daha sonra değiştirebilirsiniz.",
          "RevenueCat ve mağazalar: ödemeler Apple veya Google tarafından işlenir. RevenueCat, Premium’u açmak ve satın almaları geri yüklemek için anonim bir uygulama kullanıcı kimliği ile satın alma veya hak durumunu alır. Fotoğraf veya video almaz.",
          "Destek e-postası: bize yazarsanız, yanıtlamak için e-posta adresinizi ve iletinizin içeriğini işleriz. Destek postasını reklam için kullanmayız.",
          "Yerel bildirimler ve ayarlar: hatırlatma zamanlaması, dil, tema, Silme Kutusu kimlikleri ve benzer ilerleme cihazda kalır.",
        ],
      },
      {
        heading: "5. Onay ve onayın geri alınması",
        paragraphs: [
          "Gerekli yerlerde (AEA, Birleşik Krallık ve yapılandırdığımız diğer bölgeler dahil) reklam istenmeden ve Firebase Analytics veya Crashlytics başlatılmadan önce bir UMP formu gösterilir. Analitik veya çökme bildirimini reddederseniz bu SDK’lar başlatılmaz. Reklam kişiselleştirmesini reddederseniz bu tercihe Google’ın API’lerine uygun şekilde uyarız; izin verilen hallerde ücretsiz sürümde kişiselleştirilmemiş bir reklam yine gösterilebilir. iOS’ta ATT istemini reddeder veya izlemeyi sonradan kapatırsanız AdMob IDFA’yı almaz ve yalnızca kişiselleştirilmemiş reklam gösterilir.",
          "Onayı daha sonra geri alabilir veya değiştirebilirsiniz: UMP formunu yeniden açmak için Rollbye’da Ayarlar → Gizlilik seçenekleri’ni kullanın, Android sistem ayarlarından reklam kimliğini sıfırlayın veya silin ya da iOS’ta Ayarlar → Gizlilik ve Güvenlik → İzleme’den «Uygulamaların izleme isteğinde bulunmasına izin ver» seçeneğini veya Rollbye’ın izleme iznini kapatın. Onayı geri almak, Apple veya Google üzerinden yaptığınız mevcut bir satın alma için işlenen ve o satın almayı yerine getirmek için gerekli olan veriyi etkilemez.",
        ],
      },
      {
        heading: "6. Paylaşım, satış ve aktarımlar",
        paragraphs: [
          "Kişisel verilerinizi satmayız. Yalnızca gereken ölçüde yukarıda adı geçen işleyenlerle paylaşırız (Firebase, UMP ve AdMob için Google; haklar için RevenueCat; mağaza ödemeleri için Apple veya Google). Bu sağlayıcılar veriyi kendi koşulları ve güvenceleri altında ABD veya başka ülkelerde işleyebilir. Fotoğraf kütüphanenizi reklam için kullanmayız.",
        ],
      },
      {
        heading: "7. Saklama",
        paragraphs: [
          "Cihazdaki Rollbye durumu, uygulamada sıfırlayana veya uygulamayı kaldırana kadar kalır. Satın alma kayıtları, Premium’u sunmak ve muhasebe veya yasal yükümlülükleri karşılamak için gerektiği sürece Apple veya Google’da ve RevenueCat’te tutulur. Analitik, çökme ve reklam verileri Google’ın ürün ayarları ve koşullarına göre saklanır. Destek e-postaları, talebinizi çözmek ve yasal yükümlülükleri karşılamak için gereken süre kadar tutulur.",
        ],
      },
      {
        heading: "8. Çocuklar",
        paragraphs: [
          "Rollbye 13 yaşından (veya ülkenizdeki daha yüksek asgari yaştan) küçük çocuklara yönelik değildir ve «çocuklar için tasarlandı» veya Kids uygulaması olarak gönderilmez. Bilerek çocuklardan kişisel bilgi toplamayız. Bir çocuğun uygulamayı, onay sonrası Google’a veri gidecek şekilde (reklam, analitik veya çökme günlükleri) kullandığını düşünüyorsanız support@boaappstudio.com adresine yazın; bizim veya işleyenlerimizin silebildiği veriyi silmenize yardımcı oluruz. Ücretsiz sürüm yetişkin kullanıcılar için reklam gösterebilir.",
        ],
      },
      {
        heading: "9. Haklarınız",
        paragraphs: [
          "Yaşadığınız yere göre GDPR, İngiltere GDPR, KVKK, CCPA/CPRA veya benzeri kanunlar kapsamında erişim, düzeltme, silme, kısıtlama, itiraz ve taşınabilirlik haklarınız ve bir denetim otoritesine şikâyet hakkı olabilir. Bizim veya işleyenlerimizin tuttuğu veri için bu hakları kullanmak üzere veri silme sayfasına bakın veya support@boaappstudio.com adresine yazın. Galerinizdeki medya, sistem Fotoğraflar veya Galeri uygulamalarında ve Rollbye Silme Kutusu’nda sizin kontrolünüzdedir.",
        ],
      },
      {
        heading: "10. Değişiklikler",
        paragraphs: [
          "Bir SDK ekler veya çıkarır, ya da topladığımızı değiştirirsek bu sayfayı ve mağaza Data Safety / gizlilik etiketlerini aynı sürümde güncelleriz. Yukarıdaki yürürlük tarihi değişir.",
        ],
      },
    ],
  },
};

export const termsDocs: Record<LegalLocale, LegalDoc> = {
  en: {
    title: "Terms of Use — Rollbye",
    summary:
      "These terms govern your use of the Rollbye mobile apps from Boa Apps Studio. Optional Premium is sold only through Apple or Google. The Apple Licensed Application End User License Agreement also applies on iOS.",
    updatedLabel: "Effective date: 20 November 2026",
    sections: [
      {
        heading: "1. License",
        paragraphs: [
          "We grant you a personal, non-exclusive, non-transferable license to use Rollbye on devices you own or control, under these terms and the app store’s terms. You may not copy, reverse engineer, or redistribute the app except as allowed by law.",
        ],
      },
      {
        heading: "2. The service",
        paragraphs: [
          "Rollbye helps you review and clean photos and videos stored on your device. Deletion uses the operating system’s own flows, including Recently Deleted or Trash where the OS provides them. You are responsible for what you choose to delete.",
          "If iCloud Photos is on, a delete may remove the item from all of your devices. The in-app Delete Box warns about this. On Android, items may go to the system trash where available. Some synced or shared items may not be deletable, or deleting them may affect other people; the app will indicate this when it can.",
        ],
      },
      {
        heading: "3. Premium and payments",
        paragraphs: [
          "Optional paid plans (lifetime, yearly, monthly) are sold only through Apple In-App Purchase or Google Play Billing. Prices, renewal periods, and cancellation terms are shown on the paywall and are governed by the store. Manage or cancel subscriptions in your Apple or Google account. Restore purchases with the in-app Restore control. There is no website checkout for digital Premium.",
        ],
      },
      {
        heading: "4. Free tier and ads",
        paragraphs: [
          "The core swipe-to-clean loop is free. Some smart tools are limited or locked behind Premium. The free version on Android and iOS may show one native ad on the month-summary screen, subject to UMP consent where required and, on iOS, to your App Tracking Transparency choice for personalised ads. Premium removes ads. The Huawei AppGallery build has no ads.",
        ],
      },
      {
        heading: "5. Acceptable use",
        paragraphs: [
          "Do not misuse the app, interfere with store payments, or use Rollbye to violate other people’s rights. The app is a gallery cleaner; it does not claim to remove viruses, speed up your phone, or manage files outside your photo and video library.",
        ],
      },
      {
        heading: "6. Disclaimer",
        paragraphs: [
          "The app is provided “as is”. We work to verify deletions, but the operating system, iCloud or other cloud photo settings, and device-specific gallery behaviour can affect results. We do not warrant uninterrupted availability.",
        ],
      },
      {
        heading: "7. Apple EULA and language",
        paragraphs: [
          "For iOS, the Apple Licensed Application End User License Agreement (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) also applies. If these terms and Apple’s EULA conflict on an iOS issue, Apple’s terms control to the extent required.",
          "These terms may be offered in English and Turkish. If there is a conflict, the English text is the reference version unless local law requires otherwise.",
        ],
      },
      {
        heading: "8. Changes and contact",
        paragraphs: [
          "We may update these terms; the date above will change. Questions: support@boaappstudio.com or legal@boaappstudio.com.",
        ],
      },
    ],
  },
  tr: {
    title: "Kullanım Koşulları — Rollbye",
    summary:
      "Bu koşullar, Boa Apps Studio’nun Rollbye mobil uygulamalarını kullanımınızı düzenler. İsteğe bağlı Premium yalnızca Apple veya Google üzerinden satılır. iOS’ta Apple standart son kullanıcı lisans sözleşmesi de geçerlidir.",
    updatedLabel: "Yürürlük tarihi: 20 Kasım 2026",
    sections: [
      {
        heading: "1. Lisans",
        paragraphs: [
          "Rollbye’ı, sahip olduğunuz veya kontrol ettiğiniz cihazlarda, bu koşullar ve mağaza koşulları altında kişisel, devredilemez, münhasır olmayan bir lisansla kullanabilirsiniz. Yasaların izin verdiği durumlar dışında uygulamayı kopyalayamaz, tersine mühendislik uygulayamaz veya yeniden dağıtamazsınız.",
        ],
      },
      {
        heading: "2. Hizmet",
        paragraphs: [
          "Rollbye, cihazınızda saklanan fotoğraf ve videoları incelemenize ve temizlemenize yardım eder. Silme, işletim sisteminin kendi akışlarıyla yapılır (varsa Son Silinenler veya Çöp dahil). Ne sildiğinizden siz sorumlusunuz.",
          "iCloud Fotoğraflar açıksa silme, öğeyi tüm cihazlarınızdan kaldırabilir. Uygulama içi Silme Kutusu bu konuda uyarır. Android’de, sistem çöpü varsa öğeler oraya gidebilir. Bazı eşlenen veya paylaşılan öğeler silinemeyebilir ya da silinmeleri başkalarını etkileyebilir; uygulama bunu bakabildiği yerde belirtir.",
        ],
      },
      {
        heading: "3. Premium ve ödemeler",
        paragraphs: [
          "İsteğe bağlı planlar (ömür boyu, yıllık, aylık) yalnızca Apple Uygulama İçi Satın Alma veya Google Play Billing ile satılır. Fiyat, yenileme ve iptal koşulları paywall’da gösterilir ve mağaza kurallarına tabidir. Aboneliği Apple veya Google hesabınızdan yönetin veya iptal edin. Satın almaları uygulama içi Geri Yükle ile kurtarın. Dijital Premium için siteden ödeme yoktur.",
        ],
      },
      {
        heading: "4. Ücretsiz katman ve reklamlar",
        paragraphs: [
          "Temel kaydır-sil döngüsü ücretsizdir. Bazı akıllı araçlar sınırlıdır veya Premium ile açılır. Android ve iOS ücretsiz sürümde, gerekli yerlerde UMP onayı alındıktan sonra (iOS’ta kişiselleştirilmiş reklam için ayrıca ATT tercihinize göre), ay sonu özetinde bir yerleşik reklam görünebilir. Premium reklamları kaldırır. Huawei AppGallery sürümünde reklam yoktur.",
        ],
      },
      {
        heading: "5. Kabul edilebilir kullanım",
        paragraphs: [
          "Uygulamayı kötüye kullanmayın, mağaza ödemelerini bozmaya çalışmayın, başkalarının haklarını ihlal etmeyin. Rollbye bir galeri temizleyicidir; virüs temizleme, telefonu hızlandırma veya fotoğraf ve video kütüphanesi dışındaki dosyaları yönetme iddiasında bulunmaz.",
        ],
      },
      {
        heading: "6. Sorumluluk reddi",
        paragraphs: [
          "Uygulama «olduğu gibi» sunulur. Silmeleri doğrulamaya çalışırız; ancak işletim sistemi, iCloud veya diğer bulut fotoğraf ayarları ve cihaza özgü galeri davranışları sonucu etkileyebilir. Kesintisiz erişim taahhüt edilmez.",
        ],
      },
      {
        heading: "7. Apple EULA ve dil",
        paragraphs: [
          "iOS’ta Apple standart son kullanıcı lisans sözleşmesi (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) de geçerlidir. Çatışma halinde, gerektiği ölçüde Apple koşulları esas alınır.",
          "Bu koşullar İngilizce ve Türkçe sunulabilir. Yerel hukuk zorunlu kılmadıkça referans metin İngilizcedir.",
        ],
      },
      {
        heading: "8. Değişiklik ve iletişim",
        paragraphs: [
          "Bu koşulları güncelleyebiliriz; yukarıdaki tarih değişir. Sorular: support@boaappstudio.com veya legal@boaappstudio.com.",
        ],
      },
    ],
  },
};

export const deleteDataDocs: Record<LegalLocale, LegalDoc> = {
  en: {
    title: "Delete your data — Rollbye",
    summary:
      "Use this page to remove Rollbye data that lives on your device and to ask us to delete analytics, crash, advertising, or purchase identifiers that we or our processors can actually delete.",
    updatedLabel: "Effective date: 20 November 2026",
    sections: [
      {
        heading: "1. What stays on your device",
        paragraphs: [
          "Rollbye does not keep your photo library on our servers. Photos and videos stay on the device and are processed there only.",
          "To remove items from the library, use Rollbye’s Delete Box or the system Photos / Gallery app (including Recently Deleted or Trash). That is your media, not a copy we hold.",
        ],
      },
      {
        heading: "2. In-app reset",
        paragraphs: [
          "In Rollbye, open Settings → Reset app data. Confirm to remove Rollbye’s local state on that device: month progress, Delete Box identifiers, analysis cache, reminder settings, and similar preferences. This does not delete the photos in your system gallery, and it does not cancel a store subscription.",
        ],
      },
      {
        heading: "3. Uninstall",
        paragraphs: [
          "Uninstalling Rollbye removes the app and its local data from that device. Your photos remain in the system gallery. Subscriptions and lifetime purchases stay with Apple or Google until you cancel or until they expire, and can be restored if you install the app again.",
        ],
      },
      {
        heading: "4. Email request",
        paragraphs: [
          "Email support@boaappstudio.com with the subject “Rollbye data deletion”. Tell us the platform (iOS or Android), the app version if you know it, and what you want deleted (for example analytics, crash logs, advertising identifiers, or a RevenueCat entitlement identifier). If the app shows an installation or app-instance identifier, include it; that helps us submit a precise request to Google or RevenueCat.",
          "We will acknowledge the request and act on it. Under the GDPR we aim to complete the request within 30 days (or tell you if a lawful extension is needed).",
        ],
      },
      {
        heading: "5. Firebase Analytics and Crashlytics deletion",
        paragraphs: [
          "After we receive a valid request, we submit a deletion request to Google Firebase for Analytics and/or Crashlytics data associated with your app instance, where we can identify it.",
          "Google’s data-processing terms allow deletion from live and backup systems within a maximum of 180 days. In typical Google processing, Analytics user-level data is removed from the individual user report within 72 hours and then purged in the next scheduled deletion cycle (those cycles run about every two months). Crashlytics crash reports for a specified user are typically deleted within about 24 hours after the deletion is processed. We will confirm when we have submitted the request. We cannot shorten Google’s own processing time.",
        ],
      },
      {
        heading: "6. Advertising and purchases",
        paragraphs: [
          "You can reset or delete the advertising ID in Android system settings, turn off tracking for Rollbye on iOS in Settings → Privacy & Security → Tracking (the IDFA is then no longer shared with AdMob), and reopen Settings → Privacy options in the app. To request deletion of advertising identifiers associated with Rollbye that Google or we can actually delete, use the email address above.",
          "Subscriptions and lifetime purchases are held by Apple or Google. Cancel a subscription in your store account. We cannot refund store charges from this page; use the store’s refund process. If you want the anonymous RevenueCat entitlement identifier cleared where RevenueCat allows it, include that in your email.",
        ],
      },
    ],
  },
  tr: {
    title: "Verilerinizi silin — Rollbye",
    summary:
      "Bu sayfa, cihazınızdaki Rollbye verisini silmeniz ve bizim veya işleyenlerimizin gerçekten silebildiği analitik, çökme, reklam veya satın alma kimliklerinin silinmesini istemeniz içindir.",
    updatedLabel: "Yürürlük tarihi: 20 Kasım 2026",
    sections: [
      {
        heading: "1. Cihazınızda kalanlar",
        paragraphs: [
          "Rollbye fotoğraf kütüphanenizi kendi sunucularında tutmaz. Fotoğraf ve videolar cihazınızda kalır ve yalnızca orada işlenir.",
          "Kütüphaneden öğe kaldırmak için Rollbye Silme Kutusu’nu veya sistem Fotoğraflar / Galeri uygulamasını (Son Silinenler veya Çöp dahil) kullanın. Bu medya sizinindir; bizde bir kopyası yoktur.",
        ],
      },
      {
        heading: "2. Uygulama içi sıfırlama",
        paragraphs: [
          "Rollbye’da Ayarlar → Uygulama verilerini sıfırla’yı açın. Onayladığınızda o cihazdaki Rollbye yerel durumu kaldırılır: ay ilerlemesi, Silme Kutusu kimlikleri, analiz önbelleği, hatırlatma ayarları ve benzer tercihler. Bu, sistem galerinizdeki fotoğrafları silmez ve mağaza aboneliğini iptal etmez.",
        ],
      },
      {
        heading: "3. Uygulamayı kaldırma",
        paragraphs: [
          "Rollbye’ı kaldırmak, uygulamayı ve o cihazdaki yerel verisini siler. Fotoğraflarınız sistem galerisinde kalır. Abonelik ve ömür boyu haklar, iptal edilene veya süresi dolana kadar Apple veya Google’da kalır; uygulamayı yeniden kurarsanız geri yüklenebilir.",
        ],
      },
      {
        heading: "4. E-posta ile talep",
        paragraphs: [
          "Konu satırına «Rollbye veri silme» yazarak support@boaappstudio.com adresine e-posta gönderin. Platformu (iOS veya Android), biliyorsanız uygulama sürümünü ve silinmesini istediğiniz veriyi (örneğin analitik, çökme günlükleri, reklam kimlikleri veya bir RevenueCat hak kimliği) belirtin. Uygulama bir kurulum veya uygulama örneği kimliği gösteriyorsa onu da ekleyin; Google’a veya RevenueCat’e net bir talep iletmemize yardım eder.",
          "Talebi alırız ve işleme koyarız. GDPR kapsamında talebi 30 gün içinde tamamlamayı amaçlarız (yasal bir ek süre gerekirse bunu size söyleriz).",
        ],
      },
      {
        heading: "5. Firebase Analytics ve Crashlytics silme",
        paragraphs: [
          "Geçerli bir talep aldıktan sonra, tanımlayabildiğimiz kadarıyla uygulama örneğinizle bağlı Analytics ve/veya Crashlytics verisi için Google Firebase’e silme talebi göndeririz.",
          "Google’ın veri işleme koşulları, canlı ve yedek sistemlerden silme için en fazla 180 gün tanır. Google’ın tipik işlemesinde, Analytics kullanıcı düzeyindeki veri bireysel kullanıcı raporundan 72 saat içinde kaldırılır ve sonraki planlı silme döngüsünde temizlenir (bu döngüler yaklaşık iki ayda bir çalışır). Belirtilen bir kullanıcıya ait Crashlytics çökme raporları, silme işleme alındıktan sonra genellikle yaklaşık 24 saat içinde silinir. Talebi ilettiğimizde size bildiririz. Google’ın kendi işlem süresini kısaltamayız.",
        ],
      },
      {
        heading: "6. Reklam ve satın almalar",
        paragraphs: [
          "Android sistem ayarlarından reklam kimliğini sıfırlayabilir veya silebilir, iOS’ta Ayarlar → Gizlilik ve Güvenlik → İzleme’den Rollbye için izlemeyi kapatabilir (bu durumda IDFA artık AdMob ile paylaşılmaz) ve uygulamada Ayarlar → Gizlilik seçenekleri’ni yeniden açabilirsiniz. Rollbye ile bağlı olup da Google’ın veya bizim gerçekten silebildiğimiz reklam kimlikleri için yukarıdaki e-posta adresini kullanın.",
          "Abonelik ve ömür boyu haklar Apple veya Google’dadır. Aboneliği mağaza hesabınızdan iptal edin. Bu sayfadan mağaza ücreti iade edilmez; iade için mağaza sürecini kullanın. RevenueCat’in izin verdiği ölçüde anonim hak kimliğinin silinmesini istiyorsanız bunu e-postanıza ekleyin.",
        ],
      },
    ],
  },
};

export const supportDocs: Record<LegalLocale, LegalDoc> = {
  en: {
    title: "Rollbye support",
    summary:
      "We are here to help with the Rollbye app, purchases, privacy choices, and data requests. There is no in-app account; email is the support channel.",
    updatedLabel: "Last updated: 20 November 2026",
    sections: [
      {
        heading: "How to reach us",
        paragraphs: [
          "Email support@boaappstudio.com with the subject “Rollbye support”. We aim to reply within 24–48 hours on business days. For legal questions you can also use legal@boaappstudio.com.",
          "Please include your platform (iOS or Android), the app version if you can see it, a short description of the issue, and screenshots only if they do not contain photos you do not want to share. We do not need your full photo library to help.",
        ],
      },
      {
        heading: "Purchases and subscriptions",
        paragraphs: [
          "Use Restore in the app if Premium does not appear after a purchase or after you reinstall. Manage or cancel a subscription in your Apple or Google account. Refunds are handled by the store, not by a website checkout.",
        ],
      },
      {
        heading: "Privacy, consent, and deletion",
        paragraphs: [
          "To change analytics, crash, or ads consent, use the in-app privacy options and your device settings, as described in the Privacy Policy. To ask us to delete analytics, crash, advertising, or entitlement identifiers, follow the delete-data page. Do not send photo libraries to this inbox.",
        ],
      },
    ],
  },
  tr: {
    title: "Rollbye destek",
    summary:
      "Rollbye uygulaması, satın almalar, gizlilik tercihleri ve veri talepleri için buradayız. Uygulama içi hesap yoktur; destek kanalı e-postadır.",
    updatedLabel: "Son güncelleme: 20 Kasım 2026",
    sections: [
      {
        heading: "Bize nasıl ulaşabilirsiniz",
        paragraphs: [
          "Konu satırına «Rollbye destek» yazarak support@boaappstudio.com adresine e-posta gönderin. İş günlerinde 24–48 saat içinde yanıtlamayı amaçlarız. Hukuki sorular için legal@boaappstudio.com adresini de kullanabilirsiniz.",
          "Lütfen platformunuzu (iOS veya Android), görebiliyorsanız uygulama sürümünü, sorunun kısa bir açıklamasını ve yalnızca paylaşmak istemediğiniz fotoğrafları içermiyorsa ekran görüntülerini ekleyin. Yardım etmek için tüm fotoğraf kütüphanenize ihtiyacımız yoktur.",
        ],
      },
      {
        heading: "Satın almalar ve abonelikler",
        paragraphs: [
          "Satın alma veya yeniden kurulumdan sonra Premium görünmezse uygulamadaki Geri Yükle’yi kullanın. Aboneliği Apple veya Google hesabınızdan yönetin veya iptal edin. İadeler site üzerinden değil, mağaza tarafından yapılır.",
        ],
      },
      {
        heading: "Gizlilik, onay ve silme",
        paragraphs: [
          "Analitik, çökme veya reklam onayını değiştirmek için Gizlilik Politikası’nda anlatıldığı gibi uygulama içi gizlilik seçeneklerini ve cihaz ayarlarınızı kullanın. Analitik, çökme, reklam veya hak kimliklerinin silinmesini istemek için veri silme sayfasındaki adımları izleyin. Bu kutuya fotoğraf kütüphanesi göndermeyin.",
        ],
      },
    ],
  },
};

export type AppPageCopy = {
  title: string;
  tagline: string;
  description: string;
  featuresHeading: string;
  features: string[];
  legalHeading: string;
  storeNote: string;
};

export const appPageCopy: Record<LegalLocale, AppPageCopy> = {
  en: {
    title: "Rollbye",
    tagline: "Swipe Photo Cleaner",
    description:
      "Review your camera roll month by month, keep or add items to a Delete Box, and free space with on-device tools. Your photos never leave your phone. Optional Premium and, in the free version, a single ad on the month-summary screen.",
    featuresHeading: "What you can do",
    features: [
      "Unlimited swipe to keep or clean, with a Delete Box and undo",
      "Videos, size filters, and screenshot cleanup",
      "On-device similar and blurry photo tools",
      "Nine languages, including English and Turkish",
      "Photos processed only on the device",
    ],
    legalHeading: "Privacy and legal",
    storeNote:
      "Rollbye is being prepared for Google Play and the App Store. Store links will appear here when the listing is public.",
  },
  tr: {
    title: "Rollbye",
    tagline: "Galeri Temizleyici",
    description:
      "Kamera rulosunu ay ay inceleyin, tutun veya Silme Kutusu’na ekleyin ve cihazda çalışan araçlarla yer açın. Fotoğraflarınız telefondan çıkmaz. İsteğe bağlı Premium ve ücretsiz sürümde ay sonu özetinde tek bir reklam.",
    featuresHeading: "Neler yapabilirsiniz",
    features: [
      "Sınırsız kaydırarak tutma veya temizleme, Silme Kutusu ve geri alma",
      "Videolar, boyut filtreleri ve ekran görüntüsü temizliği",
      "Cihazda benzer ve bulanık fotoğraf araçları",
      "İngilizce ve Türkçe dahil dokuz dil",
      "Fotoğraflar yalnızca cihazda işlenir",
    ],
    legalHeading: "Gizlilik ve yasal",
    storeNote:
      "Rollbye, Google Play ve App Store için hazırlanıyor. Vitrin herkese açık olduğunda mağaza bağlantıları burada yer alacak.",
  },
};
