
import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Edit, ExternalLink, PenTool, SlidersHorizontal, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WritingToolsPage() {
  const tools = [
    { 
      name: 'Grammar & Spell Checker', 
      description: 'Improve your writing with our advanced grammar and spell-checking tool. (Coming Soon)', 
      icon: <CheckSquare className="h-10 w-10 text-primary" />, 
      href: '#', 
      tag: 'Free', 
      disabled: true 
    },
    { 
      name: 'Plagiarism Checker', 
      description: 'Ensure originality with our comprehensive plagiarism detection software. (Coming Soon)', 
      icon: <Zap className="h-10 w-10 text-primary" />, 
      href: '#', 
      tag: 'Premium', 
      disabled: true 
    },
    { 
      name: 'Citation Generator (APA, MLA, Chicago)', 
      description: 'Automatically generate citations in various styles. (Coming Soon)', 
      icon: <PenTool className="h-10 w-10 text-primary" />, 
      href: '#', 
      tag: 'Free', 
      disabled: true 
    },
    { 
      name: 'Topic Idea Generator', 
      description: 'Get inspired with unique topic suggestions for your next paper. (AI-Powered - Coming Soon)', 
      icon: <SlidersHorizontal className="h-10 w-10 text-primary" />, 
      href: '#', 
      tag: 'Free', 
      disabled: true 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
             <div className="mb-4 text-primary">
              <Edit size={48} className="mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Essential Writing Tools
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Streamline your writing process with our suite of helpful tools. From checking grammar to generating citations, we've got you covered.
            </p>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Our Writing Toolkit
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Card key={tool.name} className={`shadow-lg flex flex-col ${tool.disabled ? 'opacity-70' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {tool.icon}
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${tool.tag === 'Free' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {tool.tag}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" disabled={tool.disabled}>
                    <Link href={tool.href} target={tool.href !== '#' ? '_blank' : '_self'} rel="noopener noreferrer">
                      {tool.disabled ? "Coming Soon" : "Use Tool"}
                      {!tool.disabled && tool.href !== '#' && <ExternalLink className="ml-2 h-4 w-4" />}
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
