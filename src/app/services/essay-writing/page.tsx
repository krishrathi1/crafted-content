
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EssayWritingServicePage() {
  const steps = [
    {
      id: 1,
      title: 'Brief us and go',
      description: null,
    },
    {
      id: 2,
      title: 'Writing magic happens',
      description:
        'A hand-picked writer researches, drafts, edits, and formats your topic as you want it.\nOur experts are motivated to make paper flawless, as they get paid only if you accept it.',
    },
    {
      id: 3,
      title: 'Your problem solved',
      description: null,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <AppHeader />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            How our essay writing service works
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            "Write my paper," you ask? Send your tasks to experts—and they'll do the rest.
          </p>

          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start text-left">
                {/* Left Column: Image/Graphic */}
                <div className="relative bg-slate-50 p-6 rounded-lg border border-slate-200 aspect-[3/4] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-primary mb-2">
                      <FileText className="w-6 h-6 mr-2" />
                      <span className="font-semibold">Order #57942980 created!</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      We're looking for the best-fit expert.
                    </p>
                    {/* Placeholder for document lines */}
                    <div className="space-y-2.5 opacity-60">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                     {/* Using generic badge variants for now. These colors can be customized further in globals.css if needed. */}
                    <Badge variant="default" className="block w-fit bg-pink-100 text-pink-700 hover:bg-pink-200 text-xs px-3 py-1.5">
                      AI check
                    </Badge>
                    <Badge variant="default" className="block w-fit bg-indigo-100 text-indigo-700 hover:bg-indigo-200 text-xs px-3 py-1.5">
                      Plagiarism check
                    </Badge>
                  </div>
                   {/* Using a placeholder image for the background graphic illusion. 
                       The data-ai-hint helps in finding a suitable image later.
                       This example uses a subtle pattern.
                   */}
                  <Image
                    src="https://placehold.co/400x533.png?text=+" // Transparent or very subtle pattern
                    alt="Abstract background for order details"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 -z-10 opacity-5"
                    data-ai-hint="abstract pattern"
                  />
                </div>

                {/* Right Column: Steps */}
                <div className="pt-4 md:pt-0">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-start mb-8 last:mb-0">
                      <div className="text-4xl font-bold text-primary mr-4 md:mr-6 w-10 text-center">
                        {step.id}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1.5 text-foreground">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-muted-foreground whitespace-pre-line text-sm">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>

      {/* Floating Action Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        asChild
      >
        <Link href="/contact-us"> {/* Assuming a contact page or chat modal trigger */}
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Contact Us</span>
        </Link>
      </Button>
    </div>
  );
}

    