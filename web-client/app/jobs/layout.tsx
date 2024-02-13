import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Separator } from '@/components/ui/separator';
import SidebarNav from '@/app/profile/components/sidebar-nav';
import CustomFilterToolbar from '@/components/custom-filter-toolbar';
import JobPostsTable from '@/app/components/job-posts-table';
import MiniProfileCard from '@/app/components/mini-profile-card';
import NewJobPostsCard from '@/app/components/new-job-posts-card';
import TopEmployersCard from '@/app/components/top-employers-card';
import EmployerProfileActionCard from '@/app/jobs/components/employer-profile-action-card';
import PostedJobActivities from '@/app/jobs/components/posted-job-activities';

export const metadata: Metadata = {
    title: 'Jobs',
    description: 'Advanced form example using react-hook-form and Zod.',
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container grid grid-cols-12 gap-12">
            <div className="col-span-8">{children}</div>
            <div className="col-span-4">
                <EmployerProfileActionCard className="mb-5" />
                <PostedJobActivities />
            </div>
        </div>
    );
}
