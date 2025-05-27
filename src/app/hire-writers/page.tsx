
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Award, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featuredWriters = [
  {
    id: '1',
    name: 'Dr. Eleanor Vance',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman professional',
    credentials: 'PhD in Literature, 10+ Years Experience',
    specialties: ['Humanities', 'Literature Reviews', 'Critical Essays'],
    rating: 4.9,
    completedOrders: 200,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man smiling',
    credentials: 'MSc in Business Analytics, Ex-Consultant',
    specialties: ['Business Reports', 'Case Studies', 'Data Analysis'],
    rating: 4.8,
    completedOrders: 150,
  },
];

export default function HireWritersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Hire Our Expert Writers
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Connect with talented and experienced writers across various disciplines. Find the perfect expert for your academic or professional writing needs.
            </p>
            <Button size="lg" asChild className="px-10 py-6 text-lg">
              <Link href="/how-to-order">Browse Writers & Order</Link>
            </Button>
          </div>
        </section>

        {/* Why Hire Our Writers Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Why Choose Our Writers?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Verified Experts</h3>
              <p className="text-muted-foreground">
                All our writers undergo a rigorous vetting process to ensure their qualifications and expertise.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Diverse Specializations</h3>
              <p className="text-muted-foreground">
                From humanities to sciences, find writers proficient in a wide array of subjects and paper types.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Direct Communication</h3>
              <p className="text-muted-foreground">
                Collaborate directly with your chosen writer to ensure your requirements are perfectly met. (Feature coming soon)
              </p>
            </div>
          </div>
        </section>

        {/* Featured Writers Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Meet Some of Our Top Writers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredWriters.map((writer) => (
                <Card key={writer.id} className="shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-20 h-20 border-2 border-primary/30">
                      <AvatarImage src={writer.avatar} alt={writer.name} data-ai-hint={writer.avatarHint} />
                      <AvatarFallback>{writer.name.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl font-semibold flex items-center">
                        {writer.name}
                        <CheckCircle className="w-5 h-5 text-primary ml-2" />
                      </CardTitle>
                      <CardDescription>{writer.credentials}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-muted-foreground mb-1">Specialties:</h4>
                    <ul className="list-disc list-inside text-sm text-foreground mb-3">
                      {writer.specialties.map(spec => <li key={spec}>{spec}</li>)}
                    </ul>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Rating: <span className="font-semibold text-primary">{writer.rating}/5.0</span></span>
                      <span>Orders: <span className="font-semibold text-primary">{writer.completedOrders}+</span></span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <Link href={`/writer/${writer.id}`}>View Profile & Hire</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/how-to-order">See All Writers</Link>
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
