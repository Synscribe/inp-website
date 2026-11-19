import { env } from "./env";

export type NavigationItem = {
  label: string;
  href: string;
};

export const siteConfig = Object.freeze({
  name: "Ink and Pixel",
  legalName: "ink and pixel pte ltd",
  description:
    "We are a creative agency with an extended network of expertise. Our agency is about people who love creating, designing and developing projects.",
  url: env.siteUrl,
  locale: "en-SG",
  navigation: [
    { label: "works", href: "/our-works" },
    { label: "team", href: "/team" },
    { label: "feature", href: "/feature" },
  ] satisfies NavigationItem[],
  contactAnchor: {
    label: "contact",
    href: "#contact",
  } satisfies NavigationItem,
  contact: {
    email: "ask@inknpixel.com.sg",
    phone: "+65 6345 3200",
    addressLines: ["78 circular road #02-01", "singapore 049432"],
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ink-and-pixel-pte-ltd",
  },
});

export type SiteConfig = typeof siteConfig;
