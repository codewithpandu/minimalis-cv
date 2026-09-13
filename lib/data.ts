export type Experience = {
  period: string;
  company: string;
  location: string;
  role: string;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  category: string;
  meta: string;
  title: string;
  description: string;
  result: string;
  image: string;
  url: string;
  cta: string;
  kind: "chart" | "wireframe" | "tokens";
};

export type SkillGroup = {
  icon: "layers" | "handyman" | "terminal";
  title: string;
  skills: string[];
};

export type Education = {
  period: string;
  degree: string;
  institution: string;
  badge: string;
  icon: "school" | "verified" | "premium";
};

export const profile = {
  name: "Pandu Setia Darmawan",
  role: "Web Developer",
  headline: "Web Developer",
  location: "Jakarta, ID (WIB)",
  // experienceLabel: "7+ Tahun Aktif",
  // id: "ID/JKT-24",
  // currentRole: "Staff Designer • FinTech Studio",
  email: "pandusetiadarmawan2.com",
  linkedin: "https://www.linkedin.com/in/pandu-setia-darmawan",
  github: "https://github.com/codewithpandu",
};

export const metrics = [
  { value: "7+", label: "Tahun Pengalaman", sub: "Fintech & B2B SaaS" },
  { value: "20+", label: "Produk Rilis", sub: "Skala Nasional & Global" },
  { value: "4.8★", label: "Kepuasan Pengguna", sub: "CSAT & App Store Rerata" },
  { value: "2x", label: "Design Award", sub: "Fintech Excellence 2023" },
];

export const philosophy = [
  {
    number: "01",
    title: "System Thinking & Scalability",
    description:
      "Merancang antarmuka bukan sekadar komposisi piksel, melainkan pembangunan sistem komponen modular dan token yang mampu beradaptasi cepat dengan pertumbuhan produk jangka panjang.",
    tags: ["Design Tokens", "Governance"],
  },
  {
    number: "02",
    title: "Precision Craft & Typography",
    description:
      "Ketelitian mikroskopis pada ritme vertikal, hierarki tipografi editorial, dan interaksi mikro. Kejelasan estetika memicu rasa percaya dan menurunkan beban kognitif pengguna.",
    tags: ["Micro-copy", "Tactile Motion"],
  },
  {
    number: "03",
    title: "Data & Human-Centric Impact",
    description:
      "Validasi hipotesis berulang dengan analitik kuantitatif dan wawancara empati kualitatif. Setiap perubahan desain diarahkan demi pertumbuhan bisnis yang nyata dan kepuasan pengguna sejati.",
    tags: ["Metrics A/B", "Usability Lab"],
  },
];

export const experiences: Experience[] = [
  {
    period: "2020 — 2021",
    company: "Aston Apparel",
    location: "Kebumen",
    role: "Web Administrator",
    type: "Full-time",
    description:
      "Mengelola dan mengoptimalkan situs web e-commerce berbasis WordPress, termasuk pemeliharaan rutin, pembaruan konten, dan integrasi plugin untuk meningkatkan pengalaman pengguna dan konversi penjualan.",
    highlights: [
      "Mengelola situs web e-commerce dengan WordPress.",
      "Memelihara dan memperbarui konten situs.",
      "Meningkatkan kinerja situs web dan responsivitas halaman",
      "Menerapkan praktik terbaik SEO on-page untuk meningkatkan visibilitas pencarian",
    ],
    tags: ["Wordpress", "c-panel", "SEO"],
  },
  {
    period: "2024 — 2025",
    company: "Dinas Komunikasi dan Informatika Kabupaten Klaten",
    location: "Klaten",
    role: "Frontend Web Developer",
    type: "Internship",
    description:
      "Bertanggung jawab atas pengembangan antarmuka pengguna untuk portal web pemerintah daerah, memastikan aksesibilitas, responsivitas, dan kepatuhan terhadap standar web modern.",
    highlights: [
      "Membangun antarmuka pengguna yang responsif menggunakan React.js",
      "Mengimplementasikan desain UI/UX menjadi komponen frontend yang dapat digunakan kembali",
      "Berkolaborasi dengan pengembang backend untuk integrasi API",
      "Mengoptimalkan kinerja dan kegunaan aplikasi di berbagai perangkat",
      "Memastikan tata letak responsif yang konsisten dan kompatibilitas lintas peramban",
    ],
    tags: ["Frontend", "Reactjs", "TailwindCSS", "Responsive Design", "UI/UX"],
  },
];

export const projects: Project[] = [
  {
    category: "Landing Page",
    meta: "Landing Page",
    title: "Nova Studio, Photography",
    image: "/nova.jpg",
    description:
      "Landing page untuk studio fotografi Nova Studio, menampilkan portofolio, layanan, dan informasi kontak dengan desain yang menarik dan responsif.",
    result: "+18.4% Konversi",
    cta: "Demo",
    url: "https://nova-photography.netlify.app/",
    kind: "chart",
  },
  {
    category: "Landing Page",
    meta: "Landing Page",
    title: "Paw Store, Pet Shop",
    image: "/paw-store-2.jpg",
    description:
      "Landing page untuk toko hewan peliharaan Paw Store, menampilkan produk, layanan, dan informasi kontak dengan desain yang menarik dan responsif.",
    result: "+18.4% Konversi",
    cta: "Demo",
    url: "https://paw-store-ten.vercel.app/",
    kind: "chart",
  },
];

export const skillGroups: SkillGroup[] = [
  // {
  //   icon: "handyman",
  //   title: "Tools",
  //   skills: ["Figma", "Notion", ""],
  // },
  {
    icon: "terminal",
    title: "Web Development",
    skills: [
      "HTML5 / Semantic Web",
      "CSS3 & Tailwind CSS",
      "JavaScript/TypeScript",
      "React.js & Next.js",
      "Git & GitHub",
      "Laravel",
      "WordPress",
      "Node.js & Express.js",
      "MySQL & PostgreSQL",
      "REST API",
    ],
  },
];

export const education: Education[] = [
  {
    period: "2013 — 2017",
    degree: "S.Ds. Desain Komunikasi Visual",
    institution: "Institut Teknologi Bandung",
    badge: "Predikat Cum Laude",
    icon: "school",
  },
  {
    period: "2021",
    degree: "Certified Usability Analyst (CUA)",
    institution: "Human Factors International",
    badge: "ID: CUA-883921",
    icon: "verified",
  },
  {
    period: "2022",
    degree: "UX Master Certification",
    institution: "Nielsen Norman Group (NN/g)",
    badge: "Specialty: Interaction Design",
    icon: "premium",
  },
];
