
import { createFileRoute, Link } from '@tanstack/react-router'
 
export const Route = createFileRoute('/buyer-fit')({
  component: BuyerFit,
})
 
const GODADDY_URL =
  'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr'
 
function BuyerFit() {
  return (
    <>
      {/* NAV */}
      <nav>
        <Link to="/" className="nav-logo">
          SWAZR.COM
        </Link>
        <div className="nav-right">
          <Link to="/#linguistic" className="nav-link">
            Heritage
          </Link>
          <Link to="/#phonetic" className="nav-link">
            Phonetic
          </Link>
          <Link to="/#usp" className="nav-link">
            Legal
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
 
      {/* HERO */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-glow" />
        <span className="hero-eyebrow">Who Should Acquire This Domain</span>
        <h1
          className="hero-title"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
        >
          BUYER FIT
        </h1>
        <p className="hero-desc">
          SWAZR is not a generic domain. It is a strategic asset built for a
          specific class of acquirer — one operating at the intersection of
          autonomous systems, defense technology, and long-term brand
          architecture.
        </p>
      </section>
 
      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Ideal Acquirer Profile</div>
          <h2 className="section-title">Built For Serious Operators</h2>
          <p className="section-sub">
            SWAZR is engineered for organizations that need a name capable of
            carrying real operational and market weight — not a placeholder,
            not a temporary brand.
          </p>
          <div className="uc-grid">
            {[
              {
                num: '01 — Fit',
                title: 'Defense Contractors',
                desc: 'Prime and sub-tier contractors launching a new counter-drone, swarm defense, or autonomous systems program that needs a name with instant credibility.',
              },
              {
                num: '02 — Fit',
                title: 'Drone & Robotics Startups',
                desc: 'Venture-backed founders building an autonomous aerial vehicle, swarm platform, or robotics company who need a short, ownable, globally pronounceable .com.',
              },
              {
                num: '03 — Fit',
                title: 'AI & Autonomy Platforms',
                desc: 'Teams building aerial intelligence software, coordination systems, or autonomous decision platforms that require a name aligned with the technology itself.',
              },
              {
                num: '04 — Fit',
                title: 'Government & Allied Programs',
                desc: 'Agencies or allied procurement initiatives seeking a distinct public-facing identity for a national autonomous systems strategy.',
              },
              {
                num: '05 — Fit',
                title: 'Domain Investors',
                desc: 'Investors who recognize a USPTO-clear, linguistically engineered, single-word .com in a category projected for sustained growth through the 2030s.',
              },
              {
                num: '06 — Fit',
                title: 'Brand & Naming Agencies',
                desc: 'Agencies sourcing a rare, pre-cleared asset for a client in the defense, aerospace, or autonomous technology sector.',
              },
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
 
      {/* WHAT GOOD FIT LOOKS LIKE */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Alignment Criteria</div>
          <h2 className="section-title">Signs This Domain Is Right For You</h2>
          <p className="section-sub">
            A strong fit usually shares these characteristics. Use this as a
            quick self-check before reaching out.
          </p>
          <div className="fw-grid">
            <div className="fw-card">
              <div className="fw-category">Category Alignment</div>
              {[
                'Operating in defense, drones, or autonomous systems',
                'Building products related to aerial reconnaissance or response',
                'Positioning within the counter-drone or swarm defense space',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Brand Priorities</div>
              {[
                'Wants a short, five-letter, globally pronounceable name',
                'Needs a name that is USPTO-clear and legally deployable now',
                'Values a brand story with linguistic and historical depth',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Acquisition Readiness</div>
              {[
                'Ready to move on a premium .com within a defined timeline',
                'Has budget authority for a strategic domain acquisition',
                'Views the name as a long-term asset, not a temporary label',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* NOT A FIT */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Honest Guidance</div>
          <h2 className="section-title">When SWAZR May Not Be The Right Fit</h2>
          <p className="section-sub">
            Transparency matters as much as the pitch. SWAZR is likely not
            the right acquisition if any of the following apply.
          </p>
          <div className="usp-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="usp-text">
              <p>
                Your brand has no connection to defense, aerial systems,
                autonomy, or robotics, and the name would carry no strategic
                meaning for your audience.
              </p>
              <br />
              <p>
                You are looking for a low-cost, short-term domain rather than
                a long-term, legally cleared brand asset positioned for a
                specific technology category.
              </p>
              <br />
              <p>
                You need the domain immediately without any acquisition or
                transfer process — SWAZR is sold through a standard offer and
                transfer process via GoDaddy or Afternic.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-glow" />
        <p className="cta-quote">
          If you recognized yourself above,
          <br />
          <span>SWAZR was built for you.</span>
        </p>
        <p className="cta-sub">
          SWAZR.COM is available now. First serious offer takes it.
        </p>
        <div className="hero-btns">
          <a
            href={GODADDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Make an Offer on GoDaddy
          </a>
          <a href="mailto:swazr.brend@gmail.com" className="btn-outline">
            Contact by Email
          </a>
        </div>
        <div className="cta-contact">
          <a
            href={GODADDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            GoDaddy
          </a>
          <a
            href={GODADDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            Afternic
          </a>
          <a href="mailto:swazr.brend@gmail.com" className="contact-item">
            Email
          </a>
          <a
            href="https://wa.me/212660355053"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            WhatsApp
          </a>
        </div>
      </section>
 
      {/* FOOTER */}
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
