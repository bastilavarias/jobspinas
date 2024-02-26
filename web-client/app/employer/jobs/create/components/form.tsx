'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import BaseRichtextEditor from '@/components/base-richtext-editor';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RocketIcon } from 'lucide-react';
import React from 'react';

const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: 'Username must be at least 2 characters.',
        })
        .max(30, {
            message: 'Username must not be longer than 30 characters.',
        }),
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
    bio: z.string().max(160).min(4),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: 'Please enter a valid URL.' }),
            })
        )
        .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
    bio: 'I own a computer.',
    urls: [
        { value: 'https://shadcn.com' },
        { value: 'http://twitter.com/shadcn' },
    ],
};

const jobIndustriesPhilippines: string[] = [
    'Agriculture',
    'Manufacturing',
    'Business process outsourcing (BPO)',
    'Tourism',
    'Construction',
    'Healthcare',
    'Education',
    'Information technology (IT)',
    'Retail',
    'Transportation',
];
const jobTypes: string[] = [
    'Full-time',
    'Part-time',
    'Contractual',
    'Project-based',
    'Internship',
];
const experienceLevels: string[] = [
    'Entry',
    'Junior',
    'Mid-Senior',
    'Director',
    'Executive',
];
const workSetups: string[] = ['Remote', 'On-site'];

export default function CreateJobForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: 'onChange',
    });

    function onSubmit(data: ProfileFormValues) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create a new Job</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Please enter the job title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please do not enter unecessary words
                                        like Urgent, Job Location, Shift, etc..
                                        Please only enter the job position title
                                        in here.{' '}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Industry</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a job industry" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobIndustriesPhilippines.map(
                                                (industry, index) => {
                                                    return (
                                                        <SelectItem
                                                            value={industry}
                                                        >
                                                            {industry}
                                                        </SelectItem>
                                                    );
                                                }
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select job type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobTypes.map((type, index) => {
                                                return (
                                                    <SelectItem value={type}>
                                                        {type}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Experience level</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select level" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {experienceLevels.map(
                                                (level, index) => {
                                                    return (
                                                        <SelectItem
                                                            value={level}
                                                        >
                                                            {level}
                                                        </SelectItem>
                                                    );
                                                }
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Work Setup</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select setup" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {workSetups.map((setup, index) => {
                                                return (
                                                    <SelectItem value={setup}>
                                                        {setup}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Please enter the job title"
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <BaseRichtextEditor />
                                    </FormControl>
                                    <FormDescription>
                                        You can <span>@mention</span> other
                                        users and organizations to link to them.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Post Job</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
