// TypeScript interfaces for Portfolio Data

export interface Skill {
  name: string;
  color: 'cyan' | 'pink' | 'green' | 'yellow' | 'white';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  accentColor: 'pink' | 'green' | 'yellow' | 'cyan';
  images: string[];
  link?: string;
  appStoreLink?: string;
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
    bio: "I'm a Software Developer with approximately 4 years of experience specializing in web and mobile application development using Flutter, Kotlin, Laravel, and React. Experienced in managing projects from conceptualization to launch, with a focus on design implementation and efficient API integration. I have the ability to quickly adapt to new technologies and collaborate across teams to achieve project goals. Equipped with strong communication skills and a high willingness to learn independently. Ready to make significant contributions in a dynamic and innovative work environment.",
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
      id: 'telegram-bot-solana',
      title: 'Telegram Bot Solana',
      description:
        'Telegram bot for tracking new pairs on Solana Blockchain (Raydium Dex). Polls data from Solana RPC, sends notifications to groups when new pairs are detected, and integrates with trading bots for instant buy and RugCheck for token analysis.',
      techStack: ['JavaScript', 'Telegraf.js', 'Solana SDK'],
      accentColor: 'pink',
      images: [
        'https://github.com/user-attachments/assets/16a19b78-6f5a-4991-a5b9-7ee39bf96e81',
      ],
    },
    {
      id: 'e-montir',
      title: 'E-montir',
      description:
        'Information system for Sorong Regency Government that facilitates data and report management. Features include user authentication, comprehensive data management, fund source and ceiling management, activity locations, and quarterly reports.',
      techStack: ['React', 'Golang', 'MySQL', 'Docker', 'Leaflet'],
      accentColor: 'green',
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
      techStack: ['React', 'Golang', 'MySQL', 'Docker'],
      accentColor: 'yellow',
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
      techStack: ['Laravel Inertia', 'React', 'Laravel', 'MySQL'],
      accentColor: 'cyan',
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
      techStack: ['Flutter', 'Laravel', 'MySQL'],
      accentColor: 'pink',
      images: [],
      appStoreLink:
        'https://play.google.com/store/apps/details?id=com.beres.mobile&pcampaignid=web_share',
    },
    {
      id: 'emub-apps',
      title: 'Emub Apps',
      description:
        'Mobile application for new students at Brawijaya University providing guidance, complaints, and task assistance. Features include real-time chat, notifications, and integration with university servers.',
      techStack: ['Flutter', 'Laravel', 'MySQL', 'Firebase'],
      accentColor: 'green',
      images: [],
      appStoreLink: 'https://play.google.com/store/apps/details?id=com.emub.apps2023',
    },
    {
      id: 'android-widget-fit-tracker',
      title: 'Android Widget Fit Tracker',
      description:
        'Android widget for tracking physical activities and health metrics such as Nutrition, Sleep, Water, Period, and Positiveness. Widget updates data via API every 30 minutes and calculates activity streaks.',
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
      id: 'iin-management-system',
      title: 'IIN Management System',
      description:
        'Issuer Identification Number management system for handling applications, verification, and IIN issuance. Supports National IIN and Single Blockholder with complete workflow, admin dashboard, and role-based access control.',
      techStack: ['Laravel Inertia', 'React', 'Tailwind CSS', 'MySQL', 'TypeScript'],
      accentColor: 'pink',
      images: [
        'https://github.com/user-attachments/assets/a940243f-3f75-4da2-9d03-04f314762212',
        'https://github.com/user-attachments/assets/0f6ab0fa-c4a4-4861-86dc-28730ec0bc75',
        'https://github.com/user-attachments/assets/cb33103f-459f-4904-8c4a-d6d7a0a84fcb',
        'https://github.com/user-attachments/assets/f0670a2e-105f-4642-aa11-32d46cf5c622',
        'https://github.com/user-attachments/assets/86f96e79-4a63-4440-a5d4-eefa84a2d47c',
        'https://github.com/user-attachments/assets/d11be581-cc8a-4ceb-868a-32b525b9ff6e',
      ],
    },
  ],
};
