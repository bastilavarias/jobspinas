import LoginDialogButton from '@/components/base-header/login-dialog-button';
import RegisterDialogButton from '@/components/base-header/register-dialog-button';
import { ModeToggleButton } from '@/components/base-header/mode-toggle-button';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Search } from 'lucide-react';

export default function BaseHeader() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <nav className="flex items-center space-x-2">
                        <Link href="/" className="font-bold text-lg">
                            JOBSPINAS
                        </Link>
                        <Button
                            variant="ghost"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            asChild
                        >
                            <Link href="/company">
                                <Search className="h-[1.2rem] w-[1.2rem]" />
                                Explore Companies
                            </Link>
                        </Button>
                    </nav>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center">
                            <Button
                                variant="ghost"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                asChild
                            >
                                <Link href="/employer">Dashboard</Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                asChild
                            >
                                <Link href="/employer/jobs">Jobs</Link>
                            </Button>
                            <Button
                                variant="ghost"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                asChild
                            >
                                <Link href="/employer/account">Account</Link>
                            </Button>
                            <LoginDialogButton
                                variant="ghost"
                                className="mr-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            />
                            <RegisterDialogButton className="mr-3" />
                            <ModeToggleButton />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
