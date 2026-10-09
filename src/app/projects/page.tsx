import FilterProject from "@/components/filter-project";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore all projects by ${DATA.name} — Web Apps, Mobile Apps, ML/AI, Motion Graphics, and 3D Design.`,
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-dvh max-w-4xl mx-auto w-full">
      <FadeIn delay={0.05} direction="left" distance={10}>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 rounded-lg text-xs text-muted-foreground hover:text-foreground px-3 mb-4 inline-flex",
          )}
          aria-label="Back to home"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back to Home
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section aria-label="Project list with category filters">
          <FilterProject />
        </section>
      </FadeIn>
    </main>
  );
}
