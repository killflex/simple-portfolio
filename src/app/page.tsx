import FilterProject from "@/components/filter-project";
import SocialLinks from "@/components/social-links";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-8">
      <section id="hero" aria-label="Introduction">
        <div className="mx-auto w-full max-w-2xl lg:px-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex-col flex flex-1 space-y-4 justify-center items-start">
              <div
                className="flex items-center gap-1.5 font-sans text-sm"
                role="status"
                aria-live="polite"
              >
                <span
                  className="relative w-2 h-2 rounded-full bg-emerald-400"
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {DATA.name.split(" ")[0]} 👋
              </h1>
              <p className="max-w-150 md:text-xl">{DATA.description}</p>
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg cursor-pointer"
                asChild
              >
                <Link
                  href={DATA.cvurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-center items-center gap-1"
                  aria-label="Download CV (opens in new tab)"
                >
                  Download CV
                  {DATA.cvdownload}
                </Link>
              </Button>
            </div>
            <Avatar className="size-32 border shadow-xl">
              <AvatarImage
                alt={`${DATA.name}'s profile picture`}
                src={DATA.avatarUrl}
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section aria-labelledby="socials-heading">
        <div className="grid grid-cols-2 gap-4">
          <SocialLinks />
        </div>
      </section>
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-bold mb-2">
          About
        </h2>
        <div className="flex flex-col max-w-full text-pretty font-sans text-sm gap-y-4">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </section>
      <section id="work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="text-xl font-bold mb-2">
          Work Experience
        </h2>
        <div className="flex min-h-0 flex-col gap-y-4" role="list">
          {DATA.work.map((work) => (
            <ResumeCard
              key={work.company}
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
          ))}
        </div>
      </section>
      <section id="education" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-xl font-bold mb-2">
          Education
        </h2>
        <div className="flex min-h-0 flex-col gap-y-2" role="list">
          {DATA.education.map((education) => (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              disabled={false}
            />
          ))}
        </div>
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <h2 className="sr-only" id="skills-heading">
          Skills
        </h2>
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
            <ul
              className="flex flex-wrap gap-x-1 gap-y-1.5"
              role="list"
              aria-label="Technical skills"
            >
              {DATA.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-xs font-medium border px-2 py-1 rounded-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Tools</h3>
            <ul
              className="flex flex-wrap gap-x-1 gap-y-1.5"
              role="list"
              aria-label="Design tools"
            >
              {DATA.skills2.map((skill2) => (
                <li
                  key={skill2}
                  className="text-xs font-medium border px-2 py-1 rounded-lg"
                >
                  {skill2}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" aria-labelledby="projects-heading">
        <div className="flex flex-col items-center justify-center space-y-4 pt-12 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm font-medium">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Check out my latest work
            </h2>
            <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of stuff, from websites, mobile,
              machine learning, and motion designs. Here are a few of my
              favorites.
            </p>
          </div>
        </div>
        <FilterProject />
      </section>
      <section id="contact" aria-labelledby="contact-heading">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div
              className="inline-block px-3 py-1 text-sm font-medium"
              aria-hidden="true"
            >
              Contact
            </div>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight sm:text-5xl"
            >
              Get in Touch
            </h2>
            <p className="mx-auto max-w-150 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out if you&apos;d like to chat.{" "}
              <Link
                href={DATA.contact.emailUrl}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                aria-label="Send email to Ferry Hasan"
              >
                Drop me an email with your questions
              </Link>{" "}
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
