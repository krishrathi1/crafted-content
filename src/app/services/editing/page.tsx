
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit3, Check, SpellCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EditingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <Edit3 size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional Editing & Proofreading
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Refine your writing to perfection. Our expert editors will polish your papers for clarity, grammar, style, and overall impact.
            </p>
            <Button size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/order?service=editing">Submit Your Document</Link>
            </Button>
          </div>
        </section>

        {/* What We Check Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Our Editing Service Includes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Grammar & Punctuation', icon: <SpellCheck className="h-10 w-10 text-primary" />, description: 'Correcting all grammatical errors, typos, and punctuation mistakes.' },
              { title: 'Clarity & Flow', icon: <Sparkles className="h-10 w-10 text-primary" />, description: 'Enhancing sentence structure for better readability and logical flow.' },
              { title: 'Style & Tone', icon: <Edit3 className="h-10 w-10 text-primary" />, description: 'Ensuring consistency in style and an appropriate academic tone.' },
              { title: 'Formatting Check', icon: <Check className="h-10 w-10 text-primary" />, description: 'Verifying adherence to citation styles (APA, MLA, etc.) and formatting guidelines.' },
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
        </section>
        
        {/* Before & After Example (Conceptual) */}
        <section className="bg-muted py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
                    See the Difference
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Before Editing</h3>
                        <Card className="bg-background">
                            <CardContent className="p-6">
                                <p className="italic text-muted-foreground line-through">
                                    The affects of social media on students is diverse, it can be good but also bad. Reserch shows that many students spending to much time online. This leads to less focus in class and sometimes lower grade.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">After Editing</h3>
                         <Card className="border-primary border-2">
                            <CardContent className="p-6">
                                <p className="text-foreground">
                                    The effects of social media on students are diverse, presenting both advantages and disadvantages. Research indicates that many students spend excessive time online, which can lead to reduced classroom focus and, occasionally, lower grades.
                                </p>
                            </CardContent>
                        </Card>
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
