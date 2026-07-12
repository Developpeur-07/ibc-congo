"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Formation", href: "#formation" },
  { label: "À propos", href: "#à-propos" },
  { label: "Réalisations", href: "#réalisations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          max-width: 1060px;
          margin: 0 auto;
        }

        .nav-logo {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.3px;
          color: #DDE0F0;
        }

        .nav-logo span {
          color: #3EC6F0;
        }

        .nav-desktop {
          display: none;
        }

        .nav-burger-btn {
          display: flex;
        }

        @media (min-width: 720px) {
          .nav-desktop {
            display: flex;
            align-items: center;
            gap: 24px;
          }

          .nav-burger-btn {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .nav-desktop {
            gap: 36px;
          }
        }

        .nav-link {
          font-size: 12px;
          color: #666A88;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color .2s;
        }

        @media (min-width: 720px) {
          .nav-link {
            font-size: 13px;
          }
        }

        .nav-link:hover {
          color: #DDE0F0;
        }

        .nav-cta {
          display: none;
        }

        @media (min-width: 720px) {
          .nav-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            padding: 9px 20px;
            background: #3EC6F0;
            color: #080810;
            font-weight: 600;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-family: "DM Sans", sans-serif;
            white-space: nowrap;
          }
        }

        .nav-burger-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #DDE0F0;
          align-items: center;
        }

        .nav-mobile-menu {
          display: none;
          background: #0C0C1C;
          border-top: 1px solid rgba(255,255,255,.05);
          padding: 20px;
          flex-direction: column;
          gap: 4px;
        }

        .nav-mobile-menu.is-open {
          display: flex;
        }

        .nav-mobile-link {
          font-size: 15px;
          color: #DDE0F0;
          text-decoration: none;
          padding: 12px 8px;
          border-bottom: 1px solid rgba(255,255,255,.04);
          display: block;
        }

        .nav-mobile-link:hover {
          color: #3EC6F0;
        }

        .nav-mobile-cta {
          margin-top: 16px;
          width: 100%;
          background: #3EC6F0;
          color: #080810;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-family: "DM Sans", sans-serif;
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 99,
          background: "rgba(8,8,16,.92)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="nav-wrap">
          {/* Logo */}
          <div className="nav-logo">
            <Image
              src="/logo.jpg"
              alt="Impact Business Congo"
              width={120}
              height={38}
              priority
              style={{
                width: "auto",
                height: "38px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Navigation Desktop */}
          <div className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <button className="nav-cta">Demande de devis</button>

          {/* Burger */}
          <button
            className="nav-burger-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`nav-mobile-menu ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Demande de devis
          </button>
        </div>
      </nav>
    </>
  );
}