
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
            Expertly Crafted Content, Just For You
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl text-muted-foreground">
            Elevate your brand with premium articles, blog posts, and web copy, written by professionals dedicated to quality and tailored to your voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-10 py-6 text-lg border-primary text-primary hover:bg-primary/10">
              <Link href="/how-to-order">How to Order</Link>
            </Button>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">Why Choose Crafted Content?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Quality Guaranteed</h3>
                <p className="text-muted-foreground">Our writers are vetted professionals committed to delivering high-quality, original content.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Tailored to You</h3>
                <p className="text-muted-foreground">We work closely with you to understand your brand voice and content needs.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Timely Delivery</h3>
                <p className="text-muted-foreground">Meet your deadlines with our reliable and efficient content creation process.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>
    </div>
  );
}
