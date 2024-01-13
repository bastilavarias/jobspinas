import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
export default function CustomFilterToolbar(props: any) {
    return (
        <div
            className={cn(
                props.className,
                'flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16'
            )}
        >
            <div className="text-xs w-full">Current Location</div>
            <div className="ml-auto flex w-full sm:justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="ml-auto hidden h-8 lg:flex"
                        >
                            <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                            Configure
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[150px]">
                        <DropdownMenuLabel>Configure</DropdownMenuLabel>
                        {/*
                        <DropdownMenuSeparator />
                        
*/}
                    </DropdownMenuContent>
                </DropdownMenu>
                {/*
                <div className="hidden space-x-2 md:flex"></div>
*/}
            </div>
        </div>
    );
}
