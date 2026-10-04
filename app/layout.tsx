import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'کوشافن پارس | تجهیزات دندانپزشکی، ایمپلنت اویتا و کوره دندانسازی | KFP Dental',
  description:
    'شرکت تولیدی مهندسی دانش‌بنیان کوشافن پارس؛ بزرگترین تولیدکننده کوره‌های پرسلن AT300 و AT100، سیستم ایمپلنت اویتا (Avita)، تجهیزات لابراتواری و نماینده رسمی VITA و 3Shape در ایران.',
  keywords: [
    'کوشافن پارس',
    'تجهیزات دندانپزشکی',
    'کوره دندانسازی',
    'کوره پرسلن AT300',
    'ایمپلنت اویتا',
    'Avita Dental Implant',
    'KFP Dental',
    'VITA Zahnfabrik',
    'کوشایار',
    'تجهیزات لابراتواری دندانپزشکی'
  ],
  authors: [{ name: 'KoushaFan Pars Co.' }],
  creator: 'KoushaFan Pars',
  openGraph: {
    title: 'کوشافن پارس | تجهیزات دندانپزشکی و ایمپلنت اویتا | KFP Dental',
    description: 'تولیدکننده پیشرو کوره‌های دندان‌سازی و سیستم ایمپلنت دندانی اویتا با گارانتی مادام‌العمر.',
    url: 'https://kfp-dental.com',
    siteName: 'KoushaFan Pars Dental Co.',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#091323" />
      </head>
      <body>
        <LanguageProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
