/* eslint-disable react/require-default-props */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

interface Props {
    children: React.ReactNode;
    showNav?: boolean;
}

const MainLayout = ({ children, showNav = false }: Props) => (
    <>
        <div className="navbar-ctx">
            <Navbar showNav={showNav} />
        </div>

        <div className="page">
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
                overflow-x: hidden !important;
            }
            .navbar-ctx {
                width: 100%;
                position: sticky;
                top: 0;
                z-index: 1000;
                backdrop-filter: blur(20px);
            }
            @media screen and (max-width: 1000px) {
                .page {
                    width: 100%;
                    padding: 0 10px;
                }
                .navbar-ctx {
                    padding: 0 10px;
                }
            }
        `}</style>
    </>
);

export default MainLayout;
