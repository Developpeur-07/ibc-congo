import RevealWrapper from './RevealWrapper';

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '64px' }}>

      {/* Géométrie de fond */}
      <div style={{
        position: 'absolute', right: '-120px', top: '-60px',
        width: '520px', height: '520px', opacity: 0.035, borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #3EC6F0, #1A1F6E, #F07A20, #3EC6F0)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', left: '-80px', bottom: '-100px',
        width: '300px', height: '300px', opacity: 0.025,
        borderRadius: '50%', border: '1px solid #3EC6F0',
        pointerEvents: 'none'
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        <RevealWrapper>
          {/* Localisation */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '11px', color: '#666A88 ', letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: '32px', flexWrap: 'wrap'
          }}>
            <span>Brazzaville</span>
            <span style={{ color: '#4A4D66' }}>/</span>
            <span>Zone CEMAC</span>
            <span style={{ color: '#4A4D66' }}>/</span>
            <span>Cabinet digital</span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(32px, 7vw, 68px)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px',
            marginBottom: '24px', maxWidth: '720px'
          }}>
            Vos clients vous <span style={{ color: '#3EC6F0' }}>jugent</span><br />
            avant même de vous<br />
            <span style={{ color: '#F07A20' }}>parler.</span>
          </h1>

          {/* Sous-titre */}
          <p style={{
            fontSize: '15px', color: '#666A88', lineHeight: 1.75,
            maxWidth: '480px', marginBottom: '40px', fontWeight: 300
          }}>
           I.B Congo est un cabinet de structuration et de sous-traitance digitale qui accompagne les entreprises dans leur développement. De la stratégie à l’exécution, nous intervenons en communication, création de sites web, publicité digitale, mise à disposition de compétences et sous-traitance en marque blanche pour accélérer votre croissance.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href ="#contact" className="btn-primary">
              Discutons de votre projet
            </a>
            
          </div>
        </RevealWrapper>

        {/* Stats */}
        <RevealWrapper delay={150}>
          <div style={{
            display: 'flex', gap: '0',
            marginTop: '64px', paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap'
          }}>
            {[
              { n: '50+', l: 'PME accompagnées' },
              { n: '5', l: "Domaines d'expertise" },
              { n: '6', l: 'Pays zone CEMAC' },
            ].map(({ n, l }, i) => (
              <div key={l} style={{
                flex: '1 1 120px',
                paddingRight: '32px',
                paddingTop: i > 0 ? '0' : '0',
                marginTop: '24px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px, 5vw, 36px)',
                  fontWeight: 800, letterSpacing: '-1px', color: '#3EC6F0'
                }}>{n}</div>
                <div style={{ fontSize: '12px', color: '#666A88', marginTop: '5px', letterSpacing: '0.04em' }}>{l}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}