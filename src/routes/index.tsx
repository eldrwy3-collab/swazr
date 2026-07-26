import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: SwazrLanding,
})

const GODADDY_URL =
  'https://www.godaddy.com/domainsearch/find?premiumOnly=true&domainToCheck=swazr'

function SwazrLanding() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          SWAZR.COM
        </a>
        <div className="nav-right">
          <a href="#linguistic" className="nav-link">
            Heritage
          </a>
          <a href="#phonetic" className="nav-link">
            Phonetic
          </a>
          <a href="#usp" className="nav-link">
            Legal
          </a>
          <Link to="/methodology" className="nav-link">
            Methodology
          </Link>
          <Link to="/case-studies" className="nav-link">
            Case Studies
          </Link>
          
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
      <section className="hero">
        <div className="hero-glow" />
        <span className="hero-eyebrow">Premium Domain — Available Now</span>
        <h1 className="hero-title">
          SWA<span className="accent">Z</span>R
        </h1>
        <p className="hero-tagline">
          Swift · Warning · Aerial · Zone · Response
        </p>
        <p className="hero-desc">
          One letter from SWARM. One era ahead. A brand name forged from three
          ancient civilizations, engineered for the autonomous defense era.
        </p>
        <div className="hero-btns">
          
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
        <div className="hero-badges">
          <span className="hero-badge">USPTO Cleared</span>
          <span className="hero-badge">Listed on GoDaddy</span>
          <span className="hero-badge">Listed on Afternic</span>
          <span className="hero-badge">Instant Transfer</span>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-num">5</span>
            <div className="stat-label">Letters Only</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">.com</span>
            <div className="stat-label">Global Extension</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">3</span>
            <div className="stat-label">Ancient Language Roots</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">USPTO</span>
            <div className="stat-label">Zero Conflicts Found</div>
          </div>
        </div>
      </div>

      {/* LETTERS FRAMEWORK */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Strategic Letter Framework</div>
          <h2 className="section-title">Every Letter Earns Its Place</h2>
          <p className="section-sub">
            Each letter in SWAZR is a strategic node. Every expansion is
            consistent — each sentence begins with the corresponding letter,
            making the name impossible to forget and infinitely expandable.
          </p>
          <table className="letter-table">
            <tbody>
              {[
                {
                  char: 'S',
                  primary:
                    'Sensor · Signal · Supply · Swift · Strategic · Secure · Shield',
                  alts: 'The S anchors all sensing, signaling, and security functions — the first layer of any autonomous defense system.',
                  tags: [
                    'Sensor-Wide',
                    'Strategic Wide-Area',
                    'Shield Watch',
                    'Secure Watch',
                    'Supply-Wide',
                    'Swarm-Wide',
                    'Signal Wave',
                    'Swarm Workload',
                  ],
                },
                {
                  char: 'W',
                  primary: 'Wide · Warning · Watch · Workload',
                  alts: 'W represents scale and vigilance — wide-area coverage, persistent watch, workload intelligence.',
                  tags: [
                    'Wide-Area',
                    'Warning',
                    'Watch',
                    'Workload Analysis',
                  ],
                },
                {
                  char: 'A',
                  primary: 'Aerial · Autonomous · Adaptive · Access',
                  alts: 'A defines the domain of operation — aerial, autonomous, adaptive. The defining word of the drone era.',
                  tags: [
                    'Aerial Zone',
                    'Autonomous Zone',
                    'Adaptive Zone',
                    'Access',
                  ],
                },
                {
                  char: 'Z',
                  primary: 'Zone · Zero-Latency · Zero-Restriction',
                  alts: 'Z defines space and speed — the operational zone and the zero-latency imperative of modern defense systems.',
                  tags: [
                    'Zone Reconnaissance',
                    'Zero-Latency',
                    'Zero Restrictions',
                  ],
                },
                {
                  char: 'R',
                  primary:
                    'Reconnaissance · Response · Relay · Rescue · Router',
                  alts: 'R closes the loop — from reconnaissance to response, the full operational cycle of any autonomous system.',
                  tags: [
                    'Reconnaissance',
                    'Response',
                    'Relay',
                    'Rescue',
                    'Network Router',
                  ],
                },
              ].map(({ char, primary, alts, tags }) => (
                <tr key={char}>
                  <td className="letter-char-cell">{char}</td>
                  <td className="letter-content">
                    <div className="letter-primary">{primary}</div>
                    <div className="letter-alts">{alts}</div>
                    <div className="letter-frameworks">
                      {tags.map((t) => (
                        <span key={t} className="fw-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PHONETIC ENGINEERING */}
      <section className="section" id="phonetic" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Phonetic Architecture</div>
          <h2 className="section-title">The Strategic Vowel Elision Rule</h2>
          <p className="section-sub">
            SWAZR was not invented. It was derived through a precise phonetic
