import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { TrendingUpIcon, ZapIcon, ShieldCheckIcon, GaugeIcon } from "lucide-react";
import Image from "next/image";

export default function FeaturedCard() {
  const project = DATA.featuredProject;

  const metricIcons = [
    <ZapIcon key="zap" className="size-3 sm:size-3.5 text-muted-foreground" />,
    <GaugeIcon key="gauge" className="size-3 sm:size-3.5 text-muted-foreground" />,
    <TrendingUpIcon key="trend" className="size-3 sm:size-3.5 text-muted-foreground" />,
    <ShieldCheckIcon key="shield" className="size-3 sm:size-3.5 text-muted-foreground" />,
  ];

  return (
    <Card className="relative flex flex-col overflow-hidden gap-3 p-4 sm:p-6 border border-border/80 bg-card/60 backdrop-blur-sm">
      <CardHeader className="gap-2">
        <div className="space-y-0.5">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-foreground/80">
            {project.role}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {/* Metrics Grid */}
        <div className="flex flex-col gap-1">
          <div className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
            Key Performance Benchmarks
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {project.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group flex flex-col justify-between rounded-xl border bg-muted/40 p-2.5 sm:p-3 hover:bg-muted/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs text-muted-foreground font-medium truncate">
                    {metric.label}
                  </span>
                  {metricIcons[index % metricIcons.length]}
                </div>
                <div className="mt-0.5 sm:mt-1 text-base sm:text-xl font-bold font-mono tracking-tight text-foreground group-hover:text-primary">
                  {metric.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground/80 truncate">
                  {metric.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Benchmark Showcase */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 aspect-video">
              <Image
                src={project.image}
                alt="Lighthouse 100% Performance Audit"
                width={800}
                height={450}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="text-[11px] font-medium text-white">
                  Lighthouse 100 Audit Verification
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border bg-background/50 aspect-video">
              <Image
                src={project.image2}
                alt="GTmetrix Grade A Performance Report"
                width={800}
                height={450}
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="text-[11px] font-medium text-white">
                  GTmetrix Grade A Report
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-1 items-start">
        <div className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
          Architecture & Technologies
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="list"
          aria-label="Technologies used in PT APIGS"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              role="listitem"
              className="text-xs font-medium border bg-background/80 px-2.5 py-1 rounded-lg text-foreground/90 hover:bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
