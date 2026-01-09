import { Badge } from "@/components/ui/badge";
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
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-background/50 backdrop-blur-[2px]"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        {design && (
          <Image
            src={design}
            alt={title}
            width={500}
            height={300}
            className="h-72 w-full overflow-hidden object-cover object-center"
          />
        )}
      </Link>
      <CardHeader className="px-4 py-3">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base font-medium">{title}</CardTitle>
          <time className="font-sans text-xs text-muted-foreground">
            {dates}
          </time>
          <div className="line-clamp-2 max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                key={tag}
                className="py-0.5 text-[10px] rounded-full"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-3 pt-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="gap-2 px-2 py-0 text-[10px] cursor-pointer"
              >
                <Link
                  href={link?.href}
                  key={index}
                  target="_blank"
                  className="flex flex-row justify-center items-center gap-2 p-0"
                >
                  {link.icon}
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
