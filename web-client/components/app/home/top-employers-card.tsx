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

export default function TopEmployersCard(props: CardProps) {
    return (
        <Card className={cn('w-full', props.className)} {...props}>
            <CardHeader>
                <CardTitle>Top Employers</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {[...Array(10)].map((n) => (
                    <div className="mb-0 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                        <div>{n}</div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none ">
                                    <span>Side Project Alliance</span>
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    99 Jobs, 100% Positive rate
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
                    See more
                </Button>
            </CardFooter>
        </Card>
    );
}
