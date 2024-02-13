import JobsTable from '@/app/jobs/components/jobs-table';
import CreateJobForm from '@/app/jobs/create/components/form';
import React from 'react';

export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Jobs</h3>
                <p className="text-sm text-muted-foreground">Create new Job</p>
            </div>
            <div>
                <CreateJobForm />
            </div>
        </div>
    );
}
