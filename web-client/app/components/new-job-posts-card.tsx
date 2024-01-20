import React from 'react';
import { BellIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

type CardProps = React.ComponentProps<typeof Card>;

export default function NewJobPostsCard(props: CardProps) {
    return (
        <Card className={cn('w-full', props.className)} {...props}>
            <CardHeader>
                <CardTitle>New Job Posts</CardTitle>
                <CardDescription>Updated 1 min ago.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md mb-5">
                    <BellIcon />
                    <div className="flex-1 space-y-1">
                        <p className="text-xs font-medium leading-none">
                            Push Notifications
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>
                    <Switch />
                </div>
                {[...Array(5)].map((_, index) => (
                    <div
                        className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 border-b last:border-b-0 last:mb-0 last:pb-0"
                        key={index}
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none ">
                                    <span>Software Engineer</span>
                                </p>
                                <p className="text-xs underline">
                                    Side Project Alliance
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    ₱15,000 - ₱20,000
                                </p>
                            </div>
                            <div className="text-xs text-secondary-foreground">
                                3 mins
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button variant="ghost" className="w-full">
                    Explore
                </Button>
            </CardFooter>
        </Card>
    );
}
