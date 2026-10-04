'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { products, Product } from '@/data/productsData';
import ProductModal from '@/components/ProductModal';
import { 
  Sparkles, 
  Search, 
  Filter, 
  ShieldCheck, 
  Flame, 
  Cpu, 
  Layers, 
  Headphones, 
  FileCheck,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { key: 'all', labelFa: 'همه محصولات و خدمات', labelEn: 'All Products & Services' },
    { key: 'furnaces', labelFa: 'کوره‌های دندانسازی', labelEn: 'Dental Furnaces' },
    { key: 'implants', labelFa: 'ایمپلنت دندانی اویتا', labelEn: 'Avita Implants' },
    { key: 'lab-equipment', labelFa: 'میزها و تجهیزات لابراتوار', labelEn: 'Lab Workstations' },
    { key: 'international', labelFa: 'برندهای بین‌المللی (VITA, 3Shape)', labelEn: 'Global Partners' },
  ];

  const filtered = products.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const title = (language === 'fa' ? prod.titleFa : prod.titleEn).toLowerCase();
    const desc = (language === 'fa' ? prod.descriptionFa : prod.descriptionEn).toLowerCase();
    const matchesSearch = title.includes(q) || desc.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* 1. Header Banner */}
      <section
        className="hero-mesh-dark"
        style={{
          padding: '80px 0 60px',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="container-custom" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
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
              marginBottom: '16px',
            }}
          >
            <Sparkles size={16} />
            <span>{language === 'fa' ? 'سبد جامع فناوری‌های دندانپزشکی' : 'Comprehensive Dental Portfolio'}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {language === 'fa' ? 'محصولات و خدمات تخصصی کوشافن پارس' : 'KFP Specialized Products & Services'}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            {language === 'fa'
              ? 'از پیشرفته‌ترین کوره‌های پخت پرسلن و سیستم ایمپلنت اویتا تا تجهیز کامل مراکز CAD/CAM و خدمات پس از فروش کوشایار'
              : 'From state-of-the-art porcelain furnaces & Avita implants to turnkey digital dentistry and Koushayar technical support'}
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Search */}
      <section style={{ padding: '40px 0 20px' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '16px 24px',
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid #e2e8f0',
              marginBottom: '36px',
            }}
          >
            {/* Search Box */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 280px',
                maxWidth: '420px',
              }}
            >
              <Search
                size={18}
                color="#94a3b8"
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: direction === 'rtl' ? '14px' : 'auto',
                  left: direction === 'ltr' ? '14px' : 'auto',
                }}
              />
              <input
                type="text"
                placeholder={language === 'fa' ? 'جستجوی نام کوره، ایمپلنت، یا محصول...' : 'Search furnaces, implants, products...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 42px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#f8fafc',
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      border: 'none',
                      backgroundColor: isActive ? '#0077b6' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.86rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {language === 'fa' ? cat.labelFa : cat.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
            }}
          >
            {filtered.map((prod) => {
              const title = language === 'fa' ? prod.titleFa : prod.titleEn;
              const subtitle = language === 'fa' ? prod.subtitleFa : prod.subtitleEn;
              const desc = language === 'fa' ? prod.descriptionFa : prod.descriptionEn;
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
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={prod.image}
                      alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                        }}
                      >
                        {badge}
                      </span>
                    )}
                  </div>

                  <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#0284c7', fontWeight: 600, marginBottom: '12px' }}>
                      {subtitle}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.7', marginBottom: '20px', flex: 1 }}>
                      {desc.slice(0, 160)}...
                    </p>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="btn-primary-gradient"
                        style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem' }}
                      >
                        <span>{language === 'fa' ? 'مشخصات کامل و استعلام' : 'Specs & Quotation'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Koushayar Support Special Banner */}
          <div
            style={{
              padding: '44px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #091a32 0%, #153c6e 100%)',
              color: '#ffffff',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                <Headphones size={15} />
                <span>{language === 'fa' ? 'خدمات فنی پس از فروش' : 'Technical Support'}</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
                {language === 'fa' ? 'ثبت درخواست کالیبراسیون و تعمیرات کوشایار' : 'Book Calibration & Repair Service'}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '20px' }}>
                {language === 'fa'
                  ? 'تمامی کوره‌ها و تجهیزات تولیدی کوشافن پارس دارای خدمات گارانتی طلایی، کالیبراسیون تخصصی با سیم نقره و تامین دائم قطعات هستند.'
                  : 'All KFP furnaces and equipment are supported by our golden warranty, silver-wire thermal calibration, and lifetime spare parts availability.'}
              </p>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <a href="tel:02142804" className="btn-primary-gradient" style={{ textDecoration: 'none' }}>
                  <PhoneCall size={16} />
                  <span dir="ltr">021 - 42804 (Ext. 370)</span>
                </a>
                <Link href="/contact" className="btn-secondary-outline" style={{ textDecoration: 'none' }}>
                  <span>{language === 'fa' ? 'ارسال تیکت آنلاین' : 'Submit Support Ticket'}</span>
                </Link>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '14px', fontSize: '1.05rem' }}>
                {language === 'fa' ? 'مراحل دریافت خدمات پس از فروش:' : 'How Support Works:'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#06d6a0" />
                  <span>{language === 'fa' ? '۱. تماس با داخلی ۳۷۰ یا ثبت شماره سریال دستگاه' : '1. Call Ext. 370 or submit device serial number'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#06d6a0" />
                  <span>{language === 'fa' ? '۲. عیب‌یابی تلفنی یا آنلاین توسط کارشناس ارشد' : '2. Remote technical triage with senior engineer'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#06d6a0" />
                  <span>{language === 'fa' ? '۳. اعزام تکنسین مجرب یا ارسال قطعه اورجینال ظرف ۲۴ ساعت' : '3. On-site dispatch or genuine parts within 24h'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
