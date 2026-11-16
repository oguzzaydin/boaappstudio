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
    lastUpdated: "January 2026",
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
        icon: "Bug",
        title: "Crash Information",
        description:
          "Basic crash information may be collected to improve app stability."
      }
    ]
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
