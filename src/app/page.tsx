import { DownloadCvModal } from "@/components/download-cv-modal";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import SocialLinks from "@/components/social-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowRightIcon, ExternalLinkIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  const webProjects = DATA.projects
    .filter((p) => (p.category as readonly string[]).includes("Web App"))
    .slice(0, 2);
  const mobileProjects = DATA.projects
    .filter((p) => (p.category as readonly string[]).includes("Mobile App"))
    .slice(0, 2);
  const mlProjects = DATA.projects
    .filter((p) =>
      (p.category as readonly string[]).includes("Machine Learning"),
    )
    .slice(0, 2);
  const motionProjects = DATA.projects
    .filter((p) => (p.category as readonly string[]).includes("Motion"))
    .slice(0, 2);
  const designProjects = DATA.projects
    .filter((p) => (p.category as readonly string[]).includes("Design"))
    .slice(0, 2);

  return (
    <main className="flex flex-col min-h-dvh space-y-12">
      {/* 1. HERO */}
      <section id="hero" aria-label="Introduction" className="space-y-6">
        <div className="mx-auto w-full">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex flex-col flex-1 space-y-3 justify-center items-start">
              <FadeIn delay={0.04} distance={8}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/60 text-xs font-medium text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Available for work
                </div>
              </FadeIn>

              <FadeIn delay={0.1} distance={12}>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m {DATA.name.split(" ")[0]} 👋
                </h1>
              </FadeIn>

              <FadeIn delay={0.16} distance={10}>
                <p className="text-base sm:text-lg font-semibold text-primary/90">
                  Full-Stack Developer &amp; Motion Designer
                </p>
              </FadeIn>

              <FadeIn delay={0.22} distance={10}>
                <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I build scalable web applications using React, Next.js, and
                  Laravel. Also create motion graphics and 3D visuals.
                </p>
              </FadeIn>

              <FadeIn delay={0.28} distance={8}>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <DownloadCvModal />
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-lg cursor-pointer font-medium gap-1.5 hover:bg-muted shadow-sm"
                    asChild
                  >
                    <Link href="#contact" aria-label="Contact Ferry Hasan">
                      <MailIcon className="size-3.5 text-muted-foreground" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.14} direction="none">
              <Avatar className="size-32 sm:size-42 shadow-xl ring-2 ring-primary/5 transition-transform duration-300 hover:scale-[1.02]">
                <AvatarImage
                  alt={`${DATA.name}'s profile picture`}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS */}
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="space-y-4"
      >
        <FadeIn>
          <div className="space-y-2 text-left">
            <h2
              id="projects-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Projects by Category
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Selected works across web engineering, mobile development, machine
              learning, motion design, and 3D visual.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {/* 3.1 Web App Category */}
          <FadeIn distance={8} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  Web Applications
                </h3>
              </div>
              <Link
                href="/projects?category=Web App"
                className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                See all
                <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {webProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  video={project.video}
                  design={project.design}
                  links={project.links}
                />
              ))}
            </div>
          </FadeIn>

          {/* 3.2 Mobile App Category */}
          <FadeIn distance={8} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  Mobile Applications
                </h3>
              </div>
              <Link
                href="/projects?category=Mobile App"
                className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                See all
                <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mobileProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  video={project.video}
                  design={project.design}
                  links={project.links}
                />
              ))}
            </div>
          </FadeIn>

          {/* 3.3 ML/AI Category */}
          <FadeIn distance={8} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  AI &amp; Machine Learning
                </h3>
              </div>
              <Link
                href="/projects?category=Machine Learning"
                className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                See all
                <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mlProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  video={project.video}
                  design={project.design}
                  links={project.links}
                />
              ))}
            </div>
          </FadeIn>

          {/* 3.4 Motion Category */}
          <FadeIn distance={8} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  Motion Design &amp; Visual FX
                </h3>
              </div>
              <Link
                href="/projects?category=Motion"
                className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                See all
                <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {motionProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  video={project.video}
                  design={project.design}
                  links={project.links}
                />
              ))}
            </div>
          </FadeIn>

          {/* 3.5 Design Category */}
          <FadeIn distance={8} className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  3D Art &amp; Design
                </h3>
              </div>
              <Link
                href="/projects?category=Design"
                className="group inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                See all
                <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {designProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  image2={project.image2}
                  video={project.video}
                  design={project.design}
                  links={project.links}
                />
              ))}
            </div>
          </FadeIn>

          {/* View all button CTA */}
          <FadeIn delay={0.08}>
            <div className="pt-2 text-center">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 cursor-pointer text-xs"
                asChild
              >
                <Link href="/projects" className="gap-2">
                  Explore All Projects Archive
                  <ArrowRightIcon className="size-3.5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. ABOUT */}
      <FadeIn>
        <section
          id="about"
          aria-labelledby="about-heading"
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <h2 id="about-heading" className="text-xl font-bold tracking-tight">
              About Me
            </h2>
          </div>
          <div className="flex flex-col max-w-full text-pretty text-xs sm:text-sm  font-sans leading-relaxed text-muted-foreground gap-y-3">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </section>
      </FadeIn>

      {/* 5. WORK EXPERIENCE */}
      <section id="work" aria-labelledby="work-heading" className="space-y-4">
        <FadeIn>
          <div className="flex items-center gap-2">
            <h2 id="work-heading" className="text-xl font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
        </FadeIn>
        <StaggerContainer className="flex min-h-0 flex-col gap-y-3" role="list">
          {DATA.work.map((work) => (
            <StaggerItem key={work.company}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                disabled={true}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. SKILLS */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="space-y-4"
      >
        <FadeIn>
          <div className="flex items-center gap-2">
            <h2
              id="skills-heading"
              className="text-xl font-bold tracking-tight"
            >
              Skills &amp; Toolkit
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-3">
          {/* Tech Stack */}
          <FadeIn delay={0.04}>
            <div className="rounded-lg border bg-card/50 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Engineering &amp; Development
              </h3>
              <StaggerContainer
                staggerChildren={0.03}
                className="flex flex-wrap gap-1.5"
                role="list"
                aria-label="Technical skills"
              >
                {DATA.skills.map((skill) => (
                  <StaggerItem key={skill} distance={6}>
                    <li className="text-xs font-medium border bg-background/80 px-2.5 py-1 rounded-lg text-foreground/90 hover:bg-muted list-none transition-colors">
                      {skill}
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Design Tools */}
          <FadeIn delay={0.08}>
            <div className="rounded-lg border bg-card/50 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Motion Design &amp; UI/UX
              </h3>
              <StaggerContainer
                staggerChildren={0.03}
                className="flex flex-wrap gap-1.5"
                role="list"
                aria-label="Design tools"
              >
                {DATA.skills2.map((skill2) => (
                  <StaggerItem key={skill2} distance={6}>
                    <li className="text-xs font-medium border bg-background/80 px-2.5 py-1 rounded-lg text-foreground/90 hover:bg-muted list-none transition-colors">
                      {skill2}
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. EDUCATION */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="space-y-6"
      >
        <div className="space-y-4">
          <FadeIn>
            <div className="flex items-center gap-2">
              <h2
                id="education-heading"
                className="text-xl font-bold tracking-tight"
              >
                Education
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer
            className="flex min-h-0 flex-col gap-y-2"
            role="list"
          >
            {DATA.education.map((education) => (
              <StaggerItem key={education.school}>
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  disabled={false}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Certifications */}
      <section
        id="certifications"
        aria-labelledby="certification-heading"
        className="space-y-6"
      >
        <div className="space-y-4">
          <FadeIn>
            <div className="flex items-center gap-2">
              <h2
                id="certification-heading"
                className="text-xl font-bold tracking-tight"
              >
                Certifications
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {DATA.certifications.map((cert) => (
              <StaggerItem key={cert.title}>
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-lg border bg-card/40 p-3.5 hover:bg-muted/50 hover:border-primary/30 transition-colors h-full"
                >
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary line-clamp-1">
                        {cert.title}
                      </h4>
                      <ExternalLinkIcon className="size-3 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground/80">
                      {cert.badge}
                    </span>
                    <span>{cert.date}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* All Certifications Google Drive Button */}
          <FadeIn delay={0.08}>
            <div className="pt-2 text-center">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 cursor-pointer text-xs gap-2 border-border/80 hover:bg-muted/80 shadow-sm"
                asChild
              >
                <Link
                  href={DATA.certificationsFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View all certifications (opens in new tab)"
                >
                  <span>View All Certifications</span>
                  <ExternalLinkIcon className="size-3 text-muted-foreground" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. CONTACT */}
      <FadeIn>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="pt-4 pb-12"
        >
          <div className="rounded-2xl border bg-card/60 backdrop-blur-sm p-6 sm:p-10 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              Get in Touch
            </div>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-4xl font-bold tracking-tight"
            >
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto max-w-lg text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Have a project in mind or looking to hire
              <br />
              My inbox is always open.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <Button
                size="default"
                className="rounded-lg px-6 cursor-pointer font-medium gap-2 shadow-sm"
                asChild
              >
                <Link
                  href={DATA.contact.emailUrl}
                  aria-label="Send email to Ferry Hasan"
                >
                  <MailIcon className="size-4" />
                  Drop Me an Email
                </Link>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="rounded-lg px-6 cursor-pointer font-medium gap-2 shadow-sm"
                asChild
              >
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                >
                  LinkedIn Message
                </Link>
              </Button>
            </div>

            {/* Compact Social Media Links in One Row */}
            <div className="pt-4 border-t border-border/40">
              <SocialLinks />
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
