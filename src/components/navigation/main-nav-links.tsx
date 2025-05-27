"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface NavLinkItem {
  href?: string;
  label: string;
  isDropdown?: boolean;
  subLinks?: Array<{ href: string; label: string }>;
}

const navLinks: NavLinkItem[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/hire-writers", label: "Hire Writers" },
  { href: "/how-to-order", label: "How to Order" },
  {
    label: "Our services",
    isDropdown: true,
    href: "/services", // Fallback link for the main category
    subLinks: [
      { href: "/services/essay-writing", label: "Essay Writing" },
      { href: "/services/research-papers", label: "Research Papers" },
      { href: "/services/dissertations", label: "Dissertations" },
      { href: "/services/editing", label: "Editing & Proofreading" },
    ],
  },
  {
    label: "Writing help",
    isDropdown: true,
    href: "/writing-help", // Fallback link
    subLinks: [
      { href: "/writing-help/guides", label: "Writing Guides" },
      { href: "/writing-help/samples", label: "Free Samples" },
      { href: "/writing-help/tools", label: "Writing Tools" },
    ],
  },
  {
    label: "About us",
    isDropdown: true,
    href: "/about-us", // Fallback link
    subLinks: [
      { href: "/about-us/company", label: "Our Company" },
      { href: "/about-us/guarantees", label: "Guarantees" },
      { href: "/about-us/reviews", label: "Customer Reviews" },
    ],
  },
];

export function MainNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-5 lg:space-x-8" aria-label="Main navigation">
      {navLinks.map((link) =>
        link.isDropdown && link.subLinks ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none",
                pathname.startsWith(link.href!) ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {link.subLinks.map((subLink) => (
                <DropdownMenuItem key={subLink.href} asChild>
                  <Link href={subLink.href} className={cn(pathname === subLink.href ? "bg-accent" : "")}>
                    {subLink.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.href}
            href={link.href!}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-foreground"
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
