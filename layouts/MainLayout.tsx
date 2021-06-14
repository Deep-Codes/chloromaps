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
                .navbar-ctx,
                .footer-ctx {
                    padding: 0 10px;
                }
            }
        `}</style>
    </>
);

export default MainLayout;
