import { Logo } from '@/components/core/logo';
import { MainNavLinks } from '@/components/navigation/main-nav-links';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react';

export default function AppHeader() {
  // Links for the mobile sheet menu
  const mobileNavLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/hire-writers", label: "Hire Writers" },
    { href: "/how-to-order", label: "How to Order" },
    { href: "/services", label: "Our Services" }, // Top-level link for mobile
    { href: "/writing-help", label: "Writing Help" }, // Top-level link for mobile
    { href: "/about-us", label: "About Us" }, // Top-level link for mobile
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="h-[3px] bg-[hsl(var(--header-top-border-color))] w-full"></div>
      <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-border/40">
        <Logo />
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <MainNavLinks />
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary" asChild>
            <Link href="/signin">
              <User className="mr-2 h-4 w-4" /> Sign In
            </Link>
          </Button>
          <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/order">Order Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-background p-6">
              <div className="flex flex-col space-y-6">
                <Logo />
                <nav className="flex flex-col space-y-4">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-6 border-t border-border/40">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary w-full justify-start" asChild>
                    <Link href="/signin">
                      <User className="mr-2 h-4 w-4" /> Sign In
                    </Link>
                  </Button>
                  <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full" asChild>
                    <Link href="/order">Order Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
