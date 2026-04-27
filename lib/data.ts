// TypeScript interfaces for Portfolio Data

export interface Skill {
  name: string;
  color: 'cyan' | 'pink' | 'green' | 'yellow' | 'white';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  overview?: string;
  features?: string[];
  techStack: string[];
  accentColor: 'pink' | 'green' | 'yellow' | 'cyan';
  images: string[];
  link?: string;
  appStoreLink?: string;
  role?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    bio: string;
    email: string;
    github: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: Skill[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Rizky',
    role: 'FULL STACK DEVELOPER',
    headline: 'BUILDING DIGITAL EXPERIENCES',
    bio: "I'm a Software Developer with approximately 6 years of experience specializing in web and mobile application development using Flutter, Kotlin, Laravel, and React. Experienced in managing projects from conceptualization to launch, with a focus on design implementation and efficient API integration. I have the ability to quickly adapt to new technologies and collaborate across teams to achieve project goals. Equipped with strong communication skills and a high willingness to learn independently. Ready to make significant contributions in a dynamic and innovative work environment.",
    email: 'rizkypsrr@gmail.com',
    github: 'https://github.com/rizkypsr',
    linkedin: 'https://id.linkedin.com/in/rizkypsr',
  },
  skills: [
    { name: 'PHP', color: 'cyan' },
    { name: 'JavaScript', color: 'yellow' },
    { name: 'TypeScript', color: 'cyan' },
    { name: 'Dart', color: 'pink' },
    { name: 'Kotlin', color: 'green' },
    { name: 'Rust', color: 'pink' },
    { name: 'Golang', color: 'cyan' },
    { name: 'Laravel', color: 'pink' },
    { name: 'Flutter', color: 'cyan' },
    { name: 'React', color: 'cyan' },
    { name: 'Vue', color: 'green' },
    { name: 'Next.js', color: 'white' },
    { name: 'Remix', color: 'yellow' },
    { name: 'Tailwind', color: 'cyan' },
    { name: 'MySQL', color: 'yellow' },
    { name: 'PostgreSQL', color: 'cyan' },
    { name: 'Git', color: 'pink' },
    { name: 'Docker', color: 'cyan' },
    { name: 'Firebase', color: 'yellow' },
  ],
  projects: [
    {
      id: 'masterluindonesia',
      title: 'Master Lu Indonesia - Website Keagamaan',
      description:
        'Platform pembelajaran digital yang menyediakan koleksi audio dharma, buku, paritta, dan materi edukasi Buddha dalam satu website terintegrasi.',
      overview:
        'Master Lu Indonesia adalah platform pembelajaran digital yang dirancang untuk memudahkan umat Buddha mengakses berbagai konten spiritual dan edukatif seperti audio dharma, perpustakaan digital, paritta, serta materi pembelajaran dalam satu platform terintegrasi yang modern dan responsif.',
      features: [
        'Koleksi audio ceramah dan pengajaran dharma dari berbagai guru spiritual',
        'Perpustakaan digital berisi buku dan teks keagamaan Buddha',
        'Kumpulan paritta (doa perlindungan) dalam format audio dan teks',
        'Materi edukasi ajaran Buddha yang terstruktur',
        'Fitur pencarian cerdas untuk menemukan konten dengan mudah',
        'Bookmark manager untuk menyimpan dan mengelola konten favorit',
        'AI Voice Guide untuk pengalaman belajar yang lebih interaktif',
        'Community playlists yang dibuat dan dibagikan oleh komunitas',
        'Desain responsif untuk berbagai perangkat',
        'Dark mode untuk kenyamanan penggunaan',
        'Progressive Web App yang dapat digunakan seperti aplikasi mobile',
      ],
      techStack: [
        'Nuxt 4',
        'Vue 3',
        'TypeScript',
        'Tailwind CSS 4',
        'Nuxt UI',
        'VueUse',
        'Better Auth',
        'Firebase Storage',
        'Google OAuth',
      ],
      accentColor: 'green',
      role: 'Fullstack Developer',
      images: [
        "https://github.com/user-attachments/assets/6dd30fb2-00c9-403c-84ac-1a4e87f4b92f",
        "https://github.com/user-attachments/assets/db94cc73-d5e9-4df7-ae89-a7595c328202",
        "https://github.com/user-attachments/assets/a0948219-d8b0-491b-89f4-09eaddab0e43",
        "https://github.com/user-attachments/assets/3ccc168c-5589-4972-9555-12ecff3bf69f",
        "https://github.com/user-attachments/assets/aa83ccb5-0c08-4dd1-9952-b98a330c1aab",
        "https://github.com/user-attachments/assets/91c98a49-bdec-4681-b536-905692f28a6e",
        "https://github.com/user-attachments/assets/68bedb81-91b9-4f78-bea9-b7fb7765ef07",
        "https://github.com/user-attachments/assets/9ffb5d13-d66d-4372-ba9b-45644ca61f10"
      ],
    },
    {
      id: 'makmurpermai',
      title: 'Makmur Permai - Sistem Manajemen Bisnis Toko Elektronik',
      description:
        'Sistem manajemen bisnis berbasis web untuk mengelola operasional perusahaan elektronik mulai dari pelanggan, supplier, produk, transaksi, inventori hingga pelaporan.',
      overview:
        'Makmur Permai adalah sistem manajemen bisnis berbasis web yang dirancang untuk mendukung operasional perusahaan elektronik secara end-to-end. Sistem ini mencakup manajemen master data, transaksi penjualan dan pembelian, inventori real-time, laporan bisnis, serta fitur keamanan dan audit. Dibangun dengan arsitektur modular menggunakan CodeIgniter HMVC agar mudah dikembangkan dan dipelihara.',
      features: [
        'Manajemen data pelanggan lengkap dengan alamat, kontak, dan rekening bank',
        'Manajemen data supplier untuk kebutuhan procurement',
        'Katalog produk dengan sistem kode otomatis dan kategori',
        'Manajemen data pipa dan aset perusahaan',
        'Sistem lookup untuk referensi data',
        'Modul penjualan dengan sistem faktur dan pengiriman',
        'Modul pembelian dengan tracking penerimaan barang',
        'Sistem pengembalian pipa dengan tracking pengiriman',
        'Manajemen stok dengan kartu stok real-time',
        'Laporan hutang dan piutang',
        'Dashboard overview bisnis',
        'Export data ke berbagai format',
        'Manajemen pengguna dengan role-based access control',
        'Sistem absensi karyawan',
        'Manajemen aset dan maintenance',
        'Audit trail untuk tracking perubahan data',
        'Session timeout otomatis dan XSS protection',
        'Soft delete untuk menjaga integritas data',
      ],
      techStack: [
        'CodeIgniter 3 (HMVC)',
        'MySQL / MariaDB',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'DataTables',
        'TCPDF',
      ],
      accentColor: 'yellow',
      role: 'Fullstack Developer',
      images: [
        'https://github.com/user-attachments/assets/7f7156cc-25be-44f8-b927-edadc9c8663a',
        'https://github.com/user-attachments/assets/44362b30-dfac-427c-ba01-dff7929435fb',
        'https://github.com/user-attachments/assets/c07afad9-1db9-4f60-b314-796480e12827',
      ],
    },
    {
      id: 'iin-management-system',
      title: 'IIN Management System',
      description:
        'Issuer Identification Number management system for handling applications, verification, and IIN issuance. Supports National IIN and Single Blockholder with complete workflow, admin dashboard, and role-based access control.',
      overview:
        'The IIN Management System is a web application designed to manage the application, verification, and issuance process of Issuer Identification Numbers for institutions. The system provides a comprehensive digital platform to manage two main service types: National IIN and Single Blockholder IIN, with a structured workflow from application to certificate issuance.',
      features: [
        'National IIN application management with complete workflow from application, revision, payment, field verification, to issuance',
        'Single Blockholder IIN application management with staged payment system (2 stages) and field verification',
        'IIN supervision system for issued IINs (both national and single blockholder)',
        'Comprehensive admin dashboard with statistics, user management, and application monitoring',
        'Document upload system for payment proofs, field verification documents, and additional documents',
        'Real-time status tracking with activity logs and notifications',
        'Form template management system for downloadable templates',
        'Survey system for service evaluation after certificate issuance',
        'Export and download capabilities for certificates, documents, and Excel data',
        'Role-based access control with Spatie Laravel Permission',
      ],
      techStack: ['Laravel Inertia', 'React', 'Tailwind CSS', 'MySQL', 'TypeScript'],
      accentColor: 'pink',
      role: 'Fullstack Developer',
      images: [
        'https://github.com/user-attachments/assets/a940243f-3f75-4da2-9d03-04f314762212',
        'https://github.com/user-attachments/assets/0f6ab0fa-c4a4-4861-86dc-28730ec0bc75',
        'https://github.com/user-attachments/assets/cb33103f-459f-4904-8c4a-d6d7a0a84fcb',
        'https://github.com/user-attachments/assets/f0670a2e-105f-4642-aa11-32d46cf5c622',
        'https://github.com/user-attachments/assets/86f96e79-4a63-4440-a5d4-eefa84a2d47c',
        'https://github.com/user-attachments/assets/d11be581-cc8a-4ceb-868a-32b525b9ff6e',
      ],
    },
    {
      id: 'e-montir',
      title: 'E-montir',
      description:
        'Information system for Sorong Regency Government that facilitates data and report management. Features include user authentication, comprehensive data management, fund source and ceiling management, activity locations, and quarterly reports.',
      overview:
        'E-Montir is an information system designed to facilitate data and report management within the Sorong Regency Government. The application aims to improve efficiency in resource management, simplify activity monitoring, and present structured reports to support decision-making.',
      features: [
        'Secure user authentication system',
        'Comprehensive data management for users, affairs, organizations, programs, activities, and targets',
        'Fund source and budget ceiling management',
        'Activity location management for better monitoring',
        'Quarterly report management',
      ],
      techStack: ['React', 'Golang', 'MySQL', 'Docker', 'Leaflet'],
      accentColor: 'green',
      role: 'Frontend Developer',
      images: [
        'https://github.com/user-attachments/assets/465c678a-3c2e-4c8c-8ae7-654ff306f060',
        'https://github.com/user-attachments/assets/0f566386-8326-48c8-a460-9b702c33b403',
        'https://github.com/user-attachments/assets/cf303b4e-43fc-4ce6-b7ab-00d81a551416',
        'https://github.com/user-attachments/assets/f94fe7eb-d3df-4f5c-a478-936830a97c00',
      ],
    },
    {
      id: 'siagas',
      title: 'SIAGAS',
      description:
        'Information system to improve transparency and efficiency in regional innovation management for Sorong Regency Government. Enables monitoring and evaluation of innovations, regional innovation index review management, and innovation recap reports.',
      overview:
        'SIAGAS is an information system aimed at improving transparency and efficiency in regional innovation management. The application enables monitoring and evaluation of innovations implemented by the Regional Government, and provides ease in managing related data and reports.',
      features: [
        'Secure user authentication system',
        'Comprehensive data management for users, affairs, organizations, programs, activities, and targets',
        'Fund source and budget ceiling management',
        'Activity location management for better monitoring',
        'Quarterly report management',
        'Regional Innovation Index review management with ranking, review results, achievements, and SIAGAS ranking',
        'Regional innovation and OPD profile management',
        'Average OPD index report management',
        'Innovation recap reports by type, form, government affairs, and initiator',
      ],
      techStack: ['React', 'Golang', 'MySQL', 'Docker'],
      accentColor: 'yellow',
      role: 'Frontend Developer',
      images: [
        'https://github.com/user-attachments/assets/1f420a35-ec58-4aba-bc01-780b3a3603ef',
        'https://github.com/user-attachments/assets/1e1be3c7-7aba-4529-b926-4cd9e7af76df',
        'https://github.com/user-attachments/assets/10117b12-a63c-4578-9a65-3969f91239c3',
        'https://github.com/user-attachments/assets/78944ec9-8edc-4005-8cdf-2b7d1550e5a0',
        'https://github.com/user-attachments/assets/0edf4fe0-f03c-44fd-b6d4-c20fba7bdffd',
      ],
    },
    {
      id: 'dkpp-jombang',
      title: 'DKPP Jombang',
      description:
        'Information system for Jombang Regency Government to manage monitoring and evaluation reports (monev), action plans (renaksi), and planning and budgeting activities (kurja). Supports report generation in Excel format.',
      overview:
        'This application is designed to help regional governments manage and monitor monitoring and evaluation reports (monev), action plans (renaksi), and planning and budgeting activities (kurja). With comprehensive features, the application facilitates data collection, management, and analysis to improve transparency and accountability in the reporting process.',
      features: [
        'Monev Renaksi report management',
        'Kurja (planning and budgeting) report management',
        'Master data management for analysis and reporting',
        'Report generation in Excel format for easy analysis and distribution',
      ],
      techStack: ['Laravel Inertia', 'React', 'Laravel', 'MySQL'],
      accentColor: 'cyan',
      role: 'Fullstack Developer',
      images: [
        'https://github.com/user-attachments/assets/5bf6fdba-59e6-428a-8154-ececb8c18a4f',
        'https://github.com/user-attachments/assets/6c042048-c2fb-4c58-8a1f-0783914abc67',
        'https://github.com/user-attachments/assets/03c94849-d394-45e5-a4ac-d49651fde88e',
        'https://github.com/user-attachments/assets/7cd5e11a-d31a-4344-9ef0-929a63e78406',
      ],
    },
    {
      id: 'beresin-sampah',
      title: 'Beresin Sampah',
      description:
        'Web and mobile-based waste management application to simplify waste management in communities. Features include waste reporting, user management, transactions, statistical reports, notifications, and admin panel.',
      overview:
        'Beresin Sampah is a web and mobile-based solution designed to simplify waste management in communities. The application provides a platform for users to report the type and volume of waste generated, and provides information needed to increase awareness and action related to waste management.',
      features: [
        'Waste reporting and management by type and volume',
        'User management including registration, authentication, and profiles',
        'Transaction management for waste handling and payments',
        'Reports and statistics on waste data and collection frequency',
        'Notifications for collection schedules and updates',
        'Admin panel for managing users, waste data, and reports',
        'Integrated REST API for secure mobile app data access',
        'Responsive UI for great experience across devices',
      ],
      techStack: ['Flutter', 'Laravel', 'MySQL'],
      accentColor: 'pink',
      role: 'Fullstack Developer',
      images: [],
      appStoreLink:
        'https://play.google.com/store/apps/details?id=com.beres.mobile&pcampaignid=web_share',
    },
    {
      id: 'emub-apps',
      title: 'Emub Apps',
      description:
        'Mobile application for new students at Brawijaya University providing guidance, complaints, and task assistance. Features include real-time chat, notifications, and integration with university servers.',
      overview:
        'Emub Apps is a mobile application designed to provide guidance, complaints handling, and task assistance for new students at Brawijaya University. This internal application is intended to support new students in adapting to the campus environment.',
      features: [
        'Consistent UI aligned with Brawijaya University design guidelines',
        'Server integration using API for real-time data management',
        'Relevant and timely notifications via Firebase integration',
        'Real-time chat feature for communication with university staff and fellow students',
        'Task and information management to stay connected with university updates',
        'Multiplatform support for wide accessibility',
      ],
      techStack: ['Flutter', 'Laravel', 'MySQL', 'Firebase'],
      accentColor: 'green',
      role: 'Frontend Developer',
      images: [],
      appStoreLink: 'https://play.google.com/store/apps/details?id=com.emub.apps2023',
    },
    {
      id: 'android-widget-fit-tracker',
      title: 'Android Widget Fit Tracker',
      description:
        'Android widget for tracking physical activities and health metrics such as Nutrition, Sleep, Water, Period, and Positiveness. Widget updates data via API every 30 minutes and calculates activity streaks.',
      features: [
        'Track activities like Nutrition, Sleep, Water, Period, and Positiveness',
        'Widget updates data via API every 30 minutes',
        'Streak calculation for completed activities',
      ],
      techStack: ['React Native', 'Kotlin', 'Work Manager'],
      accentColor: 'yellow',
      images: [
        'https://github.com/user-attachments/assets/d1c59163-77d3-4899-999f-a4f1ed3db449',
        'https://github.com/user-attachments/assets/49103d80-52bf-4a6d-b488-20f89d5fd161',
      ],
    },
    {
      id: 'silingo',
      title: 'Silingo',
      description:
        'Sign language learning application for Android and iOS. Provides vocabulary per letter, learning videos, camera-based gesture quizzes, multiple choice quizzes, and challenges based on difficulty levels.',
      overview:
        'Silingo is an Android and iOS application for anyone who wants to learn sign language. It contains extensive vocabulary materials per letter, quizzes in the form of performing gestures directly through the camera, and multiple choice quizzes.',
      features: [
        'Extensive vocabulary for each letter with video learning materials',
        'Camera-based quiz for performing sign language gestures',
        'Multiple choice quiz format',
        'Challenges based on difficulty levels',
        'Cross-platform support for Android and iOS',
      ],
      techStack: ['Flutter', 'Firebase', 'Riverpod', 'Go Router'],
      accentColor: 'cyan',
      images: [
        'https://github.com/user-attachments/assets/c132082c-6b6b-4655-9298-959ed4398f1a',
        'https://github.com/user-attachments/assets/9b8ac2cf-47df-4e35-8aae-cd3dac1e9ef1',
        'https://github.com/user-attachments/assets/6ab22edc-8592-4dba-a805-1e09ef16ba72',
        'https://github.com/user-attachments/assets/b34869ea-50d7-4416-b037-f4172f6f275d',
        'https://github.com/user-attachments/assets/ac34eab1-0266-487b-8f8c-8f14f778e4e9',
        'https://github.com/user-attachments/assets/abbc66ee-ea0b-4467-862d-68e87059f431',
        'https://github.com/user-attachments/assets/019baf35-1722-46ff-9c03-9f1175126748',
        'https://github.com/user-attachments/assets/0ec85b61-9fe3-4de4-bf15-bbf0cc1c0740',
        'https://github.com/user-attachments/assets/beaaf928-1d89-444d-a640-4ec65c942a42',
        'https://github.com/user-attachments/assets/5e205336-c7e7-4680-aeb7-f4b6302bab06',
        'https://github.com/user-attachments/assets/27e21163-f16f-4ddc-a2f5-cb424370cc45',
      ],
    },
    {
      id: 'telegram-bot-solana',
      title: 'Telegram Bot Solana',
      description:
        'Telegram bot for tracking new pairs on Solana Blockchain (Raydium Dex). Polls data from Solana RPC, sends notifications to groups when new pairs are detected, and integrates with trading bots for instant buy and RugCheck for token analysis.',
      features: [
        'Polls data from Solana RPC for new pair detection',
        'Sends notifications to groups or specific users when new pairs are detected',
        'Integration with Trojan, BonkBot, Sol Trading Bot for instant buy',
        'Integration with RugCheck for token analysis',
      ],
      techStack: ['JavaScript', 'Telegraf.js', 'Solana SDK'],
      accentColor: 'pink',
      images: [
        'https://github.com/user-attachments/assets/16a19b78-6f5a-4991-a5b9-7ee39bf96e81',
      ],
    },
  ],
};
