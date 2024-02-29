import CreateJobForm from '@/app/employer/jobs/create/components/form';
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@/components/ui/breadcrumb';

export default function Page() {
    return (
        <div className="space-y-6">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/employer/jobs"
                        className="text-muted-foreground"
                    >
                        Jobs
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/employer/jobs/create" isCurrentPage>
                        Create new Job
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <CreateJobForm />
        </div>
    );
}
