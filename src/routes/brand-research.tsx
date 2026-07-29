import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/brand-research')({
  component: Page,
  head: () => ({
    meta: [
      { title: 'Brand Research — SWAZR.com | Naming Principles' },
      { name: 'description', content: 'Research findings on why technology companies choose invented brand names, supporting the SWAZR.com strategic positioning.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Brand Research — SWAZR.com | Naming Principles' },
      { property: 'og:description', content: 'Research findings on why technology companies choose invented brand names.' },
      { property: 'og:url', content: 'https://swazr.com/brand-research' },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Brand Research — SWAZR.com' },
      { name: 'twitter:description', content: 'Research findings on why technology companies choose invented brand names.' },
    ],
    links: [{ rel: 'canonical', href: 'https://swazr.com/brand-research' }],
  }),
})

const GODADDY_URL =
  'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr'

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
          <div className="section-eyebrow">BRAND RESEARCH</div>
          <h1 className="section-title">Research Questions &amp; Findings</h1>
          <p className="section-sub">
            Evidence-oriented findings behind why short, invented names are common among premium technology and
            defense brands — the general principles behind the specific examples in Case Studies.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Research Questions</div>
          <h2 className="section-title">Why Invented Brand Names Win</h2>
          <div className="uc-grid">
            {[
              { num: '01', title: 'Why coined names?', desc: 'Easier to trademark than descriptive words, and not limited to a single product or industry.' },
              { num: '02', title: 'Why short names?', desc: 'Easier to read, remember, display on digital products, and register across platforms.' },
              { num: '03', title: 'What makes it premium?', desc: 'Distinctiveness, simplicity, scalability, international usability, and trademark potential.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="uc-item">
                <div className="uc-num">{num}</div>
                <div className="uc-title">{title}</div>
                <div className="uc-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Related Documentation</div>
          <h2 className="section-title">Continue Reading</h2>
          <div className="fw-grid">
            <Link to="/brand-foundation" className="fw-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="fw-category">Brand Foundation</div>
              <div className="fw-item">See the five strategic pillars</div>
            </Link>
            <Link to="/buyer-fit" className="fw-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="fw-category">Buyer Fit Analysis</div>
              <div className="fw-item">See what characterizes a strong acquirer</div>
            </Link>
            <Link to="/case-studies" className="fw-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="fw-category">Case Studies</div>
              <div className="fw-item">Read how category leaders were named</div>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">SWAZR.COM</div>
        <div className="footer-links">
          <a href={GODADDY_URL} target="_blank" rel="noopener noreferrer">
            GoDaddy
          </a>
          <a href={GODADDY_URL} target="_blank" rel="noopener noreferrer">
            Afternic
          </a>
          <a
            href="https://www.uspto.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            USPTO
          </a>
          <a
            href="https://github.com/eldrwy3-collab/SWAZR-Brand-Repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a href="mailto:swazr.brend@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
