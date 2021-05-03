import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col">
            <Link href="/india">India</Link>
            <Link href="/usa">Usa</Link>
            <Link href="/europe">Europe</Link>
        </div>
    </MainLayout>
);
export default Home;
