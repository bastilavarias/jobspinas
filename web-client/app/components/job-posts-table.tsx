'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
    PaperPlaneIcon,
    DotsHorizontalIcon,
    PlusCircledIcon,
} from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { JobInformationDialog } from '@/app/components/job-information-dialog';
import { useState } from 'react';
import { Building2, MapPin, Briefcase, CalendarClock } from 'lucide-react';
import { JobFormDialog } from '@/app/components/job-form-dialog';

export default function JobPostsTable() {
    const [informationDialogOpen, setInformationDialogOpen] = useState(false);
    const [formDialogOpen, setFormDialogOpen] = useState(false);

    return (
        <>
            <Table>
                <TableCaption>A list of your suggested job posts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <span className="flex items-center">
                                <Briefcase size={20} className="mr-1" /> Job
                            </span>
                        </TableHead>
                        <TableHead>
                            <span className="flex items-center">
                                <Building2 size={20} className="mr-1" /> Company
                            </span>
                        </TableHead>
                        <TableHead>
                            <span className="flex items-center">
                                <MapPin size={20} className="mr-1" /> Location
                            </span>
                        </TableHead>
                        <TableHead>
                            <span className="flex items-center">
                                <CalendarClock size={20} className="mr-1" />{' '}
                                Posted
                            </span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(20)].map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="mr-5">
                                <div className="py-1 pb-2 flex items-start justify-between">
                                    <div>
                                        <p
                                            className="font-bold mb-2 text-xl cursor-pointer"
                                            onClick={() =>
                                                setInformationDialogOpen(
                                                    !informationDialogOpen
                                                )
                                            }
                                        >
                                            Software Engineer
                                        </p>
                                        <div className="flex items-center">
                                            <Button className="h-5 rounded-md px-3 text-xs mr-1">
                                                <span className="mr-1">
                                                    Easy Apply
                                                </span>
                                                <PaperPlaneIcon className="h-3 w-3" />
                                            </Button>
                                            <Button
                                                className="h-5 rounded-md px-3 text-xs mr-1"
                                                onClick={() =>
                                                    setFormDialogOpen(
                                                        !formDialogOpen
                                                    )
                                                }
                                            >
                                                <span>Apply</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="h-5 rounded-md px-3 text-xs"
                                            >
                                                <DotsHorizontalIcon className="h-3 w-3" />
                                            </Button>
                                        </div>
                                    </div>
                                    <Badge className="text-xs">
                                        ₱15,000 - ₱20,000
                                    </Badge>
                                </div>
                            </TableCell>
                            <TableCell className="flex flex-col items-start h-full">
                                <p className="font-bold mb-2">
                                    Chanz Global Business Inc
                                </p>
                                <Button
                                    variant="ghost"
                                    className="h-5 rounded-md pr-3 pl-0 text-xs"
                                >
                                    <PlusCircledIcon className="h-3 w-3 mr-1" />
                                    <span>More Jobs</span>
                                </Button>
                            </TableCell>
                            <TableCell className="items-start">
                                <div className="flex items-start">
                                    <div className="font-medium">Manila</div>
                                </div>
                            </TableCell>

                            <TableCell>Urgent</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <JobInformationDialog
                open={informationDialogOpen}
                setOpen={setInformationDialogOpen}
            />
            <JobFormDialog open={formDialogOpen} setOpen={setFormDialogOpen} />
        </>
    );
}
