/* eslint-disable react/require-default-props */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import Banner from '@/components/Banner';

interface Props {
    children: React.ReactNode;
    showNav?: boolean;
}

const MainLayout = ({ children, showNav = false }: Props) => (
    <>
        <Banner />
        <nav id="nav" className="navbar-ctx">
            <Navbar showNav={showNav} />
        </nav>

        <div className="page">
            <main>{children}</main>
        </div>

        <footer className="footer-ctx">
            <Footer />
        </footer>

        <style jsx>{`
            .page {
                display: flex;
                flex-direction: column;
                max-width: 1000px;
                margin: 0 auto;
                overflow-x: hidden !important;
            }
            .navbar-ctx {
                width: 100%;
                position: sticky;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1000;
                border-top: 1px solid rgba(141, 147, 171, 0.3);
                border-bottom: 1px solid rgba(141, 147, 171, 0.3);
                backdrop-filter: blur(20px);
            }
            .footer-ctx {
                width: 100%;
                border-top: 1px solid rgba(141, 147, 171, 0.3);
                border-bottom: 1px solid rgba(141, 147, 171, 0.3);
                backdrop-filter: blur(20px);
            }
            @media screen and (max-width: 1000px) {
                .page {
                    width: 100%;
                    padding: 0 10px;
                }
                .navbar-ctx,
                .footer-ctx {
                    padding: 0 10px;
                }
            }
        `}</style>
    </>
);

export default MainLayout;
