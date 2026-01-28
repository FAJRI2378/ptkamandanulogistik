import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, url }) => {
  const siteName = "PT Kamandanu Jaya Samudera";
  const baseUrl = "https://ptkamandanujayasamudera.online";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
