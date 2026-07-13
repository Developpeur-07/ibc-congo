// Services.tsx
"use client";

import RevealWrapper from "./RevealWrapper";
import {
  Palette,
  Globe,
  FileText,
  Monitor,
  Megaphone,
  Handshake,
  Users,
} from "lucide-react";

const services = [
  {
    ico: Palette,
    titre: "Structuration de l’identité de marque",
    desc: "Construisez une image de marque cohérente et professionnelle grâce à une identité visuelle qui inspire confiance et valorise votre entreprise.",
  },
  {
    ico: Globe,
    titre: "Architecture de la présence en ligne",
    desc: "Développez une présence digitale solide avec une stratégie adaptée à vos objectifs, votre cible et vos canaux de communication.",
  },
  {
    ico: FileText,
    titre: "Production de contenu stratégique",
    desc: "Créez des contenus qui renforcent votre visibilité, engagent votre audience et soutiennent vos objectifs commerciaux.",
  },
  {
    ico: Monitor,
    titre: "Création de sites web",
    desc: "Concevez un site web moderne, performant et optimisé pour présenter votre activité et convertir vos visiteurs en clients.",
  },
  {
    ico: Megaphone,
    titre: "Gestion de campagnes publicitaires",
    desc: "Augmentez votre visibilité et générez des prospects grâce à des campagnes publicitaires performantes sur Meta et d’autres plateformes.",
  },
  {
    ico: Handshake,
    titre: "Sous-traitance en marque blanche",
    desc: "Confiez-nous la réalisation de vos prestations digitales. Nous intervenons sous votre marque, en toute confidentialité.",
  },
  {
    ico: Users,
    titre: "Mise à disposition de compétences digitales",
    desc: "Renforcez vos équipes avec des profils qualifiés : Community Manager, Graphiste, Social Media Manager, Monteur vidéo ou Rédacteur.",
  },
];

const WA_URL =
  "https://wa.me/242068305918?text=Bonjour%20I.B%20Congo%2C%20je%20souhaite%20un%20devis%20pour%20";

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "#0C0C1C" }}
    >
      <div className="wrap">
        <RevealWrapper>
          <div style={{ marginBottom: 64 }}>
            <div className="section-label">Ce qu&apos;on fait</div>
            <h2
              style={{
                fontSize: "clamp(24px,4vw,42px)",
                fontWeight: 800,
                letterSpacing: "-0.8px",
                lineHeight: 1.08,
                marginBottom: 16,
              }}
            >
              Sept expertises.
              <br />
              Un seul partenaire.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#666A88",
                lineHeight: 1.75,
                maxWidth: 520,
              }}
            >
              Nous accompagnons les entreprises à chaque étape de leur
              développement grâce à des solutions stratégiques et
              opérationnelles.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div
            className="svc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 5,
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.05)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {services.map(({ ico: Icon, titre, desc }, i) => (
              <div
                key={titre}
                style={{
                  background: "#0C0C1C",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  transition: "background .25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#111130")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#0C0C1C")
                }
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(62,198,240,.08)",
                    border: "1px solid rgba(62,198,240,.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color="#3EC6F0" strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#DDE0F0",
                    lineHeight: 1.3,
                  }}
                >
                  {titre}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "#666A88",
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  {desc}
                </p>

                <a
                  href={`${WA_URL}${encodeURIComponent(titre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 8,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(255,255,255,.05)",
                    color: "#3EC6F0",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 500,
                    width: "fit-content",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F07A20")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#3EC6F0")
                  }
                >
                  Demander un devis →
                </a>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <style> 
          {`
            @media (max-width: 1023px) {
              #services .svc-grid { grid-template-columns: 1fr !important; }
            }`} 
          </style>
      </div>
    </section>
  );
}
