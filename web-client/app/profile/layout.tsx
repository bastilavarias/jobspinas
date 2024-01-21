import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import SidebarNav from '@/app/profile/components/sidebar-nav';

export const metadata: Metadata = {
    title: 'Forms',
    description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
    {
        title: 'Notifications',
        href: '/profile/notifications',
    },
    {
        title: 'Profile',
        href: '/profile',
    },
    {
        title: 'My Jobs',
        href: '/profile/my-jobs',
    },
    {
        title: 'Messages',
        href: '/profile/messages',
    },
    {
        title: 'Settings',
        href: '/profile/settings',
    },
];

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container">
            <div className="space-y-6 p-10 pb-16">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Profile
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-full">{children}</div>
                </div>
            </div>
        </div>
    );
}
