import LoginDialogButton from '@/components/base-header/login-dialog-button';
import RegisterDialogButton from '@/components/base-header/register-dialog-button';
import { ModeToggleButton } from '@/components/base-header/mode-toggle-button';
import Link from 'next/link';

export default function BaseHeader() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div>
                        <Link href="/" className="font-bold text-lg">
                            JOBSPINAS
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center">
                            <LoginDialogButton
                                variant="ghost"
                                className="mr-3"
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
