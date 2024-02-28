import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="space-y-5">
            <div>
                <h3 className="text-lg font-medium">My Jobs</h3>
                <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <Separator />
            <div>
                <Tabs defaultValue="applied" className="space-y-5">
                    <TabsList>
                        <TabsTrigger value="applied">Applied</TabsTrigger>
                        <TabsTrigger value="interviews">Interviews</TabsTrigger>
                        <TabsTrigger value="archived">Archived</TabsTrigger>
                        <TabsTrigger value="saved">Saved</TabsTrigger>
                    </TabsList>
                    <TabsContent value="applied">{children}</TabsContent>
                    <TabsContent value="interviews">{children}</TabsContent>
                    <TabsContent value="archived">{children}</TabsContent>
                    <TabsContent value="saved">{children}</TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
