import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: Page,
  head: () => ({
    meta: [
      { title: 'FAQ — SWAZR.com | Frequently Asked Questions' },
      { name: 'description', content: 'Common questions about SWAZR.com — acquisition process, legal clearance, pricing, and brand architecture.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'FAQ — SWAZR.com' },
      { property: 'og:description', content: 'Common questions about acquiring SWAZR.com.' },
      { property: 'og:url', content: 'https://swazr.com/faq' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'FAQ — SWAZR.com' },
      { name: 'twitter:description', content: 'Common questions about acquiring SWAZR.com.' },
    ],
    links: [{ rel: 'canonical', href: 'https://swazr.com/faq' }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What does SWAZR mean?", "acceptedAnswer": {"@type": "Answer", "text": "A five-letter name built through the Strategic Vowel Elision Rule — a precise phonetic compression of three ancient linguistic roots: Proto-Germanic, Hebrew, and Arabic. See Phonetic Architecture on the homepage for the full derivation."}}, {"@type": "Question", "name": "Is the name legally protected?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A comprehensive search through the USPTO database found no conflicting registered or pending trademarks matching SWAZR."}}, {"@type": "Question", "name": "How can I acquire the domain?", "acceptedAnswer": {"@type": "Answer", "text": "The domain is available through a direct offer via GoDaddy, Afternic, Atom, Dynadot, or Spaceship, or by direct contact via email or WhatsApp."}}, {"@type": "Question", "name": "What is the price?", "acceptedAnswer": {"@type": "Answer", "text": "There is no fixed public price. The sale proceeds through a negotiated offer based on seriousness and intended use."}}, {"@type": "Question", "name": "Why only five letters?", "acceptedAnswer": {"@type": "Answer", "text": "Short names are easier to remember, pronounce, and use across digital products in every market. See Strategic Letter Framework on the homepage for the full architecture."}}, {"@type": "Question", "name": "Is the transfer fast?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, transfer completes within 24 hours of payment. The buyer is free to choose whichever platform they trust most, GoDaddy, Afternic, Atom, Dynadot, or Spaceship, all offering the same speed and security."}}, {"@type": "Question", "name": "What sectors does SWAZR fit?", "acceptedAnswer": {"@type": "Answer", "text": "Defense, autonomous systems, drones, robotics, and artificial intelligence. See the Methodology page for the full sector analysis."}}]}),
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
          <div className="section-eyebrow">FAQ</div>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-sub">
            Common questions about SWAZR.com — acquisition process, legal clearance, and brand architecture.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="uc-grid">
            <div className="uc-item">
              <div className="uc-title">What does SWAZR mean?</div>
              <div className="uc-desc">A five-letter name built through the Strategic Vowel Elision Rule — a precise phonetic compression of three ancient linguistic roots: Proto-Germanic, Hebrew, and Arabic. See Phonetic Architecture on the homepage for the full derivation.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">Is the name legally protected?</div>
              <div className="uc-desc">Yes. A comprehensive search through the USPTO database found no conflicting registered or pending trademarks matching SWAZR.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">How can I acquire the domain?</div>
              <div className="uc-desc">The domain is available through a direct offer via GoDaddy, Afternic, Atom, Dynadot, or Spaceship, or by direct contact via email or WhatsApp.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">What is the price?</div>
              <div className="uc-desc">There is no fixed public price. The sale proceeds through a negotiated offer based on seriousness and intended use.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">Why only five letters?</div>
              <div className="uc-desc">Short names are easier to remember, pronounce, and use across digital products in every market. See Strategic Letter Framework on the homepage for the full architecture.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">Is the transfer fast?</div>
              <div className="uc-desc">Yes, transfer completes within 24 hours of payment. The buyer is free to choose whichever platform they trust most, GoDaddy, Afternic, Atom, Dynadot, or Spaceship, all offering the same speed and security.</div>
            </div>
            <div className="uc-item">
              <div className="uc-title">What sectors does SWAZR fit?</div>
              <div className="uc-desc">Defense, autonomous systems, drones, robotics, and artificial intelligence. See the Methodology page for the full sector analysis.</div>
            </div>
          </div>
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
