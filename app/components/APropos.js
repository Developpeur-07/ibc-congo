import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

export default function APropos() {
  return (
    <section id="à-propos" className="section-pad">
      <div className="wrap">

        <RevealWrapper>
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">À propos</div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              letterSpacing: '-0.8px', lineHeight: 1.08
            }}>
              Derrière I.B Congo,<br />une vision claire.
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="grid-2" style={{ alignItems: 'center' }}>

            {/* Photo fondateur */}
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="/fondateur.png"
                alt="Medhy Noble Jonathan Loubath — Fondateur & PDG, Impact Business Congo"
                width={480}
                height={560}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                priority
              />
              {/* Overlay info */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(8,8,16,0.92) 0%, transparent 100%)',
                padding: '32px 24px 24px'
              }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '16px', fontWeight: 700, color: '#DDE0F0' }}>
                  Medhy Noble Jonathan Loubath
                </div>
                <div style={{ fontSize: '13px', color: '#3EC6F0', marginTop: '4px' }}>
                  Fondateur & PDG — Impact Business Congo
                </div>
              </div>
            </div>

            {/* Texte */}
            <div>
              <p style={{ fontSize: '15px', color: '#666A88', lineHeight: 1.8, marginBottom: '24px', fontWeight: 300 }}>
                I.B Congo est né d&apos;un constat simple : trop de PME congolaises ont du potentiel, mais manquent de structure digitale pour le faire rayonner.
              </p>
              <p style={{ fontSize: '15px', color: '#666A88', lineHeight: 1.8, marginBottom: '24px', fontWeight: 300 }}>
                Depuis Brazzaville, nous accompagnons les entrepreneurs et dirigeants de la zone CEMAC avec des méthodes concrètes, adaptées à la réalité du marché local — pas des modèles importés qui ne tiennent pas.
              </p>
              <p style={{ fontSize: '15px', color: '#666A88', lineHeight: 1.8, fontWeight: 300 }}>
                Notre mission : donner à votre entreprise la structure, la cohérence et la visibilité qu&apos;elle mérite.
              </p>

              <div style={{
                marginTop: '36px', padding: '20px 24px',
                borderLeft: '2px solid #3EC6F0',
                background: 'rgba(62,198,240,0.04)'
              }}>
                <p style={{ fontSize: '14px', color: '#DDE0F0', lineHeight: 1.7, fontStyle: 'italic' }}>
                  &ldquo;Votre partenaire en structuration et developpement digital..&rdquo;
                </p>
                <div style={{ fontSize: '12px', color: '#3EC6F0', marginTop: '8px' }}>
                  — Medhy Noble Jonathan Loubath
                </div>
              </div>
            </div>

          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}