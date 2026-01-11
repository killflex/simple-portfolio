import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Markdown from "react-markdown";
import { Button } from "./ui/button";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  design?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

const ProjectCardComponent = ({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  design,
  links,
  className,
}: Props) => {
  return (
    <Card
      className={"flex flex-col overflow-hidden border"}
      role="article"
      aria-labelledby={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
        aria-label={`View ${title} project details`}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${title} project demo video`}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        {design && (
          <Image
            src={design}
            alt={`${title} project design`}
            width={500}
            height={300}
            className="h-72 w-full overflow-hidden object-cover object-center"
          />
        )}
      </Link>
      {description ? (
        <>
          <CardHeader className="px-4 py-3">
            <div className="space-y-1">
              <CardTitle
                id={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
                className="mt-1 text-base font-bold"
              >
                {title}
              </CardTitle>
              <time className="font-sans text-xs" dateTime={dates}>
                {dates}
              </time>
              <div className="line-clamp-2 max-w-full text-pretty text-xs">
                <Markdown>{description}</Markdown>
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col px-4">
            {tags && tags.length > 0 && (
              <div
                className="flex flex-wrap gap-1"
                role="list"
                aria-label="Technologies used"
              >
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="inline-flex items-center rounded-full border bg-foreground-muted px-2 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </>
      ) : (
        <>
          <CardHeader className="px-4 mt-3 mb-1.5">
            <div className="space-y-1">
              <CardTitle
                id={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
                className="mt-1 text-base font-bold"
              >
                {title}
              </CardTitle>
              <time className="font-sans text-xs" dateTime={dates}>
                {dates}
              </time>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col px-4">
            {tags && tags.length > 0 && (
              <div
                className="flex flex-wrap gap-1"
                role="list"
                aria-label="Technologies used"
              >
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="inline-flex items-center rounded-full border bg-foreground-muted px-2 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </>
      )}

      <CardFooter className="px-4 pb-3 pt-2">
        {links && links.length > 0 && (
          <div
            className="flex flex-row flex-wrap items-start gap-1"
            role="list"
            aria-label="Project links"
          >
            {links?.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="gap-2 px-2 py-0 text-xs cursor-pointer"
                role="listitem"
              >
                <Link
                  href={link?.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.type} for ${title} (opens in new tab)`}
                  className="flex flex-row justify-center items-center gap-2 p-0"
                >
                  <span aria-hidden="true">{link.icon}</span>
                  {link.type}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
