"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  organisation: z.string().min(2, { message: 'Organisation name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  requestType: z.string({ required_error: 'Please select a request type.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000),
  followUpCall: z.boolean().default(false),
});

type OrganisationEnquiryFormValues = z.infer<typeof formSchema>;

interface OrganisationEnquiryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrganisationEnquiryForm({ open, onOpenChange }: OrganisationEnquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<OrganisationEnquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      organisation: '',
      email: '',
      phone: '',
      message: '',
      followUpCall: false,
    },
  });

  async function onSubmit(values: OrganisationEnquiryFormValues) {
    // TODO: Implement server action to send email
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { onOpenChange(isOpen); if (!isOpen) { setTimeout(() => { form.reset(); setIsSubmitted(false); }, 300); } }}>
      <DialogContent className="sm:max-w-[480px]">
        {isSubmitted ? (
          <div className="py-8 text-center">
            <DialogHeader>
              <DialogTitle className="text-2xl">Thank You!</DialogTitle>
              <DialogDescription className="pt-2">
                Your enquiry has been sent. We’ll be in touch shortly.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Organisational Enquiry</DialogTitle>
              <DialogDescription>
                Enquire about tailored programmes, speaker events, or training sessions.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...form.register('name')} />
                {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="organisation">Organisation Name</Label>
                <Input id="organisation" {...form.register('organisation')} />
                {form.formState.errors.organisation && <p className="text-sm text-red-500">{form.formState.errors.organisation.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...form.register('email')} />
                {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" {...form.register('phone')} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requestType">Type of Request</Label>
                <Select onValueChange={(value) => form.setValue('requestType', value)} defaultValue={form.getValues('requestType')}>
                  <SelectTrigger id="requestType">
                    <SelectValue placeholder="Select a type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="speaker-invite">Speaker Invite</SelectItem>
                    <SelectItem value="in-person-training">In-Person Training</SelectItem>
                    <SelectItem value="course-delivery">Course Delivery</SelectItem>
                    <SelectItem value="workshop-series">Workshop Series</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.requestType && <p className="text-sm text-red-500">{form.formState.errors.requestType.message}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...form.register('message')} />
                {form.formState.errors.message && <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="followUpCall" {...form.register('followUpCall')} />
                <label htmlFor="followUpCall" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Would you like us to follow up with a phone call?
                </label>
              </div>
              <DialogFooter>
                <Button type="submit" variant="secondary">Submit Enquiry</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
