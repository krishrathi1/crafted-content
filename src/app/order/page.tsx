
'use client'; // For potential form handling

import AppHeader from '@/components/layout/app-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, DollarSign, FileText, Users, Hash, Clock } from 'lucide-react';

export default function OrderPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for order submission logic
    alert('Order submission functionality to be implemented.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <Card className="w-full max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground">Place Your Order</CardTitle>
            <CardDescription>Fill in the details below to get started with your custom paper.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service-type" className="text-sm font-medium text-muted-foreground">Service Type</Label>
                  <Select name="service-type" required>
                    <SelectTrigger id="service-type" className="mt-1">
                       <FileText className="h-4 w-4 text-muted-foreground mr-2 opacity-50" />
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essay-writing">Essay Writing</SelectItem>
                      <SelectItem value="research-paper">Research Paper</SelectItem>
                      <SelectItem value="dissertation">Dissertation</SelectItem>
                      <SelectItem value="editing-proofreading">Editing & Proofreading</SelectItem>
                      <SelectItem value="admission-essay">Admission Essay</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="academic-level" className="text-sm font-medium text-muted-foreground">Academic Level</Label>
                  <Select name="academic-level" required>
                    <SelectTrigger id="academic-level" className="mt-1">
                       <Users className="h-4 w-4 text-muted-foreground mr-2 opacity-50" />
                      <SelectValue placeholder="Select academic level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="masters">Master&apos;s</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="topic" className="text-sm font-medium text-muted-foreground">Topic / Subject</Label>
                <Input id="topic" name="topic" type="text" required className="mt-1" placeholder="e.g., The Impact of Social Media on Society" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="pages" className="text-sm font-medium text-muted-foreground">Number of Pages</Label>
                   <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Hash className="h-4 w-4 text-muted-foreground opacity-50" />
                    </div>
                    <Input id="pages" name="pages" type="number" min="1" required className="pl-10" placeholder="e.g., 5" />
                   </div>
                </div>
                 <div>
                  <Label htmlFor="deadline" className="text-sm font-medium text-muted-foreground">Deadline</Label>
                   <div className="relative mt-1">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-4 w-4 text-muted-foreground opacity-50" />
                    </div>
                    <Input id="deadline" name="deadline" type="date" required className="pl-10" />
                   </div>
                </div>
              </div>

              <div>
                <Label htmlFor="instructions" className="text-sm font-medium text-muted-foreground">Detailed Instructions</Label>
                <Textarea
                  id="instructions"
                  name="instructions"
                  rows={6}
                  required
                  className="mt-1"
                  placeholder="Provide all necessary details, formatting requirements, sources to use, etc."
                />
              </div>
              
              {/* Placeholder for file uploads */}
              <div>
                <Label htmlFor="attachments" className="text-sm font-medium text-muted-foreground">Attachments (Optional)</Label>
                <Input id="attachments" name="attachments" type="file" multiple className="mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
                <p className="mt-1 text-xs text-muted-foreground">Upload any relevant files, such as rubrics, lecture notes, or drafts.</p>
              </div>


              <div className="pt-4">
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3">
                  <DollarSign className="mr-2 h-5 w-5" /> Proceed to Payment
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border/60 bg-background">
        <p>© {new Date().getFullYear()} Custom Writings. All rights reserved.</p>
      </footer>
    </div>
  );
}
