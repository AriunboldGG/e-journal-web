import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Цахим дэвтэр — Бизнесийн хамгийн ухаалаг дэвтэр",
    template: "%s | Цахим дэвтэр",
  },
  description:
    "Цахим дэвтэр нь жижиг, дунд бизнес эрхлэгчдэд зориулсан борлуулалт, бараа материал, санхүүгийн удирдлагын гар утасны апп. Цаасан дэвтрээс цахим дэвтэр рүү шилжээрэй.",
  keywords: [
    "Цахим дэвтэр",
    "борлуулалтын систем",
    "POS апп",
    "бараа материалын удирдлага",
    "жижиг бизнес апп Монгол",
    "Tsakhim Devter",
  ],
  authors: [{ name: SITE.companyNameMn }],
  creator: SITE.companyNameMn,
  applicationName: "Цахим дэвтэр",
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: SITE.url,
    siteName: "Цахим дэвтэр",
    title: "Цахим дэвтэр — Бизнесийн хамгийн ухаалаг дэвтэр",
    description:
      "Борлуулалт, бараа материал, санхүүгээ нэг дор удирдах гар утасны апп. Жижиг бизнест зориулсан цахим дэвтэр.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Цахим дэвтэр — Бизнесийн ухаалаг апп",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Цахим дэвтэр — Бизнесийн хамгийн ухаалаг дэвтэр",
    description:
      "Борлуулалт, бараа материал, санхүүгээ нэг дор удирдах гар утасны апп.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.companyNameMn,
        alternateName: SITE.companyNameEn,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        sameAs: [SITE.facebook],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Улаанбаатар",
          addressCountry: "MN",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Цахим дэвтэр",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS",
        description:
          "Жижиг, дунд бизнес эрхлэгчдэд зориулсан борлуулалт, бараа материал, санхүүгийн удирдлагын гар утасны апп.",
        offers: {
          "@type": "Offer",
          priceCurrency: "MNT",
        },
        publisher: {
          "@id": `${SITE.url}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: "Цахим дэвтэр",
        publisher: {
          "@id": `${SITE.url}/#organization`,
        },
        inLanguage: "mn-MN",
      },
    ],
  };

  return (
    <html lang="mn" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-text">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
