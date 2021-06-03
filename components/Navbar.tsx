/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Menu, X } from '@geist-ui/react-icons';
import Logo from '@/assets/logo/Logo';
import version from '@/data/version';

interface Props {
    showNav: boolean;
}

const navArr = [
    { text: 'Features', link: '/#feature' },
    { text: 'Examples', link: '/examples' },
    { text: 'Maps', link: '/maps' },
    { text: 'Tutorial', link: '/tutorial' },
    { text: 'Instagram', link: 'https://www.instagram.com/maps_affinity/' }
];

const Navbar = ({ showNav }: Props) => {
    // const [theme, setTheme] = useAtom(themeAtom);
    // const [, setToast] = useToasts();
    // const router = useRouter();
    // const toggleTheme = () => {
    //     const bool = router.pathname.includes('map');
    //     if (bool) {
    //         setToast({
    //             text: `Swtiched Theme to ${
    //                 theme ? 'Light' : 'Dark'
    //             } Mode , Change Map / Text Colors Accordingly for Visiblity.`,
    //             type: 'success',
    //             delay: 5000
    //         });
    //     }
    //     setTheme(!theme);
    // };
    const [navOpen, setNavOpen] = React.useState(false);
    return (
        <>
            <div className="nav">
                <a href="/" aria-label="Go to Home Page">
                    <Logo className="pointer" />
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
                    {/* <Button
                        aria-label="Toggle Theme Button"
                        style={{ minWidth: `50px` }}
                        size="small"
                        icon={<Sun />}
                        ghost
                        onClick={() => toggleTheme()}
                    /> */}
                    <a href="/changelog">
                        <span className="version-tag">{version}</span>
                    </a>

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
                .version-tag {
                    font-weight: bold;
                    font-size: 12px;
                    padding: 5px 5px;
                    border-radius: 5px;
                    border: 1px solid rgba(141, 147, 171, 0.3);
                    margin-left: 10px;
                }
                a {
                    color: inherit;
                }
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
