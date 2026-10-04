'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  Send,
  FileText
} from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      style={{
        backgroundColor: '#071224',
        color: '#94a3b8',
        borderTop: '1px solid #1e293b',
        paddingTop: '60px',
        paddingBottom: '30px',
        marginTop: '80px',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Col 1: About & Trust */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Activity size={24} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.2rem' }}>
                  {t.brandTitle}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#38bdf8' }}>
                  {t.brandSubtitle}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#94a3b8', marginBottom: '20px' }}>
              {t.footerAboutText}
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(6, 214, 160, 0.1)',
                border: '1px solid rgba(6, 214, 160, 0.3)',
                color: '#34d399',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              <Award size={16} />
              <span>ISO 13485:2016 & CE Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              {t.footerQuickLinks}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem' }}>
                  {t.navHome}
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem' }}>
                  {t.navServices}
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem' }}>
                  {t.navAbout}
                </Link>
              </li>
              <li>
                <Link href="/articles" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem' }}>
                  {t.navArticles}
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem' }}>
                  {t.navContact}
                </Link>
              </li>
              <li>
                <Link href="/sitemap" style={{ color: '#38bdf8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '0.92rem', fontWeight: 600 }}>
                  {t.navSitemap}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products Categories */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '20px',
              }}
            >
              {t.footerProductsCat}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/services?cat=furnaces" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.92rem' }}>
                  {language === 'fa' ? 'کوره‌های پرسلن AT300 و AT100' : 'AT300 & AT100 Porcelain Furnaces'}
                </Link>
              </li>
              <li>
                <Link href="/services?cat=implants" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.92rem' }}>
                  {language === 'fa' ? 'سیستم ایمپلنت دندانی اویتا (Avita)' : 'Avita Dental Implant System'}
                </Link>
              </li>
              <li>
                <Link href="/services?cat=furnaces" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.92rem' }}>
                  {language === 'fa' ? 'کوره زینترینگ زیرکونیا ۱۶۵۰' : '1650L Zirconia Sintering Furnace'}
                </Link>
              </li>
              <li>
                <Link href="/services?cat=lab-equipment" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.92rem' }}>
                  {language === 'fa' ? 'میزهای تخصصی لابراتواری و ساکشن' : 'Dental Lab Workstations'}
                </Link>
              </li>
              <li>
                <Link href="/services?cat=international" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.92rem' }}>
                  {language === 'fa' ? 'نمایندگی رسمی VITA و 3Shape' : 'Official Partner: VITA & 3Shape'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '20px',
              }}
            >
              {t.footerContactInfo}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#00b4d8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{t.hqAddress}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#00b4d8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <a href="tel:02142804" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }} dir="ltr">
                  021 - 42804
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="#00b4d8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <a href="mailto:info@kfp-dental.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  info@kfp-dental.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <ShieldCheck size={18} color="#06d6a0" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{t.koushayarWarranty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.85rem',
          }}
        >
          <div>{t.footerCopyright}</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/sitemap" style={{ color: '#38bdf8', textDecoration: 'none' }}>
              {t.navSitemap}
            </Link>
            <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              {t.navContact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
