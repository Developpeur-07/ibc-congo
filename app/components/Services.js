'use client';

import RevealWrapper from './RevealWrapper';
import { Palette, Smartphone, Globe, BarChart2, Megaphone, Handshake } from 'lucide-react';

const services = [
  { ico: Palette, titre: 'Identité de marque', desc: 'Logo, charte graphique, supports. Une identité qui inspire confiance avant la première réunion.', prix: 'Dès 85 000 FCFA' },
  { ico: Smartphone, titre: 'Contenu stratégique', desc: 'Visuels, captions, vidéos courtes. Publiés au bon moment, pour le bon public.', prix: 'Dès 37 500 FCFA / mois' },
  { ico: Globe, titre: 'Création de site web', desc: 'Vitrine, e-commerce, landing page. Conçu pour convertir, pas juste pour être beau.', prix: 'Devis sur mesure' },
  { ico: BarChart2, titre: 'Présence digitale', desc: "Audit, stratégie, plan d'action. On cartographie votre situation avant de recommander.", prix: 'Dès 29 500 FCFA' },
  { ico: Megaphone, titre: 'Campagnes Meta Ads', desc: 'Facebook et Instagram. Ciblage précis, budget maîtrisé, résultats mesurables.', prix: 'Dès 45 000 FCFA / mois' },
  { ico: Handshake, titre: 'Sous-traitance digitale', desc: 'Production en marque blanche pour agences partenaires. Délais tenus, qualité garantie.', prix: 'Dès 3 000 FCFA / contenu' },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: '#0C0C1C' }}>
      <div className="wrap">

        <RevealWrapper>
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">Ce qu&apos;on fait</div>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              letterSpacing: '-0.8px', lineHeight: 1.08, marginBottom: '14px'
            }}>
              Cinq métiers.<br />Un seul interlocuteur.
            </h2>
            <p style={{ fontSize: '14px', color: '#666A88', lineHeight: 1.7, maxWidth: '460px', fontWeight: 300 }}>
              Identité, contenu, site web, publicité, sous-traitance. Chaque service est pensé pour le marché congolais et CEMAC.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="grid-3" style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', gap: '1px', background: 'rgba(255,255,255,0.04)' }}>
            {services.map(({ ico: Icon, titre, desc, prix }) => (
              <div key={titre}
                style={{ background: '#0C0C1C', padding: '28px 24px', transition: 'background 0.25s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = '#111130'}
                onMouseLeave={e => e.currentTarget.style.background = '#0C0C1C'}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  background: 'rgba(62,198,240,0.08)', border: '1px solid rgba(62,198,240,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px', flexShrink: 0
                }}>
                  <Icon size={20} color="#3EC6F0" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.2px' }}>
                  {titre}
                </h3>
                <p style={{ fontSize: '13px', color: '#666A88', lineHeight: 1.65 }}>{desc}</p>
                <div style={{ fontSize: '12px', color: '#3EC6F0', marginTop: '16px', letterSpacing: '0.02em' }}>{prix}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}