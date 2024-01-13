import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomDatePicker } from '@/components/custom-date-picker';

export default function RegisterDialogButton(props: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={props.className}>Create an Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Create an account</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                        <Button variant="outline">
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                        <Button variant="outline">
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12"></div>
                    <div className="grid gap-2">
                        <Label htmlFor="first_name">First Name</Label>
                        <Input id="first_name" type="text" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input id="last_name" type="text" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="birthday">Birthday</Label>
                        <CustomDatePicker />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Button className="w-full">Register</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
