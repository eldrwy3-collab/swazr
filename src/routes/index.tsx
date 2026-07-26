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
       
