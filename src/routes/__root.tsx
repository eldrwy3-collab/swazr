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
          'SWAZR.COM — a verified premium domain engineered for autonomous systems, drones, defense, robotics, and AI innovation. USPTO-cleared. Forged from three ancient linguistic roots. Available now on GoDaddy and Afternic.',
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
          'USPTO-cleared. One letter from SWARM. Forged from Proto-Germanic, Hebrew, and Arabic. Available now on GoDaddy and Afternic.',
      },
      { property: 'og:url', content: 'https://swazr.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://swazr.com/assets/images/card.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SWAZR.COM — Premium Domain' },
      {
        name: 'twitter:description',
        content:
          'USPTO-cleared. One letter from SWARM. Available now on GoDaddy and Afternic.',
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
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'SWAZR.COM',
          description:
            'Premium domain for autonomous defense, drone, and AI innovation. USPTO-cleared and available for acquisition.',
          brand: { '@type': 'Brand', name: 'SWAZR' },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: 'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr',
            priceCurrency: 'USD',
          },
        }),
      },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-JJHS00VKWH',
          async: true,
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JJHS00VKWH');`,
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
