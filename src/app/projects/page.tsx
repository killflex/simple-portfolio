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
    <main className="flex flex-col min-h-dvh space-y-4">
      <div>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 rounded-lg text-xs text-muted-foreground hover:text-foreground px-3 mb-6",
          )}
          aria-label="Back to home"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back to Home
        </Link>

        <div className="space-y-2 text-left">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            All Projects
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm">
            A comprehensive showcase of web applications, mobile applications,
            machine learning systems, motion graphics, and 3D visual designs.
          </p>
        </div>
      </div>

      <section aria-label="Project list with category filters">
        <FilterProject />
      </section>
    </main>
  );
}
