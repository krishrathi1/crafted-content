
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Briefcase, Target, Users, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 md:py-32">
           <Image 
            src="https://placehold.co/1200x500.png" 
            alt="Diverse team collaborating" 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 opacity-20 z-0"
            data-ai-hint="team collaboration"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="mb-4 text-primary">
              <Briefcase size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Custom Writings
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Dedicated to academic excellence and student success, Custom Writings provides top-tier writing services tailored to your unique needs.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower students and professionals by providing high-quality, original, and reliable writing assistance, fostering academic integrity and achievement.
              </p>
            </div>
            <div>
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading and most trusted partner in academic and professional writing support, recognized for our commitment to quality, customer satisfaction, and ethical practices.
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Our Values</h2>
              <ul className="text-muted-foreground space-y-1">
                <li>Excellence & Quality</li>
                <li>Integrity & Honesty</li>
                <li>Customer Focus</li>
                <li>Reliability & Timeliness</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Team Section Placeholder */}
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Meet Our Core Team (Placeholder)</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="bg-card p-6 rounded-lg shadow-md">
                            <Image 
                                src={`https://placehold.co/150x150.png`} 
                                alt={`Team Member ${i}`} 
                                width={150} 
                                height={150} 
                                className="rounded-full mx-auto mb-4 border-2 border-primary/30"
                                data-ai-hint="professional portrait"
                            />
                            <h3 className="text-xl font-semibold text-foreground">Team Member {i}</h3>
                            <p className="text-primary">Role/Title</p>
                            <p className="text-sm text-muted-foreground mt-2">A brief bio or area of expertise for this team member will go here.</p>
                        </div>
                    ))}
                </div>
                 <div className="mt-12">
                    <Button asChild>
                        <Link href="/hire-writers">View All Our Writers</Link>
                    </Button>
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
