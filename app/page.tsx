'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { products, Product } from '@/data/productsData';
import { articles, Article } from '@/data/articlesData';
import ProductModal from '@/components/ProductModal';
import ArticleModal from '@/components/ArticleModal';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Award,
  PhoneCall,
  CheckCircle2,
  Cpu,
  Layers,
  Flame,
  Globe,
  HelpCircle,
  ChevronDown,
  Building2,
  ExternalLink,
  ChevronRight,
  Headphones,
  Check
} from 'lucide-react';

export default function HomePage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  // State for modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeProductTab, setActiveProductTab] = useState<'all' | 'furnaces' | 'implants' | 'lab-equipment' | 'international'>('all');

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const filteredProducts = activeProductTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeProductTab);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-mesh-dark" style={{ padding: '90px 0 80px', color: '#ffffff' }}>
        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* National Distinction Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 180, 216, 0.14)',
                border: '1px solid rgba(0, 180, 216, 0.35)',
                color: '#38bdf8',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '24px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles size={16} />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: '20px',
                letterSpacing: language === 'en' ? '-0.5px' : '0px',
              }}
            >
              <span>{t.heroTitlePrefix} </span>
              <span className="text-gradient-cyan">{t.heroTitleHighlight}</span>
              <br />
              <span>{t.heroTitleSuffix}</span>
            </h1>

            {/* Description Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                color: '#cbd5e1',
                lineHeight: '1.8',
                marginBottom: '38px',
                fontWeight: 400,
              }}
            >
              {t.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link href="/services" className="btn-primary-gradient" style={{ padding: '14px 34px', fontSize: '1.02rem' }}>
                <span>{t.heroCtaProducts}</span>
                <ArrowIcon size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary-outline" style={{ padding: '14px 30px', fontSize: '1.02rem' }}>
                <PhoneCall size={18} />
                <span>{t.heroCtaContact}</span>
              </Link>
            </div>

            {/* Micro trust indicators */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                marginTop: '45px',
                paddingTop: '25px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.86rem',
                color: '#94a3b8',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#06d6a0" />
                {language === 'fa' ? 'دارای گواهی CE و ISO 13485' : 'CE & ISO 13485 Certified'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#06d6a0" />
                {language === 'fa' ? 'بالاترین رتبه دانش‌بنیان فناور' : 'Top Tier Knowledge-Based'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#06d6a0" />
                {language === 'fa' ? 'گارانتی طلایی و خدمات کوشایار' : 'Koushayar Golden Support'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              { title: t.heroStatsTitle1, sub: t.heroStatsSubtitle1, icon: Building2, color: '#0284c7' },
              { title: t.heroStatsTitle2, sub: t.heroStatsSubtitle2, icon: Flame, color: '#ea580c' },
              { title: t.heroStatsTitle3, sub: t.heroStatsSubtitle3, icon: Award, color: '#059669' },
              { title: t.heroStatsTitle4, sub: t.heroStatsSubtitle4, icon: ShieldCheck, color: '#2563eb' },
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '26px 22px',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: `${stat.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                      {stat.title}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 500, marginTop: '4px' }}>
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. KOUSHAYAR AFTER-SALES SPECIAL BANNER */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container-custom">
          <div
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #09203f 0%, #154279 100%)',
              color: '#ffffff',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(11, 32, 63, 0.15)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: direction === 'rtl' ? 0 : 'auto',
                left: direction === 'ltr' ? 0 : 'auto',
                width: '300px',
                height: '100%',
                background: 'radial-gradient(circle, rgba(0, 180, 216, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    marginBottom: '14px',
                  }}
                >
                  <Headphones size={15} />
                  <span>{t.koushayarTitle}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '16px' }}>
                  {t.koushayarSubtitle}
                </h2>
                <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '24px' }}>
                  {t.koushayarDesc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                  <a
                    href="tel:02142804"
                    className="btn-primary-gradient"
                    style={{ textDecoration: 'none' }}
                  >
                    <PhoneCall size={18} />
                    <span dir="ltr">{t.koushayarPhone}</span>
                  </a>
                  <a
                    href="mailto:service@kfp-dental.com"
                    className="btn-secondary-outline"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>service@kfp-dental.com</span>
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  padding: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
                  {language === 'fa' ? 'تعهدات طلایی خدمات پس از فروش' : 'Golden Support Commitments'}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem', color: '#e2e8f0' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#06d6a0" style={{ flexShrink: 0 }} />
                    <span>{language === 'fa' ? 'اعزام کارشناس در کمتر از ۲۴ ساعت در تهران و مراکز استان' : 'Sub-24h technician dispatch nationwide'}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#06d6a0" style={{ flexShrink: 0 }} />
                    <span>{language === 'fa' ? 'کالیبراسیون دقیق دمای کوره با سیم نقره استاندارد' : 'Certified silver-wire thermal calibration'}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#06d6a0" style={{ flexShrink: 0 }} />
                    <span>{language === 'fa' ? 'تامین دائمی قطعات یدکی اورجینال مافل، ترموکوپل و برد' : 'Lifetime genuine spare parts availability'}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#06d6a0" style={{ flexShrink: 0 }} />
                    <span>{language === 'fa' ? 'گارانتی تعویض بی قید و شرط قطعات در دوره ضمانت' : 'Unconditional replacement during warranty period'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS CATALOG */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-custom">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#0284c7',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {language === 'fa' ? 'محصولات کوشافن پارس' : 'KFP PRODUCTS'}
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginTop: '8px',
                marginBottom: '12px',
              }}
            >
              {t.featuredProductsTitle}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>
              {t.featuredProductsSubtitle}
            </p>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginTop: '24px',
                padding: '6px',
                borderRadius: '9999px',
                backgroundColor: '#e2e8f0',
              }}
            >
              {[
                { key: 'all', labelFa: 'همه محصولات', labelEn: 'All Products' },
                { key: 'furnaces', labelFa: 'کوره‌های دندانسازی', labelEn: 'Furnaces' },
                { key: 'implants', labelFa: 'ایمپلنت اویتا', labelEn: 'Avita Implants' },
                { key: 'lab-equipment', labelFa: 'میز و تجهیزات', labelEn: 'Lab Equipment' },
                { key: 'international', labelFa: 'برندهای بین‌المللی', labelEn: 'Global Brands' },
              ].map((tab) => {
                const isActive = activeProductTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveProductTab(tab.key as any)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      border: 'none',
                      backgroundColor: isActive ? '#0077b6' : 'transparent',
                      color: isActive ? '#ffffff' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.86rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {language === 'fa' ? tab.labelFa : tab.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {filteredProducts.map((prod) => {
              const title = language === 'fa' ? prod.titleFa : prod.titleEn;
              const subtitle = language === 'fa' ? prod.subtitleFa : prod.subtitleEn;
              const badge = language === 'fa' ? prod.badgeFa : prod.badgeEn;

              return (
                <div
                  key={prod.id}
                  className="glass-card-interactive"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Product Image Box */}
                  <div
                    style={{
                      position: 'relative',
                      height: '210px',
                      overflow: 'hidden',
                      backgroundColor: '#f1f5f9',
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    {badge && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: direction === 'rtl' ? '14px' : 'auto',
                          left: direction === 'ltr' ? '14px' : 'auto',
                          backgroundColor: '#0284c7',
                          color: '#ffffff',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Product Card Details */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.6', marginBottom: '18px', flex: 1 }}>
                      {subtitle}
                    </p>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="btn-light-outline"
                        style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem' }}
                      >
                        <span>{t.learnMore}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services" className="btn-primary-gradient" style={{ padding: '12px 30px' }}>
              <span>{t.viewAllProducts}</span>
              <ArrowIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. AVITA IMPLANT SPOTLIGHT BANNER */}
      <section style={{ padding: '70px 0', backgroundColor: '#f0f7ff', borderTop: '1px solid #e0f2fe', borderBottom: '1px solid #e0f2fe' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(2, 132, 199, 0.1)',
                  color: '#0284c7',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                {language === 'fa' ? 'فناوری زیست‌سازگار ملی' : 'Biocompatible National Standard'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '14px', lineHeight: 1.25 }}>
                {t.avitaTitle}
              </h2>
              <p style={{ color: '#0284c7', fontWeight: 600, fontSize: '1.05rem', marginBottom: '16px' }}>
                {t.avitaSubtitle}
              </p>
              <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '24px' }}>
                {t.avitaDesc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                {[t.avitaFeature1, t.avitaFeature2, t.avitaFeature3, t.avitaFeature4].map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#059669" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <Link href="/services?cat=implants" className="btn-primary-gradient">
                  <span>{language === 'fa' ? 'بررسی سیستم ایمپلنت اویتا' : 'Explore Avita Implants'}</span>
                  <ArrowIcon size={16} />
                </Link>
                <Link href="/contact" className="btn-light-outline">
                  <span>{language === 'fa' ? 'درخواست کاتالوگ و کیت جراحی' : 'Request Surgical Kit Demo'}</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 102, 204, 0.15)',
                  border: '4px solid #ffffff',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                  alt="Avita Dental Implant"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: direction === 'rtl' ? '20px' : 'auto',
                  left: direction === 'ltr' ? '20px' : 'auto',
                  backgroundColor: '#ffffff',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Award size={32} color="#0284c7" />
                <div>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>
                    {language === 'fa' ? 'گارانتی مادام‌العمر تعویض' : 'Lifetime Replacement'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    {language === 'fa' ? 'تضمین رسمی شرکت کوشافن پارس' : 'Official KFP Guarantee'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL PARTNERS */}
      <section style={{ padding: '70px 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              {t.partnersTitle}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: '1.7' }}>
              {t.partnersText}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                name: 'VITA Zahnfabrik',
                countryFa: 'آلمان',
                countryEn: 'Germany',
                descFa: 'تولیدکننده برتر سرامیک‌های دندانی و شیدگاید 3D-Master',
                descEn: 'Pioneer in Dental Ceramics and 3D-Master Shade Guides',
              },
              {
                name: '3Shape',
                countryFa: 'دانمارک',
                countryEn: 'Denmark',
                descFa: 'اسکنرهای داخل دهانی هوشمند Trios و نرم‌افزارهای دیجیتال',
                descEn: 'Smart Trios Intraoral Scanners & Dental Software',
              },
              {
                name: 'imes-icore',
                countryFa: 'آلمان',
                countryEn: 'Germany',
                descFa: 'ماشین‌های فرزکاری ۵ محوره همزمان CNC دندانپزشکی',
                descEn: 'High-Precision 5-Axis Simultaneous Dental Milling Units',
              },
              {
                name: 'Interdent',
                countryFa: 'اسلوونی',
                countryEn: 'Slovenia',
                descFa: 'مواد مصرفی لابراتواری و آلیاژهای کستینگ پریمیوم',
                descEn: 'Dental Laboratory Consumables and Casting Alloys',
              },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="glass-card-interactive"
                style={{
                  padding: '28px 24px',
                  borderRadius: '18px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: '#0077b6',
                    marginBottom: '4px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {partner.name}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    marginBottom: '12px',
                  }}
                >
                  {language === 'fa' ? partner.countryFa : partner.countryEn}
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.6' }}>
                  {language === 'fa' ? partner.descFa : partner.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LATEST ARTICLES FROM JOURNAL */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '36px',
              gap: '16px',
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0284c7' }}>
                {language === 'fa' ? 'مجله کوشافن پارس' : 'KFP JOURNAL'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                {t.articlesSectionTitle}
              </h2>
            </div>
            <Link href="/articles" className="btn-light-outline" style={{ fontSize: '0.9rem' }}>
              <span>{t.viewAllArticles}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {articles.slice(0, 3).map((art) => {
              const title = language === 'fa' ? art.titleFa : art.titleEn;
              const excerpt = language === 'fa' ? art.excerptFa : art.excerptEn;
              const date = language === 'fa' ? art.dateFa : art.dateEn;
              const category = language === 'fa' ? art.categoryFa : art.categoryEn;

              return (
                <div
                  key={art.id}
                  className="glass-card-interactive"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedArticle(art)}
                >
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={art.image}
                      alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: direction === 'rtl' ? '12px' : 'auto',
                        left: direction === 'ltr' ? '12px' : 'auto',
                        backgroundColor: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#38bdf8',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px' }}>
                      {date} • {art.readTime}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, marginBottom: '10px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>
                      {excerpt}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontWeight: 700, fontSize: '0.88rem' }}>
                      <span>{t.readArticle}</span>
                      <ArrowIcon size={15} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section style={{ padding: '70px 0' }}>
        <div className="container-custom" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0284c7' }}>
              {language === 'fa' ? 'پاسخ به ابهامات' : 'COMMON QUESTIONS'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
              {t.faqTitle}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem' }}>
              {t.faqSubtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {t.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: 'none',
                      backgroundColor: 'transparent',
                      textAlign: direction === 'rtl' ? 'right' : 'left',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isOpen ? '#0284c7' : '#0f172a',
                      gap: '16px',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="#64748b"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 22px',
                        color: '#475569',
                        lineHeight: '1.8',
                        fontSize: '0.94rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM ACTION BANNER */}
      <section style={{ padding: '0 0 40px' }}>
        <div className="container-custom">
          <div
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              padding: '48px 40px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)', fontWeight: 800, marginBottom: '14px' }}>
              {language === 'fa' ? 'به جمع بزرگ مشتریان راضی کوشافن پارس بپیوندید' : 'Join Thousands of Satisfied Dental Professionals'}
            </h2>
            <p style={{ color: '#e0f2fe', maxWidth: '680px', margin: '0 auto 28px', fontSize: '1.02rem', lineHeight: '1.7' }}>
              {language === 'fa'
                ? 'مشاوران فنی ما آماده‌اند تا شما را در تجهیز کامل لابراتوار یا کلینیک با بهترین شرایط پرداخت و گارانتی طلایی همراهی کنند.'
                : 'Our technical consultants are ready to assist you in outfitting your laboratory or clinic with flexible terms and golden warranty.'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0369a1',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                }}
              >
                {t.heroCtaContact}
              </Link>
              <a
                href="tel:02142804"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PhoneCall size={18} />
                <span dir="ltr">021 - 42804</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}
