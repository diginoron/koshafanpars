'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Flame, 
  Factory, 
  Quote,
  Target,
  Compass,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* 1. Header Banner */}
      <section
        className="hero-mesh-dark"
        style={{
          padding: '80px 0 70px',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '840px', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 180, 216, 0.15)',
              color: '#38bdf8',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '18px',
            }}
          >
            <Sparkles size={16} />
            <span>{language === 'fa' ? 'پیشگام صنعت دندانپزشکی کشور' : 'Pioneering Dental Technology'}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {t.aboutHeroTitle}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            {t.aboutHeroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Narrative & Mission */}
      <section style={{ padding: '70px 0 50px' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0284c7' }}>
                {language === 'fa' ? 'رسالت و چشم‌انداز' : 'MISSION & VISION'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: '8px 0 16px' }}>
                {language === 'fa' ? 'طراحی، نوآوری و خودکفایی در ساخت تجهیزات های‌تک' : 'Engineering, Innovation & Self-Reliance in High-Tech Devices'}
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '1.02rem', textAlign: 'justify', marginBottom: '20px' }}>
                {t.aboutIntroParagraph}
              </p>
              <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '1.02rem', textAlign: 'justify' }}>
                {language === 'fa'
                  ? 'سرمایه‌گذاری مستمر در دپارتمان تحقیق و توسعه (R&D)، جذب نخبگان دانشگاهی مهندسی پزشکی و متالورژی، و برقراری ارتباط مستمر با مجامع علمی بین‌المللی، سبب شده تا محصولات کوشافن پارس نه تنها در بازار داخلی بلکه در بازارهای صادراتی هم‌تراز با برترین برندهای آلمانی و سوئیسی رقابت کنند.'
                  : 'Sustained investment in R&D, welcoming top biomedical and materials engineers, and collaborating with international scientific entities have positioned KFP products to compete shoulder-to-shoulder with premium European manufacturers across regional and global markets.'}
              </p>
            </div>

            {/* Visual Stats Card */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="KFP R&D Facility"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: direction === 'rtl' ? '20px' : 'auto',
                  left: direction === 'ltr' ? '20px' : 'auto',
                  backgroundColor: 'rgba(9, 26, 50, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '16px 22px',
                  borderRadius: '16px',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#38bdf8' }}>
                  {language === 'fa' ? 'خطوط تولید کلین‌روم کلاس ۱۰,۰۰۰' : 'Class 10,000 Cleanroom'}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  {language === 'fa' ? 'شهرک صنعتی شمس‌آباد تهران' : 'Shamsabad Industrial Park, Tehran'}
                </div>
              </div>
            </div>
          </div>

          {/* 3. CEO Message Card */}
          <div
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #091a32 0%, #0c2d58 100%)',
              color: '#ffffff',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(9, 26, 50, 0.25)',
              marginBottom: '70px',
            }}
          >
            <Quote
              size={120}
              color="rgba(0, 180, 216, 0.08)"
              style={{
                position: 'absolute',
                top: '10px',
                right: direction === 'rtl' ? '20px' : 'auto',
                left: direction === 'ltr' ? '20px' : 'auto',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
              <div
                style={{
                  display: 'inline-block',
                  borderBottom: '2px solid #00b4d8',
                  paddingBottom: '6px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#38bdf8',
                  marginBottom: '18px',
                }}
              >
                {t.ceoMessageTitle}
              </div>
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.22rem)',
                  lineHeight: '1.9',
                  color: '#f1f5f9',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  textAlign: 'justify',
                }}
              >
                {t.ceoMessageText}
              </p>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff' }}>
                {language === 'fa' ? 'هیئت مدیره و مدیریت عامل شرکت کوشافن پارس' : 'Board of Directors & Executive Leadership, KoushaFan Pars'}
              </div>
            </div>
          </div>

          {/* 4. Timeline (گاه‌شمار افتخارات) */}
          <div style={{ marginBottom: '70px' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
                {t.timelineTitle}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '8px' }}>
                {language === 'fa'
                  ? 'مروری بر دستاوردها و نقاط عطف بیش از ۳۰ سال خدمت به جامعه دندانپزشکی'
                  : 'Milestones highlighting over three decades of service to oral health'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '840px', margin: '0 auto' }}>
              {t.timeline.map((item, index) => (
                <div
                  key={index}
                  className="glass-card-interactive"
                  style={{
                    padding: '24px 28px',
                    borderRadius: '18px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      padding: '8px 18px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.year}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.7' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Certifications & Accreditations */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
                {t.certificationsTitle}
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {t.certs.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card-interactive"
                  style={{
                    padding: '24px',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <Award size={26} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b', lineHeight: '1.6' }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
