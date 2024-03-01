import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import React from 'react';

export default function NotificationCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-start">
                    <span className="font-bold">Chanz Global Business Inc</span>
                    <span className="text-xs text-muted-foreground">
                        3 days ago
                    </span>
                </CardTitle>
                <CardDescription className="text-white">
                    Lorem ipsum dolor sit amet.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                eos molestias! Ad animi aperiam asperiores at consequatur
                corporis culpa dicta eos ex facere facilis fuga fugit hic ipsa
                iste itaque, labore laborum minima molestiae molestias neque
                nihil nostrum numquam quod, ratione repellat reprehenderit saepe
                sed sequi totam velit veniam voluptatem.
            </CardContent>
        </Card>
    );
}
