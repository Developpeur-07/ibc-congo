'use client';

import { useState } from 'react';
import RevealWrapper from './RevealWrapper';

const infos = [
  { label: 'WhatsApp', valeur: '+242 06 830 5918', lien: 'https://wa.me/242068305918' },
  { label: 'Email', valeur: 'loubathjonathan@gmail.com', lien: 'mailto:loubathjonathan@gmail.com' },
  { label: 'Localisation', valeur: 'Brazzaville, République du Congo', lien: null },
  { label: 'Zone de couverture', valeur: 'CEMAC — Congo, Cameroun, Gabon, RCA, Tchad, Guinée Équatoriale', lien: null },
];

export default function Contact() {
  const [form, setForm] = useState({ nom: '', tel: '', email: '', service: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = () => {
    const { nom, tel, email, service, message } = form;
    if (!nom || !tel || !message) {
      alert('Merci de remplir au minimum : nom, téléphone et message.');
      return;
    }
    const texte = `Bonjour I.B Congo 👋\n\n*Nom :* ${nom}\n*Téléphone :* ${tel}\n*Email :* ${email || 'Non renseigné'}\n*Service souhaité :* ${service || 'Non précisé'}\n\n*Message :*\n${message}`;
    const url = `https://wa.me/242068305918?text=${encodeURIComponent(texte)}`;
    window.open(url, '_blank');
  };

  const inputStyle = {
    width: '100%', background: '#0C0C1C',
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px',
    padding: '11px 14px', fontSize: '13px', color: '#DDE0F0',
    outline: 'none', fontFamily: 'inherit'
  };

  const labelStyle = {
    display: 'block', fontSize: '12px', color: '#666A88',
    marginBottom: '6px', letterSpacing: '0.04em'
  };

  return (
    <>
      {/* CTA */}
      <section className="section-pad" style={{ background: '#0C0C1C', textAlign: 'center' }}>
        <div className="wrap">
          <RevealWrapper>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="section-label">Prochaine étape</div>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 46px)', fontWeight: 800,
                letterSpacing: '-0.8px', lineHeight: 1.08, marginBottom: '18px'
              }}>
                30 minutes pour<br />cadrer votre projet.
              </h2>
              <p style={{ fontSize: '14px', color: '#666A88', lineHeight: 1.7, marginBottom: '36px', fontWeight: 300 }}>
                Pas de contrat long terme dès le premier appel. On écoute, on analyse, on vous dit franchement ce qui peut marcher pour votre activité.
              </p>
              
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Formulaire */}
      <section id="contact" className="section-pad">
        <div className="wrap">

          <RevealWrapper>
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label">Contact</div>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
                letterSpacing: '-0.8px', lineHeight: 1.08, marginBottom: '14px'
              }}>
                Parlons de votre projet.
              </h2>
              <p style={{ fontSize: '14px', color: '#666A88', lineHeight: 1.7, maxWidth: '460px', fontWeight: 300 }}>
                Remplissez le formulaire — on vous répond via WhatsApp sous 24h.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid-2">

            {/* Formulaire */}
            <RevealWrapper delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { id: 'nom', label: 'Nom complet *', type: 'text', placeholder: 'Jean Moukala' },
                  { id: 'tel', label: 'Téléphone / WhatsApp *', type: 'tel', placeholder: '+242 06 000 0000' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'jean@entreprise.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={labelStyle}>{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder}
                      value={form[id]} onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" style={labelStyle}>Service souhaité</label>
                  <select id="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer', color: form.service ? '#DDE0F0' : '#666A88' }}>
                    <option value="">Choisir un service</option>
                    <option>Identité de marque</option>
                    <option>Contenu stratégique</option>
                    <option>Création de site web</option>
                    <option>Présence digitale</option>
                    <option>Campagnes Meta Ads</option>
                    <option>Sous-traitance digitale</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea
                    id="message" rows={4}
                    placeholder="Décrivez votre projet en quelques lignes..."
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}>
                  Envoyer via WhatsApp
                </button>

                <p style={{ fontSize: '12px', color: '#4A4D66', textAlign: 'center' }}>
                  Le formulaire s&apos;ouvre directement dans WhatsApp
                </p>
              </div>
            </RevealWrapper>

            {/* Infos contact */}
            <RevealWrapper delay={200}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {infos.map(({ label, valeur, lien }) => (
                  <div key={label} style={{
                    padding: '18px 20px',
                    background: '#0C0C1C',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '10px'
                  }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#3EC6F0', marginBottom: '6px' }}>
                      {label}
                    </div>
                    {lien ? (
                      <a href={lien} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '14px', color: '#DDE0F0', textDecoration: 'none' }}>
                        {valeur}
                      </a>
                    ) : (
                      <div style={{ fontSize: '14px', color: '#DDE0F0', lineHeight: 1.5 }}>{valeur}</div>
                    )}
                  </div>
                ))}
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>
    </>
  );
}