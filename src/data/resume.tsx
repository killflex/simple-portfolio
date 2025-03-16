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
    "Passionate in developing dynamic, scalable web applications and designing engaging motion designs. Proficient in full-stack development, including responsive UI design, API integration, and database management.",
  cvurl:
    "https://drive.google.com/file/d/108I-XFVnvxsCSbhWh6f11v1-DZod8nNI/view?usp=sharing",
  cvdownload: <Icons.download />,
  avatarUrl:
    "https://res.cloudinary.com/dn2tic45s/image/upload/v1742105264/ferry_ppsopan_u4j8yt.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Boostrap",
    "Node.js",
    "PHP",
    "Laravel",
    "Python",
    "MySQL",
  ],
  skills2: [
    "Figma",
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Blender",
    "Cinema 4D",
    "Redshift",
    "Octane",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ferryhasan10@gmail.com",
    tel: "+6281214160006",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/killflex",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ferry-hasan",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/fleksipi",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/killflex",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@killflex",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ferryhasan10@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT. iGS Indonesia Groups",
      href: "/",
      badges: [],
      location: "Hybrid",
      title: "Intern Full Stack Developer",
      logoUrl: "/igs.png",
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
      badges: [],
      location: "Freelance",
      title: "Freelance Motion Designer",
      logoUrl: "/killflex.jpg",
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
      badges: [],
      location: "Freelance",
      title: "Freelance Video Editor",
      logoUrl: "/sands.jpg",
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
      badges: [],
      location: "Onsite",
      title: "Student Intern",
      logoUrl: "/natusi.png",
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
      logoUrl: "/upn.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "SMK Negeri 1 Dlanggu",
      href: "/",
      degree: "Senior High School of Software Engineering",
      logoUrl: "/dlanggu.png",
      start: "2019",
      end: "2022",
    },
  ],
  categories: ["Website", "Mobile", "ML", "Motion", "Design"],
  projects: [
    {
      title: "Melasma Diagnoser",
      href: "https://github.com/killflex/melasma-kotlin",
      dates: "",
      active: true,
      description:
        "VGG-16 based CNN arch w/ 98% training accuracy, 80% testing accuracy, and 36% loss rate.",
      technologies: ["Kotlin", "Python", "Tensorflow"],
      category: "Mobile",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/melasma-kotlin",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "https://docs.google.com/document/d/1oxGFg7w0IqBaPzeMeH32gxXmxCJakOWzV8fHtO1ESx0",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741454866/melasmadiagnosis_wf7zsi.png",
      video: "",
      design: "",
    },
    {
      title: "Melasma Diagnoser",
      href: "https://github.com/killflex/melasma-kotlin",
      dates: "",
      active: true,
      description:
        "VGG-16 based CNN arch w/ 98% training accuracy, 80% testing accuracy, and 36% loss rate.",
      technologies: ["Kotlin", "Python", "Tensorflow"],
      category: "ML",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/melasma-kotlin",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "https://docs.google.com/document/d/1oxGFg7w0IqBaPzeMeH32gxXmxCJakOWzV8fHtO1ESx0",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741454866/melasmadiagnosis_wf7zsi.png",
      video: "",
      design: "",
    },
    {
      title: "Coffee Blend",
      href: "https://github.com/killflex/coffee-blend",
      dates: "",
      active: true,
      description:
        "E-commerce coffee products with table  reservation and PayPal RESTs API payment gateway integration.",
      technologies: ["Laravel 11", "Bootstrap 5", "MySQL", "Paypal"],
      category: "Website",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/coffee-blend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741434045/coffeeblend_qywu0o.png",
      video: "",
      design: "",
    },
    {
      title: "NjajanUPN",
      href: "https://github.com/killflex/njajan-upn",
      dates: "",
      active: true,
      description:
        "Recommendation platform to find the nearest place to eat or hang out with complete information around the UPN Jatim",
      technologies: ["PHP", "Bootstrap 5", "MySQL"],
      category: "Website",
      links: [
        {
          type: "Source",
          href: "https://github.com/killflex/njajan-upn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741427045/njajanupn_dexlza.png",
      video: "",
      design: "",
    },
    {
      title: "EduLaGa",
      href: "https://github.com/killflex/edulaga-c3",
      dates: "",
      active: true,
      description:
        "Education based Bela Negara Indonesia mobile game, aiming to facilitate more interactive and effective learning.",
      technologies: ["Construct 3", "Gradle", "Cordova 11"],
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
      video: "",
      design: "",
    },
    {
      title: "Flappy Bird",
      href: "https://github.com/killflex/flappybird-c3",
      dates: "",
      active: true,
      description:
        "Simple game to create a fun and challenging gaming experience with game mechanics similar to the original Flappy Bird.",
      technologies: ["Construct 3", "Gradle"],
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
      video: "",
      design: "",
    },
    {
      title: "Unipin Parody",
      href: "https://github.com/killflex/unipin-parody",
      dates: "",
      active: true,
      description:
        "Mimics the look and functionality of the Unipin to create an interactive replica featuring Stripe payment.",
      technologies: ["PHP", "Bootstrap 5", "MySQL", "Stripe"],
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
      video: "",
      design: "",
    },
    {
      title: "Personal Portfolio",
      href: "https://killflex.github.io",
      dates: "",
      active: true,
      description:
        "Showcases projects, skills, and contact information to potential clients in a professional and engaging manner.",
      technologies: ["HTML", "CSS", "Javascript"],
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
      video: "",
      design:
        "https://res.cloudinary.com/dn2tic45s/image/upload/v1741503512/cloudtrain_1_inawna.jpg",
    },
  ],
  hackathons: [],
} as const;
