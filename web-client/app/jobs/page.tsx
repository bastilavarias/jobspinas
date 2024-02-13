import JobsTable from '@/app/jobs/components/jobs-table';

export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Jobs</h3>
                <p className="text-sm text-muted-foreground">
                    Manage jobs you've created.
                </p>
            </div>
            <div>
                <JobsTable />
            </div>
        </div>
    );
}
