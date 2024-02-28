import React from 'react';
import NotificationCard from '@/app/account/notifications/components/notification-card';

export default function Page() {
    return (
        <div className="space-y-3">
            {[...Array(10)].map((_, index) => (
                <NotificationCard key={index} />
            ))}
        </div>
    );
}
