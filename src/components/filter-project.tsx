"use client";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";

interface FilterProjectContentProps {
  defaultCategory?: string;
}

function FilterProjectContent({ defaultCategory }: FilterProjectContentProps) {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category");

  const categories = useMemo(() => ["All", ...DATA.categories], []);

  const [activeCategory, setActiveCategory] = useState(() => {
    if (queryCategory && categories.includes(queryCategory)) {
      return queryCategory;
    }
    return defaultCategory || "All";
  });

  useEffect(() => {
    if (queryCategory && categories.includes(queryCategory)) {
      setActiveCategory(queryCategory);
    }
  }, [queryCategory, categories]);

  const filteredData = useMemo(() => {
    if (activeCategory === "All") {
      return DATA.projects;
    }
    return DATA.projects.filter((item) => 
      (item.category as readonly string[]).includes(activeCategory)
    );
  }, [activeCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <div className="space-y-8 w-full py-4">
      <div
        className="flex flex-row flex-wrap justify-center items-center max-w-2xl gap-2 mx-auto"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <Button
            key={category}
            className="cursor-pointer rounded-full text-xs transition-all duration-200"
            size="sm"
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="projects-grid"
            aria-label={`Filter by ${category}`}
          >
            {category}
            <span className="ml-1.5 text-[10px] opacity-70">
              {category === "All"
                ? DATA.projects.length
                : DATA.projects.filter((p) => (p.category as readonly string[]).includes(category)).length}
            </span>
          </Button>
        ))}
      </div>
      <div
        id="projects-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl mx-auto"
        role="tabpanel"
        aria-label={`${activeCategory} projects`}
        aria-live="polite"
      >
        {filteredData.length > 0 ? (
          filteredData.map((project) => (
            <ProjectCard
              href={project.href}
              key={`${project.title}-${project.category}`}
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
          ))
        ) : (
          <p className="text-center text-muted-foreground text-sm py-8 col-span-full" role="status">
            No projects found for this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default function FilterProject({
  defaultCategory,
}: {
  defaultCategory?: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="text-center py-8 text-sm text-muted-foreground">
          Loading projects...
        </div>
      }
    >
      <FilterProjectContent defaultCategory={defaultCategory} />
    </Suspense>
  );
}
