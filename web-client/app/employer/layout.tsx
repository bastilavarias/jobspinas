import React from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Employer',
    description: 'Advanced form example using react-hook-form and Zod.',
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return children;
}
