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

export default function MiniProfileCard(props: CardProps) {
    return (
        <Card className={cn('w-full', props.className)} {...props}>
            <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
                <CardDescription>Updated 1 min ago.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div></div>
            </CardContent>
        </Card>
    );
}
