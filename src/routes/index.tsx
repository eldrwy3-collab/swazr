import { createFileRoute } from '@tanstack/react-router'

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
            compression method, removing redundant vowels from ancient root
            words to create a name that is compact, stable, and universally
            pronounceable.
          </p>
          <div className="phonetic-box">
            <div className="phonetic-rule">
              Strategic Vowel Elision Rule — How SWAZR Was Born
            </div>
            <div className="phonetic-steps">
              <div className="ph-step">
                <div className="ph-word">SWEAR</div>
                <div className="ph-label">
                  Proto-Germanic Root
                  <br />
                  swarjaną
                </div>
              </div>
              <div className="ph-arrow">+</div>
              <div className="ph-step">
                <div className="ph-word">AZAR</div>
                <div className="ph-label">
                  Hebrew Root
                  <br />
                  ʕāzar
                </div>
              </div>
              <div className="ph-arrow">→</div>
              <div className="ph-step">
                <div className="ph-word">SWR + ZR</div>
                <div className="ph-label">
                  Redundant vowels removed
                  <br />
                  E+A → removed / A+A → removed
                </div>
              </div>
            </div>
            <div className="phonetic-result">
              <div className="phonetic-result-word">SWAZR</div>
              <div className="phonetic-result-label">
                Five-letter phonetic architecture — stable, resonant,
                universally pronounceable across Arabic, English, and all major
                languages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINGUISTIC ROOTS */}
      <section className="section" id="linguistic">
        <div className="section-inner">
          <div className="section-eyebrow">Linguistic Heritage</div>
          <h2 className="section-title">
            Forged From Three Ancient Civilizations
          </h2>
          <p className="section-sub">
            SWAZR is not a coined word and not a random creation. It is a brand
            identity forged from ancient linguistic foundations across three
            civilizations, giving it rare cross-cultural depth, global
            authority, and natural familiarity in Arabic culture.
          </p>
          <div className="roots-grid">
            <div className="root-card">
              <div className="root-lang">Proto-Germanic</div>
              <div className="root-original">swarjaną</div>
              <div className="root-transliteration">Phonetic: /swear/</div>
              <div className="root-meaning">
                Oath, commitment, an unbreakable pledge. The root of the
                English word SWEAR — the foundation of trust, alliance, and
                covenant between powers.
              </div>
              <div className="root-derivation">→ Contributes: SW</div>
            </div>
            <div className="root-card">
              <div className="root-lang">Semitic — Hebrew</div>
              <div className="root-original">ʕāzar / zar</div>
              <div className="root-transliteration">
                Phonetic: /azar/ + /zar/
              </div>
              <div className="root-meaning">
                ʕāzar: support, protection, defense. Zar: ally, strategic
                other, the trusted partner. Two Hebrew roots that define the
                architecture of alliance and mutual defense.
              </div>
              <div className="root-derivation">→ Contributes: AZ + ZR</div>
            </div>
            <div className="root-card">
              <div className="root-lang">Arabic</div>
              <div className="root-original">zār / ziyāra / zur</div>
              <div className="root-transliteration">
                Phonetic: /zur/ /ziyāra/ /zār/
              </div>
              <div className="root-meaning">
                To visit with purpose, to reach with intent, purposeful
                visitation. A concept of deliberate, strategic movement toward
                a target or destination — deeply resonant in Arabic culture.
              </div>
              <div className="root-derivation">→ Contributes: Z + R</div>
            </div>
          </div>
          <div
            style={{
              background: 'var(--gray)',
              border: '1px solid var(--border)',
              padding: '2rem',
              marginTop: '1px',
            }}
          >
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(240,238,233,0.55)',
                lineHeight: '1.8',
              }}
            >
              This synthesis grants the brand a majestic depth, echoing
              traditions across civilizations. The result is a name that
              carries the weight of oath, the strength of support and alliance,
              and the precision of purposeful reach — making it naturally
              familiar across Arabic, Hebrew, and European cultures
              simultaneously.{' '}
              <strong style={{ color: 'var(--white)' }}>
                Through the Strategic Vowel Elision Rule, these roots are
                compressed into a five-letter architecture that is stable,
                resonant, and universally pronounceable.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="section" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Strategic Frameworks</div>
          <h2 className="section-title">Every Expansion Is Consistent</h2>
          <p className="section-sub">
            Every sentence begins with the corresponding SWAZR letter. This
            rule makes the name infinitely expandable across military,
            operational, and technical domains.
          </p>
          <div className="fw-grid">
            <div className="fw-card">
              <div className="fw-category">Military & Tactical</div>
              {[
                'Sensor-Wide Aerial Zone Reconnaissance',
                'Strategic Wide-Area Target Engagement',
                'Shield Watch: Adaptive Zone Response',
                'Secure Watch: Autonomous Zone Response',
                'Swift Warning Aerial Zone Response',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Operational & Service</div>
              {[
                'Supply-Wide Aerial Zone Routing',
                'Swarm-Wide Autonomous Zone Rescue',
                'Synchronized Wide Aerial Zone Response',
                'Secure Wide-Area Zone Reconnaissance',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
            <div className="fw-card">
              <div className="fw-category">Technical Intelligence</div>
              {[
                'Signal Wave Zone Relay',
                'Swarm Workload Analysis Report',
                'Strategic Wide-Area Network Router',
                'Sensor Workload Aerial Zone Relay',
              ].map((item) => (
                <div key={item} className="fw-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Acquisition Use Cases</div>
          <h2 className="section-title">What SWAZR Can Become</h2>
          <div className="uc-grid">
            {[
              {
                num: '01 — Defense Program',
                title: 'Military Platform',
                desc: 'Counter-drone systems, aerial reconnaissance programs, swarm defense platforms, or government acquisition programs.',
              },
              {
                num: '02 — Product Brand',
                title: 'Drone Product Line',
                desc: 'A next-generation autonomous drone vehicle, swarm system, or flagship defense hardware product.',
              },
              {
                num: '03 — AI Platform',
                title: 'Autonomous AI System',
                desc: 'Aerial intelligence software, autonomous systems AI, robotics coordination platform, or hivemind architecture.',
              },
              {
                num: '04 — Defense Division',
                title: 'Operational Division',
                desc: 'A specialized R&D or operational division within a prime defense contractor or national defense agency.',
              },
              {
                num: '05 — Startup Venture',
                title: 'New Defense Company',
                desc: 'A venture-backed defense or aerospace startup built to lead the autonomous systems era from day one.',
              },
              {
                num: '06 — Government Program',
                title: 'National Initiative',
                desc: 'A sovereign defense innovation program, allied procurement initiative, or national autonomous systems strategy.',
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

      {/* USPTO */}
      <section className="section" id="usp" style={{ background: 'var(--gray)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Legal Clearance</div>
          <h2 className="section-title">USPTO Verified. Zero Conflicts.</h2>
          <div className="usp-grid">
            <div className="usp-text">
              <p>
                A comprehensive search was conducted through the United States
                Patent and Trademark Office database. The results confirm that
                there are no conflicting registered or pending trademarks
                matching SWAZR.
              </p>
              <br />
              <p>
                This ensures full legal compliance and intellectual property
                protection for the acquiring party. SWAZR is legally clear,
                globally available, and ready for full brand deployment from
                day one of acquisition.
              </p>
              <br />
              <a
                href="https://www.uspto.gov"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(200,255,0,0.3)',
                  paddingBottom: '2px',
                }}
              >
                Verify at USPTO.gov →
              </a>
            </div>
            <div className="usp-badges">
              {[
                {
                  status: 'CLEAR',
                  title: 'USPTO Trademark Search',
                  sub: 'No conflicting registered or pending trademarks',
                },
                {
                  status: 'LIVE',
                  title: 'GoDaddy Premium Listing',
                  sub: 'Active and available for immediate acquisition',
                },
                {
                  status: 'LIVE',
                  title: 'Afternic Marketplace',
                  sub: "Listed on the world's largest domain marketplace",
                },
                {
                  status: 'FAST',
                  title: 'Instant Transfer Available',
                  sub: 'Domain transfer completed within 24 hours of payment',
                },
              ].map(({ status, title, sub }) => (
                <div key={title} className="usp-badge">
                  <span className="usp-badge-check">{status}</span>
                  <div>
                    <div className="usp-badge-text">{title}</div>
                    <div className="usp-badge-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-glow" />
        <p className="cta-quote">
          Not all brands are born.
          <br />
          <span>Some are engineered to endure.</span>
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
          <a
            href="https://wa.me/212660355053"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            WhatsApp
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
          <a href="mailto:swazr.brend@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
