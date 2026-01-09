import FilterProject from "@/components/filter-project";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl lg:px-0">
          <div className="flex justify-between items-center gap-2">
            <div className="flex-col flex flex-1 space-y-4 justify-center items-start">
              <div className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground dark:prose-invert">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {DATA.name.split(" ")[0]} 👋
              </h1>
              <p className="max-w-150 md:text-xl text-muted-foreground">
                {DATA.description}
              </p>
              <Button size="sm" variant="outline" className="cursor-pointer">
                <Link
                  href={DATA.cvurl}
                  target="_blank"
                  className="flex flex-row justify-center items-center gap-1"
                >
                  Download CV
                  {DATA.cvdownload}
                </Link>
              </Button>
            </div>
            <Avatar className="size-28 border shadow-xl">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section id="about">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </section>
      <section id="work">
        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        <div className="flex min-h-0 flex-col gap-y-2">
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
      <section id="education">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <div className="flex min-h-0 flex-col gap-y-2">
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
      <section id="skills">
        <div className="flex flex-col space-y-6">
          <div className="">
            <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-x-1 gap-y-1.5">
              {DATA.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-3 py-1 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-2">Design Tools</h2>
            <div className="flex flex-wrap gap-x-1 gap-y-1.5">
              {DATA.skills2.map((skill2) => (
                <Badge
                  key={skill2}
                  variant="outline"
                  className="px-3 py-1 rounded-full"
                >
                  {skill2}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex flex-col items-center justify-center space-y-4 pt-12 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 text-sm font-medium">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of stuff, from websites, mobile,
              machine learning, and motion designs. Here are a few of my
              favorites.
            </p>
          </div>
        </div>
        <FilterProject />
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-full bg-foreground text-background px-3 py-1 text-sm font-medium">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out if you&apos;d like to chat.{" "}
              <Link
                href={DATA.contact.social.email.url}
                className="text-blue-500 hover:underline"
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
