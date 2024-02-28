'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AppliedJobCard() {
    const [random, setRandom] = useState(Math.round(Math.random()));

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Software Engineer</CardTitle>
                <CardDescription>
                    <span className="font-bold underline cursor-pointer">
                        Side Project Alliance
                    </span>{' '}
                    · <Badge>₱15,000 - ₱20,000</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
                <div className="space-y-1">
                    <div>
                        <span className="font-medium">Experience Level</span>:
                        Mid - Senior
                    </div>
                    <div>
                        <span className="font-medium">Location</span>: Manila
                    </div>
                    <div>
                        <span className="font-medium">Type of Employment</span>:{' '}
                        <Badge variant="secondary">Full-time</Badge>
                    </div>
                    <div>
                        <span className="font-medium">Industry</span>: Industry
                        of Sample
                    </div>
                    <div>
                        <span className="font-medium">Posted</span>: 3 days ago
                        · 99 applicants
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
