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
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-1.5 justify-center items-start">
              <div className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground dark:prose-invert">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400"></span>
                </span>
                Available for work
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {DATA.name.split(" ")[0]} 👋
              </h1>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">{DATA.description}</p>
              <Button size={"cv"} className="rounded-full">
                <Link
                  href={DATA.cvurl}
                  target="_blank"
                  className="flex flex-row justify-center items-center gap-1 text-xs"
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
        <h2 className="text-xl font-bold mb-4">About</h2>
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <Markdown>{DATA.summary}</Markdown>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          {DATA.work.map((work, id) => (
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
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {DATA.education.map((education, id) => (
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
        <div className="flex min-h-0 flex-col gap-y-4">
          <div className="">
            <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Design Tools</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.skills2.map((skill2, id) => (
                <Badge key={skill2} variant="secondary">{skill2}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex flex-col items-center justify-center space-y-4 pt-12 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-foreground text-background px-3 py-1 text-sm font-medium">
              My Projects
            </div>
            <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-5xl italic">
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
            <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-5xl italic">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
