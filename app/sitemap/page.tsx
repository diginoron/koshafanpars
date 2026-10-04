'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { products } from '@/data/productsData';
import { articles } from '@/data/articlesData';
import { 
  Network, 
  Home, 
  Building2, 
  Layers, 
  BookOpen, 
  PhoneCall, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Flame,
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function SitemapPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];
  const ChevronIcon = direction === 'rtl' ? ChevronLeft : ChevronRight;

  const sections = [
    {
      titleFa: 'صفحات اصلی وب‌سایت',
      titleEn: 'Core Pages',
      icon: Home,
      links: [
        { href: '/', labelFa: 'صفحه نخست (Home)', labelEn: 'Homepage', descFa: 'معرفی کلی، دستاوردها، خدمات کوشایار و محصولات شاخص', descEn: 'Main overview, stats, Koushayar after-sales and highlights' },
        { href: '/about', labelFa: 'درباره ما (About Us)', labelEn: 'About Us', descFa: 'تاریخچه ۳۰ ساله، پیام مدیرعامل، کارخانه و گواهینامه‌های ISO 13485', descEn: '30-year history, CEO message, cleanrooms and certifications' },
        { href: '/services', labelFa: 'خدمات و محصولات (Services & Products)', labelEn: 'Services & Products', descFa: 'کاتالوگ جامع کوره‌ها، ایمپلنت اویتا، تجهیزات لابراتواری و برندهای بین‌المللی', descEn: 'Catalog of furnaces, Avita implants, lab benches and global brands' },
        { href: '/articles', labelFa: 'مقالات و اخبار (Articles & Journal)', labelEn: 'Articles & Journal', descFa: 'مجله علمی، راهنماهای بالینی، دستاوردهای پژوهشی و رویدادهای IDS و AEEDC', descEn: 'Peer-reviewed articles, clinical guides, CAD/CAM and conference news' },
        { href: '/contact', labelFa: 'تماس با ما (Contact Us)', labelEn: 'Contact Us', descFa: 'اطلاعات دفاتر شهرک غرب، کارخانه شمس‌آباد، شوروم سیناسنتر و فرم پیام', descEn: 'HQ address, Shamsabad factory, Sina Center showroom and inquiry form' },
      ]
    },
    {
      titleFa: 'دسته‌بندی محصولات و تجهیزات',
      titleEn: 'Products & Equipment Categories',
      icon: Layers,
      links: [
        { href: '/services?cat=furnaces', labelFa: 'کوره‌های پخت پرسلن و پرس (AT300 Plus, AT300P, AT100)', labelEn: 'Porcelain & Press Furnaces (AT300 Plus, AT300P, AT100)', descFa: 'پیشرفته‌ترین کوره‌های ساخت ایران با سیستم وکیوم و مافل کوارتز', descEn: 'State-of-the-art porcelain furnaces with quartz muffle' },
        { href: '/services?cat=furnaces', labelFa: 'کوره زینترینگ زیرکونیا ۱۶۵۰ درجه', labelEn: '1650L High-Temp Zirconia Sintering Furnace', descFa: 'کوره دما بالای صنعتی با المنت‌های MoSi2 برای دندانپزشکی دیجیتال', descEn: 'High-temperature CAD/CAM zirconia sintering unit' },
        { href: '/services?cat=implants', labelFa: 'سیستم ایمپلنت دندانی اویتا (Avita)', labelEn: 'Avita Dental Implant System', descFa: 'فیکسچرهای SLA با تیتانیوم گرید ۴ و ۵ و گارانتی مادام‌العمر', descEn: 'Biocompatible titanium implants with SLA surface & lifetime warranty' },
        { href: '/services?cat=lab-equipment', labelFa: 'میزهای تخصصی لابراتواری و آموزشی', labelEn: 'Specialized Dental Workstations & Dust Suction', descFa: 'میزهای ارگونومیک مجهز به ساکشن سیکلونی هپا و پنل روشنایی', descEn: 'Ergonomic lab benches with cyclonic suction and daylight LED' },
        { href: '/services?cat=international', labelFa: 'همکاران بین‌المللی (VITA Zahnfabrik, 3Shape, imes-icore)', labelEn: 'Official Global Partners (VITA, 3Shape, imes-icore)', descFa: 'توزیع انحصاری سرامیک‌های آلمان و تجهیزات CAD/CAM دانمارک', descEn: 'Exclusive distribution of German ceramics and Danish digital scanners' },
      ]
    },
    {
      titleFa: 'خدمات ویژه و پشتیبانی',
      titleEn: 'Specialized Services & Support',
      icon: ShieldCheck,
      links: [
        { href: '/services', labelFa: 'واحد خدمات پس از فروش کوشایار', labelEn: 'Koushayar Technical Support Wing', descFa: 'اعزام کارشناس در ۲۴ ساعت، کالیبراسیون با سیم نقره و تامین دائم قطعات', descEn: 'Nationwide sub-24h support, silver-wire calibration and spare parts' },
        { href: '/contact', labelFa: 'استعلام قیمت و مشاوره تجهیز لابراتوار', labelEn: 'Quotation & Turnkey Lab Setup Consultation', descFa: 'مشاوره رایگان تجهیز صفر تا صد کلینیک‌ها و لابراتوارهای تخصصی', descEn: 'Complimentary consultation for dental clinic and lab equipping' },
        { href: '/articles', labelFa: 'آکادمی آموزش و وبینارهای تخصصی کوشافن', labelEn: 'KFP Academy & Hands-on Certification', descFa: 'دوره‌های تئوری و عملی کار با اسکنر تریوس و نرم‌افزار اگزوکد', descEn: 'Hands-on courses for 3Shape Trios and exocad design' },
      ]
    },
    {
      titleFa: 'فهرست مقالات علمی مجله',
      titleEn: 'Scientific Articles Index',
      icon: BookOpen,
      links: articles.map(art => ({
        href: '/articles',
        labelFa: art.titleFa,
        labelEn: art.titleEn,
        descFa: `${art.categoryFa} • زمان مطالعه: ${art.readTime} • نویسنده: ${art.authorFa}`,
        descEn: `${art.categoryEn} • Read time: ${art.readTime} • Author: ${art.authorEn}`,
      }))
    }
  ];

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
            <Network size={16} />
            <span>{language === 'fa' ? 'راهنمای کامل ساختار سایت' : 'Site Architecture & Hierarchy'}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {language === 'fa' ? 'نقشه سایت کوشافن پارس (Sitemap)' : 'KFP Dental Website Sitemap'}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            {language === 'fa'
              ? 'دسترسی سریع و شفاف به تمام صفحات، دسته‌بندی‌های محصولات، مقالات پژوهشی و راه‌های ارتباطی'
              : 'Direct and comprehensive indexing of all pages, product lines, clinical articles, and contact branches'}
          </p>
        </div>
      </section>

      {/* 2. Structured Sections Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {sections.map((sec, secIdx) => {
              const IconComp = sec.icon;
              return (
                <div
                  key={secIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '36px',
                    boxShadow: '0 4px 25px rgba(0,0,0,0.04)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(2, 132, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284c7',
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                      {language === 'fa' ? sec.titleFa : sec.titleEn}
                    </h2>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                    {sec.links.map((link, linkIdx) => (
                      <Link
                        key={linkIdx}
                        href={link.href}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#f0f9ff';
                          e.currentTarget.style.borderColor = '#0284c7';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a', marginBottom: '4px' }}>
                            {language === 'fa' ? link.labelFa : link.labelEn}
                          </div>
                          <div style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: '1.5' }}>
                            {language === 'fa' ? link.descFa : link.descEn}
                          </div>
                        </div>
                        <ChevronIcon size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '4px' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* XML Notice Box */}
          <div
            style={{
              marginTop: '40px',
              padding: '24px 30px',
              borderRadius: '16px',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '1rem', marginBottom: '4px' }}>
                {language === 'fa' ? 'فایل نقشه‌سایت XML برای موتورهای جستجو (SEO)' : 'Standard XML Sitemap for Search Engines (SEO)'}
              </div>
              <p style={{ color: '#3b82f6', fontSize: '0.88rem', margin: 0 }}>
                {language === 'fa'
                  ? 'این وب‌سایت مجهز به فایل اتوماتیک sitemap.xml و robots.txt جهت بهینه‌سازی حداکثری در گوگل است.'
                  : 'This application dynamically generates sitemap.xml and robots.txt adhering to Google search specifications.'}
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient"
              style={{ fontSize: '0.88rem', padding: '9px 20px', textDecoration: 'none' }}
            >
              <span>sitemap.xml</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
