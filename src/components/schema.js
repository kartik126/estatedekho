import React from 'react';
import Head from 'next/head';

const Schema= ({ structuredData }) => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  </Head>
);

export const makeOrganizationalSchema = (org) => {
  const { name, url, logo, email, telephone, contactPoint, description } = org;
  return {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: name,
    url,
    logo,
    email,
    telephone,
    description,
    contactPoint: contactPoint.map((contact) => ({
      '@type': 'ContactPoint',
      telephone: contact.telephone,
      contactType: contact.type,
    })),
  };
};

export default Schema;
