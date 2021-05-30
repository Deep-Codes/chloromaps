import MainSEO from '@/components/Seo/MainSEO';
import React, { PropsWithChildren } from 'react';
import MainLayout from './MainLayout';

interface Props {
    title: string;
    description?: string;
}

const PageLayout: React.FC<PropsWithChildren<Props>> = ({ children, title, description }) => (
    <MainLayout showNav>
        <MainSEO title={title} description={description} />
        <div className="flex flex-col mb-20">
            <h1 className="main-heading">{title}</h1>
            <div className="main-text">{children}</div>
        </div>
        <style jsx>{`
            .main-text {
                max-width: 760px;
                margin: 0 auto;
            }
            h1 {
                font-size: 2.5rem;
            }
            .mb-20 {
                margin-bottom: 5rem;
            }
        `}</style>
    </MainLayout>
);

export default PageLayout;
