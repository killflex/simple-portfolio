"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const FilterProject = () => {
  const [activeCategory, setActiveCategory] = useState("Website");

  const filteredData = DATA.projects.filter((item) =>
    item.category.includes(activeCategory)
  );

  return (
    <div className="space-y-12 w-full py-4">
      {/* Filter Buttons */}
      <div className="flex items-center justify-center max-w-[800px] space-x-2 mt-4">
        {DATA.categories.map((category) => (
          <Button
            key={category}
            className="space-x-2"
            size={"category"}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((project, id) => (
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              design={project.design}
              links={project.links}
            />
          ))
        ) : (
          <p className="">It&apos;s on my YouTube and Instagram atm.</p>
        )}
      </div>
    </div>
  );
};

export default FilterProject;
