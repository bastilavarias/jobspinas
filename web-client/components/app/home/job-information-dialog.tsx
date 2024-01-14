import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    OpenInNewWindowIcon,
    QuestionMarkCircledIcon,
    ExclamationTriangleIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import React from 'react';
export function JobInformationDialog({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Function;
}) {
    const handleOnOpenChange = (value: boolean) => {
        setOpen(value);
    };

    const ExtendedActionButtons = () => (
        <React.Fragment>
            <span className="text-xs inline cursor-pointer hover:underline">
                Inquire <QuestionMarkCircledIcon className="h-3 w-3 inline" />
            </span>{' '}
            ·{' '}
            <span className="text-xs inline cursor-pointer hover:underline">
                Report <ExclamationTriangleIcon className="h-3 w-3 inline" />
            </span>
        </React.Fragment>
    );

    return (
        <Dialog open={open} onOpenChange={handleOnOpenChange}>
            <DialogContent className="max-w-lg xl:max-w-xl overflow-y-scroll max-h-screen">
                <DialogHeader>
                    <DialogTitle>Job Information</DialogTitle>
                    <DialogDescription>
                        <ExtendedActionButtons />
                    </DialogDescription>
                </DialogHeader>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Software Engineer
                        </CardTitle>
                        <CardDescription>
                            <span className="font-bold underline cursor-pointer">
                                Side Project Alliance
                            </span>{' '}
                            · <Badge>₱15,000 - ₱20,000</Badge>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                        <div className="space-y-1">
                            <div>
                                <span className="font-medium">
                                    Experience Level
                                </span>
                                : Mid - Senior
                            </div>
                            <div>
                                <span className="font-medium">Location</span>:
                                Manila
                            </div>
                            <div>
                                <span className="font-medium">
                                    Type of Employment
                                </span>
                                : <Badge variant="secondary">Full-time</Badge>
                            </div>
                            <div>
                                <span className="font-medium">Industry</span>:
                                Industry of Sample
                            </div>
                            <div>
                                <span className="font-medium">Posted</span>: 3
                                days ago · 99 applicants
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="mr-2">
                            Easy Apply <PaperPlaneIcon />
                        </Button>
                        <Button className="mr-2">
                            Apply <OpenInNewWindowIcon />
                        </Button>
                        <Button variant="outline">Save</Button>
                    </CardFooter>
                </Card>
                <div>
                    <p className="text-lg font-bold mb-4">About the Job</p>
                    <div>
                        <div className="mb-3">
                            <p className="text-sm font-medium mb-1">
                                Responsibilities:
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corporis dolor modi omnis,
                                quia quidem sunt velit? Adipisci amet aut
                                corporis, cum delectus, dolores earum enim esse
                                est illum magnam neque officia qui quibusdam rem
                                rerum sequi! A ab commodi cum, delectus deleniti
                                dolor earum esse est explicabo fuga harum illum
                                laudantium maiores maxime nemo nisi tempore
                                tenetur unde vel, veritatis vitae voluptas
                                voluptatum. Amet autem cupiditate deleniti,
                                dignissimos dolor dolorem doloribus dolorum
                                eveniet fugit hic id laudantium libero magnam
                                magni, nostrum obcaecati pariatur possimus quasi
                                repudiandae rerum, sint unde ut vel vero
                                voluptatibus! Accusantium maxime nemo nostrum
                                odit sapiente temporibus.
                            </p>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm font-medium mb-1">
                                Qualifications:
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab autem commodi corporis cum
                                dolorem eaque excepturi facilis in inventore
                                ipsam iste laudantium maiores nisi, nobis optio
                                perferendis porro possimus quaerat quam quis
                                quos reiciendis reprehenderit voluptate? A
                                accusantium ad assumenda aut blanditiis commodi
                                cupiditate dicta dolore esse eveniet ex fugit
                                iste itaque laboriosam laudantium libero
                                mollitia natus odio omnis provident quam
                                quisquam quo quos ratione repellendus sapiente,
                                suscipit temporibus velit veniam voluptate.
                                Adipisci est impedit quisquam, recusandae
                                reprehenderit sunt! Animi deleniti harum
                                inventore, nesciunt non quas voluptatum. At, aut
                                dolores doloribus eius, error expedita, in
                                inventore ipsam magni nostrum sequi.
                            </p>
                        </div>
                        <div className="mb-3">
                            <p className="text-sm font-medium mb-1">
                                Custom section here:
                            </p>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum dignissimos ducimus est
                                exercitationem iste maiores nam neque nostrum
                                officiis, perspiciatis, quaerat quos rem velit.
                                Aut, blanditiis dolorum eius eveniet
                                exercitationem itaque magnam odio quaerat quas
                                temporibus. Cumque cupiditate distinctio soluta,
                                ullam ut voluptas? Itaque, nam, porro. A esse
                                iusto ratione voluptate. Autem, deleniti hic
                                maxime similique tempora vitae. Aliquam aliquid
                                animi asperiores autem consectetur corporis cum
                                doloribus eaque eius eos esse facere laboriosam,
                                modi necessitatibus nemo odit officiis pariatur
                                porro, quas quasi qui, quis rem saepe sed sit
                                sunt unde veniam? Commodi, corporis distinctio
                                dolorem explicabo labore perferendis saepe.
                                Omnis.
                            </p>
                        </div>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Button>
                        Easy Apply <PaperPlaneIcon />
                    </Button>
                    <Button>
                        Apply <OpenInNewWindowIcon />
                    </Button>
                    <Button variant="outline">Save</Button>
                </DialogFooter>
                <DialogFooter>
                    <div>
                        <ExtendedActionButtons />
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
