
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Edit2, FileText, HelpCircle, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WritingGuidesPage() {
  const guides = [
    { title: 'How to Write a Thesis Statement', description: 'Learn the art of crafting a strong, arguable thesis statement for your essays.', icon: <FileText className="h-8 w-8 text-primary" />, href: '/writing-help/guides/thesis-statement' },
    { title: 'Understanding APA Citation Style', description: 'A comprehensive guide to formatting your paper and citations using APA style.', icon: <BookOpen className="h-8 w-8 text-primary" />, href: '/writing-help/guides/apa-citation' },
    { title: 'Tips for Effective Proofreading', description: 'Discover techniques to catch errors and improve the quality of your writing.', icon: <Edit2 className="h-8 w-8 text-primary" />, href: '/writing-help/guides/proofreading-tips' },
    { title: 'Brainstorming Essay Topics', description: 'Stuck on what to write? Explore methods for generating compelling essay ideas.', icon: <Lightbulb className="h-8 w-8 text-primary" />, href: '/writing-help/guides/brainstorming-topics' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <HelpCircle size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Academic Writing Guides
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Enhance your writing skills with our expert guides. From structuring essays to mastering citation styles, we're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Guides List Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Explore Our Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Card key={guide.title} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="mt-1">{guide.icon}</div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">{guide.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                   <Button variant="link" asChild className="text-primary p-0">
                    <Link href={guide.href}>Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

         {/* Call to Action for Custom Help */}
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Need Personalized Writing Assistance?
            </h2>
            <p className="text-md sm:text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
              If our guides don't cover your specific needs, our expert writers are ready to provide custom-tailored help.
            </p>
            <Button size="lg" asChild>
              <Link href="/order">Order Custom Writing</Link>
            </Button>
          </div>
        </section>

      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>
    </div>
  );
}
