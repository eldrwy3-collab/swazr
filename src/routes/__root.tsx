import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        title:
          'SWAZR.COM — Premium Domain for Autonomous Defense, Drone & AI Innovation',
      },
      {
        name: 'description',
        content:
          'SWAZR.COM — a verified premium domain engineered for autonomous systems, drones, defense, robotics, and AI innovation. USPTO-cleared. Forged from three ancient linguistic roots. Available now on GoDaddy, Afternic, and Atom.',
      },
      { name: 'robots', content: 'index, follow' },
      {
        property: 'og:title',
        content:
          'SWAZR.COM — Premium Domain for Autonomous Defense & AI Innovation',
      },
      {
        property: 'og:description',
        content:
          'USPTO-cleared. One letter from SWARM. Forged from Proto-Germanic, Hebrew, and Arabic. Available now on GoDaddy, Afternic, and Atom.',
      },
      { property: 'og:url', content: 'https://swazr.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://swazr.com/assets/images/card.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SWAZR.COM — Premium Domain' },
      {
        name: 'twitter:description',
        content:
          'USPTO-cleared. One letter from SWARM. Available now on GoDaddy, Afternic, and Atom.',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://swazr.com/' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Product',
          name: 'SWAZR.COM - Premium Defense, AI, Robotics & Drone Swarms Domain',
          image: 'https://swazr.com/assets/images/card.jpg',
          description:
            'SWAZR.COM is a verified premium domain engineered for autonomous AI systems, robotics, drone swarms, counter-drone and counter-robotics defense systems, and advanced defense software solutions. Listed, verified, and available for secure transfer via top trusted global domain marketplaces: GoDaddy, Afternic, and Atom.',
          brand: {
            '@type': 'Brand',
            name: 'SWAZR',
          },
          offers: [
            {
              '@type': 'Offer',
              name: 'GoDaddy Premium Listing',
              url: 'https://swazr.com/',
              priceCurrency: 'USD',
              price: '13888',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                name: 'GoDaddy',
              },
            },
            {
              '@type': 'Offer',
              name: 'Afternic Marketplace Listing',
              url: 'https://swazr.com/',
              priceCurrency: 'USD',
              price: '13888',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                name: 'Afternic',
              },
            },
            {
              '@type': 'Offer',
              name: 'Atom Premium Listing',
              url: 'https://swazr.com/',
              priceCurrency: 'USD',
              price: '13888',
              priceValidUntil: '2027-12-31',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                name: 'Atom',
              },
            },
          ],
        }),
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0G6DPK6T43',
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0G6DPK6T43');`,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
