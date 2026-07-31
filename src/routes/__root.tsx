import { createRootRoute, Outlet, ScrollRestoration, HeadContent, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { title: 'SWAZR.com | Premium Autonomous Defense & Drone Swarm Domain' },
      {
        name: 'description',
        content:
          'SWAZR.com is a premier domain asset for autonomous defense systems, drone swarm response, counter-drone technology, AI, and robotics. Available for acquisition at $13,888 USD.',
      },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'SWAZR.com | Premium Autonomous Defense Domain' },
      {
        property: 'og:description',
        content:
          'Acquire SWAZR.com for next-generation defense tech, drone swarms, and AI robotics systems.',
      },
      { property: 'og:url', content: 'https://swazr.com/' },
      { property: 'og:image', content: 'https://swazr.com/og-image.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SWAZR.com | Premium Defense Domain' },
      {
        name: 'twitter:description',
        content:
          'Premium domain for autonomous defense, counter-drone response, and military robotics.',
      },
      { name: 'twitter:image', content: 'https://swazr.com/og-image.png' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://swazr.com/' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'SWAZR.com Domain Name',
    image: ['https://swazr.com/og-image.png'],
    description:
      'Premium domain asset for autonomous defense, drone swarm response, AI, and robotics technology.',
    sku: 'SWAZR-DOM-2026',
    brand: {
      '@type': 'Brand',
      name: 'SWAZR',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '13888',
      highPrice: '13888',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Buy on GoDaddy',
          url: 'https://www.godaddy.com/domainsearch/find?checkAvailability=true&domainName=swazr.com',
          price: '13888',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Buy on Afternic',
          url: 'https://www.afternic.com/domain/swazr.com',
          price: '13888',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Buy on Atom',
          url: 'https://www.atom.com/domain/swazr.com',
          price: '13888',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
  };

  return (
    <RootDocument>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XM752PZ42B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XM752PZ42B');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
