import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/buyer-fit')({
  component: Page,
  head: () => ({
    meta: [
      { title: 'Buyer Fit Analysis — SWAZR.com | Ideal Acquirer Profile' },
      { name: 'description', content: 'What characterizes the strongest acquirer for SWAZR.com — category vocabulary fit, growth stage, and naming precedent, not a list of use cases.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Buyer Fit Analysis — SWAZR.com | Ideal Acquirer Profile' },
      { property: 'og:description', content: 'What characterizes the strongest acquirer for SWAZR.com.' },
      { property: 'og:url', content: 'https://swazr.com/buyer-fit' },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Buyer Fit Analysis — SWAZR.com' },
      { name: 'twitter:description', content: 'What characterizes the strongest acquirer for SWAZR.com.' },
    ],
    links: [{ rel: 'canonical', href: 'https://swazr.com/buyer-fit' }],
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
          <div className="section-eyebrow">BUYER FIT ANALYSIS</div>
          <h1 className="section-title">Strategic Compatibility</h1>
          <p className="section-sub">
            This is not a list of what SWAZR could become — see Acquisition Use Cases on the homepage for that.
            This page focuses on a different question: what characterizes the organization most likely to get
            lasting value from acquiring it.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Buyer Characteristics</div>
          <h2 className="section-title">What Strengthens the Fit</h2>
          <div className="uc-grid">
            {[
              { num: '01', title: 'Category Vocabulary Fit', desc: 'Already operates in the sensor, zone, relay, or autonomous-response space the letter framework maps to.' },
              { num: '02', title: 'Growth Stage', desc: 'Past early-stage naming — at a point where a distinctive, trademark-clear identity matters for the next phase.' },
              { num: '03', title: 'Naming Precedent', desc: 'Has previously favored symbolic or invented names (Anduril, Palantir, Helsing) over descriptive ones.' },
              { num: '04', title: 'Decision Speed', desc: 'Able to move on a domain acquisition directly, without a lengthy internal committee process.' },
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

      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Important Note</div>
          <h2 className="section-title">No Specific Company Implied</h2>
          <p className="section-sub">
            This page does not claim that any named company will acquire SWAZR. It identifies characteristics that
            increase strategic compatibility — see Representative Industry Signals on the Methodology page for how
            those characteristics map to the category.
          </p>
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
            <Link to="/methodology" className="fw-card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="fw-category">Methodology</div>
              <div className="fw-item">See the market research and evidence framework</div>
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
