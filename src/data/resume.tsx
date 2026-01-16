import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ferry Hasan",
  initials: "FH",
  url: "https://killflex.vercel.app",
  location: "Surabaya, Indonesia",
  locationLink: "https://www.google.com/maps/place/surabaya",
  description: "Full Stack Developer and Motion Designer",
  summary:
    "Passionate in developing dynamic, scalable web applications, and designing engaging motion designs. Proficient in full-stack development, including responsive UI design, API integration, and database management with expertise using React.js, Next.js, and Laravel.",
  cvurl:
    "https://drive.google.com/file/d/108I-XFVnvxsCSbhWh6f11v1-DZod8nNI/view?usp=sharing",
  cvdownload: <Icons.download />,
  avatarUrl: "/avatars/avatar.webp",
  skills: [
    "Typescript",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Linux",
    "Git",
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
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/killflex",
        icon: Icons.instagram,
        iconWebp: "/social-icons/ig-w-tr.webp",
        description: "@killflex",
        navbar: true,
      },
      // InstagramPersonal: {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/tyvwel",
      //   icon: Icons.instagram,
      //   iconWebp: "/social-icons/instagram.webp",
      //   description: "@tyvwel (personal)",
      //   navbar: true,
      // },
      // Twitter: {
      //   name: "Twitter",
      //   url: "https://x.com/fleksipi",
      //   icon: Icons.youtube,
      //   iconWebp: "/social-icons/x.webp",
      //   description: "@fleksipi",
      //   navbar: true,
      // },
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
      company: "PT. iGS Indonesia Groups",
      href: "/",
      badges: [
        "Typescript",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "PostgreSQL",
        "Drizzle",
        "Docker",
      ],
      location: "Hybrid",
      title: "Intern Full Stack Developer",
      logoUrl: "",
      start: "Feb 2025",
      end: "Apr 2025",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Developed a dynamic company profile website for PT. APIGS.
          </li>
          <li>&#x2022; Handled modern and user-friendly UI/UX design.</li>
          <li>&#x2022; Built scalable front-end and back-end development.</li>
          <li>&#x2022; Managed deployment to ensure seamless accessibility.</li>
        </ul>
      ),
    },
    {
      company: "Freelance / Self-Employed",
      href: "/",
      badges: [
        "After Effects",
        "Premiere Pro",
        "Photoshop",
        "Cinema 4D",
        "Blender",
      ],
      location: "Freelance",
      title: "Motion Designer",
      logoUrl: "",
      start: "Mar 2019",
      end: "Nov 2023",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Created 100+ designs, growing 2K+ followers on Instagram
            and 1.5K+ on YouTube.
          </li>
          <li>
            &#x2022; Sold editing assets, generating over $1K in revenue within
            a year.
          </li>
          <li>
            &#x2022; Delivered on time, achieving 100% client satisfaction rate.
          </li>
          <li>
            &#x2022; Collaborated with notable clients, JNT Cargo, Sands Group,
            VTubers, influencers, etc.
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
            &#x2022; Edited a high-quality short film that effectively conveyed
            the company&apos;s message.
          </li>
          <li>
            &#x2022; Enhanced visual storytelling to create a compelling
            narrative.
          </li>
          <li>&#x2022; Ensured a polished and professional final product.</li>
          <li>
            &#x2022; Supported the company&apos;s branding efforts through
            impactful visuals.
          </li>
        </ul>
      ),
    },
    {
      company: "CV. Natusi",
      href: "/",
      badges: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "MySQL",
        "Figma",
        "Photoshop",
      ],
      location: "Onsite",
      title: "Student Intern",
      logoUrl: "",
      start: "Jan 2021",
      end: "Jun 2021",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Developed a payroll website system automating salary
            calculations.
          </li>
          <li>
            &#x2022; Designed UI/UX for the Sentra Pelayanan Kepolisian Terpadu
            (SPKT) website.
          </li>
          <li>
            &#x2022; Led the UI/UX team for the Tribrata News East Java website.
          </li>
          <li>
            &#x2022; Handled OS, software, and network configurations to
            optimize operations.
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: 'UPN "Veteran" Jawa Timur',
      href: "/",
      degree: "Bachelor's Degree of Informatics Engineering",
      logoUrl: "",
      start: "2022",
      end: "Present",
    },
    {
      school: "SMK Negeri 1 Dlanggu",
      href: "/",
      degree: "Senior High School of Software Engineering",
      logoUrl: "",
      start: "2019",
      end: "2022",
    },
  ],
  categories: ["Website", "Mobile", "ML", "Motion", "Design"],
  projects: [
    {
      title: "Simple Portfolio",
      href: "https://github.com/killflex/simple-portfolio",
      dates: "",
      active: true,
      description: "A modern, simple, and high performance portfolio website.",
      technologies: ["Typescript", "Next.js", "Tailwind CSS", "Shadcn UI"],
      category: "Website",
      links: [
        {
          type: "Website",
          href: "https://killflex.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/killflex/simple-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/simple-portfolio-l.png",
      image2: "/projects/simple-portfolio-d.png",
      video: "",
      design: "",
    },
    {
      title: "Analytix SaaS",
      href: "https://github.com/killflex/analytix-practice",
      dates: "",
      active: true,
      description:
        "A sleek, single-page static landing page for a fictional data analytics service.",
      technologies: [
        "Javascript",
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Lenis",
      ],
      category: "Website",
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
      title: "Melasma Diagnoser",
      href: "https://github.com/killflex/melasma-kotlin",
      dates: "",
      active: true,
      description:
        "VGG16 based CNN arch 98% training accuracy, 80% testing accuracy, and 36% loss rate.",
      technologies: ["Kotlin", "Python", "Tensorflow", "VGG16"],
      category: "Mobile",
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
      title: "Melasma Diagnoser",
      href: "https://github.com/killflex/melasma-kotlin",
      dates: "",
      active: true,
      description:
        "VGG16 based CNN arch 98% training accuracy, 80% testing accuracy, and 36% loss rate.",
      technologies: ["Kotlin", "Python", "Tensorflow", "VGG16"],
      category: "ML",
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
      title: "NjajanUPN",
      href: "https://github.com/killflex/njajan-upn",
      dates: "",
      active: true,
      description:
        "Recommendation platform to find the nearest place to eat or hang out around the UPN Jatim.",
      technologies: ["PHP", "Javascript", "CSS", "Bootstrap 5", "MySQL"],
      category: "Website",
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
      title: "EduLaGa",
      href: "https://github.com/killflex/edulaga-c3",
      dates: "",
      active: true,
      description:
        "Education based Bela Negara Indonesia mobile game, facilitate interactive learning.",
      technologies: ["Construct 3", "Photoshop"],
      category: "Mobile",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/edulaga-c3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741455990/edulaga_fku2ag.jpg",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Flappy Bird",
      href: "https://github.com/killflex/flappybird-c3",
      dates: "",
      active: true,
      description:
        "Simple game to create challenging experience similar to the original Flappy Bird.",
      technologies: ["Construct 3"],
      category: "Mobile",
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
      title: "Unipin Parody",
      href: "https://github.com/killflex/unipin-parody",
      dates: "",
      active: true,
      description:
        "Mimics the look and functionality of the Unipin featuring Stripe payment.",
      technologies: [
        "PHP",
        "Javascript",
        "CSS",
        "Bootstrap 5",
        "MySQL",
        "Stripe",
      ],
      category: "Website",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/unipin-parody",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741427791/unipinparody_ej0guc.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Personal Portfolio",
      href: "https://killflex.github.io",
      dates: "",
      active: true,
      description:
        "Showcases digital information in a professional and engaging manner.",
      technologies: ["HTML", "Javascript", "CSS"],
      category: "Website",
      links: [
        {
          type: "Website",
          href: "https://killflex.github.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/killflex/killflex.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741426992/portfoliolama_umrmyd.png",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "FILA",
      href: "https://www.instagram.com/p/DAFW-kRvJT1/",
      dates: "",
      active: true,
      description: "",
      technologies: ["Cinema 4D", "Redshift", "Photoshop"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741504380/landscapefila_ppupwt.png",
    },
    {
      title: "im_still_waiting",
      href: "https://www.instagram.com/p/CUzW4kFFIl2",
      dates: "",
      active: true,
      description: "",
      technologies: ["Blender", "Octane", "After Effects"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741497487/test_landscape_00000_njrkgx.jpg",
    },
    {
      title: "TAKE OUT",
      href: "https://www.instagram.com/p/CUZ97EhAL5j",
      dates: "",
      active: true,
      description: "",
      technologies: ["Blender", "Octane", "After Effects"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741500789/TAKE_OUT_itu8yo.jpg",
    },
    {
      title: "FALLIN",
      href: "https://www.instagram.com/p/CS_vskclQqI",
      dates: "",
      active: true,
      description: "",
      technologies: ["Blender", "Octane", "After Effects"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741504237/portah_bo2_4K_fbnc81.jpg",
    },
    {
      title: "NOBODY",
      href: "https://www.instagram.com/p/CRk7wVPruNa",
      dates: "",
      active: true,
      description: "",
      technologies: ["Blender", "Octane", "After Effects"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741500789/train_octane_e1xm6f.jpg",
    },
    {
      title: "CLOUD TRAIN",
      href: "https://www.instagram.com/p/CNlUlucJonE",
      dates: "",
      active: true,
      description: "",
      technologies: ["Blender", "Cycles", "After Effects"],
      category: "Design",
      links: [],
      image: "",
      image2: "",
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741503512/cloudtrain_1_inawna.jpg",
    },
  ],
} as const;
