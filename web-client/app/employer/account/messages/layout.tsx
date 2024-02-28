import React from 'react';
import { Separator } from '@/components/ui/separator';

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="space-y-5">
            <div>
                <h3 className="text-lg font-medium">Messages</h3>
                <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <Separator />
            {children}
        </div>
    );
}
