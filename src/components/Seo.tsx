import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const BASE_URL = "https://www.ptkamandanujayalogistik.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const BRAND_KEYWORDS =
  "Kamandanu Jaya Logistik, logistik Indonesia, shipping company Jakarta, freight forwarding, marine logistics, cargo transportation, sea freight, ekspedisi laut, pengiriman kargo";

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  url = "/",
  keywords = BRAND_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}) => {
  const canonicalUrl = `${BASE_URL}${url}`;

  return (
    <Helmet>
      {/* ── Basic Meta ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="PT Kamandanu Jaya Logistik" />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PT Kamandanu Jaya Logistik" />
      <meta property="og:locale" content="id_ID" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Seo;