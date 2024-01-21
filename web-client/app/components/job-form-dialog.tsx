import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    QuestionMarkCircledIcon,
    ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { useForm } from 'react-hook-form';
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
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
export function JobFormDialog({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Function;
}) {
    const handleOnOpenChange = (value: boolean) => {
        setOpen(value);
    };

    const onSubmit = () => {};

    const form = useForm();

    const ExtendedActionButtons = () => (
        <React.Fragment>
            <span className="text-xs inline cursor-pointer hover:underline">
                Inquire <QuestionMarkCircledIcon className="h-3 w-3 inline" />
            </span>{' '}
            ·{' '}
            <span className="text-xs inline cursor-pointer hover:underline">
                Report <ExclamationTriangleIcon className="h-3 w-3 inline" />
            </span>
        </React.Fragment>
    );

    return (
        <Dialog open={open} onOpenChange={handleOnOpenChange}>
            <DialogContent className="max-w-lg xl:max-w-xl overflow-y-scroll max-h-screen">
                <DialogHeader>
                    <DialogTitle>Job Form</DialogTitle>
                    <DialogDescription>
                        <ExtendedActionButtons />
                    </DialogDescription>
                </DialogHeader>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger>
                            <div className="flex flex-col items-start">
                                <h6 className="text-2xl">Software Engineer</h6>
                                <p>
                                    <span className="font-bold underline cursor-pointer">
                                        Side Project Alliance
                                    </span>{' '}
                                    · <Badge>₱15,000 - ₱20,000</Badge>
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <span className="font-medium">
                                    Experience Level
                                </span>
                                : Mid - Senior
                            </div>
                            <div>
                                <span className="font-medium">Location</span>:
                                Manila
                            </div>
                            <div>
                                <span className="font-medium">
                                    Type of Employment
                                </span>
                                : <Badge variant="secondary">Full-time</Badge>
                            </div>
                            <div>
                                <span className="font-medium">Industry</span>:
                                Industry of Sample
                            </div>
                            <div>
                                <span className="font-medium">Posted</span>: 3
                                days ago · 99 applicants
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="First Name"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Last Name"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="mobile_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Mobile Number"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="resume"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Resume</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Resume"
                                                type="file"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Sign up to the site to avoid
                                            multiple entries of your resume.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Apply
                            </Button>
                        </form>
                    </Form>
                </div>
                <DialogFooter>
                    <div>
                        <ExtendedActionButtons />
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
