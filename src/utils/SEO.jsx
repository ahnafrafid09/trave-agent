import React from "react";
import { Helmet } from "react-helmet-async";

// Komponen SEO yang dapat digunakan di berbagai halaman
const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  twitterImage,
  ogUrl,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={twitterImage} />
    <link rel="canonical" href={canonicalUrl} />
  </Helmet>
);

export default SEO;
