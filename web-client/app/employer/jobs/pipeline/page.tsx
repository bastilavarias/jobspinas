import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@/components/ui/breadcrumb';
import PipelineBoard from '@/app/employer/jobs/pipeline/components/board';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                        Pipeline
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <span>Software Engineer Job Pipeline</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8 p-0"
                                    >
                                        <span className="sr-only">
                                            External source
                                        </span>
                                        <ExternalLinkIcon className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Go to Job posting</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab amet delectus eos ex impedit laboriosam minima
                        quasi rem unde ut.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <PipelineBoard />
                </CardContent>
            </Card>
        </div>
    );
}
