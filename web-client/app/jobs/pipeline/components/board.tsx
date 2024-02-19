import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    MailIcon,
    PhoneIcon,
    MoreVerticalIcon,
    UserIcon,
    MapPinIcon,
    ShieldCheckIcon,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const CandidateCard = () => (
    <Card>
        <CardHeader>
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-md font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground items-center">
                            <ShieldCheckIcon className="h-4 w-4 inline" />{' '}
                            <span className="text-xs">Verified applicant</span>
                        </p>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Actions
                        </DropdownMenuLabel>
                        <DropdownMenuItem>View Resume</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Set an Interview</DropdownMenuItem>
                        <DropdownMenuItem>Pool Candidate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className="text-destructive">Reject</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-sm">
                        <UserIcon className="w-4 h-4 mr-1 inline" />
                        Male, 23
                    </p>
                    <p className="text-sm">
                        <MapPinIcon className="w-4 h-4 mr-1 inline" />
                        Manila
                    </p>
                </div>
                <div>
                    <p className="text-sm">
                        <MailIcon className="w-4 h-4 mr-1 inline" />
                        johndoe@gmail.com
                    </p>
                    <p className="text-sm">
                        <PhoneIcon className="w-4 h-4 mr-1 inline" />
                        +639972217704
                    </p>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground">
                Applied on Dec 4, 2023
            </p>
        </CardFooter>
    </Card>
);

export default function PipelineBoard() {
    return (
        <div>
            <Tabs defaultValue="applied">
                <div className="flex justify-between">
                    <TabsList className="grid w-1/2 grid-cols-3">
                        <TabsTrigger value="applied">
                            <Badge className="mr-1" variant="secondary">
                                10
                            </Badge>
                            Applied
                        </TabsTrigger>
                        <TabsTrigger value="for-interview">
                            For Interview
                        </TabsTrigger>
                        <TabsTrigger value="accepted">Accepted</TabsTrigger>
                    </TabsList>
                    <TabsList className="grid w-1/3 grid-cols-2">
                        <TabsTrigger value="pooled">Pooled</TabsTrigger>
                        <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="applied">
                    <div className="grid grid-cols-12 gap-2">
                        {Array.from(
                            { length: 10 },
                            (_, index) => index + 1
                        ).map((n) => (
                            <div className="col-span-4">
                                <CandidateCard />
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="for-interview">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll
                                be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">
                                    Current password
                                </Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
