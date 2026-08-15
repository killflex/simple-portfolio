import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ferry Hasan",
  initials: "FH",
  url: "https://killflex.vercel.app",
  location: "Surabaya, Indonesia",
  locationLink: "https://www.google.com/maps/place/surabaya",
  description: "Full Stack Developer & Motion Designer",
  summary:
    "I'm a Full-Stack Developer and Motion Designer based in Surabaya, Indonesia. A rare combination of someone who can both build the product and make it look compelling.\n\nOn the development side, I build fast, scalable web applications with React.js, Next.js, and Laravel with a focus on performance, clean architecture, and real-world deployment. On the creative side, I've spent years crafting motion graphics, video edits, and 3D visuals for clients across industries.\n\nWhat makes me different? I don't just execute tasks, I understand the full picture from database schema to deployment pipeline, and from storyboard to final render. That overlap between technical precision and visual thinking is where I do my best work.\n\nCurrently open to Full-Stack, Frontend, Backend, Video Editor, Motion Designer, and 3D Artist roles.",
  cv: {
    fullstack: {
      title: "CV Full Stack Developer",
      badge: "Engineering",
      description:
        "React, Next.js, TypeScript, Laravel, Node.js, PostgreSQL, Docker & REST APIs",
      url: "https://drive.google.com/file/d/1u3cjw7fyCuDwRjLI7MrEWMH_RdPnaHIE/view?usp=sharing",
    },
    designer: {
      title: "CV Motion & 3D Designer",
      badge: "Creative & 3D",
      description:
        "Motion Graphics, 3D Art, Video Editing, Blender, Cinema 4D, Octane & After Effects",
      url: "https://drive.google.com/file/d/1xPM5oNv4tsD3pqyMN6vod6ih_F8f786l/view?usp=sharing",
    },
  },
  cvurl:
    "https://drive.google.com/file/d/108I-XFVnvxsCSbhWh6f11v1-DZod8nNI/view?usp=sharing",
  cvdownload: <Icons.download />,
  certificationsFolderUrl:
    "https://drive.google.com/drive/folders/1SAa-YFLiVS0aXg0SVBgtrJ4wRgp_XanP?usp=sharing",
  avatarUrl: "/avatars/avatar.webp",
  skills: [
    "PHP",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
    "Laravel",
    "Node.js",
    "RESTful API",
    "Prisma",
    "Drizzle",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Git",
    "GitHub Actions",
    "Linux",
  ],
  skills2: [
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Blender",
    "Cinema 4D",
    "Redshift",
    "Octane",
    "Figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ferryhasan10@gmail.com",
    emailUrl: "mailto:ferryhasan10@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/killflex",
        icon: Icons.github,
        iconWebp: "/social-icons/github.webp",
        description: "@killflex",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ferry-hasan",
        icon: Icons.linkedin,
        iconWebp: "/social-icons/linkedin.webp",
        description: "@ferry-hasan",
        navbar: true,
      },
      // Instagram: {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/killflex",
      //   icon: Icons.instagram,
      //   iconWebp: "/social-icons/ig-w-tr.webp",
      //   description: "@killflex",
      //   navbar: true,
      // },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/tyvwel",
        icon: Icons.instagram,
        iconWebp: "/social-icons/ig-w-tr.webp",
        description: "@tyvwel (personal)",
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/iamkillflex",
        icon: Icons.x,
        iconWebp: "/social-icons/x.webp",
        description: "@iamkillflex",
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@killflex",
        icon: Icons.youtube,
        iconWebp: "/social-icons/yt-tr.webp",
        description: "@killflex",
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT. IGS Indonesia Groups",
      href: "",
      badges: [
        "Next.js",
        "Typescript",
        "Redux",
        "Tailwind CSS",
        "PostgreSQL",
        "Drizzle",
        "Docker",
      ],
      location: "Hybrid",
      title: "Full Stack Developer Intern",
      logoUrl: "",
      start: "Feb 2025",
      end: "Apr 2025",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Architected the full application from scratch using
            Next.js, TypeScript, Redux, Tailwind CSS, Framer Motion, PostgreSQL,
            and Drizzle ORM.
          </li>
          <li>
            &#x2022; Achieved Lighthouse scores of 94 (Performance), 94
            (Accessibility), 100 (Best Practices), and 100 (SEO), with a 1.2s
            Largest Contentful Paint. Measured on production.
          </li>
          <li>
            &#x2022; Implemented SSR and SSG rendering strategies with
            structured metadata to improve TTFB, FCP, and SEO discoverability
            across desktop and mobile.
          </li>
          <li>
            &#x2022; Containerized the full stack with Docker and managed
            deployment via Dokploy, maintaining 99.9% uptime with zero-downtime
            deployments.
          </li>
        </ul>
      ),
    },
    {
      company: "Freelance",
      href: "/",
      badges: [
        "After Effects",
        "Premiere Pro",
        "Photoshop",
        "Blender",
        "Cinema 4D",
      ],
      location: "Remote",
      title: "3D Motion Designer & Video Editor",
      logoUrl: "",
      start: "Mar 2019",
      end: "Nov 2023",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Produced 100+ motion design and video editing works for
            clients across industries, from logistics and e-commerce to music
            artists, VTubers, and content creators.
          </li>
          <li>
            &#x2022; Grew an organic audience of 2,000+ Instagram followers and
            1,500+ YouTube subscribers within a year, driven entirely by
            portfolio content.
          </li>
          <li>
            &#x2022; Developed and sold editing assets and project files
            independently, generating over $1,000 in revenue within a year.
          </li>
          <li>
            &#x2022; Maintained a 100% client satisfaction rate across all
            delivered projects, working with notable clients including JNT
            Cargo, Sands Group, and various international VTubers and
            influencers.
          </li>
        </ul>
      ),
    },
    {
      company: "Sands Group Indonesia",
      href: "/",
      badges: ["After Effects", "Premiere Pro", "Photoshop"],
      location: "Freelance",
      title: "Freelance Video Editor",
      logoUrl: "",
      start: "Aug 2023",
      end: "Aug 2023",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Edited a short film for a corporate client, delivering a
            polished final cut that aligned with the company's brand identity
            and messaging.
          </li>
          <li>
            &#x2022; Applied narrative editing techniques to build a compelling
            visual story, from raw footage to finished film.
          </li>
          <li>
            &#x2022; Project scope and specific deliverables are kept
            confidential per the terms of the work agreement.
          </li>
        </ul>
      ),
    },
    {
      company: "CV. Natusi",
      href: "/",
      badges: ["PHP", "JavaScript", "MySQL", "AdminLTE", "Figma", "Photoshop"],
      location: "Onsite",
      title: "Web Developer Intern",
      logoUrl: "",
      start: "Jan 2021",
      end: "Jun 2021",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Built a payroll web application automating 5 salary
            components (base salary, overtime, bonuses, allowances, and PPh 21
            tax calculation), reducing manual calculation steps by an estimated
            70%.
          </li>
          <li>
            &#x2022; Designed 3 UI/UX prototypes in Figma (news portal,
            law-enforcement complaint page, mobile golf app). All approved by
            stakeholders on the first design cycle with 100% client sign-off.
          </li>
          <li>
            &#x2022; Collaborated with system analysts on structured weekly
            design reviews, and supported IT infrastructure tasks including
            router configuration, LAN cabling, and CCTV installation.
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: 'UPN "Veteran" Jawa Timur',
      href: "/",
      degree: "Bachelor of Computer Science in Informatics",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
    {
      school: "SMK Negeri 1 Dlanggu",
      href: "/",
      degree: "Vocational High School in Software Engineering",
      logoUrl: "",
      start: "2019",
      end: "2022",
    },
  ],
  categories: ["Web App", "Mobile App", "Machine Learning", "Motion", "Design"],
  featuredProject: {
    title: "PT. APIGS — Dynamic Corporate Platform",
    company: "PT. IGS Indonesia Groups",
    role: "Full Stack Developer Intern",
    period: "Feb 2025 - Apr 2025",
    description:
      "Engineered and deployed a dynamic, high-performance corporate web platform for PT. APIGS. Handled end-to-end execution from modern UI/UX design and responsive front-end development to scalable PostgreSQL database architecture and Dockerized deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
      "Framer Motion",
      "Shadcn UI",
    ],
    metrics: [
      {
        value: "100%",
        label: "Lighthouse Score",
        highlight: "Performance & Best Practices",
      },
      {
        value: "< 0.8s",
        label: "Fast Load Time",
        highlight: "First Contentful Paint",
      },
      {
        value: "Grade A",
        label: "GTmetrix Rating",
        highlight: "Optimized Asset Delivery",
      },
      {
        value: "100%",
        label: "Responsive & SEO",
        highlight: "Dynamic Server Components",
      },
    ],
    image: "/projects/test-lighthouse.png",
    image2: "/projects/test-gtmetrix.png",
    links: [
      {
        type: "Lighthouse Report",
        href: "/projects/test-lighthouse.png",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "GTmetrix Report",
        href: "/projects/test-gtmetrix.png",
        icon: <Icons.globe className="size-3" />,
      },
    ],
  },
  certifications: [
    {
      title: "Pemrograman JavaScript untuk Pemula sampai Mahir",
      issuer: "Programmer Zaman Now",
      date: "2026",
      href: "https://drive.google.com/file/d/1o-f1Xs-IwY59Cl9Z1KSPJDgBIA5Cwy0q/view?usp=sharing",
      badge: "Advanced JavaScript",
    },
    {
      title: "React: All You Need to Know with Practical Project",
      issuer: "Udemy",
      date: "2024",
      href: "https://drive.google.com/file/d/1mNLeKztm-WmGowS-Ua6yArtwDLWdJaNm/view?usp=sharing",
      badge: "React Frontend",
    },
    {
      title: "TickTrack: Ticketing System Dengan Laravel 12 dan Vue Js",
      issuer: "Build With Angga",
      date: "2026",
      href: "https://drive.google.com/file/d/1xX4d8Non82qukyJdFcMlOD91VZn3fNil/view?usp=sharing",
      badge: "Full-Stack Laravel & Vue Js",
    },
    {
      title: "Use Generative AI for Software Development",
      issuer: "IBM SkillsBuild",
      date: "2025",
      href: "https://drive.google.com/file/d/1oXk4GiEFQYRhz7U-6uRRZETF4-AvoxF6/view?usp=sharing",
      badge: "AI Agent Programming",
    },
  ],
  projects: [
    {
      title: "APIGS Indonesia",
      href: "https://apigs.igsindonesia.org",
      dates: "",
      active: true,
      description:
        "Corporate web platform with dynamic content and scalable architecture.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Drizzle",
        "Docker",
      ],
      category: ["Web App"],
      links: [
        {
          type: "Website",
          href: "https://apigs.igsindonesia.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/apigs-l.png",
      image2: "/projects/apigs-d.png",
      video: "",
      design: "",
    },
    {
      title: "Expense Kernel",
      href: "",
      dates: "",
      active: true,
      description: "Custom PHP framework based expense tracking application.",
      technologies: ["PHP", "MySQL", "DIY Framework"],
      category: ["Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/expense-kernel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/expencify.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Unipin Parody",
      href: "https://github.com/killflex/unipin-parody",
      dates: "",
      active: true,
      description:
        "E-commerce gaming voucher store simulation featuring Stripe payment processing.",
      technologies: ["PHP", "Stripe", "JavaScript", "Bootstrap", "MySQL"],
      category: ["Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/unipin-parody",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/unipin-1.png",
      image2: "/projects/unipin-2.png",
      video: "",
      design: "",
    },
    {
      title: "Lost N Found Fasilkom",
      href: "",
      dates: "",
      active: true,
      description: "Lost and found platform for university faculty.",
      technologies: ["Laravel", "Vue", "Tailwind CSS", "MySQL"],
      category: ["Web App"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Go Kasir API",
      href: "",
      dates: "",
      active: true,
      description: "Backend API for point of sale system.",
      technologies: ["Golang"],
      category: ["Web App"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Njajan UPN",
      href: "https://github.com/killflex/njajan-upn",
      dates: "",
      active: true,
      description:
        "Culinary recommendation platform to discover food spots around UPN Veteran Jawa Timur.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      category: ["Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/njajan-upn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/njajanupn.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Sistem Gim Edukasi",
      href: "",
      dates: "",
      active: true,
      description: "Educational game system platform.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      category: ["Web App"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "MyBookshelf API",
      href: "",
      dates: "",
      active: true,
      description: "RESTful API for book management and tracking.",
      technologies: ["Express.js", "MongoDB", "Swagger UI"],
      category: ["Web App"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Analytix SaaS Landing Page",
      href: "https://github.com/killflex/analytix-practice",
      dates: "",
      active: true,
      description:
        "A sleek, dynamic landing page for a fictional data analytics service with smooth micro-interactions.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      category: ["Web App"],
      links: [
        {
          type: "Website",
          href: "https://analytix-killflex.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/killflex/analytix-practice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/analytix-d.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "UMKM Rajut",
      href: "",
      dates: "",
      active: true,
      description: "E-commerce platform for local knitting businesses.",
      technologies: ["React.js", "Tailwind CSS", "Loveable"],
      category: ["Web App"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Proyek Skripsi Flutter",
      href: "",
      dates: "",
      active: true,
      description:
        "Face recognition mobile application using deep learning models.",
      technologies: [
        "Python",
        "Flutter",
        "Google ML Kit",
        "TensorFlow",
        "MobileFaceNet",
      ],
      category: ["Mobile App", "Machine Learning"],
      links: [],
      image: "/projects/skripsi.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Melasma Diagnoser",
      href: "https://github.com/killflex/melasma-kotlin",
      dates: "",
      active: true,
      description:
        "VGG16-based CNN achieving 98% training accuracy and 80% testing accuracy for automated skin condition classification.",
      technologies: ["Python", "Kotlin", "TensorFlow", "VGG16"],
      category: ["Mobile App", "Machine Learning"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/melasma-kotlin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741454866/melasmadiagnosis_wf7zsi.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "EduLaga Game",
      href: "https://github.com/killflex/edulaga-c3",
      dates: "",
      active: true,
      description:
        "Interactive educational game engine designed for national civic awareness.",
      technologies: ["Construct 3", "Photoshop"],
      category: ["Mobile App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/edulaga-c3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/edulaga.png",
      image2: "/projects/edulaga-z.png",
      video: "",
      design: "",
    },
    {
      title: "Flappy Bird",
      href: "https://github.com/killflex/flappybird-c3",
      dates: "",
      active: true,
      description:
        "Interactive 2D physics game recreating the iconic mobile gaming experience.",
      technologies: ["Construct 3"],
      category: ["Mobile App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/flappybird-c3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741428067/flappybirdc3_nv1msm.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Wonokromo Profile Video",
      href: "",
      dates: "",
      active: true,
      description: "Official profile video production for Wonokromo district.",
      technologies: ["Premiere Pro", "Videographer"],
      category: ["Motion"],
      links: [
        {
          type: "Youtube",
          href: "https://youtu.be/EK0UBOLrl0E?si=P2zsDp1tH8w2H3Z1",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/video-profile-wonokromo.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Nike Air Max Commercial",
      href: "",
      dates: "",
      active: true,
      description: "Conceptual commercial motion graphics for Nike.",
      technologies: ["Blender", "After Effects", "Photoshop"],
      category: ["Motion"],
      links: [
        {
          type: "Youtube",
          href: "https://youtu.be/xtRYglqMs8g?si=jna-PkkSXH9wBh7Z",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/nike-airmax-commercial.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Villain Vibes Music Video",
      href: "",
      dates: "",
      active: true,
      description:
        "Louverture x Trickywi x Shirobeats - Villain Vibes Music Video.",
      technologies: ["After Effects", "Blender"],
      category: ["Motion"],
      links: [
        {
          type: "Twitter",
          href: "https://x.com/iamkillflex/status/1553772127429758976",
          icon: <Icons.x className="size-3" />,
        },
        {
          type: "Youtube (Official)",
          href: "https://youtu.be/3tx089zQRvc?si=UWyFo4WNBLXJOYoy",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/projects/villainvibes-music-video.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "pop up ナイキ (NIKE)",
      href: "",
      dates: "",
      active: true,
      description: "Conceptual 3D popup motion design for Nike sneakers.",
      technologies: ["Cinema 4D", "After Effects"],
      category: ["Motion"],
      links: [
        {
          type: "Youtube",
          href: "https://youtube.com/shorts/TBbrB6aMva0?si=2FcGrlwwrDIj7dqG",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Twitter",
          href: "https://x.com/iamkillflex/status/1682982294079033344",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/projects/popup-nike.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Goldenrods",
      href: "",
      dates: "",
      active: true,
      description: "Abstract 3D motion graphics exploring golden aesthetics.",
      technologies: ["Cinema 4D", "After Effects"],
      category: ["Motion"],
      links: [
        {
          type: "Youtube",
          href: "https://youtube.com/shorts/pnyg8gxXmFE?si=cEM8Eb0McC41wzBt",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Twitter",
          href: "https://x.com/iamkillflex/status/1785656325168656876",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/projects/golden-rods.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Abstract Loop",
      href: "",
      dates: "",
      active: true,
      description: "Abstract 3D loop animation and visual experimentation.",
      technologies: ["Cinema 4D", "After Effects"],
      category: ["Motion"],
      links: [
        {
          type: "Youtube",
          href: "https://youtube.com/shorts/kpCuDKJ-2bs?si=27-aJjBw68TDJ5Cc",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Twitter",
          href: "https://x.com/iamkillflex/status/1682397475267813378",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/projects/abstract-loop.webp",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Phone RTX",
      href: "",
      dates: "",
      active: true,
      description: "Photorealistic smartphone rendering with ray tracing.",
      technologies: ["Blender", "After Effects", "Octane"],
      category: ["Motion"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Dance Cyberpunk",
      href: "",
      dates: "",
      active: true,
      description: "Cyberpunk themed motion capture dance animation.",
      technologies: ["Cinema 4D", "After Effects"],
      category: ["Motion"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Take Out",
      href: "https://www.instagram.com/p/CUZ97EhAL5j",
      dates: "",
      active: true,
      description:
        "Stylized 3D architectural rendering and cinematic lighting mood.",
      technologies: ["Blender", "After Effects", "Photoshop", "Octane"],
      category: ["Design"],
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/p/CUZ97EhAL5j",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741500789/TAKE_OUT_itu8yo.jpg",
    },
    {
      title: "Buku",
      href: "",
      dates: "",
      active: true,
      description: "Digital book cover design.",
      technologies: ["Photoshop"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Nobody",
      href: "",
      dates: "",
      active: true,
      description: "Conceptual 3D character design and atmospheric scene.",
      technologies: ["Blender", "After Effects", "Octane"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Tote Bag",
      href: "",
      dates: "",
      active: true,
      description: "Apparel merchandise tote bag mockup design.",
      technologies: ["Photoshop"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Fila Hijau",
      href: "https://www.instagram.com/p/DAFW-kRvJT1/",
      dates: "",
      active: true,
      description:
        "3D aesthetic commercial landscape and brand concept art crafted for FILA.",
      technologies: ["Cinema 4D", "After Effects"],
      category: ["Design"],
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/p/DAFW-kRvJT1/",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741504380/landscapefila_ppupwt.png",
    },
    {
      title: "Sepatu Nike Hitam",
      href: "",
      dates: "",
      active: true,
      description: "Photorealistic 3D rendering of black Nike sneakers.",
      technologies: ["Blender", "Photoshop"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Abstract Green",
      href: "",
      dates: "",
      active: true,
      description: "Green-themed abstract 3D visual composition.",
      technologies: ["Cinema 4D", "Photoshop"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Im Still Waiting",
      href: "https://www.instagram.com/p/CUzW4kFFIl2",
      dates: "",
      active: true,
      description:
        "Surreal 3D environment exploring isolation and emotional depth through lighting.",
      technologies: ["Blender", "Photoshop"],
      category: ["Design"],
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/p/CUzW4kFFIl2",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741497487/test_landscape_00000_njrkgx.jpg",
    },
    {
      title: "Fallin Cyberpunk",
      href: "https://www.instagram.com/p/CS_vskclQqI",
      dates: "",
      active: true,
      description:
        "Atmospheric cyberpunk 3D composition with volumetric lighting and photorealistic texturing.",
      technologies: ["Blender", "After Effects"],
      category: ["Design"],
      links: [
        {
          type: "Instagram",
          href: "https://www.instagram.com/p/CS_vskclQqI",
          icon: <Icons.instagram className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741504237/portah_bo2_4K_fbnc81.jpg",
    },
    {
      title: "Dualsense",
      href: "",
      dates: "",
      active: true,
      description:
        "Detailed 3D modeling and texturing of PlayStation 5 DualSense controller.",
      technologies: ["Blender", "Photoshop", "After Effects"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Nobita Room",
      href: "",
      dates: "",
      active: true,
      description: "Recreation of Nobita's room from Doraemon in 3D.",
      technologies: ["Cinema 4D", "Photoshop", "After Effects"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Industrial Facility",
      href: "",
      dates: "",
      active: true,
      description:
        "Large scale 3D environment design of an industrial facility.",
      technologies: ["Blender", "Photoshop"],
      category: ["Design"],
      links: [],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
  ],
} as const;
