import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/methodology')({
  component: SwazrMethodology,
})

const DOCS_URL =
  'https://github.com/eldrwy3-collab/SWAZR-Brand-Repository'

function SwazrMethodology() {
  return (
    <>
      {/* NAV */}
      <nav>
        <Link to="/" className="nav-logo">
          SWAZR.COM
        </Link>
        <div className="nav-right">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/case-studies" className="nav-link">
            Case Studies
          </Link>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Full Archive
          </a>
        </div>
      </nav>

      {/* INTRO */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Strategic Methodology</div>
          <h2 className="section-title">The Research Behind SWAZR</h2>
          <p className="section-sub">
            SWAZR was not selected by chance. Its name, structure, and
            positioning were developed through structured brand research
            and competitive analysis.
          </p>
        </div>
      </section>

      {/* MARKET RESEARCH */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Market Research</div>
          <h2 className="section-title">Where SWAZR Fits</h2>
          <p className="section-sub">
            The name was evaluated against the operational vocabulary of
            eight adjacent industries, each defined by autonomous,
            distributed, or safety-critical systems.
          </p>
          <div className="uc-grid">
            {[
              {
                num: '01',
                title: 'Artificial Intelligence',
                desc: 'Autonomous decision systems and applied AI platforms.',
              },
              {
                num: '02',
                title: 'Defense Technology',
                desc: 'Counter-drone, reconnaissance, and defense hardware programs.',
              },
              {
                num: '03',
                title: 'Aerospace',
                desc: 'Aerial platforms, avionics, and flight systems.',
              },
              {
                num: '04',
                title: 'Autonomous Systems',
                desc: 'Self-directed vehicles, drones, and swarm coordination.',
              },
              {
                num: '05',
                title: 'Robotics',
                desc: 'Distributed robotic platforms and field robotics.',
              },
              {
                num: '06',
                title: 'Cybersecurity',
                desc: 'Signal integrity, network defense, and secure relay systems.',
              },
              {
                num: '07',
                title: 'Software Infrastructure',
                desc: 'Backend systems supporting distributed operations at scale.',
              },
              {
                num: '08',
                title: 'Advanced Manufacturing',
                desc: 'Precision production systems for defense and aerospace hardware.',
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

      {/* COMPETITIVE LANDSCAPE */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Representative Industry Signals</div>
          <h2 className="section-title">A Category in Motion</h2>
          <p className="section-sub">
            These companies are shown solely to illustrate the direction of
            the autonomous systems category — they are not prospects,
            partners, or endorsements of SWAZR.
          </p>
          <div className="fw-grid">
            <div className="fw-card">
              <div className="fw-category">Defense & Autonomous Systems</div>
              {['Anduril', 'Shield AI', 'Skydio', 'Helsing'].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Data & AI Platforms</div>
              {['Palantir', 'Scale AI', 'OpenAI'].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Robotics</div>
              {['Skydio'].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE FRAMEWORK */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Evidence Framework</div>
          <h2 className="section-title">How Claims Are Classified</h2>
          <div className="usp-grid">
            <div className="usp-text">
              <p>
                Every claim made across SWAZR’s documentation is
                classified by evidence type, rather than presented as uniform
                fact. This distinguishes verified, checkable information from
                strategic reasoning and forward-looking hypotheses.
              </p>
            </div>
          </div>
          <br />
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent)',
              textDecoration: 'underline',
            }}
          >
            Research archive →
          </a>
        </div>
      </section>
    </>
  )
}
