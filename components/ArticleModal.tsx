'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Article } from '@/data/articlesData';
import { X, Clock, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const { language } = useLanguage();

  if (!article) return null;

  const title = language === 'fa' ? article.titleFa : article.titleEn;
  const author = language === 'fa' ? article.authorFa : article.authorEn;
  const date = language === 'fa' ? article.dateFa : article.dateEn;
  const category = language === 'fa' ? article.categoryFa : article.categoryEn;
  const content = language === 'fa' ? article.contentFa : article.contentEn;
  const tags = language === 'fa' ? article.tagsFa : article.tagsEn;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(11, 26, 48, 0.8)',
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
            background: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
          aria-label="Close"
        >
          <X size={20} color="#334155" />
        </button>

        {/* Article Header */}
        <div
          style={{
            position: 'relative',
            height: '240px',
            background: `linear-gradient(to bottom, rgba(11, 26, 48, 0.3), rgba(11, 26, 48, 0.85)), url(${article.image}) center/cover no-repeat`,
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '30px',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '9999px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '10px',
              }}
            >
              {category}
            </span>
            <h1 style={{ color: '#ffffff', fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3 }}>
              {title}
            </h1>
          </div>
        </div>

        {/* Metadata bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '20px',
            padding: '16px 30px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={15} color="#0284c7" />
            <span style={{ fontWeight: 600, color: '#1e293b' }}>{author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={15} color="#0284c7" />
            <span>{date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={15} color="#0284c7" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Article Body */}
        <div style={{ padding: '32px 30px' }}>
          {content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                color: '#334155',
                fontSize: '1.02rem',
                lineHeight: '1.9',
                marginBottom: '20px',
                textAlign: 'justify',
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <Tag size={16} color="#64748b" />
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#eff6ff',
                    color: '#0284c7',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
