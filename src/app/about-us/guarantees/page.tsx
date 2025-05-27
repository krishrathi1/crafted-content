
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Lock, Repeat, MessageSquare, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function GuaranteesPage() {
  const guarantees = [
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: 'Plagiarism-Free Papers', description: 'Every paper is written from scratch and checked for originality using advanced plagiarism detection software. We guarantee 100% unique content.' },
    { icon: <Lock className="h-10 w-10 text-primary" />, title: 'Confidentiality & Privacy', description: 'Your personal information and order details are kept strictly confidential. We never share your data with third parties.' },
    { icon: <Repeat className="h-10 w-10 text-primary" />, title: 'Free Revisions', description: 'If you are not fully satisfied with the delivered paper, we offer free revisions according to your initial instructions within a specified period.' },
    { icon: <Clock className="h-10 w-10 text-primary" />, title: 'On-Time Delivery', description: 'We understand the importance of deadlines. Your paper will be delivered by the agreed-upon time, or you get your money back (conditions apply).' },
    { icon: <MessageSquare className="h-10 w-10 text-primary" />, title: '24/7 Customer Support', description: 'Our friendly support team is available around the clock to answer your questions and assist you with any concerns.' },
    { icon: <Award className="h-10 w-10 text-primary" />, title: 'Qualified Writers', description: 'All our writers are native English speakers with verified academic credentials and proven expertise in their respective fields.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <ShieldCheck size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Guarantees to You
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              We are committed to providing a reliable, high-quality service. Here’s what you can always expect when you choose Custom Writings.
            </p>
          </div>
        </section>

        {/* Guarantees Grid Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee) => (
              <Card key={guarantee.title} className="shadow-lg text-center">
                <CardHeader>
                  <div className="flex justify-center mb-3">{guarantee.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Ready to Experience Our Reliable Service?
            </h2>
            <p className="text-md sm:text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
              Place your order with confidence, knowing you're backed by our comprehensive guarantees.
            </p>
            <Button size="lg" asChild>
              <Link href="/order">Order Now</Link>
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
