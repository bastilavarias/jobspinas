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
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/employer/jobs">
                            Jobs
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/employer/jobs/create"
                            isCurrentPage
                        >
                            Job Form
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <CreateJobForm />
        </div>
    );
}
