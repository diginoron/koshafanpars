'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Factory,
  Store,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const branches = [
    {
      titleFa: 'دفتر مرکزی',
      titleEn: 'Headquarters',
      icon: Building2,
      address: t.hqAddress,
      phone: t.hqPhone,
      phoneRaw: '02142804',
      badgeFa: 'پاسخگویی مرکزی',
      badgeEn: 'Central Office',
    },
    {
      titleFa: 'کارخانه و خطوط تولید',
      titleEn: 'Manufacturing Facility',
      icon: Factory,
      address: t.factoryAddress,
      phone: t.factoryPhone,
      phoneRaw: '02156235145',
      badgeFa: 'شهرک شمس‌آباد',
      badgeEn: 'Industrial Park',
    },
    {
      titleFa: 'فروشگاه و شوروم سیناسنتر',
      titleEn: 'Sina Center Showroom',
      icon: Store,
      address: t.showroomAddress,
      phone: t.showroomPhone,
      phoneRaw: '02165870399',
      badgeFa: 'نمایشگاه دائمی',
      badgeEn: 'Permanent Showroom',
    },
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
            <MessageSquare size={16} />
            <span>{language === 'fa' ? 'ارتباط مستقیم و پشتیبانی' : 'Direct Inquiries & Support'}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '16px',
            }}
          >
            {t.contactTitle}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
            {t.contactSubtitle}
          </p>
        </div>
      </section>

      {/* 2. Branch Cards */}
      <section style={{ padding: '60px 0 30px' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '60px',
            }}
          >
            {branches.map((branch, idx) => {
              const IconComp = branch.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-interactive"
                  style={{
                    padding: '30px',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(2, 132, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284c7',
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                      }}
                    >
                      {language === 'fa' ? branch.badgeFa : branch.badgeEn}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                    {language === 'fa' ? branch.titleFa : branch.titleEn}
                  </h3>

                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#475569', lineHeight: '1.7', marginBottom: '14px', flex: 1 }}>
                    <MapPin size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{branch.address}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: '#0f172a', fontWeight: 700, alignItems: 'center' }}>
                    <Phone size={18} color="#0284c7" style={{ flexShrink: 0 }} />
                    <a href={`tel:${branch.phoneRaw}`} style={{ color: '#0284c7', textDecoration: 'none' }} dir="ltr">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Form & Map Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                {language === 'fa' ? 'ثبت پیام و مشاوره آنلاین' : 'Send Us a Message'}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '24px' }}>
                {language === 'fa'
                  ? 'جهت مشاوره خرید، خدمات پس از فروش کوشایار، یا همکاری، فرم زیر را تکمیل نمایید.'
                  : 'Complete the form below for equipment sales inquiries, Koushayar support, or partnerships.'}
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: '24px',
                    borderRadius: '16px',
                    backgroundColor: '#dcfce7',
                    border: '1px solid #86efac',
                    color: '#15803d',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.1rem', marginBottom: '6px' }}>
                    <CheckCircle2 size={24} />
                    <span>{language === 'fa' ? 'پیام شما با موفقیت دریافت شد!' : 'Message Sent Successfully!'}</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.7' }}>
                    {t.formSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        {t.formPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      {t.formSubject}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      {t.formMessage} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        outline: 'none',
                        fontSize: '0.9rem',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary-gradient" style={{ justifyContent: 'center', padding: '13px' }}>
                    <Send size={16} />
                    <span>{t.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                {language === 'fa' ? 'موقعیت دفتر مرکزی روی نقشه' : 'Headquarters Location Map'}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '20px' }}>
                {language === 'fa'
                  ? 'تهران، شهرک غرب، بلوار فرحزادی، بالاتر از بیمارستان آتیه، خیابان سپهر، پلاک ۴۵'
                  : 'No. 45 Sepehr St., Farahzadi Blvd., Shahrak-e Gharb, Tehran'}
              </p>

              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #cbd5e1',
                  flex: 1,
                  minHeight: '340px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.37649604964514!2d51.35730682669518!3d35.767887174784484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07927f0eeb51%3A0x892406f57238bf30!2sKFP%20Dental%20Co!5e0!3m2!1sfa!2s!4v1753683748204!5m2!1sfa!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map KFP Dental"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
