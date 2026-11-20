export interface PrivacyHighlight {
  icon: string; // Lucide icon name
  title: string;
  description: string;
  color: string; // Tailwind color class backbone (e.g. "emerald", "blue")
}

export interface DataCollectionItem {
  icon: string;
  title: string;
  description: string;
}

export interface AnalyticsService {
  name: string;
  description: string;
}

export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  version: string;
  icon: string;
  screenshots: string[];
  screenshotAlts?: string[];
  storeLinks: {
    googlePlay?: string;
    appStore?: string;
  };
  monetization: string;
  adNote?: string;
  privacyPolicy: string;
  features: string[];
  lastUpdated: string;
  applicationCategory?: string;
  operatingSystem?: string;
  ogImage?: string;
  faqs?: { question: string; answer: string }[];
  // New rich privacy data
  privacyHighlights?: PrivacyHighlight[];
  dataCollection?: DataCollectionItem[];
  packageName?: string;
  collectionLimits?: string;
  analyticsServices?: AnalyticsService[];
  termsUrl?: string;
  deleteDataUrl?: string;
  supportPageUrl?: string;
  dataUsageNote?: string;
  advertisingIntro?: string;
  advertisingServices?: AnalyticsService[];
  childrenPrivacyNote?: string;
  locales?: Array<"en" | "tr">;
}

