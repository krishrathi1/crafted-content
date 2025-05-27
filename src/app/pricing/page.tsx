
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Standard',
    price: '$15',
    period: '/ page',
    features: [
      'High-quality writing',
      'Plagiarism check',
      'Basic formatting',
      'Standard delivery',
    ],
    cta: 'Order Now',
    href: '/order?tier=standard',
  },
  {
    name: 'Premium',
    price: '$25',
    period: '/ page',
    features: [
      'Expert writer assignment',
      'Advanced plagiarism check',
      'Custom formatting',
      'Priority support',
      'Faster delivery options',
    ],
    cta: 'Order Now',
    href: '/order?tier=premium',
    popular: true,
  },
  {
    name: 'Editing & Proofreading',
    price: '$10',
    period: '/ page',
    features: [
      'Grammar & spelling check',
      'Style enhancement',
      'Clarity improvement',
      'Formatting review',
    ],
    cta: 'Order Now',
    href: '/order?tier=editing',
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow bg-secondary">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Pricing Plans
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best suits your academic needs. Transparent pricing, no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary border-2 shadow-primary/20 shadow-lg' : 'shadow-lg'}`}>
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-t-md -mb-px text-center">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-semibold text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="flex items-baseline">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" asChild>
                    <Link href={tier.href}>{tier.cta}</Link>
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
