import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ArrowUpRightIcon } from "lucide-react";

export default function SocialLinks() {
  return (
    <>
      {Object.values(DATA.contact.social).map((social) => (
        <Link
          key={social.url}
          className="group/link flex cursor-pointer items-center gap-4 sm:gap-6 py-2 pr-2 hover:bg-accent2 rounded-lg"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${social.name} profile`}
        >
          <div className="relative size-9 shrink-0">
            <Image
              className="rounded-xl"
              src={social.iconWebp}
              alt={`${social.name} icon`}
              fill
              sizes="36px"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15"
              aria-hidden="true"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="flex items-center text-xs sm:text-sm font-medium underline-offset-2 group-hover/link:underline truncate">
              {social.name}
            </h3>

            <p className="text-xs text-muted-foreground truncate">
              {social.description}
            </p>
          </div>

          <ArrowUpRightIcon
            className="size-4 text-muted-foreground shrink-0"
            aria-hidden="true"
          />
        </Link>
      ))}
    </>
  );
}
