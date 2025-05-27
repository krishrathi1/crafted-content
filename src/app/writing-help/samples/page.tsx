
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, FileText, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WritingSamplesPage() {
  const samples = [
    { id: '1', title: 'Argumentative Essay: The Future of AI', subject: 'Technology', pages: 5, level: 'Undergraduate', previewHref: '/samples/argumentative-ai-preview.pdf', downloadHref: '/samples/argumentative-ai.pdf' },
    { id: '2', title: 'Literary Analysis: Themes in Hamlet', subject: 'Literature', pages: 8, level: 'Master\'s', previewHref: '/samples/hamlet-analysis-preview.pdf', downloadHref: '/samples/hamlet-analysis.pdf' },
    { id: '3', title: 'Research Proposal: Renewable Energy Solutions', subject: 'Environmental Science', pages: 10, level: 'PhD', previewHref: '/samples/renewable-energy-preview.pdf', downloadHref: '/samples/renewable-energy.pdf' },
    { id: '4', title: 'Case Study: Marketing Strategy for a Startup', subject: 'Business', pages: 6, level: 'Undergraduate', previewHref: '/samples/startup-marketing-preview.pdf', downloadHref: '/samples/startup-marketing.pdf' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <Layers size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Free Writing Samples
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Explore our collection of high-quality writing samples to understand our standards and get inspiration for your own work. These are for reference purposes only.
            </p>
          </div>
        </section>

        {/* Samples Grid Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Browse Our Sample Library
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {samples.map((sample) => (
              <Card key={sample.id} className="shadow-lg flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">{sample.title}</CardTitle>
                  <CardDescription>
                    Subject: {sample.subject} | Pages: {sample.pages} | Level: {sample.level}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">
                    This sample demonstrates our commitment to quality research, clear writing, and proper formatting. Use it as a guide for your own academic endeavors.
                  </p>
                   <Image 
                    src="https://placehold.co/600x400.png?text=Sample+Preview" 
                    alt={`Preview of ${sample.title}`} 
                    width={600} 
                    height={400} 
                    className="rounded-md border border-border mb-4"
                    data-ai-hint="document text"
                  />
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href={sample.previewHref} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" /> Preview Sample
                    </Link>
                  </Button>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={sample.downloadHref} download>
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Please note: These samples are for reference and inspiration. Submitting them as your own work is plagiarism.</p>
            <Button size="lg" asChild>
              <Link href="/order">Need a Custom Paper?</Link>
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
