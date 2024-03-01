import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export default function page() {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-3xl font-bold leading-none mb-1">
                    Chanz Global Business
                </h4>
                <p className="text-sm text-fo">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, voluptatibus.
                </p>
            </div>
            <Card className="pt-6">
                <CardContent className="space-y-4">
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics">Jobs</TabsTrigger>
                            <TabsTrigger value="reports">Reviews</TabsTrigger>
                            <TabsTrigger value="notifications">
                                Photos
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                            <div className="pt-3">
                                <p className="text-lg font-bold mb-4">
                                    About the Job
                                </p>
                                <div>
                                    <div className="mb-3">
                                        <p className="text-sm font-medium mb-1">
                                            Responsibilities:
                                        </p>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Corporis dolor modi omnis, quia
                                            quidem sunt velit? Adipisci amet aut
                                            corporis, cum delectus, dolores
                                            earum enim esse est illum magnam
                                            neque officia qui quibusdam rem
                                            rerum sequi! A ab commodi cum,
                                            delectus deleniti dolor earum esse
                                            est explicabo fuga harum illum
                                            laudantium maiores maxime nemo nisi
                                            tempore tenetur unde vel, veritatis
                                            vitaevoluptas voluptatum. Amet autem
                                            cupiditate deleniti, dignissimos
                                            dolor dolorem doloribus dolorum
                                            eveniet fugit hic id laudantium
                                            libero magnam magni, nostrum
                                            obcaecati pariatur possimus quasi
                                            repudiandae rerum, sint unde ut vel
                                            vero voluptatibus! Accusantium
                                            maxime nemo nostrum odit sapiente
                                            temporibus.
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-sm font-medium mb-1">
                                            Qualifications:
                                        </p>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Ab
                                            autem commodi corporis cum dolorem
                                            eaque excepturi facilis in inventore
                                            ipsam iste laudantium maiores nisi,
                                            nobis optio perferendis porro
                                            possimus quaerat quam quis quos
                                            reiciendis reprehenderit voluptate?
                                            A accusantium ad assumenda aut
                                            blanditiis commodi cupiditate dicta
                                            dolore esse eveniet ex fugit iste
                                            itaque laboriosam laudantium libero
                                            mollitia natus odio omnis provident
                                            quam quisquam quo quos ratione
                                            repellendus sapiente, suscipit
                                            temporibus velit veniam voluptate.
                                            Adipisci est impedit quisquam,
                                            recusandae reprehenderit sunt! Animi
                                            deleniti harum inventore, nesciunt
                                            non quas voluptatum. At, aut dolores
                                            doloribus eius, error expedita, in
                                            inventore ipsam magni nostrum sequi.
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-sm font-medium mb-1">
                                            Custom section here:
                                        </p>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Cum
                                            dignissimos ducimus est
                                            exercitationem iste maiores nam
                                            neque nostrum officiis,
                                            perspiciatis, quaerat quos rem
                                            velit. Aut, blanditiis dolorum eius
                                            eveniet exercitationem itaque magnam
                                            odio quaerat quas temporibus. Cumque
                                            cupiditate distinctio soluta, ullam
                                            ut voluptas? Itaque, nam, porro. A
                                            esse iusto ratione voluptate. Autem,
                                            deleniti hic maxime similique
                                            tempora vitae. Aliquam aliquid animi
                                            asperiores autem consectetur
                                            corporis cum doloribus eaque eius
                                            eos esse facere laboriosam, modi
                                            necessitatibus nemo odit officiis
                                            pariatur porro, quas quasi qui, quis
                                            rem saepe sed sit sunt unde veniam?
                                            Commodi, corporis distinctio dolorem
                                            explicabo labore perferendis saepe.
                                            Omnis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
