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
  storeLinks: {
    googlePlay?: string;
    appStore?: string;
  };
  monetization: string;
  privacyPolicy: string;
  features: string[];
  lastUpdated: string;
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
      "Fake Incoming Call - Prank lets you simulate realistic incoming calls with customizable caller name, ringtone, and delay. Designed purely for entertainment purposes to help you exit awkward or boring situations in a fun way.",
    version: "1.0.0",
    icon: "/icons/fake-incoming-call.png",
    screenshots: [
      "/screenshots/fake-incoming-call/1.png",
      "/screenshots/fake-incoming-call/2.png",
      "/screenshots/fake-incoming-call/3.png",
      "/screenshots/fake-incoming-call/4.png",
      "/screenshots/fake-incoming-call/5.png"
    ],
    storeLinks: {
      googlePlay: "#",
      appStore: "#"
    },
    monetization: "Free • Ad-supported",
    privacyPolicy: "/privacy-policy/fake-incoming-call-prank",
    features: [
      "Fake incoming call simulation",
      "Custom caller name and number",
      "Selectable ringtone",
      "Scheduled call delay",
      "Works fully offline",
      "For entertainment purposes only"
    ],
    lastUpdated: "January 2026",
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
          "The app may display ads provided by third-party advertising partners such as Google AdMob."
      },
      {
        icon: "Bug",
        title: "Crash Information",
        description:
          "Basic crash see information may be collected to improve app stability."
      }
    ]
  },
  {
    id: "fake-low-battery",
    name: "Fake Low Battery",
    tagline: "Simulate low battery alerts to escape awkward situations.",
    description:
      "Fake Low Battery allows you to simulate realistic low battery alerts with customizable battery level, sound, and delay. Created purely for entertainment purposes to help you exit awkward or boring situations in a harmless and fun way.",
    version: "1.0.0",
    icon: "/icons/fake-low-battery.png",
    screenshots: [
      "/screenshots/fake-low-battery/1.png",
      "/screenshots/fake-low-battery/2.png",
      "/screenshots/fake-low-battery/3.png",
      "/screenshots/fake-low-battery/4.png",
      "/screenshots/fake-low-battery/5.png",
      "/screenshots/fake-low-battery/6.png"
    ],
    storeLinks: {
      googlePlay: "#",
      appStore: "#"
    },
    monetization: "Free • Ad-supported",
    privacyPolicy: "/privacy-policy/fake-low-battery",
    features: [
      "Fake low battery alert simulation",
      "Custom battery percentage",
      "Selectable alert sound",
      "Scheduled alert delay",
      "Works fully offline",
      "For entertainment purposes only"
    ],
    lastUpdated: "January 2026",
    privacyHighlights: [
      {
        icon: "CheckCircle",
        title: "No Data Selling",
        description:
          "We do not sell, rent, or share your personal data with third parties.",
        color: "emerald"
      },
      {
        icon: "Shield",
        title: "No Real System Changes",
        description:
          "The app does not affect your real battery status or system notifications.",
        color: "blue"
      },
      {
        icon: "Eye",
        title: "Transparent Behavior",
        description:
          "All app behavior is clearly explained and visible to the user.",
        color: "purple"
      }
    ],
    dataCollection: [
      {
        icon: "Ad",
        title: "Advertising Data",
        description:
          "The app may show ads provided by third-party advertising partners such as Google AdMob."
      },
      {
        icon: "Bug",
        title: "Crash Information",
        description:
          "Anonymous crash data may be collected to improve app stability and performance."
      }
    ]
  },
  {
    id: "balloon-pop-game-for-kids",
    name: "Balloon Pop Game for Kids",
    tagline: "A simple and fun balloon popping game for children.",
    description:
      "Balloon Pop Game for Kids is a simple and colorful game designed for young children. Kids can tap and pop balloons while enjoying cheerful visuals and sounds. The game is created purely for entertainment purposes and does not include complex mechanics or competitive elements.",
    version: "1.0.0",
    icon: "/icons/balloon-pop-game-for-kids.jpg",
    screenshots: [
      "/screenshots/balloon-pop-game-for-kids/1.png",
      "/screenshots/balloon-pop-game-for-kids/2.png",
      "/screenshots/balloon-pop-game-for-kids/3.png",
      "/screenshots/balloon-pop-game-for-kids/4.png",
      "/screenshots/balloon-pop-game-for-kids/5.png"
    ],
    storeLinks: {
      googlePlay: "#",
      appStore: "#"
    },
    monetization: "Free • Ad-supported (child-friendly ads)",
    privacyPolicy: "/privacy-policy/balloon-pop-game-for-kids",
    features: [
      "Simple balloon popping gameplay",
      "Colorful balloons and animations",
      "Child-friendly sound effects",
      "No time limits or scoring pressure",
      "Works fully offline",
      "Designed for young children"
    ],
    lastUpdated: "January 2026",
    privacyHighlights: [
      {
        icon: "CheckCircle",
        title: "No Data Selling",
        description:
          "We do not sell, rent, or share personal data with third parties.",
        color: "emerald"
      },
      {
        icon: "Shield",
        title: "Kid-Safe Design",
        description:
          "The app is designed for children and does not include social features or external links.",
        color: "blue"
      },
      {
        icon: "Eye",
        title: "Transparent Experience",
        description:
          "The app experience is simple, clear, and easy for children to understand.",
        color: "purple"
      }
    ],
    dataCollection: [
      {
        icon: "Ad",
        title: "Advertising Data",
        description:
          "The app may display child-appropriate ads provided by Google AdMob using Families-compliant ad settings."
      },
      {
        icon: "Bug",
        title: "Crash Information",
        description:
          "Anonymous crash data may be collected to improve stability and performance."
      }
    ]
  }
];
