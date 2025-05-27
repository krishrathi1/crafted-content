
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, GraduationCap, Lightbulb, MessageCircle, Milestone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DissertationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
             <div className="mb-4 text-primary">
              <GraduationCap size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Dissertation & Thesis Writing Services
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Navigate the complexities of dissertation or thesis writing with our expert guidance. From proposal to final submission, we provide comprehensive support.
            </p>
            <Button size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/order?service=dissertation">Get Dissertation Help</Link>
            </Button>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Our Dissertation Support Covers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Proposal Writing', icon: <Lightbulb className="h-10 w-10 text-primary" />, description: 'Craft a compelling research proposal that gets approved.' },
              { title: 'Literature Review', icon: <Milestone className="h-10 w-10 text-primary" />, description: 'Comprehensive review of existing literature relevant to your topic.' },
              { title: 'Methodology', icon: <CheckSquare className="h-10 w-10 text-primary" />, description: 'Assistance in designing and writing the research methodology chapter.' },
              { title: 'Data Analysis', icon: <MessageCircle className="h-10 w-10 text-primary" />, description: 'Support with statistical analysis and interpretation of results.' },
            ].map(service => (
              <Card key={service.title} className="shadow-md text-center">
                <CardHeader>
                  <div className="flex justify-center mb-3">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/order?service=dissertation-full">Full Dissertation Writing</Link>
                </Button>
            </div>
        </section>
        
        {/* Placeholder Image Section */}
        <section className="bg-muted py-16">
            <div className="container mx-auto px-4 text-center">
                <Image 
                    src="https://placehold.co/800x400.png" 
                    alt="Students collaborating on a dissertation" 
                    width={800} 
                    height={400} 
                    className="rounded-lg shadow-lg mx-auto"
                    data-ai-hint="students research"
                />
                <p className="mt-6 text-lg text-foreground max-w-2xl mx-auto">
                    We provide dedicated support throughout your dissertation journey.
                </p>
            </div>
        </section>

      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>
    </div>
  );
}
