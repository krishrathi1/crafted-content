
import AppHeader from '@/components/layout/app-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CheckCircle2, BookOpenText, Brain, GraduationCap, ScrollText, Stethoscope, HeartPulse, Users, FileText, Palette, Edit3, NotebookText } from 'lucide-react';
import Link from 'next/link';
import type { StaticImageData } from 'next/image'; // Not used for placeholders

// Placeholder avatars - replace with actual image paths or a generation service if needed
const avatarFred = "https://placehold.co/80x80.png";
const avatarJanira = "https://placehold.co/80x80.png";
const avatarSimon = "https://placehold.co/80x80.png";


const writers = [
  {
    name: 'Frederick M.',
    avatar: avatarFred,
    avatarHint: "man portrait",
    credentials: 'MA History teacher',
    focusAreas: [
      { name: 'Philosophy', icon: <Brain className="w-3 h-3 mr-1" /> },
      { name: 'Education', icon: <GraduationCap className="w-3 h-3 mr-1" /> },
      { name: 'History', icon: <ScrollText className="w-3 h-3 mr-1" /> },
    ],
    lovesToWriteLine1: 'Essay, creative writing,',
    lovesToWriteLine2: 'assignment',
    stats: {
      satisfaction: '99%',
      onTime: '100%',
      delivery: '8h+',
    },
  },
  {
    name: 'Janira M.',
    avatar: avatarJanira,
    avatarHint: "woman portrait",
    credentials: 'MS Certified nurse',
    focusAreas: [
      { name: 'Nursing', icon: <Stethoscope className="w-3 h-3 mr-1" /> },
      { name: 'Healthcare', icon: <HeartPulse className="w-3 h-3 mr-1" /> },
      { name: 'Social Work', icon: <Users className="w-3 h-3 mr-1" /> },
    ],
    lovesToWriteLine1: 'Essay, assignment,',
    lovesToWriteLine2: 'case study',
    stats: {
      satisfaction: '97%',
      onTime: '100%',
      delivery: '4h+',
    },
  },
  {
    name: 'Simon G.',
    avatar: avatarSimon,
    avatarHint: "man glasses",
    credentials: 'Ph.D. English teacher',
    focusAreas: [
      { name: 'Classic Literature', icon: <BookOpenText className="w-3 h-3 mr-1" /> },
      { name: 'English 101', icon: <FileText className="w-3 h-3 mr-1" /> },
      { name: 'Education', icon: <GraduationCap className="w-3 h-3 mr-1" /> },
    ],
    lovesToWriteLine1: 'Homework, essay,',
    lovesToWriteLine2: 'creative writing',
    stats: {
      satisfaction: '98%',
      onTime: '99%',
      delivery: '8h+',
    },
  },
];

export default function HowToOrderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow bg-secondary">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              These professional essay writers will help you
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We can cover any custom essay in your discipline
            </p>
            <div className="flex space-x-2 mt-6">
              <Button variant="outline" size="icon" className="rounded-full bg-card hover:bg-muted">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-card hover:bg-muted">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writers.map((writer) => (
              <Card key={writer.name} className="bg-card shadow-lg rounded-xl overflow-hidden flex flex-col">
                <CardHeader className="items-center pt-6">
                  <Avatar className="w-20 h-20 mb-3 border-2 border-primary/30">
                    <AvatarImage src={writer.avatar} alt={writer.name} data-ai-hint={writer.avatarHint} />
                    <AvatarFallback>{writer.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-semibold flex items-center">
                    {writer.name}
                    <CheckCircle2 className="w-5 h-5 text-primary ml-1.5" />
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{writer.credentials}</p>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-4 space-y-4 text-sm text-left">
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1.5 text-xs">Focus area</h4>
                    <div className="flex flex-wrap gap-2">
                      {writer.focusAreas.map((area) => (
                        <Badge key={area.name} variant="secondary" className="py-1 px-2.5 text-xs bg-primary/5 border-primary/20 text-primary/90 hover:bg-primary/10">
                          {area.icon}
                          {area.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-1 text-xs">Love to write</h4>
                    <p className="text-foreground leading-snug">
                      {writer.lovesToWriteLine1}<br/>{writer.lovesToWriteLine2}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    <div>
                      <p className="text-lg font-semibold text-primary">{writer.stats.satisfaction}</p>
                      <p className="text-xs text-muted-foreground">satisfaction rate</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary">{writer.stats.onTime}</p>
                      <p className="text-xs text-muted-foreground">on time rate</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary">{writer.stats.delivery}</p>
                      <p className="text-xs text-muted-foreground">delivery</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href={`/writer/${writer.name.toLowerCase().replace(/\s/g, '-')}`}>View profile</Link>
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
