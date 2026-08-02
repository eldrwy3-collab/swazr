import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Page,
  head: () => ({
    meta: [
      { title: 'Contact — SWAZR.com | Reach Out About Acquisition' },
      { name: 'description', content: 'Every way to reach out about acquiring SWAZR.com — email, WhatsApp, GoDaddy, Afternic, Atom, Dynadot, and Spaceship.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Contact — SWAZR.com' },
      { property: 'og:description', content: 'Every way to reach out about acquiring SWAZR.com.' },
      { property: 'og:url', content: 'https://swazr.com/contact' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Contact — SWAZR.com' },
      { name: 'twitter:description', content: 'Every way to reach out about acquiring SWAZR.com.' },
    ],
    links: [{ rel: 'canonical', href: 'https://swazr.com/contact' }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({"@context": "https://schema.org", "@type": "ContactPage", "url": "https://swazr.com/contact", "about": {"@type": "Product", "name": "SWAZR.com"}}),
      },
    ],
  }),
})

const GODADDY_URL =
  'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr'
const AFTERNIC_URL =
  'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr'
const ATOM_URL = 'https://www.atom.com/name/swazr'
const DYNADOT_URL = 'https://www.dynadot.com/fr?domain=swazr.com'
const SPACESHIP_URL =
  'https://www.spaceship.com/domain-search/?query=swazr.com&beast=false&tab=domains'


function Page() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          SWAZR.COM
        </Link>
        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/methodology" className="nav-link">
            Methodology
          </Link>
          <Link to="/case-studies" className="nav-link">
            Case Studies
          </Link>
          <Link to="/brand-foundation" className="nav-link">
            Brand Foundation
          </Link>
          <Link to="/buyer-fit" className="nav-link">
            Buyer Fit
          </Link>
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <a
            href={GODADDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Make an Offer
          </a>
        </div>
      </nav>

      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">CONTACT</div>
          <h1 className="section-title">Contact</h1>
          <p className="section-sub">
            Every way to reach out about acquiring SWAZR.com — direct, fast, and verified.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="usp-badges">
            <a href="mailto:swazr.brend@gmail.com" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">MAIL</span>
              <div>
                <div className="usp-badge-text">Email</div>
                <div className="usp-badge-sub">swazr.brend@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/212660355053" target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">CHAT</span>
              <div>
                <div className="usp-badge-text">WhatsApp</div>
                <div className="usp-badge-sub">+212 660 355 053</div>
              </div>
            </a>
            <a href={GODADDY_URL} target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">LIVE</span>
              <div>
                <div className="usp-badge-text">GoDaddy</div>
                <div className="usp-badge-sub">Make an offer directly</div>
              </div>
            </a>
            <a href={AFTERNIC_URL} target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">LIVE</span>
              <div>
                <div className="usp-badge-text">Afternic</div>
                <div className="usp-badge-sub">Make an offer directly</div>
              </div>
            </a>
            <a href={ATOM_URL} target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">LIVE</span>
              <div>
                <div className="usp-badge-text">Atom</div>
                <div className="usp-badge-sub">View the listing</div>
              </div>
            </a>
            <a href={DYNADOT_URL} target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">LIVE</span>
              <div>
                <div className="usp-badge-text">Dynadot</div>
                <div className="usp-badge-sub">View the listing</div>
              </div>
            </a>
            <a href={SPACESHIP_URL} target="_blank" rel="noopener noreferrer" className="usp-badge" style={{ textDecoration: 'none' }}>
              <span className="usp-badge-check">LIVE</span>
              <div>
                <div className="usp-badge-text">Spaceship</div>
                <div className="usp-badge-sub">View the listing</div>
              </div>
            </a>
          </div>
          <p className="section-sub" style={{ marginTop: '2rem' }}>
            Serious inquiries typically receive a response within 24 hours.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-logo">SWAZR.COM</div>
        <div className="footer-links">
          <a href={GODADDY_URL} target="_blank" rel="noopener noreferrer">
            GoDaddy
          </a>
          <a href={AFTERNIC_URL} target="_blank" rel="noopener noreferrer">
            Afternic
          </a>
          <a href={ATOM_URL} target="_blank" rel="noopener noreferrer">
            Atom
          </a>
          <a href={DYNADOT_URL} target="_blank" rel="noopener noreferrer">
            Dynadot
          </a>
          <a href={SPACESHIP_URL} target="_blank" rel="noopener noreferrer">
            Spaceship
          </a>
          <a
            href="https://www.uspto.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            USPTO
          </a>
          <a href="mailto:swazr.brend@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
