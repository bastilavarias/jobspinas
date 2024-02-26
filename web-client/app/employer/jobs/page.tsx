import JobsTable from '@/app/employer/jobs/components/jobs-table';

export default function Page() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold">Jobs Management</h3>
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
