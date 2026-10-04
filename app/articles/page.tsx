'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { articles, Article } from '@/data/articlesData';
import ArticleModal from '@/components/ArticleModal';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function ArticlesPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const categories = [
    { key: 'all', labelFa: 'همه مقالات', labelEn: 'All Articles' },
    { key: 'scientific', labelFa: 'دستاوردهای علمی', labelEn: 'Scientific Research' },
    { key: 'clinical', labelFa: 'راهنمای بالینی و لابراتوار', labelEn: 'Clinical Guides' },
    { key: 'digital', labelFa: 'دندانپزشکی دیجیتال', labelEn: 'Digital Dentistry' },
    { key: 'events', labelFa: 'رویدادها و اخبار', labelEn: 'Events & News' },
  ];

  const filtered = articles.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const title = (language === 'fa' ? art.titleFa : art.titleEn).toLowerCase();
    const excerpt = (language === 'fa' ? art.excerptFa : art.excerptEn).toLowerCase();
    const matchesSearch = title.includes(q) || excerpt.includes(q);
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
        <div className="container-custom" style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
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
            <BookOpen size={16} />
            <span>{language === 'fa' ? 'دانش‌نامه و پژوهش‌های دندانپزشکی' : 'Scientific Dental Knowledge Base'}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {language === 'fa' ? 'مجله علمی و تخصصی کوشافن پارس' : 'KFP Scientific & Clinical Journal'}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            {language === 'fa'
              ? 'مرجع آخرین مقالات علمی پیرامون ایمپلنتولوژی، متالورژی سرامیک‌های دندانی، تکنولوژی‌های CAD/CAM و گزارش رویدادهای بین‌المللی'
              : 'Your reference for peer-reviewed implant research, dental ceramic metallurgy, CAD/CAM advancements, and global conference reports'}
          </p>
        </div>
      </section>

      {/* 2. Stat badges matching real kfp-dental.com stats */}
      <section style={{ padding: '30px 0 10px', backgroundColor: '#f0f7ff' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              padding: '16px 24px',
              borderRadius: '16px',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              border: '1px solid #e0f2fe',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0284c7' }} dir="ltr">+12k</span>
              <span style={{ fontSize: '0.88rem', color: '#64748b' }}>{language === 'fa' ? 'خواننده فعال ماهانه' : 'Monthly Active Readers'}</span>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: '#cbd5e1' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0284c7' }} dir="ltr">+500</span>
              <span style={{ fontSize: '0.88rem', color: '#64748b' }}>{language === 'fa' ? 'مقاله و راهنمای بالینی' : 'Articles & Clinical Guides'}</span>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: '#cbd5e1' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0284c7' }} dir="ltr">+50</span>
              <span style={{ fontSize: '0.88rem', color: '#64748b' }}>{language === 'fa' ? 'رویداد و وبینار تخصصی' : 'Symposiums & Webinars'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search and Category Filter */}
      <section style={{ padding: '40px 0' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      border: 'none',
                      backgroundColor: isActive ? '#0077b6' : '#ffffff',
                      color: isActive ? '#ffffff' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: isActive ? '#0077b6' : '#e2e8f0',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {language === 'fa' ? cat.labelFa : cat.labelEn}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '280px' }}>
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
                placeholder={language === 'fa' ? 'جستجو در مقالات...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 40px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '30px',
            }}
          >
            {filtered.map((art) => {
              const title = language === 'fa' ? art.titleFa : art.titleEn;
              const excerpt = language === 'fa' ? art.excerptFa : art.excerptEn;
              const date = language === 'fa' ? art.dateFa : art.dateEn;
              const author = language === 'fa' ? art.authorFa : art.authorEn;
              const category = language === 'fa' ? art.categoryFa : art.categoryEn;

              return (
                <article
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
                  <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={art.image}
                      alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: direction === 'rtl' ? '14px' : 'auto',
                        left: direction === 'ltr' ? '14px' : 'auto',
                        backgroundColor: 'rgba(11, 26, 48, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#38bdf8',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '10px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14} />
                        {date}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, marginBottom: '12px' }}>
                      {title}
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.7', marginBottom: '20px', flex: 1 }}>
                      {excerpt}
                    </p>

                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>
                        {author}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontWeight: 700, fontSize: '0.88rem' }}>
                        <span>{t.readArticle}</span>
                        <ArrowIcon size={15} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}
