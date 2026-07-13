'use client';

import RevealWrapper from './RevealWrapper';

const formules = [
  {
    nom: 'Communication & Visibilité',
    desc: 'Pour développer votre présence en ligne et renforcer votre image de marque.',
    items: ['Gestion des réseaux sociaux', 'Création de contenus', 'Identité visuelle', 'Calendrier éditorial'],
    cta: 'Demander un devis',
    wa: 'Bonjour I.B Congo, je souhaite un devis pour la formule Communication & Visibilité.',
    featured: false,
  },
  {
    nom: 'Stratégie & Développement',
    desc: 'Pour structurer votre communication et accélérer votre croissance.',
    items: ['Audit stratégique', 'Stratégie digitale', 'Acquisition client', 'Développement commercial'],
    cta: 'Échanger avec un conseiller',
    wa: 'Bonjour I.B Congo, je souhaite échanger avec un conseiller concernant la formule Stratégie & Développement.',
    featured: true,
  },
  {
    nom: 'Sous-traitance en marque blanche',
    desc: 'Développez votre activité sans recruter. Nous réalisons vos prestations digitales en toute confidentialité.',
    items: ['Création de sites web', 'Community Management', 'Design graphique', 'Rédaction de contenus', 'Campagnes Meta Ads', 'Livraison sous votre identité'],
    cta: 'Demander un partenariat',
    wa: 'Bonjour I.B Congo, je souhaite discuter d\'un partenariat de sous-traitance en marque blanche.',
    featured: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="section-pad">
      <div className="wrap">

        <RevealWrapper>
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">Nos formules</div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              letterSpacing: '-0.8px', lineHeight: 1.08, marginBottom: '16px'
            }}>
              Des solutions adaptées<br />à vos besoins.
            </h2>
            <p style={{ fontSize: '15px', color: '#666A88', lineHeight: 1.75, maxWidth: '520px', fontWeight: 300 }}>
              Choisissez les services qui correspondent à vos objectifs. Nous construisons une offre sur mesure selon vos priorités et votre budget.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="grid-3">
            {formules.map(({ nom, desc, items, cta, wa, featured }) => (
              <div key={nom} style={{
                background: featured ? 'rgba(26,31,110,0.22)' : '#0C0C1C',
                border: `1px solid ${featured ? 'rgba(62,198,240,0.28)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '14px',
                padding: '36px 28px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>

                {featured && (
                  <div style={{
                    position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)',
                    background: '#3EC6F0', color: '#080810',
                    fontSize: '10px', fontWeight: 700, padding: '3px 14px',
                    borderRadius: '100px', letterSpacing: '0.08em', whiteSpace: 'nowrap'
                  }}>
                    LE PLUS DEMANDÉ
                  </div>
                )}

                {/* Header */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-syne)', fontSize: '17px', fontWeight: 800,
                    letterSpacing: '-0.3px', lineHeight: 1.2, color: '#DDE0F0',
                    marginBottom: '10px'
                  }}>
                    {nom}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666A88', lineHeight: 1.65 }}>
                    {desc}
                  </p>
                </div>

                {/* Items */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  {items.map(item => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      fontSize: '13px', color: '#8B8FAA',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgba(255,255,255,0.04)'
                    }}>
                      <span style={{
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: 'rgba(62,198,240,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontSize: '10px', color: '#3EC6F0'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                
                <a
                  href={`https://wa.me/242068305918?text=${encodeURIComponent(wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '13px 20px', borderRadius: '8px',
                    fontSize: '13px', fontWeight: 600,
                    textDecoration: 'none', transition: 'opacity 0.2s',
                    background: featured ? '#3EC6F0' : 'transparent',
                    color: featured ? '#080810' : '#3EC6F0',
                    border: featured ? 'none' : '1px solid rgba(62,198,240,0.35)',
                    marginTop: '4px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  {cta} →
                </a>

              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}