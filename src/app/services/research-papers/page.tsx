
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Edit, FileText, GraduationCap, Lightbulb, Search, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResearchPapersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <FileText size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Expert Research Paper Writing
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Get comprehensive, well-researched, and meticulously cited research papers crafted by subject-matter experts. We handle complex topics and deliver quality work.
            </p>
            <Button size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/order?service=research-paper">Order Your Research Paper</Link>
            </Button>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Why Choose Us for Your Research Paper?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-foreground">Qualified Writers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Our writers hold advanced degrees and have proven experience in academic research and writing across various fields.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <Search className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-foreground">Thorough Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We delve deep into credible sources to gather relevant information, ensuring your paper is well-supported and insightful.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-foreground">Originality & Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every paper is written from scratch and meticulously cited according to your required style (APA, MLA, Chicago, etc.).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Our Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Submit Your Requirements</h3>
                <p className="text-muted-foreground">Provide detailed instructions, topic, length, and any specific sources or guidelines for your research paper.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Writer Assignment</h3>
                <p className="text-muted-foreground">We match your order with a writer who has the most relevant expertise in your subject area.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Research, Writing & Review</h3>
                <p className="text-muted-foreground">Your writer conducts research, drafts the paper, and our quality team reviews it for accuracy and adherence to standards.</p>
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
