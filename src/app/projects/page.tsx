import FilterProject from "@/components/filter-project";
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
    <main className="flex flex-col min-h-dvh space-y-8">
      <div>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 text-xs text-muted-foreground hover:text-foreground pl-0 pr-3 mb-6"
          )}
          aria-label="Back to home"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back to Home
        </Link>

        <div className="space-y-2 text-left">
          <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
            Archive & Portfolio
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Projects
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            A comprehensive showcase of web applications, mobile applications, machine learning systems, motion graphics, and 3D visual designs.
          </p>
        </div>
      </div>

      <section aria-label="Project list with category filters">
        <FilterProject />
      </section>
    </main>
  );
}
