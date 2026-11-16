import type { Metadata } from "next";
import type { AppData } from "@/data/apps";

export const SITE_URL = "https://boaappstudio.com";
export const SITE_NAME = "Boa App Studio";
export const TWITTER_SITE = "@boaappstudio";
export const CONTACT_EMAIL = "contact@boaappstudio.com";
export const OG_IMAGE = "/og-image.jpg";
export const CONTENT_UPDATED = "2026-11-16";

export const socialProfiles = [
  { name: "YouTube", href: "https://www.youtube.com/@boaappsstudio" },
  { name: "Instagram", href: "https://www.instagram.com/boaappstudio" },
  { name: "TikTok", href: "https://www.tiktok.com/@boaappstudio" },
  { name: "X", href: "https://x.com/boaappstudio" },
] as const;

export const sameAs = socialProfiles.map((profile) => profile.href);

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = OG_IMAGE,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_SITE,
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 250,
      height: 150,
    },
    sameAs: [...sameAs],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqNode(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    ...faqNode(items),
  };
}

function absoluteAsset(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path}`;
}

export function appJsonLd(app: AppData) {
  const playUrl = app.storeLinks.googlePlay;
  if (!playUrl || playUrl === "#" || !app.applicationCategory || !app.operatingSystem) {
    return null;
  }

  const isFree = app.monetization.toLowerCase().startsWith("free");

  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "MobileApplication"],
    name: app.name,
    description: app.description,
    url: `${SITE_URL}/apps/${app.id}`,
    image: absoluteAsset(app.icon),
    operatingSystem: app.operatingSystem,
    applicationCategory: app.applicationCategory,
    ...(isFree
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }
      : {}),
    installUrl: playUrl,
    downloadUrl: playUrl,
    screenshot: app.screenshots.map(absoluteAsset),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };
}
