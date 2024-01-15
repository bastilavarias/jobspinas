'use client';

import * as React from 'react';
import { User, BellIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from '@/components/ui/tooltip';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function ProfileLayout({ children }: any) {
    const navCollapsedSize = 6;
    const defaultLayout = [120, 440];
    const defaultCollapsed = false;
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
    const Nav = ({ links, isCollapsed }: any) => (
        <div
            data-collapsed={isCollapsed}
            className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
        >
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                {links.map((link: any, index: any) =>
                    isCollapsed ? (
                        <Tooltip key={index} delayDuration={0}>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className={cn(
                                        buttonVariants({
                                            variant: link.variant,
                                            size: 'icon',
                                        }),
                                        'h-9 w-9',
                                        link.variant === 'default' &&
                                            'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                                    )}
                                >
                                    <link.icon className="h-4 w-4" />
                                    <span className="sr-only">
                                        {link.title}
                                    </span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent
                                side="right"
                                className="flex items-center gap-4"
                            >
                                {link.title}
                            </TooltipContent>
                        </Tooltip>
                    ) : (
                        <Link
                            key={index}
                            href="#"
                            className={cn(
                                buttonVariants({
                                    variant: link.variant,
                                    size: 'lg',
                                }),
                                link.variant === 'default' &&
                                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                                'justify-start'
                            )}
                        >
                            <link.icon className="mr-4 h-6 w-6" />
                            {link.title}
                        </Link>
                    )
                )}
            </nav>
        </div>
    );

    return (
        <div className="container">
            <TooltipProvider delayDuration={0}>
                <ResizablePanelGroup
                    direction="horizontal"
                    onLayout={(sizes: number[]) => {
                        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                            sizes
                        )}`;
                    }}
                    className="h-full max-h-[800px] items-stretch"
                >
                    <ResizablePanel
                        defaultSize={defaultLayout[0]}
                        minSize={5}
                        maxSize={25}
                        collapsedSize={navCollapsedSize}
                        collapsible={true}
                        onCollapse={(collapsed: any) => {
                            const _collapsed = !!collapsed;
                            setIsCollapsed(_collapsed);
                            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                _collapsed
                            )}`;
                        }}
                        className={cn(
                            isCollapsed &&
                                'min-w-[50px] transition-all duration-300 ease-in-out'
                        )}
                    >
                        <Nav
                            isCollapsed={isCollapsed}
                            links={[
                                {
                                    title: 'Notifications',
                                    icon: BellIcon,
                                    variant: 'default',
                                },
                                {
                                    title: 'Application',
                                    icon: Inbox,
                                    variant: 'default',
                                },
                                {
                                    title: 'Profile',
                                    icon: File,
                                    variant: 'ghost',
                                },
                            ]}
                        />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                        <Tabs defaultValue="all">{children}</Tabs>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </TooltipProvider>
        </div>
    );
}
