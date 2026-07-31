import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div style={{ background: '#070707', color: '#f1f1f1', fontFamily: 'monospace', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. HERO SECTION */}
      <header style={{ padding: '60px 20px 40px', textAlign: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#888', marginBottom: '15px' }}>
            VERIFIED • SECURE • PIONEERING
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '4px', color: '#fff', margin: '0 0 20px 0' }}>
            SWAZR
          </h1>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#bbb', maxWidth: '600px', margin: '0 auto 30px' }}>
            Outsmart the 2026 Competitive Landscape. Premium brand architecture & strategic linguistic positioning for elite global enterprises.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: '#ccff00', color: '#000', padding: '12px 25px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}>
              SECURE YOUR DOMAIN
            </a>
            <a href="#about" style={{ background: 'transparent', color: '#fff', border: '1px solid #333', padding: '12px 25px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}>
              EXPLORE ARCHITECTURE
            </a>
          </div>
        </div>
      </header>

      {/* 2. CINEMATIC BRAND VIDEO SECTION */}
      <section style={{ background: '#0b0b0b', padding: '50px 20px', textAlign: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '900px', margin: 'auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#ccff00', marginBottom: '15px', textTransform: 'uppercase' }}>
            // CINEMATIC OVERVIEW
          </div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls 
            style={{ 
              width: '100%', 
              display: 'block', 
              borderRadius: '8px', 
              boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
              border: '1px solid #222'
            }}
          >
            <source src="/swazr.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section style={{ padding: '30px 20px', background: '#050505', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '900px', margin: 'auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ccff00' }}>6</div>
            <div style={{ fontSize: '11px', color: '#777', marginTop: '5px' }}>GLOBAL HUBS</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ccff00' }}>.COM</div>
            <div style={{ fontSize: '11px', color: '#777', marginTop: '5px' }}>EXCLUSIVITY</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ccff00' }}>0</div>
            <div style={{ fontSize: '11px', color: '#777', marginTop: '5px' }}>CONFLICTS</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ccff00' }}>USPTO</div>
            <div style={{ fontSize: '11px', color: '#777', marginTop: '5px' }}>VERIFIED</div>
          </div>
        </div>
      </section>

      {/* 4. MAIN CONTENT / FOUNDATION SECTIONS */}
      <main id="about" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#ccff00', letterSpacing: '2px', marginBottom: '10px' }}>STRATEGIC FRAMEWORK</div>
          <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: '20px' }}>The Strategic Vowel Elision Rule</h2>
          <p style={{ color: '#aaa', lineHeight: '1.7', fontSize: '14px' }}>
            SWAZR utilizes an advanced proprietary methodology of linguistic engineering designed to bypass cognitive fatigue, establish absolute trademark protection, and maximize instant recall in high-stakes markets.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#ccff00', letterSpacing: '2px', marginBottom: '10px' }}>GENESIS</div>
          <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: '20px' }}>Forged From Three Ancient Civilizations</h2>
          <p style={{ color: '#aaa', lineHeight: '1.7', fontSize: '14px' }}>
            Built on robust structural foundations, SWAZR merges historical nomenclature durability with modern digital-first architecture to ensure complete market dominance.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#ccff00', letterSpacing: '2px', marginBottom: '10px' }}>VERIFICATION</div>
          <h2 style={{ fontSize: '28px', color: '#fff', marginBottom: '20px' }}>USPTO Verified. Zero Conflicts.</h2>
          <p style={{ color: '#aaa', lineHeight: '1.7', fontSize: '14px' }}>
            Every asset undergoes rigorous legal screening to guarantee immediate registrability and seamless global deployment without liability.
          </p>
        </div>

      </main>

      {/* 5. FOOTER */}
      <footer id="contact" style={{ background: '#050505', borderTop: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '10px' }}>Not all brands are born. Some are engineered to endure.</h3>
          <p style={{ fontSize: '13px', color: '#777', marginBottom: '25px' }}>Secure your proprietary position in the global economy today.</p>
          <a
