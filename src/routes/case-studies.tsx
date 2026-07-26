import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  component: SwazrCaseStudies,
})

const DOCS_URL =
  'https://github.com/eldrwy3-collab/SWAZR-Brand-Repository'

const CASES = [
  {
    num: '01',
    company: 'NVIDIA',
    industry: 'AI · Semiconductors · High Performance Computing',
    origin:
      'NVIDIA traces back to the internal file-naming shorthand "NV" (Next Version). Searching for words containing those letters, the founders landed on the Latin "invidia" (envy), shortened to NVIDIA – combining a technical root with a powerful human emotion.',
    analysis:
      'NVIDIA shows that a technology brand does not need to describe its products. The name became an independent identity, allowing expansion across graphics, high-performance computing, and AI without requiring a rename.',
    lessons: [
      'Premium technology brands do not require descriptive names.',
      'Strategic positioning is built through execution, not literal naming.',
      'A flexible, abstract brand can expand across multiple technology sectors.',
      'Meaning accumulates through reputation rather than the name itself.',
    ],
    sources: 'NVIDIA historical background · Brand guidelines · Founder interviews',
  },
  {
    num: '02',
    company: 'Anduril',
    industry: 'Defense Technology · AI · Autonomous Systems',
    origin:
      'Named after Andúril, "Flame of the West" – Aragorn’s sword in The Lord of the Rings – chosen as a symbolic reference to strength, leadership, and the defense of civilization rather than a description of any product.',
    analysis:
      'Anduril demonstrates the power of symbolic naming in defense technology: a name that evokes purpose and strategic strength rather than sensors or drones directly, functioning as a narrative asset instead of a product label.',
    lessons: [
      'Symbolic names can outperform descriptive names for long-term positioning.',
      'Meaning can be built through narrative rather than direct explanation.',
      'Strategic narratives increase perceived brand depth.',
      'A flexible name supports expansion across technologies and markets.',
    ],
    sources: 'Anduril official website · Founder interviews · Defense industry publications',
  },
  {
    num: '03',
    company: 'Palantir',
    industry: 'Defense Technology · AI · Data Analytics',
    origin:
      'Named after the Palantír, Tolkien’s magical seeing-stone used to observe distant places – chosen to symbolize information superiority and decision intelligence rather than describing any software product.',
    analysis:
      'Palantir shows that a globally recognized technology brand can be built without a descriptive name. Its identity supports expansion across government, defense, healthcare, and finance while staying premium and coherent.',
    lessons: [
      'Unique names create stronger long-term differentiation.',
      'Symbolic branding increases perceived sophistication.',
      'Premium positioning depends more on execution than on the literal name.',
      'Flexible identities allow expansion into multiple sectors.',
    ],
    sources: 'Palantir official website · Company history · Founder interviews',
  },
  {
    num: '04',
    company: 'OpenAI',
    industry: 'Artificial Intelligence · Research · Foundation Models',
    origin:
      'The name combines "Open" and "AI", reflecting the founding mission of advancing artificial intelligence for broad benefit. The name has stayed fixed even as the company’s products evolved far beyond that original framing.',
    analysis:
      'OpenAI shows that mission-driven naming can scale into a globally recognized brand. Value accumulated through reputation, trust, and sustained innovation – not through literal description of any single product.',
    lessons: [
      'Mission-driven branding strengthens long-term positioning.',
      'Consistent execution builds stronger brands than descriptive naming.',
      'Flexible identities support expansion into new markets.',
      'Brand reputation becomes the primary source of value over time.',
    ],
    sources: 'OpenAI official website · Research publications · Founder interviews',
  },
  {
    num: '05',
    company: 'Skydio',
    industry: 'Autonomous Drones · AI · Computer Vision',
    origin:
      'A refined name combination "Sky" with a modern technological suffix – short, globally pronounceable, and not tied to a literal description of autonomous flight.',
    analysis:
      'Skydio demonstrates how a clean, abstract name can support a premium autonomous systems brand while remaining flexible for future products beyond drones.',
    lessons: [
      'Distinctive names gain meaning through execution.',
      'Flexible identities allow expansion across industries.',
      'Strong pronunciation supports global recognition.',
    ],
    sources: 'Skydio official website · Company overview · Industry publications',
  },
  {
    num: '06',
    company: 'Shield AI',
    industry: 'Defense Technology · AI · Military Aviation',
    origin:
      '"Shield" signals protection and defense; "AI" signals the technology focus. Unlike purely symbolic names, Shield AI deliberately balances clarity with strategic positioning.',
    analysis:
      'Shield AI shows that combining a meaningful word with a technical descriptor can communicate mission instantly while staying broad enough for autonomous aircraft, software, and future defense systems.',
    lessons: [
      'A brand can communicate purpose without becoming overly descriptive.',
      'Strong positioning combines technology leadership with a clear mission.',
      'Trust is a critical component of defense branding.',
      'Names supporting multiple product categories carry greater long-term value.',
    ],
    sources: 'Shield AI official website · Company history · Defense technology publications',
  },
  {
    num: '07',
    company: 'Helsing',
    industry: 'Defense Technology · AI · Decision Intelligence',
    origin:
      'Inspired by Abraham Van Helsing, chosen to symbolize vigilance and protection against modern threats through technology – a cultural reference rather than a product description.',
    analysis:
      'Helsing shows how a symbolic, culturally resonant name can anchor a premium defense-AI brand, while staying broad enough for future products across software, autonomous systems, and decision support.',
    lessons: [
      'Symbolic names create stronger emotional differentiation.',
      'Defense technology brands benefit from memorable identities.',
      'Brand value is built through execution and credibility.',
    ],
    sources: 'Helsing official website · Company history · Defense technology publications',
  },
]

function SwazrCaseStudies() {
  return (
    <div className="case-studies-page">
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
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Documentation
          </a>
        </div>
      </nav>

      <section className="section">
        <div className="section-inner">
          <div className="section-eyebrow">Strategic Case Studies</div>
          <h1 className="section-title">How Elite Brands Are Named</h1>
          <p className="section-sub">
            Real-world examples of premium technology and defense brands that
            chose strategic, non-descriptive names — and why that approach
            creates lasting value.
          </p>

          <div className="cases-list">
            {CASES.map((c) => (
              <div key={c.num} className="case-card">
                <div className="case-num">{c.num}</div>
                <h2 className="case-company">{c.company}</h2>
                <div className="case-industry">{c.industry}</div>
                <div className="case-origin">
                  <strong>Origin:</strong> {c.origin}
                </div>
                <div className="case-analysis">
                  <strong>Analysis:</strong> {c.analysis}
                </div>
                <ul className="case-lessons">
                  {c.lessons.map((lesson, i) => (
                    <li key={i}>{lesson}</li>
                  ))}
                </ul>
                <div className="case-sources">
                  <strong>Sources:</strong> {c.sources}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
