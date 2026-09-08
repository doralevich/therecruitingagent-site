// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://therecruitingagent.com";
export const SITE_NAME = "The Recruiting Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. The slug is `recruiting` - BUILD_SLUGS in apolloclaw2
 *  maps it to the `recruiting` agent type. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/recruiting";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "david@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-in-house-teams" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/**
 * The audience pages, used by the nav, the footer, and the sitemap.
 *
 * The first split is the intake's own first question - does the agent recruit for your company * or for clients - because an in-house agent works one pipeline deeply while an agency agent * juggles many and must never mix them up. The other two are about shape: hiring twenty of the * same role is a different problem from hiring four people a year with no recruiter at all. */ export const AUDIENCES = [ { slug: "for-in-house-teams", label: "For In-House Teams" }, { slug: "for-agencies-and-search-firms", label: "For Agencies & Search Firms" }, { slug: "for-high-volume-hiring", label: "For High-Volume Hiring" }, { slug: "for-small-teams", label: "For Small Teams" }, ];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}
