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
    "Android ve iOS ücretsiz sürümde, onayından sonra ay özeti ekranında tek bir native reklam görünebilir. iOS'ta kişiselleştirilmiş reklam için ayrıca Apple'ın Uygulama İzleme Şeffaflığı (ATT) izni gerekir. Premium reklamları kaldırır.",
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
    "Fotoğraf ve videolar yalnızca cihazda işlenir, hiçbir yere yüklenmez. Hesap yoktur. Analitik ve kilitlenme raporları, UMP formunda onay verdikten sonra Google Firebase kullanır. Android ve iOS ücretsiz sürümde onay sonrası AdMob tek bir native reklam gösterebilir (iOS'ta kişiselleştirilmiş reklam yalnızca ATT isteminde izlemeye izin verirsen). Satın almalar RevenueCat ile doğrulanır.",
  dataUsageNote:
    "Gizliliğine saygı duyuyoruz. Fotoğraf ve videolar cihazında kalır, hiçbir yere yüklenmez. Uygulama hassas konum toplamaz ve kişilerine erişmez. Onay sonrası reklamlar için reklam kimliği kullanılabilir: Android reklam kimliği veya iOS'ta yalnızca ATT isteminde izlemeye izin verirsen IDFA. Analitik ve kilitlenme günlükleri yalnızca UMP onayından sonra başlar.",
  advertisingIntro:
    "Android ve iOS ücretsiz sürümde, onayından sonra tek bir native reklam görünebilir. iOS'ta Apple'ın Uygulama İzleme Şeffaflığı (ATT) izni istenir; reddedersen yalnızca kişiselleştirilmemiş reklam gösterilir. Premium reklamları kaldırır. Huawei AppGallery sürümünde reklam yoktur.",
  advertisingServices: [
    {
      name: "Google AdMob",
      description:
        "Android ve iOS ücretsiz sürümde, UMP onayından sonra ay özeti ekranında tek bir native reklam göstermek için Google AdMob kullanırız. AdMob kendi tarafında bir reklam tanımlayıcısı kullanabilir: Android reklam kimliği veya iOS'ta yalnızca ATT isteminde izlemeye izin verirsen IDFA. AdMob ayrıca reklam verilerini, cihaz ve uygulama bilgilerini, IP adresinden türetilen yaklaşık konumu ve tanılama verilerini işleyebilir. Google, Google’ın gizlilik ve reklam politikalarında açıklandığı gibi bu reklam verilerini reklam ortaklarıyla paylaşabilir.",
    },
  ],
  childrenPrivacyNote:
    "Rollbye 13 yaşın altındaki çocuklara (veya ülkenizde gereken daha yüksek asgari yaşa) yönelik değildir ve «çocuklar için tasarlandı» veya Kids uygulaması değildir. Bilerek çocuklardan kişisel bilgi toplamayız. Bir çocuğun uygulamayı, onay sonrası Google’a veri gidecek şekilde (reklam, analitik veya çökme günlükleri) kullandığını düşünüyorsanız bize yazın; bizim veya işleyenlerimizin silebildiği veriyi silmenize yardımcı oluruz. Ücretsiz sürüm yetişkin kullanıcılar için reklam gösterebilir ve UMP onayından sonra analitik veya çökme günlükleri toplayabilir; kişisel verileri satmaz, kiralamaz veya takas etmeyiz.",
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
        "Firebase Analytics, Crashlytics ve reklamlar yalnızca UMP onay formunda bir seçim yaptıktan sonra başlar. iOS'ta reklam izleme için ayrıca ATT izni gerekir.",
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
        "Ücretsiz sürümde Google AdMob, onay sonrası cihaz reklam tanımlayıcısını kullanabilir: Android'de reklam kimliği, iOS'ta yalnızca ATT isteminde izlemeye izin verirsen IDFA (aksi halde kişiselleştirilmemiş reklam). AdMob ayrıca IP adresinden türetilen yaklaşık konumu, cihaz ve uygulama bilgilerini ve reklam tanılamasını işleyebilir; Google reklam verilerini reklam ortaklarıyla paylaşabilir. İzlemeyi istediğin zaman iOS Ayarlar → Gizlilik ve Güvenlik → İzleme'den kapatabilirsin. Premium reklamları kaldırır.",
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
        "Android ve iOS ücretsiz sürümde, onayından sonra ay özeti ekranında tek bir native reklam görünebilir. iOS'ta kişiselleştirilmiş reklam için ayrıca Apple'ın Uygulama İzleme Şeffaflığı (ATT) izni gerekir. Premium reklamları kaldırır.",
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