export const apps: AppData[] = [
  {
    id: "fake-incoming-call-prank",
    name: "Fake Incoming Call - Prank",
    tagline: "Simulate incoming calls to escape awkward situations.",
    description:
      "Fake Incoming Call - Prank lets you simulate realistic incoming calls with a customizable caller name, ringtone, and delay. You can cancel a scheduled call before it rings, and ads are not shown during a call. Designed purely for entertainment purposes to help you exit awkward or boring situations in a fun way.",
    version: "1.0.0",
    icon: "/icons/fake-incoming-call.png",
    screenshots: [
      "/screenshots/fake-incoming-call/1.webp",
      "/screenshots/fake-incoming-call/2.webp",
      "/screenshots/fake-incoming-call/3.webp",
      "/screenshots/fake-incoming-call/4.webp",
      "/screenshots/fake-incoming-call/5.webp",
      "/screenshots/fake-incoming-call/6.webp",
      "/screenshots/fake-incoming-call/7.webp",
      "/screenshots/fake-incoming-call/8.webp"
    ],
    screenshotAlts: [
      "Looks like a real call. Incoming call screen for a caller named Mom.",
      "Fake call in one tap. Call setup with caller Mom, Call now, a quick timer, and schedule later.",
      "10+ call screen styles. Call screen theme choices, including free layouts.",
      "Voice and script after you answer. In-call screen for a caller named Boss.",
      "Any caller, any name. Library of caller scenarios such as Mom, Boss, and Courier.",
      "Schedule it. Cancel anytime. Schedule a call and cancel it before it rings.",
      "Start from your home screen. Settings for a script after you answer and a home screen shortcut.",
      "No ads during your call. Call setup shown with no ad on the call screen."
    ],
    storeLinks: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.boaapps.fakeincomingcall",
      appStore: "#"
    },
    monetization: "Free • Ad-supported",
    adNote: "Ads are not shown during a call.",
    privacyPolicy: "/privacy-policy/fake-incoming-call-prank",
    features: [
      "Fake incoming call simulation",
      "Custom caller name and number",
      "Selectable ringtone",
      "Schedule a call and cancel before it rings",
      "No ads during a call",
      "Works fully offline",
      "For entertainment purposes only"
    ],
    lastUpdated: "November 2026",
    packageName: "com.boaapps.fakeincomingcall",
    collectionLimits:
      "This app does not collect contacts, photos, location, or call logs, and it does not require an account.",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "ANDROID",
    ogImage: "/og/fake-incoming-call-prank.jpg",
    faqs: [
      {
        question: "Is this a real phone call?",
        answer:
          "No. Fake Incoming Call - Prank simulates an incoming call for entertainment. The app does not make or receive real phone calls."
      },
      {
        question: "Is the app free?",
        answer:
          "Yes. The app is free and ad-supported. It may display ads from third-party partners such as Google AdMob. Ads are not shown during a call."
      },
      {
        question: "Does the app access my contacts or location?",
        answer:
          "No. The app does not access your contacts and does not collect precise location data. Advertising IDs may be used for ad relevance."
      },
      {
        question: "Can I set the caller name and a timer?",
        answer:
          "Yes. You can set a custom caller name and number, choose a ringtone, and schedule a call. You can cancel it before it rings."
      },
      {
        question: "Does the app work offline?",
        answer: "Yes. The app works fully offline."
      }
    ],
    privacyHighlights: [
      {
        icon: "CheckCircle",
        title: "No Data Selling",
        description:
          "We do not sell, rent, or trade your personal data to third parties.",
        color: "emerald"
      },
      {
        icon: "Shield",
        title: "No Real Calls",
        description:
          "The app does not make or receive real phone calls.",
        color: "blue"
      },
      {
        icon: "Eye",
        title: "Transparent Usage",
        description:
          "All app behavior is clearly described and visible to the user.",
        color: "purple"
      }
    ],
    dataCollection: [
      {
        icon: "Ad",
        title: "Advertising Data",
        description:
          "The app may display ads provided by third-party advertising partners such as Google AdMob. Ads are not shown during a call."
      },
      {
        icon: "BarChart",
        title: "Usage statistics",
        description:
          "Google Firebase Analytics is used for usage statistics and device identifiers."
      },
      {
        icon: "Bug",
        title: "Crash logs",
        description:
          "Google Firebase Crashlytics is used for crash logs."
      }
    ],
    analyticsServices: [
      {
        name: "Google Firebase Analytics",
        description:
          "We use Google Firebase Analytics for usage statistics. It may collect device identifiers and information about how the app is used."
      },
      {
        name: "Google Firebase Crashlytics",
        description:
          "We use Google Firebase Crashlytics to collect crash logs so we can find and fix stability problems."
      }
    ]
  },
  {
    id: "rollbye",
    name: "Rollbye",
    tagline: "Swipe Photo Cleaner",
    description:
      "Rollbye helps you review your photo and video library month by month. Swipe right to keep, left to add to Delete Box. Photos stay on your device — no account, no upload.",
    version: "1.0.0",
    icon: "/icons/rollbye.png",
    screenshots: [
      "/screenshots/rollbye/1.webp",
      "/screenshots/rollbye/2.webp",
      "/screenshots/rollbye/3.webp",
      "/screenshots/rollbye/4.webp",
      "/screenshots/rollbye/5.webp",
      "/screenshots/rollbye/6.webp"
    ],
    screenshotAlts: [
      "Swipe to keep or delete. Right keeps. Left adds to Delete Box.",
      "Clean month by month. See progress across your library.",
      "Review before you delete. Android 11+: items go to Trash first.",
      "Find screenshots, large videos, and more. Similar and blurry tools are Premium.",
      "See what you freed. Clear totals after each month.",
      "Your photos stay on your device. No account needed."
    ],
    storeLinks: {
      googlePlay: "#",
      appStore: "#"
    },
    monetization: "Free • optional Premium",
    adNote:
      "In the free version on Android and iOS, a single native ad may appear on the month-summary screen after you consent. On iOS, personalised ads also require your permission in Apple’s App Tracking Transparency (ATT) prompt. Premium removes ads.",
    privacyPolicy: "/apps/rollbye/privacy",
    termsUrl: "/apps/rollbye/terms",
    deleteDataUrl: "/apps/rollbye/delete-data",
    supportPageUrl: "/apps/rollbye/support",
    features: [
      "Swipe right to keep, left to add to Delete Box — unlimited and free",
      "Review everything in Delete Box before you confirm",
      "Free tools for screenshots and large videos",
      "Similar photo groups: the first three are free",
      "Photos and videos stay on your device — no account, no upload",
      "Optional Premium: lifetime, yearly, or monthly",
      "Nine languages"
    ],
    lastUpdated: "November 2026",
    packageName: "com.boaapps.rollbye",
    collectionLimits:
      "Photos and videos are processed on your device only and are never uploaded. There is no account. Analytics and crash reporting use Google Firebase after you consent in the UMP form. In the free version on Android and iOS, Google AdMob may show a single native ad after consent (on iOS, personalised ads only if you allow tracking in the ATT prompt). Purchases use RevenueCat.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "ANDROID, IOS",
    ogImage: "/og/rollbye.jpg",
    dataUsageNote:
      "We respect your privacy. Photos and videos stay on your device and are never uploaded. This app does not collect precise location data or access your contacts. After consent, an advertising identifier may be used for ads: the Android advertising ID, or on iOS the IDFA only if you allow tracking in the ATT prompt. Analytics and crash logs start only after UMP consent.",
    advertisingIntro:
      "On Android and iOS, the free version may show a single native advertisement after you consent. On iOS we ask for permission through Apple’s App Tracking Transparency (ATT) prompt; if you decline, only non-personalised ads are shown. Premium removes ads. The Huawei AppGallery build has no ads.",
    advertisingServices: [
      {
        name: "Google AdMob",
        description:
          "In the free version on Android and iOS we use Google AdMob to display a single native ad on the month-summary screen after UMP consent. AdMob may use an advertising identifier on its own side: the Android advertising ID, or on iOS the IDFA only if you allow tracking in the ATT prompt. AdMob may also process advertising data, device and app information, approximate location derived from your IP address, and diagnostics."
      }
    ],
    childrenPrivacyNote:
      "As described above, the free version on Android and iOS may display a single advertisement through Google AdMob after consent, and the app uses Google Firebase Analytics and Firebase Crashlytics for usage statistics and crash logs after UMP consent. We do not sell, rent, or trade your personal data to third parties.",
    privacyHighlights: [
      {
        icon: "CheckCircle",
        title: "Photos Stay on Device",
        description:
          "Your photo and video library is analyzed on the phone. Media files are never uploaded to our servers or copied to the cloud.",
        color: "emerald"
      },
      {
        icon: "Shield",
        title: "No Account Required",
        description:
          "Rollbye does not ask you to create an account. You can use the app without signing in.",
        color: "blue"
      },
      {
        icon: "Eye",
        title: "Consent First",
        description:
          "Firebase Analytics, Crashlytics, and ads start only after you make a choice in the UMP consent form. On iOS, ad tracking also needs your ATT permission.",
        color: "purple"
      }
    ],
    dataCollection: [
      {
        icon: "Smartphone",
        title: "Photos and Videos",
        description:
          "The app reads your library on the device so you can swipe, review, and delete. Media never leaves the phone and is not sent to Boa Apps Studio."
      },
      {
        icon: "Ad",
        title: "Advertising Data",
        description:
          "In the free version, Google AdMob may use a device advertising identifier after consent — on Android the advertising ID, on iOS the IDFA only if you allow tracking in the ATT prompt (otherwise non-personalised ads). You can turn tracking off any time in iOS Settings → Privacy & Security → Tracking. Premium removes ads."
      },
      {
        icon: "BarChart",
        title: "Usage Statistics",
        description:
          "After UMP consent, Google Firebase Analytics may collect events such as screens opened, feature usage, and basic device or app information."
      },
      {
        icon: "Bug",
        title: "Crash Information",
        description:
          "After UMP consent, Google Firebase Crashlytics may collect crash logs and device information so we can find and fix stability problems."
      },
      {
        icon: "Database",
        title: "Purchases",
        description:
          "Optional Premium purchases are processed by Apple or Google and validated with RevenueCat. RevenueCat may use an anonymous app user identifier. We do not receive your full payment card details."
      }
    ],
    analyticsServices: [
      {
        name: "Google Firebase Analytics",
        description:
          "After you consent, we use Google Firebase Analytics to understand how features are used so we can improve the app. You can withdraw consent in the system or app consent settings."
      },
      {
        name: "Google Firebase Crashlytics",
        description:
          "After you consent, we use Google Firebase Crashlytics to collect crash logs so we can find and fix stability problems."
      }
    ],
    faqs: [
      {
        question: "Do my photos leave my phone?",
        answer:
          "No. Photos and videos stay on your device. They are never uploaded, and your library is not copied to the cloud. Analysis runs on the phone."
      },
      {
        question: "Is Rollbye free?",
        answer:
          "Swiping and deleting are free and unlimited. Screenshots and large-video tools are free. The first three similar-photo groups are free. Blurry photos, more similar groups, and move to album are Premium."
      },
      {
        question: "How do deletions work?",
        answer:
          "You review items in Delete Box before you confirm. On iOS, deleted items go to Recently Deleted for 30 days. On Android 11 and newer they go to Trash, usually for about 30 days. On older Android, deletion is permanent after you confirm."
      },
      {
        question: "Does the app show ads?",
        answer:
          "In the free version on Android and iOS, a single native ad may appear on the month-summary screen after you consent. On iOS, personalised ads also require your permission in Apple’s App Tracking Transparency (ATT) prompt. Premium removes ads."
      },
      {
        question: "Which languages are supported?",
        answer:
          "Rollbye is available in English, Türkçe, Français, Deutsch, Português (Brasil), Español, 한국어, Nederlands, and Italiano."
      }
    ],
    locales: ["en", "tr"]
  },

  // {
  //   id: "fake-low-battery",
  //   name: "Fake Low Battery",
  //   tagline: "Simulate low battery alerts to escape awkward situations.",
  //   description:
  //     "Fake Low Battery allows you to simulate realistic low battery alerts with customizable battery level, sound, and delay. Created purely for entertainment purposes to help you exit awkward or boring situations in a harmless and fun way.",
  //   version: "1.0.0",
  //   icon: "/icons/fake-low-battery.png",
  //   screenshots: [
  //     "/screenshots/fake-low-battery/1.webp",
  //     "/screenshots/fake-low-battery/2.webp",
  //     "/screenshots/fake-low-battery/3.webp",
  //     "/screenshots/fake-low-battery/4.webp",
  //     "/screenshots/fake-low-battery/5.webp",
  //     "/screenshots/fake-low-battery/6.webp"
  //   ],
  //   storeLinks: {
  //     googlePlay: "#",
  //     appStore: "#"
  //   },
  //   monetization: "Free • Ad-supported",
  //   privacyPolicy: "/privacy-policy/fake-low-battery",
  //   features: [
  //     "Fake low battery alert simulation",
  //     "Custom battery percentage",
  //     "Selectable alert sound",
  //     "Scheduled alert delay",
  //     "Works fully offline",
  //     "For entertainment purposes only"
  //   ],
  //   lastUpdated: "January 2026",
  //   privacyHighlights: [
  //     {
  //       icon: "CheckCircle",
  //       title: "No Data Selling",
  //       description:
  //         "We do not sell, rent, or share your personal data with third parties.",
  //       color: "emerald"
  //     },
  //     {
  //       icon: "Shield",
  //       title: "No Real System Changes",
  //       description:
  //         "The app does not affect your real battery status or system notifications.",
  //       color: "blue"
  //     },
  //     {
  //       icon: "Eye",
  //       title: "Transparent Behavior",
  //       description:
  //         "All app behavior is clearly explained and visible to the user.",
  //       color: "purple"
  //     }
  //   ],
  //   dataCollection: [
  //     {
  //       icon: "Ad",
  //       title: "Advertising Data",
  //       description:
  //         "The app may show ads provided by third-party advertising partners such as Google AdMob."
  //     },
  //     {
  //       icon: "Bug",
  //       title: "Crash Information",
  //       description:
  //         "Anonymous crash data may be collected to improve app stability and performance."
  //     }
  //   ]
  // },
  // {
  //   id: "balloon-pop-game-for-kids",
  //   name: "Balloon Pop Game for Kids",
  //   tagline: "A simple and fun balloon popping game for children.",
  //   description:
  //     "Balloon Pop Game for Kids is a simple and colorful game designed for young children. Kids can tap and pop balloons while enjoying cheerful visuals and sounds. The game is created purely for entertainment purposes and does not include complex mechanics or competitive elements.",
  //   version: "1.0.0",
  //   icon: "/icons/balloon-pop-game-for-kids.jpg",
  //   screenshots: [
  //     "/screenshots/balloon-pop-game-for-kids/1.webp",
  //     "/screenshots/balloon-pop-game-for-kids/2.webp",
  //     "/screenshots/balloon-pop-game-for-kids/3.webp",
  //     "/screenshots/balloon-pop-game-for-kids/4.webp",
  //     "/screenshots/balloon-pop-game-for-kids/5.webp"
  //   ],
  //   storeLinks: {
  //     googlePlay: "#",
  //     appStore: "#"
  //   },
  //   monetization: "Free • Ad-supported (child-friendly ads)",
  //   privacyPolicy: "/privacy-policy/balloon-pop-game-for-kids",
  //   features: [
  //     "Simple balloon popping gameplay",
  //     "Colorful balloons and animations",
  //     "Child-friendly sound effects",
  //     "No time limits or scoring pressure",
  //     "Works fully offline",
  //     "Designed for young children"
  //   ],
  //   lastUpdated: "January 2026",
  //   privacyHighlights: [
  //     {
  //       icon: "CheckCircle",
  //       title: "No Data Selling",
  //       description:
  //         "We do not sell, rent, or share personal data with third parties.",
  //       color: "emerald"
  //     },
  //     {
  //       icon: "Shield",
  //       title: "Kid-Safe Design",
  //       description:
  //         "The app is designed for children and does not include social features or external links.",
  //       color: "blue"
  //     },
  //     {
  //       icon: "Eye",
  //       title: "Transparent Experience",
  //       description:
  //         "The app experience is simple, clear, and easy for children to understand.",
  //       color: "purple"
  //     }
  //   ],
  //   dataCollection: [
  //     {
  //       icon: "Ad",
  //       title: "Advertising Data",
  //       description:
  //         "The app may display child-appropriate ads provided by Google AdMob using Families-compliant ad settings."
  //     },
  //     {
  //       icon: "Bug",
  //       title: "Crash Information",
  //       description:
  //         "Anonymous crash data may be collected to improve stability and performance."
  //     }
  //   ]
  // }
];
