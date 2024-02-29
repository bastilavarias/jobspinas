import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import SidebarNav from '@/app/account/components/sidebar-nav';
import CustomFilterToolbar from '@/components/custom-filter-toolbar';
import JobPostsTable from '@/app/components/job-posts-table';
import MiniProfileCard from '@/app/components/mini-profile-card';
import NewJobPostsCard from '@/app/components/new-job-posts-card';
import TopEmployersCard from '@/app/components/top-employers-card';
import EmployerProfileActionCard from '@/app/employer/jobs/components/employer-profile-action-card';
import PostedJobActivities from '@/app/employer/jobs/components/posted-job-activities';

export const metadata: Metadata = {
    title: 'Jobs',
    description: 'Advanced form example using react-hook-form and Zod.',
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <div className="flex-1 space-y-8">
                    <div className="flex items-center justify-between space-y-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Jobs
                            </h2>
                            <p className="text-md text-muted-foreground">
                                Manage the jobs you've created as employer.
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <div className="col-span-3">
                <EmployerProfileActionCard className="mb-5" />
                <PostedJobActivities />
            </div>
        </div>
    );
}
