import AppliedJobCard from '@/app/profile/my-jobs/components/applied-job-card';

export default function Page() {
    return (
        <div className="space-y-3">
            {[...Array(10)].map((_, index) => (
                <AppliedJobCard key={index} />
            ))}
        </div>
    );
}
