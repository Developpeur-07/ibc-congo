import RevealWrapper from './RevealWrapper';

const temoignages = [
  {
    texte: "« En trois semaines, nos prospects nous prenaient différemment. L'image compte plus qu'on ne le croit. »",
    initiales: 'AM',
    nom: 'Ange Mbemba',
    role: 'Directeur, Mbemba & Associés',
  },
  {
    texte: '« Les campagnes Meta Ads ont généré trois fois plus de contacts qualifiés. Et le budget est resté maîtrisé. »',
    initiales: 'SN',
    nom: 'Sarah Nkounkou',
    role: 'Fondatrice, Boutique Élégance',
  },
  {
    texte: '« Six mois de sous-traitance, zéro raté. On leur délègue toute notre production visuelle sans avoir à vérifier. »',
    initiales: 'PK',
    nom: 'Patrick Koubemba',
    role: 'CEO, Agence Pixel Congo',
  },
];

export default function Temoignages() {
  return (
    <section id="realisations" className="section-pad">
      <div className="wrap">

        <RevealWrapper>
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">Ils en parlent</div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              letterSpacing: '-0.8px', lineHeight: 1.08
            }}>
              Pas des promesses.<br />Des résultats.
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid-3">
          {temoignages.map(({ texte, initiales, nom, role }, i) => (
            <RevealWrapper key={nom} delay={i * 100}>
              <div style={{
                background: '#0C0C1C',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px', padding: '24px',
                height: '100%'
              }}>
                <div style={{ color: '#F07A20', fontSize: '12px', letterSpacing: '2px', marginBottom: '14px' }}>
                  ★★★★★
                </div>
                <p style={{
                  fontSize: '13px', lineHeight: 1.72, color: '#666A88',
                  marginBottom: '22px', fontStyle: 'italic'
                }}>
                  {texte}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1A1F6E, #3EC6F0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 700,
                    color: '#fff', flexShrink: 0
                  }}>
                    {initiales}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{nom}</div>
                    <div style={{ fontSize: '12px', color: '#666A88' }}>{role}</div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}