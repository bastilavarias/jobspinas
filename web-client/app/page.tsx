import CustomFilterToolbar from '@/components/custom-filter-toolbar';
import JobPostsTable from '@/app/components/job-posts-table';
import NewJobPostsCard from '@/app/components/new-job-posts-card';
import TopEmployersCard from '@/app/components/top-employers-card';
import MiniProfileCard from '@/app/components/mini-profile-card';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container grid grid-cols-12 gap-12">
            <div className="col-span-9 pb-5">
                <div
                    style={{
                        width: '100%',
                        height: '5rem',
                        position: 'relative',
                    }}
                >
                    <Image
                        alt="City Scrapers"
                        layout="fill"
                        objectFit="contain"
                        src="/images/city-scrapers-black.png"
                    />
                </div>
                <CustomFilterToolbar className="" />
                <JobPostsTable />
            </div>
            <div className="col-span-3">
                <MiniProfileCard className="mb-5" />
                <NewJobPostsCard className="mb-5" />
                <TopEmployersCard />
            </div>
        </div>
    );
}
