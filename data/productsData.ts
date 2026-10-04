export interface Product {
  id: string;
  category: 'furnaces' | 'implants' | 'lab-equipment' | 'international';
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  featuresFa: string[];
  featuresEn: string[];
  specsFa: Record<string, string>;
  specsEn: Record<string, string>;
  image: string;
  badgeFa?: string;
  badgeEn?: string;
}

export const products: Product[] = [
  {
    id: 'at300-plus',
    category: 'furnaces',
    titleFa: 'کوره پرسلن AT300 Plus',
    titleEn: 'AT300 Plus Porcelain Furnace',
    subtitleFa: 'پیشرفته‌ترین کوره دندانپزشکی ساخت ایران با نمایشگر لمسی',
    subtitleEn: 'State-of-the-art Iranian Dental Porcelain Furnace with Touchscreen',
    descriptionFa: 'کوره پرسلن AT300 Plus پرچمدار کوره‌های پخت پرسلن کوشافن پارس است. مجهز به سیستم وکیوم پیشرفته، مافل کوارتز با بالاترین ضریب انتقال حرارت و ۲۰۰ برنامه پخت قابل تنظیم جهت انواع سرامیک‌های دندانی با تضمین دقت حرارتی ±۱ درجه سانتی‌گراد.',
    descriptionEn: 'The AT300 Plus is KFP’s flagship porcelain firing furnace. Equipped with an advanced vacuum system, high-durability quartz muffle, and 200 programmable firing cycles designed for all dental ceramic systems with ±1°C thermal accuracy.',
    featuresFa: [
      'نمایشگر رنگی ۷ اینچی لمسی با رابط کاربری فارسی و انگلیسی',
      'سیستم کالیبراسیون اتوماتیک حرارت و سنسور پلاتین-رودیوم',
      'پمپ خلاء بی‌صدا با تکنولوژی بدون روغن (Oil-free)',
      'سیستم خنک‌کننده کنترل‌شده اتوماتیک جهت جلوگیری از شوک حرارتی سرامیک',
      'قابلیت اتصال USB جهت به‌روزرسانی برنامه‌های پخت و عیب‌یابی هوشمند'
    ],
    featuresEn: [
      '7-inch color touchscreen with bilingual UI (FA/EN)',
      'Automatic temperature calibration with Platinum-Rhodium thermocouple',
      'Ultra-silent oil-free vacuum pump',
      'Automated controlled cooling stages preventing thermal shock',
      'USB connectivity for firing program updates and smart diagnostics'
    ],
    specsFa: {
      'حداکثر دما': '۱۲۰۰ درجه سانتی‌گراد',
      'نرخ افزایش دما': 'تا ۱۴۰ درجه بر دقیقه',
      'تعداد برنامه‌ها': '۲۰۰ برنامه هوشمند',
      'ولتاژ و مصرف': '۲۲۰ ولت / ۱۴۰۰ وات',
      'ابعاد و وزن': '۴۰ × ۳۸ × ۵۶ سانتی‌متر / ۲۶ کیلوگرم'
    },
    specsEn: {
      'Max Temperature': '1200 °C',
      'Heating Rate': 'Up to 140 °C/min',
      'Programs Count': '200 Intelligent Programs',
      'Power Supply': '220V / 1400W',
      'Dimensions & Weight': '40 × 38 × 56 cm / 26 kg'
    },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'محصول برگزیده دانش‌بنیان',
    badgeEn: 'Knowledge-Based Choice'
  },
  {
    id: 'at300p-press',
    category: 'furnaces',
    titleFa: 'کوره پرس و پرسلن AT300P',
    titleEn: 'AT300P Press & Porcelain Furnace',
    subtitleFa: 'سیستم دوکاره هوشمند پرس سرامیک و پخت پرسلن',
    subtitleEn: 'Dual-action Press & Porcelain System with Pneumatic Micro-control',
    descriptionFa: 'کوره AT300P طراحی شده جهت پرس انواع سرامیک‌های لیتیوم دی‌سیلیکات و پخت لایه‌ای پرسلن. دارای محرک پنوماتیک دقیق بدون افت فشار و کنترل دیجیتالی فشار تزریق جهت دستیابی به حداکثر تطابق مارجینال رستوریشن‌ها.',
    descriptionEn: 'Engineered for pressable lithium disilicate ceramics and standard layered porcelain firing. Features a micro-pneumatic actuator ensuring pressure precision and optimal marginal restoration adaptation.',
    featuresFa: [
      'مکانیسم پیستون پنوماتیک بسیار دقیق با حسگرهای اپتیکی',
      'پشتیبانی از سیلندرهای ۱۰۰ گرمی و ۲۰۰ گرمی',
      'سنسور تشخیص خودکار ترک‌خوردگی یا اتمام تزریق پرسلن',
      'حفظ یکنواختی دما در سراسر محفظه مافل'
    ],
    featuresEn: [
      'Precision pneumatic ram mechanism with optical positioning',
      'Supports 100g and 200g investment rings',
      'Automated crack detection and press completion sensing',
      'Optimal thermal uniformity across the entire firing chamber'
    ],
    specsFa: {
      'حداکثر دما': '۱۲۰۰ درجه سانتی‌گراد',
      'فشار پرس': 'قابل تنظیم بین ۰ تا ۵ بار',
      'دقت سنسور': '±۰.۵ درجه سانتی‌گراد',
      'وزن': '۳۰ کیلوگرم'
    },
    specsEn: {
      'Max Temperature': '1200 °C',
      'Press Pressure': 'Adjustable 0 to 5 Bar',
      'Sensor Accuracy': '±0.5 °C',
      'Weight': '30 kg'
    },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'فناوری پرس سرامیک',
    badgeEn: 'Press Technology'
  },
  {
    id: 'zirconia-sintering-1650',
    category: 'furnaces',
    titleFa: 'کوره زینترینگ زیرکونیا 1650L',
    titleEn: '1650L Zirconia Sintering Furnace',
    subtitleFa: 'کوره دما بالای صنعتی تا ۱۶۵۰ درجه سانتی‌گراد برای کدکم',
    subtitleEn: 'High-Temperature 1650°C Furnace for CAD/CAM Dental Zirconia',
    descriptionFa: 'کوره ۱۶۵۰ درجه اختصاصی جهت تف‌جوشی و سینترینگ دیسک‌ها و فریم‌های زیرکونیا. مجهز به ۴ المنت حرارتی MoSi2 (دی‌سیلیسید مولیبدن) با خلوص بالا برای جلوگیری از هرگونه تغییر رنگ و ایجاد ترنسلوسنسی حداکثری در رستوریشن‌های تمام سرامیک.',
    descriptionEn: 'Dedicated high-temperature furnace up to 1650°C for sintering CAD/CAM zirconia copings, bridges, and full-contour restorations. Equipped with pure MoSi2 heating elements to prevent contamination and ensure unmatched translucency.',
    featuresFa: [
      'چهار المنت MoSi2 ساخت معتبرترین تولیدکنندگان جهانی',
      'قابلیت سینترینگ همزمان بیش از ۵۰ واحد دندانی در ۳ طبقه',
      'سیستم برنامه‌ریزی چندمرحله‌ای با تنظیم دقیق شیب حرارتی',
      'عایق‌بندی سرامیک نسوز با هدررفت حداقل انرژی'
    ],
    featuresEn: [
      'Four ultra-pure MoSi2 elements preventing any zirconia discoloration',
      'Multi-tier capacity for sintering up to 50+ units simultaneously',
      'Multi-stage programmable ramping and soaking intervals',
      'Premium refractory insulation minimizing heat loss'
    ],
    specsFa: {
      'حداکثر دما': '۱۶۵۰ درجه سانتی‌گراد',
      'ظرفیت سینی': '۳ طبقه ساگار',
      'تعداد المنت': '۴ عدد دی‌سیلیسید مولیبدن',
      'توان مصرفی': '۲۸۰۰ وات'
    },
    specsEn: {
      'Max Temperature': '1650 °C',
      'Tray Capacity': '3-layer Sagger trays',
      'Elements': '4x Molybdenum Disilicide (MoSi2)',
      'Power Rating': '2800 W'
    },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'دندانپزشکی دیجیتال',
    badgeEn: 'Digital Dentistry'
  },
  {
    id: 'avita-implant-system',
    category: 'implants',
    titleFa: 'سیستم ایمپلنت دندانی اویتا (Avita)',
    titleEn: 'Avita Dental Implant System',
    subtitleFa: 'ایمپلنت بومی دانش‌بنیان با عملیات سطحی SLA و خلوص تیتانیوم گرید ۴ و ۵',
    subtitleEn: 'Iranian Knowledge-Based Dental Implant with SLA Surface & Pure Titanium',
    descriptionFa: 'سیستم ایمپلنت دندانی «اویتا» حاصل بیش از یک دهه پژوهش بیومتریال و مهندسی پزشکی نخبگان ایران در کوشافن پارس است. این سیستم با طراحی بیومکانیکی مدرن رزوه، کانکشن مخروطی هگزاگونال و عملیات سطحی سندروبلاست شده و اسید اچ شده (SLA)، نرخ استئواینتگریشن فوق‌العاده و موفقیت بالینی بالای ۹۸.۵٪ را تضمین می‌کند.',
    descriptionEn: 'The Avita Dental Implant System is the pinnacle of over a decade of biomaterials research at KFP. Featuring biomechanically optimized thread geometries, internal conical hex connection, and proven SLA surface treatment ensuring rapid osseointegration and over 98.5% clinical success.',
    featuresFa: [
      'سطح پیشرفته SLA با زبری بهینه جهت تسریع استخوان‌سازی و ثبات اولیه',
      'کانکشن Internal Conical Hex 11° با اتصال بدون میکروگپ و سیل باکتریال کامل',
      'طراحی اپیکال تیپرینگ خودبرنده (Self-Tapping) با ترومای استخوانی حداقل',
      'کیت جراحی یونیورسال ارگونومیک با دریل‌های با پوشش کربن شبه‌الماس (DLC)',
      'گارانتی مادام‌العمر تعویض فیکسچر (Lifetime Warranty)'
    ],
    featuresEn: [
      'Advanced SLA micro-rough surface for accelerated osseointegration',
      '11° internal conical hex connection with airtight bacterial hermetic seal',
      'Self-tapping tapered apical design minimizing bone stress',
      'Ergonomic surgical kit with DLC diamond-coated precision drills',
      'Comprehensive Lifetime Fixture Replacement Warranty'
    ],
    specsFa: {
      'قطرهای فیکسچر': '۳.۵، ۳.۸، ۴.۳، ۴.۸ و ۵.۳ میلی‌متر',
      'طول‌های فیکسچر': '۷، ۸.۵، ۱۰، ۱۱.۵ و ۱۳ میلی‌متر',
      'جنس آلیاژ': 'تیتانیوم گرید ۴ و ۵ پزشکی استاندارد ASTM F67/F136',
      'کانکشن': '۱۱ درجه مورستاپر مخروطی'
    },
    specsEn: {
      'Fixture Diameters': '3.5, 3.8, 4.3, 4.8 & 5.3 mm',
      'Fixture Lengths': '7.0, 8.5, 10.0, 11.5 & 13.0 mm',
      'Material': 'Medical Grade 4 & 5 Titanium (ASTM F67/F136)',
      'Connection': '11° Morse Taper Conical Hex'
    },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'گارانتی مادام‌العمر',
    badgeEn: 'Lifetime Warranty'
  },
  {
    id: 'at100-porcelain',
    category: 'furnaces',
    titleFa: 'کوره پرسلن AT100 کلاسیک',
    titleEn: 'AT100 Classic Porcelain Furnace',
    subtitleFa: 'مطمئن‌ترین و با سابقه‌ترین کوره پخت پرسلن در سراسر ایران',
    subtitleEn: 'The Most Trusted & Battle-tested Dental Porcelain Furnace in Iran',
    descriptionFa: 'کوره AT100 شناخته‌شده‌ترین کوره پرسلن در لابراتوارهای دندانسازی کشور با بیش از دو دهه رکورد اطمینان. طراحی شده برای پخت دقیق، کاربری بسیار آسان، استهلاک ناچیز و دوام بی‌همتا در شرایط کاری پیوسته.',
    descriptionEn: 'The AT100 is the most recognizable furnace in Iranian dental laboratories, with over two decades of proven reliability. Built for continuous heavy-duty cycles, easy operation, and unmatched longevity.',
    featuresFa: [
      'کنترلر دیجیتالی دقیق با ۱۰۰ برنامه حافظه آزاد',
      'مافل کوارتز مارپیچ مقاوم با پخش حرارت ۳۶۰ درجه یکنواخت',
      'سیستم تخلیه خلاء فوری و پایدار',
      'دسترسی فوری به قطعات یدکی در سراسر ایران'
    ],
    featuresEn: [
      'Digital precision controller with 100 customizable memory programs',
      'Spiral quartz muffle with 360° uniform heat dissipation',
      'Instant and stabilized vacuum evacuation',
      'Instant nationwide spare parts availability'
    ],
    specsFa: {
      'حداکثر دما': '۱۲۰۰ درجه سانتی‌گراد',
      'وزن': '۲۴ کیلوگرم',
      'پمپ خلاء': 'مجزا و بدون روغن',
      'گارانتی': '۲ سال گارانتی رسمی کوشایار'
    },
    specsEn: {
      'Max Temperature': '1200 °C',
      'Weight': '24 kg',
      'Vacuum Pump': 'Dedicated Oil-Free',
      'Warranty': '2 Years Koushayar Official Warranty'
    },
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'پرفروش‌ترین محصول',
    badgeEn: 'Best Seller'
  },
  {
    id: 'dental-lab-benches',
    category: 'lab-equipment',
    titleFa: 'میزهای تخصصی لابراتواری و کلینیکی',
    titleEn: 'Specialized Lab & Clinical Benches',
    subtitleFa: 'طراحی ارگونومیک، مجهز به ساکشن گرد و غبار، هندپیس و اتصالات استاندارد',
    subtitleEn: 'Ergonomic Workstations with Integrated Dust Suction & Utility Ports',
    descriptionFa: 'میزهای تخصصی لابراتواری و آموزشی دندانسازی کوشافن پارس با رعایت بالاترین اصول ارگونومی، صفحات کار ضدخراش و مقاوم به حرارت، سیستم ساکشن بی‌صدا و سیستم‌های نورپردازی طبیعی طراحی شده‌اند.',
    descriptionEn: 'Engineered for dental laboratories and university training centers, adhering to ergonomic guidelines with scratch/chemical-resistant surfaces, silent cyclonic dust evacuation, and color-balanced shadowless LED lighting.',
    featuresFa: [
      'مکش پرقدرت سیکلونی مجهز به فیلتر هپا (HEPA) جهت حفظ سلامت تنفسی تکنسین',
      'بدنه فلزی الکترواستاتیک ضدزنگ و رویه سنگ مصنوعی کورین یا استیل ۳۰۴',
      'شلف‌های مدولار با ورودی‌های باد فشرده، گاز شهری و برق ایمن ارت‌دار',
      'پشتیبانی از میکروموتور و هندپیس‌های لابراتواری'
    ],
    featuresEn: [
      'High-power cyclonic suction with HEPA filtration protecting technician health',
      'Electrostatic anti-corrosion steel frame with Corian or 304 stainless top',
      'Modular utility shelves with compressed air, gas, and grounded electrical lines',
      'Built-in docking for laboratory micromotors and handpieces'
    ],
    specsFa: {
      'مدل‌ها': 'یک نفره، دو نفره و مدولار آموزشی',
      'سیستم ساکشن': 'موتور اینورتر کم‌صدا ۶۵ دسی‌بل',
      'نور': 'پنل LED ۶۰۰۰ کلوین بدون سایه',
      'ابعاد تیپیک': '۱۲۰ × ۶۵ × ۸۵ سانتی‌متر'
    },
    specsEn: {
      'Models': 'Single, Dual, and Modular Educational Units',
      'Suction System': 'Low-noise 65dB inverter suction motor',
      'Lighting': '6000K daylight shadow-free LED panel',
      'Typical Size': '120 × 65 × 85 cm'
    },
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'استاندارد ارگونومی',
    badgeEn: 'Ergonomic Standard'
  },
  {
    id: 'vita-german-materials',
    category: 'international',
    titleFa: 'سرامیک‌ها و دندان مصنوعی VITA آلمان',
    titleEn: 'VITA Zahnfabrik German Materials & Ceramics',
    subtitleFa: 'نمایندگی رسمی و انحصاری ویتا در ایران برای سرامیک‌ها و زیرکونیا',
    subtitleEn: 'Official & Exclusive VITA Partner in Iran for Premium Dental Ceramics',
    descriptionFa: 'کوشافن پارس نماینده رسمی کمپانی شهیر VITA Zahnfabrik آلمان در ایران است. ارائه دهنده پودرهای پرسلن VM9 و VM13، بلوک‌های انامیکی VITA Enamic، شیدگایدهای استاندارد جهانی Toothguide 3D-Master و دندان‌های مصنوعی پریمیوم.',
    descriptionEn: 'KFP is the official and exclusive distributor of VITA Zahnfabrik Germany in Iran, supplying VM9 and VM13 porcelain powders, hybrid VITA Enamic blocks, global 3D-Master shade guides, and premium denture teeth.',
    featuresFa: [
      'سیستم شیدگاید بین‌المللی VITA 3D-Master و classical A1-D4',
      'پودرهای سرامیک فلدسپاتیک با فلورسانس و اپالسنسی طبیعی دندان',
      'بلوک‌های CAD/CAM انامیک و سوپراینیتی',
      'اصالت قطعی ۱۰۰٪ کالا همراه با برچسب اصالت سازمان غذا و دارو'
    ],
    featuresEn: [
      'Worldwide standard VITA 3D-Master and Classical shade guides',
      'Feldspathic ceramics with natural fluorescence and opalescence',
      'Advanced hybrid CAD/CAM blocks (Enamic & Suprinity)',
      '100% genuine guaranteed with official health ministry verification'
    ],
    specsFa: {
      'کشور مبدا': 'آلمان (Bad Säckingen)',
      'تاییدیه': 'CE 0124 و FDA آمریکا',
      'سبد کالا': 'سرامیک، بلوک کدکم، دندان آکریلی، کاندیشنر'
    },
    specsEn: {
      'Country of Origin': 'Germany (Bad Säckingen)',
      'Certifications': 'CE 0124 & US FDA',
      'Product Range': 'Ceramics, CAD/CAM Blocks, Acrylic Teeth, Stains'
    },
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'نمایندگی رسمی آلمان',
    badgeEn: 'Official German Partner'
  },
  {
    id: 'cadcam-3shape-imes',
    category: 'international',
    titleFa: 'اسکنرها و میلینگ‌های 3Shape و imes-icore',
    titleEn: '3Shape Scanners & imes-icore Milling Machines',
    subtitleFa: 'تجهیز صفر تا صد مراکز دندانپزشکی دیجیتال با تکنولوژی دانمارک و آلمان',
    subtitleEn: 'Turnkey Digital Dentistry Solutions with Danish & German Tech',
    descriptionFa: 'کوشافن پارس پل ارتباطی دندانپزشکان ایران با جدیدترین راهکارهای دیجیتال دنیاست. عرضه اسکنرهای داخل دهانی Trios کمپانی 3Shape دانمارک و دستگاه‌های پیشرفته فرز میلینگ CNC کمپانی imes-icore آلمان با پشتیبانی نرم‌افزاری و آموزش تخصصی.',
    descriptionEn: 'Connecting Iran’s dental practitioners with leading world digital solutions. Distributing 3Shape Trios intraoral scanners and imes-icore high-precision CNC dental milling machines backed by complete technical support.',
    featuresFa: [
      'اسکنرهای داخل دهانی بی‌سیم با سرعت و دقت میکرونی بدون نیاز به پودر',
      'ماشین‌های میلینگ ۵ محوره همزمان تر و خشک imes-icore 350i Pro',
      'دوره‌های جامع آموزشی کار با نرم‌افزارهای دندانپزشکی و کم/کد',
      'پشتیبانی فنی آنلاین و تامین ابزار فرز و کلت‌های اورجینال'
    ],
    featuresEn: [
      'Wireless powderless intraoral scanners with micron-level fidelity',
      'imes-icore 350i Pro 5-axis simultaneous wet & dry dental milling units',
      'Comprehensive CAD/CAM software certification courses',
      'Live technical hotline and original burs/accessories supply'
    ],
    specsFa: {
      'برندهای همکار': '3Shape (دانمارک)، imes-icore (آلمان)',
      'دقت تراش میلینگ': 'کمتر از ۵ میکرون',
      'نرم‌افزار': 'کاملاً سازگار با Dental System و exocad'
    },
    specsEn: {
      'Partner Brands': '3Shape (Denmark), imes-icore (Germany)',
      'Milling Precision': '< 5 Microns',
      'Software': 'Fully compatible with Dental System & exocad'
    },
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
    badgeFa: 'فناوری روز اروپا',
    badgeEn: 'European Technology'
  }
];
