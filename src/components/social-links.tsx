import { DATA } from "@/data/resume";
import Link from "next/link";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      url: DATA.contact.social.GitHub.url,
      icon: DATA.contact.social.GitHub.icon,
    },
    {
      name: "LinkedIn",
      url: DATA.contact.social.LinkedIn.url,
      icon: DATA.contact.social.LinkedIn.icon,
    },
    {
      name: "Instagram",
      url: DATA.contact.social.Instagram.url,
      icon: DATA.contact.social.Instagram.icon,
    },
    {
      name: "Twitter",
      url: DATA.contact.social.Twitter.url,
      icon: DATA.contact.social.Twitter.icon,
    },
    {
      name: "YouTube",
      url: DATA.contact.social.Youtube.url,
      icon: DATA.contact.social.Youtube.icon,
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
      role="list"
      aria-label="Social media profiles"
    >
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          className="inline-flex items-center justify-center h-7 px-3 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/50 gap-1.5"
          aria-label={`Visit my ${social.name} profile (opens in new tab)`}
        >
          <social.icon className="size-3.5 shrink-0" />
          <span>{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
