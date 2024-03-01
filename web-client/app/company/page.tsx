import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CustomFilterToolbar from '@/components/custom-filter-toolbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';

export default function page() {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12">
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center justify-between space-y-2">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">
                                    Our Companies
                                </h2>
                                <p className="text-md text-muted-foreground">
                                    Explore the partnered companies in our
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <CustomFilterToolbar className="" />
                </div>
                <div className="col-span-12">
                    <div className="grid grid-cols-4 gap-3">
                        {[...Array(10)].map((_, index) => (
                            <Card className="pt-6" key={index}>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between spacex-x-4">
                                        <div className="flex items-center space-x-4">
                                            <Avatar>
                                                <AvatarImage src="/avatars/01.png" />
                                                <AvatarFallback>
                                                    C
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <Link
                                                    className="text-lg font-medium leading-none mb-1"
                                                    href="/company/chanz-global-business-1006"
                                                >
                                                    Chanz Global Business
                                                </Link>
                                                <p className="text-sm flex items-center">
                                                    Software Services • 4.9{' '}
                                                    <StarIcon
                                                        size={15}
                                                        className="text-muted-foreground inline"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Dicta dolor et facere
                                        ipsam quam. Dolores esse illo numquam
                                        possimus vero? Delectus eaque id
                                        laboriosam nostrum officiis placeat quae
                                        quidem velit.
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
