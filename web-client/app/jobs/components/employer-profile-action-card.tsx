import React from 'react';
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

type CardProps = React.ComponentProps<typeof Card>;

export default function EmployerProfileActionCard(props: CardProps) {
    return (
        <Card className={cn('w-full shadow-none', props.className)} {...props}>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Button>Manage Profile</Button>
            </CardContent>
        </Card>
    );
}
