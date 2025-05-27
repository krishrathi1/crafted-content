
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpenText, Edit, FileText, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Essay Writing',
    description: 'Custom essays tailored to your requirements, from argumentative to analytical.',
    href: '/services/essay-writing',
    icon: <FileText className="h-10 w-10 text-primary mb-4" />,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'writing essay',
  },
  {
    title: 'Research Papers',
    description: 'In-depth research papers, meticulously sourced and structured for academic success.',
    href: '/services/research-papers',
    icon: <BookOpenText className="h-10 w-10 text-primary mb-4" />,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'research library',
  },
  {
    title: 'Dissertations',
    description: 'Comprehensive dissertation and thesis writing assistance from topic selection to final draft.',
    href: '/services/dissertations',
    icon: <GraduationCap className="h-10 w-10 text-primary mb-4" />,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'graduation thesis',
  },
  {
    title: 'Editing & Proofreading',
    description: 'Professional editing and proofreading to polish your work for clarity and correctness.',
    href: '/services/editing',
    icon: <Edit className="h-10 w-10 text-primary mb-4" />,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'editing document',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow bg-secondary">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Writing Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover a comprehensive range of academic writing services designed to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-primary p-0 h-auto" asChild>
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>
    </div>
  );
}
