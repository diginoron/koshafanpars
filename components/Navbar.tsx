'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Languages, 
  Activity, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, direction } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.navHome },
    { href: '/services', label: t.navServices },
    { href: '/about', label: t.navAbout },
    { href: '/articles', label: t.navArticles },
    { href: '/contact', label: t.navContact },
    { href: '/sitemap', label: t.navSitemap },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.9)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Top micro-bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #091a32 0%, #0c2d58 100%)',
          color: '#e2e8f0',
          padding: '6px 0',
          fontSize: '0.82rem',
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#06d6a0',
                boxShadow: '0 0 8px #06d6a0',
              }}
            />
            <span>{t.heroBadge}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a
              href="tel:02142804"
              style={{
                color: '#38bdf8',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={14} />
              <span dir="ltr">021 - 42804</span>
            </a>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: '#cbd5e1' }}>service@kfp-dental.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-custom" style={{ padding: '14px 24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo & Brand */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 8px 16px rgba(0, 180, 216, 0.35)',
              }}
            >
              <Activity size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: '#0f172a',
                  letterSpacing: language === 'en' ? '0.5px' : '0px',
                  lineHeight: 1.2,
                }}
              >
                {t.brandTitle}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  fontWeight: 500,
                }}
              >
                {t.brandSubtitle}
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="d-none-mobile"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontSize: '0.94rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0077b6' : '#334155',
                    backgroundColor: isActive ? 'rgba(0, 180, 216, 0.1)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher & Hotline Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: '#1e293b',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
              title="تغییر زبان / Switch Language"
            >
              <Languages size={17} color="#0284c7" />
              <span>{t.langSwitchLabel}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  fontWeight: 700,
                }}
              >
                {language.toUpperCase()}
              </span>
            </button>

            {/* Direct hotline CTA button (desktop) */}
            <Link
              href="/contact"
              className="btn-primary-gradient d-none-mobile"
              style={{
                padding: '9px 18px',
                fontSize: '0.88rem',
              }}
            >
              <PhoneCall size={16} />
              <span>{t.quickContactBtn}</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="d-mobile-only"
              style={{
                background: 'none',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                color: '#1e293b',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              paddingTop: '16px',
              paddingBottom: '16px',
              borderTop: '1px solid #e2e8f0',
              marginTop: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0077b6' : '#1e293b',
                    backgroundColor: isActive ? 'rgba(0, 180, 216, 0.12)' : '#f8fafc',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-gradient"
              style={{
                marginTop: '10px',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <PhoneCall size={16} />
              <span>{t.quickContactBtn}</span>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.d-none-mobile) {
            display: none !important;
          }
          :global(.d-mobile-only) {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          :global(.d-mobile-only) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
