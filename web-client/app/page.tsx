import CustomFilterToolbar from '@/components/custom-filter-toolbar';
import JobPostsTable from '@/components/app/home/job-posts-table';
import NewJobPostsCard from '@/components/app/home/new-job-posts-card';
import TopEmployersCard from '@/components/app/home/top-employers-card';
import MiniProfileCard from '@/components/app/home/mini-profile-card';

export default function Home() {
    return (
        <div className="container grid grid-cols-12 gap-12">
            <div className="col-span-8 pb-5">
                <CustomFilterToolbar className="" />
                <JobPostsTable />
            </div>
            <div className="col-span-4">
                <MiniProfileCard className="mb-5" />
                <NewJobPostsCard className="mb-5" />
                <TopEmployersCard />
            </div>
        </div>
    );
}
