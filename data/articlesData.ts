export interface Article {
  id: string;
  slug: string;
  category: 'scientific' | 'clinical' | 'digital' | 'events';
  categoryFa: string;
  categoryEn: string;
  titleFa: string;
  titleEn: string;
  excerptFa: string;
  excerptEn: string;
  contentFa: string[];
  contentEn: string[];
  readTime: string;
  dateFa: string;
  dateEn: string;
  authorFa: string;
  authorEn: string;
  image: string;
  tagsFa: string[];
  tagsEn: string[];
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'avita-implant-sla-surface-osseointegration',
    category: 'scientific',
    categoryFa: 'دستاوردهای علمی',
    categoryEn: 'Scientific Research',
    titleFa: 'بررسی بیومکانیکی و هیستومورفومتری سطح SLA در ایمپلنت‌های اویتا',
    titleEn: 'Biomechanical & Histomorphometric Analysis of SLA Surface in Avita Implants',
    excerptFa: 'تحلیل جامع ساختار میکرونی سطوح تیتانیومی سندروبلاست و اسیداچ‌شده و تاثیر شگرف آن بر تسریع ترسیب استخوان و پایداری اولیه فیکسچر.',
    excerptEn: 'A comprehensive evaluation of sandblasted, large-grit, acid-etched titanium topography and its decisive role in accelerated bone deposition.',
    contentFa: [
      'موفقیت درمان‌های ایمپلنت دندانی به کیفیت و سرعت استئواینتگریشن در سطح فیکسچر با بافت استخوان فک بیمار وابسته است. در سیستم ایمپلنت دندانی اویتا (Avita)، محققان واحد تحقیق و توسعه کوشافن پارس با اعمال اصلاحات سطحی موسوم به SLA (Sandblasted, Large-grit, Acid-etched)، زبری سطحی میکرو و نانو با شاخص Sa بین ۱.۵ تا ۲.۰ میکرومتر ایجاد کرده‌اند.',
      'نتایج ارزیابی‌های میکروسکوپ الکترونی روبشی (SEM) نشان می‌دهد که این الگوی زبری متخلخل، سطح موثر تماس را تا بیش از ۶۰ درصد افزایش داده و بستری فوق‌العاده برای چسبندگی فیبروبلاست‌ها و استئوبلاست‌ها در ۴۸ ساعت اول پس از کاشت فراهم می‌آورد.',
      'در تست‌های بیومکانیکی بیرون‌کشیدن (Removal Torque Testing)، ایمپلنت‌های اویتا پایداری ثانویه خیره‌کننده‌ای پس از ۴ هفته بارگذاری ثبت نموده‌اند که امکان پروتکل‌های بارگذاری زودهنگام (Early Loading) را با ضریب اطمینان ۹۹٪ برای دندانپزشکان میسر می‌سازد.'
    ],
    contentEn: [
      'The long-term success of dental implant therapy heavily depends on the velocity and density of osseointegration at the bone-to-implant interface. In the Avita Dental Implant System, KFP R&D scientists engineer a dual-action SLA (Sandblasted, Large-grit, Acid-etched) micro-topography yielding an average Sa roughness between 1.5 and 2.0 microns.',
      'Scanning Electron Microscopy (SEM) reveals that this micro-porous structure amplifies the effective bone contact surface area by more than 60%, providing an optimal scaffold for early osteoblast adhesion and thrombocyte activation within the first 48 hours post-insertion.',
      'Biomechanical reverse-torque evaluations demonstrate remarkable secondary stability at 4 weeks post-placement, empowering clinicians to safely pursue early and immediate loading protocols with proven long-term clinical safety.'
    ],
    readTime: '6 min',
    dateFa: '۱۴ مهر ۱۴۰۳',
    dateEn: 'Oct 04, 2024',
    authorFa: 'دکتر علیرضا معتمدی (متخصص پریودنتولوژی)',
    authorEn: 'Dr. Alireza Motamedi (Periodontist)',
    image: '/images/article-sla.svg',
    tagsFa: ['ایمپلنت دندانی', 'سطح SLA', 'بیومتریال', 'اویتا'],
    tagsEn: ['Dental Implant', 'SLA Surface', 'Biomaterials', 'Avita']
  },
  {
    id: '2',
    slug: 'porcelain-furnace-calibration-firing-curve',
    category: 'clinical',
    categoryFa: 'راهنمای بالینی و لابراتواری',
    categoryEn: 'Clinical & Lab Guide',
    titleFa: 'اصول بهینه‌سازی منحنی پخت پرسلن و کالیبراسیون کوره‌های AT300',
    titleEn: 'Optimizing Porcelain Firing Curves and Calibrating AT300 Furnaces',
    excerptFa: 'چگونه با تنظیم دقیق شیب حرارتی، دمای پیش‌پخت و خلاء به بالاترین ترنسلوسنسی و استحکام خمشی در سرامیک‌های دندانی برسیم.',
    excerptEn: 'Mastering temperature ramp rates, pre-drying stages, and vacuum dynamics to achieve optimum dental porcelain translucency and flexural strength.',
    contentFa: [
      'یک پروتز دندانی بی‌نقص علاوه بر مهارت دستان تکنسین، در گرو پخت کنترل‌شده در محیط خلاء خالص است. در کوره‌های سری AT300 و AT300 Plus، طراحی منحصربه‌فرد مافل کوارتز گرمادهی کروی و متوازن را تضمین می‌کند.',
      'یکی از متداول‌ترین علل کدر شدن یا حباب زدن پرسلن، ورود پیش از موعد وکیوم یا سرعت بالای خشک‌شدن رطوبت خمیر پرسلن است. پیشنهاد ما این است که مرحله پیش‌پخت (Predrying) حداقل بین ۴ الی ۶ دقیقه با در بسته و دمای ۴۵۰ تا ۵۰۰ درجه سانتی‌گراد صورت گیرد تا تبخیر کامل آب مقطر حاصل گردد.',
      'کالیبراسیون دوره‌ای کوره‌ها با سیم نقره استاندارد کوشایار، صحت دمای مافل را با خطای کمتر از ۱ درجه تضمین کرده و مانع از پخت بیش‌ازحد (Over-firing) یا تغییر رنگ در گلیز نهایی می‌شود.'
    ],
    contentEn: [
      'Achieving aesthetic porcelain restorations requires mastery over vacuum evacuation rates and linear thermal ramp curves. In KFP’s AT300 series furnaces, the spiral quartz heating chamber ensures 360-degree homogeneous heat distribution around the restoration.',
      'A frequent cause of porcelain cloudiness or subsurface micro-bubbles is incomplete pre-drying or premature vacuum initiation. We recommend maintaining a steady 4 to 6-minute pre-drying soak at 450-500°C to eliminate all moisture from the porcelain slurry prior to vacuum activation.',
      'Routine furnace calibration using Koushayar certified silver-wire calibration kits guarantees temperature accuracy within ±1°C, eliminating under-firing discoloration and over-glaze surface devitrification.'
    ],
    readTime: '8 min',
    dateFa: '۲۲ شهریور ۱۴۰۳',
    dateEn: 'Sep 12, 2024',
    authorFa: 'مهندس وحید رضایی (سرپرست پشتیبانی فنی کوشایار)',
    authorEn: 'Vahid Rezaei (Koushayar Technical Lead)',
    image: '/images/article-furnace.svg',
    tagsFa: ['کوره پرسلن', 'پخت سرامیک', 'کالیبراسیون', 'کوشایار'],
    tagsEn: ['Porcelain Furnace', 'Ceramic Firing', 'Calibration', 'Koushayar']
  },
  {
    id: '3',
    slug: 'digital-workflow-cadcam-chairside-lab',
    category: 'digital',
    categoryFa: 'دندانپزشکی دیجیتال',
    categoryEn: 'Digital Dentistry',
    titleFa: 'جریان کاری دیجیتال (Digital Workflow): از اسکن داخل دهانی ۳Shape تا میلینگ imes-icore',
    titleEn: 'Complete Digital Workflow: From 3Shape Intraoral Scan to imes-icore Milling',
    excerptFa: 'بررسی گام‌به‌گام اتصال یکپارچه اسکنرهای داخل دهانی، نرم‌افزارهای طراحی اگزوکرد و میلینگ‌های ۵ محوره در مراکز مدرن دندانپزشکی.',
    excerptEn: 'A step-by-step breakdown of seamless data flow connecting intraoral impression scanners, exocad design, and 5-axis dental milling units.',
    contentFa: [
      'گذار از قالب‌گیری سنتی آلژینات و پوتی به اسکن دیجیتال نه تنها تجربه بیمار را به شدت ارتقا داده، بلکه خطاهای انقباض ماده قالب‌گیری و تغییر شکل گچ را به صفر رسانده است.',
      'با بهره‌گیری از اسکنرهای 3Shape Trios توزیع‌شده توسط کوشافن پارس، فایل‌های سه بعدی فرمت باز (STL / PLY) در کمتر از ۹۰ ثانیه ثبت شده و مستقیماً به لابراتوار ارسال می‌گردد. در فاز طراحی، هماهنگی کامل نرم‌افزار با پارامترهای ایمپلنت اویتا و کاتالوگ دندان‌های VITA به حداکثر دقت آناتومیک منجر می‌شود.',
      'سپس فایل طراحی شده به دستگاه میلینگ imes-icore 350i Pro منتقل شده و فرزکاری دیسک‌های زیرکونیا یا لیتیوم دی‌سیلیکات با دقت زیر ۳ میکرون صورت می‌گیرد. در مرحله نهایی، کوره زینترینگ ۱۶۵۰ درجه کوشافن پارس طی برنامه‌ای دقیق، رستوریشن نهایی را به اوج استحکام ۱۲۰۰ مگاپاسکال می‌رساند.'
    ],
    contentEn: [
      'Transitioning from conventional alginate and silicone impressions to digital intraoral acquisition drastically enhances patient comfort while eliminating material shrinkage and stone model distortions.',
      'Utilizing 3Shape Trios scanners distributed by KFP, full-arch open STL/PLY datasets are captured in under 90 seconds and dispatched instantly to CAD workstations. Complete integration with Avita implant libraries and VITA digital tooth catalogs ensures impeccable restorative contours.',
      'Next, the CAM output feeds into the imes-icore 350i Pro 5-axis milling machine, sculpting multi-layer zirconia discs with sub-3-micron fidelity. Sintered in KFP’s 1650°C furnace, the final restoration attains an incredible 1200+ MPa flexural resistance.'
    ],
    readTime: '7 min',
    dateFa: '۱۰ مرداد ۱۴۰۳',
    dateEn: 'Jul 31, 2024',
    authorFa: 'دکتر مریم سعیدی (متخصص پروتزهای دندانی)',
    authorEn: 'Dr. Maryam Saeedi (Prosthodontist)',
    image: '/images/article-digital.svg',
    tagsFa: ['کدکم', 'اسکنر سه بعدی', 'تریوس', 'میلینگ'],
    tagsEn: ['CAD/CAM', '3D Scanner', 'Trios', 'Milling']
  },
  {
    id: '4',
    slug: 'kfp-ids-cologne-aeedc-dubai-exhibition',
    category: 'events',
    categoryFa: 'رویدادها و اخبار',
    categoryEn: 'Events & News',
    titleFa: 'درخشش محصولات دانش‌بنیان کوشافن پارس در نمایشگاه بین‌المللی IDS و AEEDC',
    titleEn: 'KoushaFan Pars Showcases Advanced Tech at IDS Cologne and AEEDC Dubai',
    excerptFa: 'گزارش اختصاصی از حضور هیئت مهندسی و مدیران کوشافن پارس در بزرگترین گردهمایی‌های تجهیزات پزشکی و دندانپزشکی جهان.',
    excerptEn: 'An exclusive report on KFP’s successful participation at the world’s leading international dental trade shows.',
    contentFa: [
      'شرکت کوشافن پارس به عنوان یکی از پیشگامان تولید تجهیزات دندانپزشکی در غرب آسیا، با حضور پررنگ در نمایشگاه IDS کلن آلمان و AEEDC دبی امارات، جدیدترین نسل کوره‌های دندانسازی AT300 Plus و سیستم ایمپلنت اویتا را در معرض دید متخصصان بیش از ۵۰ کشور قرار داد.',
      'بازدیدکنندگان بین‌المللی از کیفیت ساخت ممتاز، مهندسی قطعات الکترونیک، سیستم عامل اختصاصی کوره‌ها و همچنین استاندارد ساخت کلین روم کلاس ۱۰،۰۰۰ تولید فیکسچر ایمپلنت در کارخانه شمس‌آباد تمجید نمودند.',
      'در حاشیه این رویداد، قراردادهای توسعه همکاری با کمپانی VITA Zahnfabrik و توافق‌نامه‌های صادرات منطقه‌ای به کشورهای حاشیه خلیج فارس، ترکیه و آسیای میانه به امضا رسید.'
    ],
    contentEn: [
      'As a premier manufacturer of high-precision dental devices, KoushaFan Pars captivated global clinicians and industry leaders at IDS Cologne and AEEDC Dubai, unveiling its flagship AT300 Plus porcelain furnace and Avita implant ecosystem to visitors from over 50 nations.',
      'International experts lauded the build quality, proprietary embedded OS, and Class 10,000 cleanroom implant manufacturing standards maintained at KFP’s Shamsabad industrial facility.',
      'Strategic expansion agreements were renewed with Germany’s VITA Zahnfabrik, alongside new distribution partnerships across the Persian Gulf, Turkey, and Central Asian markets.'
    ],
    readTime: '5 min',
    dateFa: '۱۸ تیر ۱۴۰۳',
    dateEn: 'Jul 08, 2024',
    authorFa: 'روابط عمومی و امور بین‌الملل کوشافن پارس',
    authorEn: 'KFP Public Relations & International Affairs',
    image: '/images/article-ids.svg',
    tagsFa: ['نمایشگاه IDS', 'صادرات', 'کوشافن پارس', 'بین‌الملل'],
    tagsEn: ['IDS Cologne', 'Exports', 'KoushaFan Pars', 'Global']
  }
];
