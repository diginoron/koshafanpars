'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Product } from '@/data/productsData';
import { X, CheckCircle, Send, Sparkles, Shield, Cpu, Flame } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { language } = useLanguage();
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [clientPhone, setClientPhone] = useState('');
  const [clientName, setClientName] = useState('');

  if (!product) return null;

  const title = language === 'fa' ? product.titleFa : product.titleEn;
  const subtitle = language === 'fa' ? product.subtitleFa : product.subtitleEn;
  const description = language === 'fa' ? product.descriptionFa : product.descriptionEn;
  const features = language === 'fa' ? product.featuresFa : product.featuresEn;
  const specs = language === 'fa' ? product.specsFa : product.specsEn;
  const badge = language === 'fa' ? product.badgeFa : product.badgeEn;

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone) return;
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(11, 26, 48, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: language === 'fa' ? 'auto' : '20px',
            left: language === 'fa' ? '20px' : 'auto',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Close"
        >
          <X size={20} color="#475569" />
        </button>

        {/* Modal Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #091a32 0%, #0f3260 100%)',
            color: '#ffffff',
            padding: '36px 36px 28px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          }}
        >
          {badge && (
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 180, 216, 0.2)',
                color: '#38bdf8',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '12px',
                border: '1px solid rgba(0, 180, 216, 0.4)',
              }}
            >
              {badge}
            </span>
          )}
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{subtitle}</p>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '32px' }}>
          <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1rem', marginBottom: '28px' }}>
            {description}
          </p>

          {/* Key Features */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
              {language === 'fa' ? 'ویژگی‌های کلیدی و برجسته' : 'Key Features & Capabilities'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 14px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.88rem',
                    color: '#1e293b',
                  }}
                >
                  <CheckCircle size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
              {language === 'fa' ? 'مشخصات فنی دستگاه' : 'Technical Specifications'}
            </h3>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <tbody>
                  {Object.entries(specs).map(([key, val], idx) => (
                    <tr
                      key={key}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                        borderBottom: '1px solid #e2e8f0',
                      }}
                    >
                      <td style={{ padding: '12px 18px', fontWeight: 600, color: '#475569', width: '40%' }}>
                        {key}
                      </td>
                      <td style={{ padding: '12px 18px', color: '#0f172a', fontWeight: 500 }}>
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Quote Request Box */}
          <div
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              border: '1px solid #bae6fd',
            }}
          >
            <h4 style={{ color: '#0369a1', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>
              {language === 'fa' ? 'درخواست استعلام قیمت و مشاوره فنی' : 'Request Official Quotation & Consultation'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#0284c7', marginBottom: '16px' }}>
              {language === 'fa'
                ? 'اطلاعات خود را وارد کنید تا کارشناسان فروش کوشافن پارس ظرف ۲ ساعت کاری با شما تماس بگیرند.'
                : 'Leave your contact information and our product specialists will reach out within 2 business hours.'}
            </p>

            {quoteSuccess ? (
              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: '#dcfce7',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 600,
                }}
              >
                <CheckCircle size={20} />
                <span>
                  {language === 'fa'
                    ? 'درخواست شما ثبت گردید. با شما تماس خواهیم گرفت.'
                    : 'Your inquiry has been received. Our sales engineer will call you shortly.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <input
                  type="text"
                  placeholder={language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  style={{
                    flex: '1 1 200px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <input
                  type="tel"
                  placeholder={language === 'fa' ? 'شماره موبایل' : 'Phone Number'}
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  required
                  dir="ltr"
                  style={{
                    flex: '1 1 200px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <button type="submit" className="btn-primary-gradient" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                  <Send size={16} />
                  <span>{language === 'fa' ? 'ارسال استعلام' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
