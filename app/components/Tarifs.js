'use client';

import RevealWrapper from './RevealWrapper';

const plans = [
  {
    nom: 'Essentiel',
    prix: '37 500',
    desc: 'Pour publier avec régularité sans se disperser.',
    items: ['8 visuels par mois', 'Captions rédigées', 'Livraison continue', '1 révision incluse'],
    featured: false,
  },
  {
    nom: 'Standard',
    prix: '75 000',
    desc: "Volume et diversité pour une présence qui s'impose.",
    items: ['12 visuels par mois', 'Captions rédigées', '1 vidéo courte incluse', '2 révisions incluses'],
    featured: true,
  },
  {
    nom: 'Premium',
    prix: '112 500',
    desc: 'Stratégie complète pour dominer votre marché local.',
    items: ['16 visuels par mois', '2 vidéos courtes', 'Stratégie éditoriale', 'Révisions illimitées'],
    featured: false,
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="section-pad">
      <div className="wrap">

        <RevealWrapper>
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">Production de contenu</div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              letterSpacing: '-0.8px', lineHeight: 1.08, marginBottom: '14px'
            }}>
              Des formules claires.<br />Sans mauvaise surprise.
            </h2>
            <p style={{ fontSize: '14px', color: '#666A88', lineHeight: 1.7, maxWidth: '460px', fontWeight: 300 }}>
              Choisissez selon votre rythme. Vous montez en formule quand vous êtes prêt.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="grid-3">
            {plans.map(({ nom, prix, desc, items, featured }) => (
              <div key={nom} style={{
                background: featured ? 'rgba(26,31,110,0.22)' : '#0C0C1C',
                border: `1px solid ${featured ? 'rgba(62,198,240,0.28)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '12px', padding: '28px 24px',
                position: 'relative',
              }}>
                {featured && (
                  <div style={{
                    position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)',
                    background: '#3EC6F0', color: '#080810',
                    fontSize: '10px', fontWeight: 700, padding: '3px 12px',
                    borderRadius: '100px', letterSpacing: '0.08em', whiteSpace: 'nowrap'
                  }}>
                    LE PLUS CHOISI
                  </div>
                )}
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#666A88', marginBottom: '10px' }}>
                  {nom}
                </div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-1px', color: '#DDE0F0' }}>
                  {prix} <span style={{ fontSize: '13px', fontWeight: 400, color: '#666A88' }}>FCFA/mois</span>
                </div>
                <div style={{ fontSize: '13px', color: '#666A88', margin: '10px 0 20px', lineHeight: 1.6 }}>
                  {desc}
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {items.map(item => (
                    <li key={item} style={{
                      fontSize: '13px', color: '#666A88',
                      padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                      display: 'flex', alignItems: 'center', gap: '8px'
                    }}>
                      <span style={{ color: '#3EC6F0', fontSize: '11px', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}