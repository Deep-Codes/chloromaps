/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { themeAtom } from '@/store/theme.store';
import { useAtom } from 'jotai';
import { Button } from '@geist-ui/react';
import { Sun, Menu, X } from '@geist-ui/react-icons';
import Logo from '@/assets/logo/Logo';

interface Props {
    showNav: boolean;
}

const navArr = [
    { text: 'Features', link: '#feature' },
    { text: 'Examples', link: '/examples' },
    { text: 'Maps', link: '/maps' },
    { text: 'Tutorial', link: '/tutorial' },
    { text: 'Instagram', link: 'https://www.instagram.com/maps_affinity/' }
];

const Navbar = ({ showNav }: Props) => {
    const [theme, setTheme] = useAtom(themeAtom);
    const [navOpen, setNavOpen] = React.useState(false);
    return (
        <>
            <div className="nav">
                <a href="/" aria-label="Go to Home Page">
                    <Logo className="pointer" fill={theme ? 'white' : 'black'} />
                </a>
                {showNav ? (
                    <div className="nav-content">
                        {navArr.map((el) => (
                            <a
                                className="nav-link"
                                key={el.text}
                                aria-label={`Link to ${el.text}`}
                                href={el.link}>
                                {el.text}
                            </a>
                        ))}
                    </div>
                ) : (
                    ''
                )}

                <div className="flex items-center">
                    <Button
                        style={{ minWidth: `50px` }}
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
            </div>

            <div className="nav-content-mobile">
                {navArr.map((el) => (
                    <a
                        className="nav-link"
                        key={el.text}
                        aria-label={`Link to ${el.text}`}
                        href={el.link}>
                        {el.text}
                    </a>
                ))}
            </div>
            <style jsx>{`
                .nav-link {
                    color: inherit;
                }
                .nav {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                }
                .nav-link {
                    opacity: 0.7;
                    font-size: 15px;
                    font-weight: 400;
                }
                .nav-link :hover {
                    opacity: 1;
                }
                .nav-content {
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                }
                .nav-content-mobile,
                .nav-mobile-icon {
                    display: none;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .nav-content-mobile .nav-link {
                    margin: 20px 0;
                    display: block;
                }
                @media screen and (max-width: 640px) {
                    .nav-content {
                        display: none;
                    }
                    .nav-mobile-icon {
                        margin-top: 5px;
                        margin-left: 10px;
                        opacity: 0.7;
                    }
                    .nav-mobile-icon {
                        display: block;
                    }
                    .nav-content-mobile {
                        display: ${navOpen ? 'block' : 'none'};
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
