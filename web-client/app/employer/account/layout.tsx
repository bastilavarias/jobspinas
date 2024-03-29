import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import SidebarNav from '@/app/account/components/sidebar-nav';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
    title: 'Account',
    description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
    {
        title: 'Notifications',
        href: '/employer/account/notifications',
    },
    {
        title: 'Profile',
        href: '/employer/account',
    },
    {
        title: 'Messages',
        href: '/employer/account/messages',
    },
    {
        title: 'Settings',
        href: '/employer/account/settings',
    },
];

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container">
            <div className="space-y-6">
                <div className="flex-1 space-y-8">
                    <div className="flex items-center justify-between space-y-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Account
                            </h2>
                            <p className="text-md text-muted-foreground">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
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
