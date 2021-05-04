import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => (
    <>
        <div className="page">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
        <style jsx>{`
            .page {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                max-width: 1000px;
                margin: 0 auto;
            }
            @media screen and (max-width: 760px) {
                .page {
                    padding: 0 10px;
                }
            }
        `}</style>
    </>
);

export default MainLayout;
