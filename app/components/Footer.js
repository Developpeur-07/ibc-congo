'use client';

import { MessageCircle } from 'lucide-react';

const liens = {
  Services: ['Identité de marque', 'Contenu stratégique', 'Sites web', 'Campagnes Ads', 'Sous-traitance'],
  Contact: ['+242 06 830 5918', 'WhatsApp Business', 'Brazzaville, Congo', 'Zone CEMAC'],
};

export default function Footer() {
  return (
    <>
      <footer style={{
        background: '#080810',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '48px 0 28px'
      }}>
        <div className="wrap">

          {/* Grid footer */}
          <div className="footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px',
            marginBottom: '40px'
          }}>

            {/* Brand */}
            <div>
              <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '17px', color: '#DDE0F0' }}>
                I.B <span style={{ color: '#3EC6F0' }}>Congo</span>
              </div>
              <p style={{ fontSize: '13px', color: '#666A88', lineHeight: 1.7, marginTop: '10px', maxWidth: '280px' }}>
                Cabinet de Structuration & Sous-Traitance Digitale. Brazzaville, République du Congo.
              </p>
            </div>

            {/* Colonnes liens */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {Object.entries(liens).map(([titre, items]) => (
                <div key={titre}>
                  <h4 style={{
                    fontSize: '11px', textTransform: 'uppercase',
                    letterSpacing: '0.14em', color: '#4A4D66', marginBottom: '14px'
                  }}>
                    {titre}
                  </h4>
                  <ul style={{ listStyle: 'none' }}>
                    {items.map(item => (
                      <li key={item} style={{ fontSize: '13px', color: '#666A88', padding: '4px 0' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom" style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '12px',
            color: '#4A4D66'
          }}>
            <span>© 2026 Impact Business Congo. Tous droits réservés.</span>
            <span>Mentions légales · Confidentialité</span>
          </div>

        </div>

        <style>{`
          @media (min-width: 768px) {
            .footer-grid {
              grid-template-columns: 2fr 1fr 1fr !important;
            }
            .footer-bottom {
              flex-direction: row !important;
              justify-content: space-between !important;
            }
          }
        `}</style>
      </footer>

      {/* WhatsApp flottant */}
      <a
        href="https://wa.me/242068305918"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 200,
          width: '52px', height: '52px', background: '#25D366', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
          transition: 'transform 0.2s', textDecoration: 'none'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={24} color="#fff" strokeWidth={1.5} />
      </a>
    </>
  );
}