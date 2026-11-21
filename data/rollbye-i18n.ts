import type { AppData } from "./apps";
import type { LegalLocale } from "./rollbye-legal";
import { FIC_APP_ID, fakeIncomingCallTr } from "./fakeincomingcall-legal";

export const rollbyeTr: Partial<AppData> = {
  tagline: "Kaydırarak Temizle",
  description:
    "Rollbye, fotoğraf ve video kitaplığını ay ay incelemeni sağlar. Sağa kaydırarak tut, sola Silme Kutusu'na ekle. Fotoğraflar cihazında kalır — hesap yok, yükleme yok.",
  screenshots: [
    "/screenshots/rollbye/tr/1.webp",
    "/screenshots/rollbye/tr/2.webp",
    "/screenshots/rollbye/tr/3.webp",
    "/screenshots/rollbye/tr/4.webp",
    "/screenshots/rollbye/tr/5.webp",
    "/screenshots/rollbye/tr/6.webp",
  ],
  screenshotAlts: [
    "Kaydır, tut ya da sil. Sağa tut. Sola Silme Kutusu.",
    "Ay ay temizle. Kitaplık ilerlemeni net gör.",
    "Silmeden önce gözden geçir. Android 11 ve sonrası: önce Çöp Kutusu'na gider.",
    "Ekran görüntüleri, büyük videolar ve daha fazlası. Benzer ve bulanık fotoğraf araçları Premium'da.",
    "Ne kadar yer açtığını gör. Her ayın özeti net ve sakin.",
    "Fotoğrafların cihazında kalır. Hesap gerekmez.",
  ],
  monetization: "Ücretsiz • isteğe bağlı Premium",
  adNote:
    "Android ücretsiz sürümde, onayından sonra ay özeti ekranında tek bir native reklam görünebilir. iOS sürümlerinde reklam yoktur. Premium reklamları kaldırır.",
  features: [
    "Sağa kaydırarak tut, sola Silme Kutusu'na ekle — ücretsiz ve sınırsız",
    "Onaylamadan önce her şeyi Silme Kutusu'nda incele",
    "Ekran görüntüleri ve büyük videolar için ücretsiz araçlar",
    "Benzer fotoğraf grupları: ilk üçü ücretsiz",
    "Fotoğraflar ve videolar cihazında kalır — hesap yok, yükleme yok",
    "İsteğe bağlı Premium: ömür boyu, yıllık veya aylık",
    "Dokuz dil",
  ],
  lastUpdated: "Kasım 2026",
  collectionLimits:
    "Fotoğraf ve videolar yalnızca cihazda işlenir, hiçbir yere yüklenmez. Hesap yoktur. Analitik ve kilitlenme raporları, UMP formunda onay verdikten sonra Google Firebase kullanır. Android ücretsiz sürümde onay sonrası AdMob tek bir native reklam gösterebilir. Satın almalar RevenueCat ile doğrulanır.",
  dataUsageNote:
    "Gizliliğine saygı duyuyoruz. Fotoğraf ve videolar cihazında kalır, hiçbir yere yüklenmez. Uygulama hassas konum toplamaz ve kişilerine erişmez. Android'de, onay sonrası reklamlar için reklam kimliği kullanılabilir. Analitik ve kilitlenme günlükleri yalnızca UMP onayından sonra başlar.",
  advertisingIntro:
    "Android ücretsiz sürümde, onayından sonra tek bir native reklam görünebilir. iOS sürümlerinde reklam yoktur. Premium reklamları kaldırır.",
  advertisingServices: [
    {
      name: "Google AdMob",
      description:
        "Android ücretsiz sürümde, UMP onayından sonra ay özeti ekranında tek bir native reklam göstermek için Google AdMob kullanırız. AdMob kendi tarafında bir reklam tanımlayıcısı kullanabilir. iOS sürümlerinde reklam yoktur.",
    },
  ],
  childrenPrivacyNote:
    "Yukarıda açıklandığı gibi, Android ücretsiz sürüm onay sonrası Google AdMob üzerinden tek bir reklam gösterebilir ve uygulama UMP onayından sonra kullanım istatistikleri ve kilitlenme günlükleri için Google Firebase Analytics ile Firebase Crashlytics kullanır. Kişisel verilerini üçüncü taraflara satmaz, kiralamaz veya takas etmeyiz.",
  privacyHighlights: [
    {
      icon: "CheckCircle",
      title: "Fotoğraflar cihazda kalır",
      description:
        "Fotoğraf ve video kitaplığın telefonda incelenir. Medya dosyaları sunucularımıza yüklenmez ve buluta kopyalanmaz.",
      color: "emerald",
    },
    {
      icon: "Shield",
      title: "Hesap gerekmez",
      description:
        "Rollbye hesap oluşturmanı istemez. Uygulamayı oturum açmadan kullanabilirsin.",
      color: "blue",
    },
    {
      icon: "Eye",
      title: "Önce onay",
      description:
        "Firebase Analytics, Crashlytics ve Android reklamları yalnızca UMP onay formunda bir seçim yaptıktan sonra başlar.",
      color: "purple",
    },
  ],
  dataCollection: [
    {
      icon: "Smartphone",
      title: "Fotoğraflar ve videolar",
      description:
        "Uygulama, kaydırma, inceleme ve silme için kitaplığını cihazda okur. Medya telefondan çıkmaz ve Boa Apps Studio'ya gönderilmez.",
    },
    {
      icon: "Ad",
      title: "Reklam verileri",
      description:
        "Android ücretsiz sürümde Google AdMob, onay sonrası cihaz reklam tanımlayıcısını kullanabilir. iOS sürümlerinde reklam yoktur. Premium reklamları kaldırır.",
    },
    {
      icon: "BarChart",
      title: "Kullanım istatistikleri",
      description:
        "UMP onayından sonra Google Firebase Analytics, açılan ekranlar, özellik kullanımı ve temel cihaz veya uygulama bilgileri gibi olayları toplayabilir.",
    },
    {
      icon: "Bug",
      title: "Kilitlenme bilgileri",
      description:
        "UMP onayından sonra Google Firebase Crashlytics, kararlılık sorunlarını bulup düzeltmemiz için kilitlenme günlükleri ve cihaz bilgisi toplayabilir.",
    },
    {
      icon: "Database",
      title: "Satın almalar",
      description:
        "İsteğe bağlı Premium satın almalar Apple veya Google tarafından işlenir ve RevenueCat ile doğrulanır. RevenueCat anonim bir uygulama kullanıcı kimliği kullanabilir. Tam ödeme kartı bilgilerini almayız.",
    },
  ],
  analyticsServices: [
    {
      name: "Google Firebase Analytics",
      description:
        "Onayından sonra, uygulamayı geliştirebilmek için özellik kullanımını anlamak üzere Google Firebase Analytics kullanırız. Sistem veya uygulama onay ayarlarından onayı geri çekebilirsin.",
    },
    {
      name: "Google Firebase Crashlytics",
      description:
        "Onayından sonra, kararlılık sorunlarını bulup düzeltmek için Google Firebase Crashlytics ile kilitlenme günlükleri toplarız.",
    },
  ],
  faqs: [
    {
      question: "Fotoğraflarım telefondan çıkar mı?",
      answer:
        "Hayır. Fotoğraf ve videolar cihazında kalır. Hiçbir yere yüklenmez; kitaplığın buluta kopyalanmaz. İnceleme telefonda yapılır.",
    },
    {
      question: "Rollbye ücretsiz mi?",
      answer:
        "Kaydırma ve silme ücretsiz ve sınırsızdır. Ekran görüntüsü ve büyük video araçları ücretsizdir. İlk üç benzer fotoğraf grubu ücretsizdir. Bulanık fotoğraflar, sonraki benzer gruplar ve albüme taşıma Premium'dır.",
    },
    {
      question: "Silme nasıl çalışır?",
      answer:
        "Onaylamadan önce öğeleri Silme Kutusu'nda incelersin. iOS'ta silinenler 30 gün boyunca Son Silinenler'e gider. Android 11 ve sonrasında genellikle yaklaşık 30 gün Çöp Kutusu'na gider. Daha eski Android'de onaydan sonra silme kalıcıdır.",
    },
    {
      question: "Uygulama reklam gösteriyor mu?",
      answer:
        "Android ücretsiz sürümde, onayından sonra ay özeti ekranında tek bir native reklam görünebilir. iOS sürümlerinde reklam yoktur. Premium reklamları kaldırır.",
    },
    {
      question: "Hangi diller destekleniyor?",
      answer:
        "Rollbye İngilizce, Türkçe, Français, Deutsch, Português (Brasil), Español, 한국어, Nederlands ve Italiano dillerinde sunulur.",
    },
  ],
};

export function applyAppLocale(app: AppData, locale: LegalLocale): AppData {
  if (locale === "tr" && app.id === "rollbye") {
    return { ...app, ...rollbyeTr };
  }
  if (locale === "tr" && app.id === FIC_APP_ID) {
    return { ...app, ...fakeIncomingCallTr };
  }
  return app;
}
