
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';

// Sample Review Data
const reviews = [
  {
    id: '1',
    name: 'Sarah L.',
    avatar: 'https://placehold.co/80x80.png',
    avatarHint: 'woman smiling',
    location: 'University of California',
    rating: 5,
    date: 'October 15, 2023',
    comment: 'Absolutely fantastic service! The writer understood my requirements perfectly and delivered a high-quality research paper well before the deadline. I highly recommend Custom Writings.',
  },
  {
    id: '2',
    name: 'Michael B.',
    avatar: 'https://placehold.co/80x80.png',
    avatarHint: 'man glasses',
    location: 'New York University',
    rating: 4,
    date: 'September 28, 2023',
    comment: 'Good quality work and responsive customer support. There were a few minor revisions needed, but they handled them quickly. Overall, a positive experience.',
  },
  {
    id: '3',
    name: 'Jessica P.',
    avatar: 'https://placehold.co/80x80.png',
    avatarHint: 'woman professional',
    location: 'Stanford University',
    rating: 5,
    date: 'November 02, 2023',
    comment: 'Saved me during a very busy semester. The essay was well-written, thoroughly researched, and perfectly formatted. Will definitely use their services again!',
  },
   {
    id: '4',
    name: 'David K.',
    avatar: 'https://placehold.co/80x80.png',
    avatarHint: 'man casual',
    location: 'Harvard University',
    rating: 5,
    date: 'November 10, 2023',
    comment: 'The dissertation chapter I ordered was exceptional. The writer was knowledgeable and incorporated all my feedback. Lifesaver!',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-primary">
              <MessageSquareQuote size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              We pride ourselves on delivering excellent service. Read genuine reviews from students and professionals who have used Custom Writings.
            </p>
          </div>
        </section>

        {/* Reviews Grid Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border">
                        <AvatarImage src={review.avatar} alt={review.name} data-ai-hint={review.avatarHint} />
                        <AvatarFallback>{review.name.substring(0,1)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">{review.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-3">&quot;{review.comment}&quot;</p>
                  <p className="text-xs text-muted-foreground text-right">Reviewed on: {review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Call to Action / Add Review Placeholder */}
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Share Your Experience
            </h2>
            <p className="text-md sm:text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
              Have you used Custom Writings? We'd love to hear your feedback! (Review submission feature coming soon)
            </p>
            <Button size="lg" asChild>
              <Link href="/order">Order Your Paper Now</Link>
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
