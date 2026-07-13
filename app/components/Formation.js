import RevealWrapper from "./RevealWrapper";

const modules = [
  "Identité de marque et positionnement",
  "Stratégie de contenu",
  "Meta Ads — bases et optimisation",
  "Pilotage de votre présence en ligne",
  "Mises à jour incluses",
];

export default function Formation() {
  return (
    <section
      id="formation"
      className="section-pad"
      style={{ background: "#0C0C1C" }}
    >
      <div className="wrap">
        <RevealWrapper>
          <div style={{ marginBottom: "48px" }}>
            <div className="section-label">Formation</div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.8px",
                lineHeight: 1.08,
              }}
            >
              Apprenez à piloter
              <br />
              votre digital vous-même.
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div
            className="grid-2"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "32px 24px",
              background: "rgba(26,31,110,0.12)",
            }}
          >
            {/* Gauche */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #1A1F6E, #3EC6F0)",
                  borderRadius: "100px",
                  color: "#fff",
                  fontSize: "11px",
                  color: "#fff",
                  padding: "4px 12px",
                  marginBottom: "18px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  marginBottom: "18px",
                }}
              >
                Auto-guidée · En ligne
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  fontWeight: 800,
                  letterSpacing: "-0.4px",
                  lineHeight: 1.2,
                  marginBottom: "14px",
                }}
              >
                Formation digitale I.B Congo
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666A88",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontWeight: 300,
                }}
              >
                Renforcez votre entreprise avec les talents dont vous avez
                besoin, sans les contraintes d’un recrutement. Nous mettons
                rapidement à votre disposition des profils qualifiés pour
                accompagner vos projets digitaux, de façon ponctuelle ou
                continue. Les compétences disponibles : Community Manager Social
                Media Manager Graphiste Rédacteur web Monteur vidéo Traffic
                Manager Assistant virtuel
              </p>
              <button className="btn-primary" style={{ width: "100%" }}>
                Demander un profil
              </button>
            </div>

            {/* Droite */}
            <div
              style={{
                background: "#080810",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(32px, 5vw, 40px)",
                  fontWeight: 400,
                  color: "#3EC6F0",
                  letterSpacing: "-1px",
                }}
              >
                Compétences digitales 
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#666A88",
                  marginTop: "2px",
                  marginBottom: "20px",
                }}
              >
                à votre disposition.
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "16px",
                }}
              >
                {modules.map((m) => (
                  <div
                    key={m}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      padding: "8px 0",
                      fontSize: "13px",
                      color: "#666A88",
                      borderBottom: "1px solid rgba(255,255,255,0.03)",
                    }}
                  >
                    <span
                      style={{
                        color: "#3EC6F0",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
