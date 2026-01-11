"use client";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { useCallback, useMemo, useState } from "react";

const FilterProject = () => {
  const [activeCategory, setActiveCategory] = useState("Website");

  const filteredData = useMemo(
    () =>
      DATA.projects.filter((item) => item.category.includes(activeCategory)),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <div className="space-y-12 w-full py-4">
      <div
        className="flex flex-row justify-center items-center max-w-200 space-x-2 mb-6"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {DATA.categories.map((category) => (
          <Button
            key={category}
            className="cursor-pointer"
            size="sm"
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls="projects-grid"
            aria-label={`Filter by ${category}`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div
        id="projects-grid"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto"
        role="tabpanel"
        aria-label={`${activeCategory} projects`}
        aria-live="polite"
      >
        {filteredData.length > 0 ? (
          filteredData.map((project) => (
            <ProjectCard
              href={project.href}
              key={project.title}
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
          <p className="" role="status">
            It&apos;s on my YouTube and Instagram atm.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterProject;
