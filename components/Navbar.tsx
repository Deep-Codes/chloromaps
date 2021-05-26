/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { themeAtom } from '@/store/theme.store';
import { useAtom } from 'jotai';
import { Button, useTheme } from '@geist-ui/react';
import { Sun, Menu, X } from '@geist-ui/react-icons';
import Logo from '@/assets/logo/Logo';

const Navbar = () => {
    const [theme, setTheme] = useAtom(themeAtom);
    const th = useTheme();
    const [navOpen, setNavOpen] = React.useState(false);
    return (
        <nav>
            <div className="flex">
                <a href="/">
                    <>
                        <Logo className="pointer" fill={theme ? 'white' : 'black'} />
                    </>
                </a>
            </div>

            <div className="nav-center">
                <span>Features</span>
                <span>Examples</span>
                <span>Maps</span>
                <span>Tutorial</span>
                <span>Instagram</span>
            </div>

            <div className="flex items-center">
                <Button
                    style={{ minWidth: `50px`, marginRight: `30px` }}
                    size="small"
                    icon={<Sun />}
                    ghost
                    onClick={() => setTheme(!theme)}
                />
                <div
                    className="nav-mobile-icon flex-col flex-center"
                    onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? (
                        <X size={35} className="nav-mobile-icon" />
                    ) : (
                        <Menu size={35} className="nav-mobile-icon" />
                    )}
                </div>
            </div>
            {navOpen ? (
                <div className="nav-mobile">
                    <p>Features</p>
                    <p>Examples</p>
                    <p>Maps</p>
                    <p>Tutorial</p>
                    <p>Instagram</p>
                </div>
            ) : (
                ''
            )}

            <style jsx>{`
                nav {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                }
                .nav-mobile-icon,
                .nav-mobile {
                    display: none;
                }
                .nav-mobile-icon {
                    margin-top: 5px;
                    opacity: 0.7;
                }
                .nav-center {
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                }
                @media screen and (max-width: 640px) {
                    .nav-center {
                        display: none;
                    }
                    .nav-mobile-icon,
                    .nav-mobile {
                        display: block;
                    }
                    .nav-mobile {
                        padding: 30px 0;
                        display: flex;
                        flex-direction: column;
                        z-index: 1000000;
                        top: 60px;
                        position: absolute;
                        background: ${th.palette.background};
                        width: 100%;
                        height: 100vh;
                    }
                    .nav-mobile p {
                        font-size: 20px;
                        font-weight: 500;
                    }
                }
                .nav-center span {
                    cursor: pointer;
                    opacity: 0.7;
                    font-size: 15px;
                    font-weight: 400;
                }
                .nav-center span:hover {
                    opacity: 1;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
