import React from 'react';
import { themeAtom } from '@/store/theme.store';
import { useAtom } from 'jotai';
import { Button } from '@geist-ui/react';
import { Sun } from '@geist-ui/react-icons';
import Logo from '@/assets/logo/Logo';

const Navbar = () => {
    const [theme, setTheme] = useAtom(themeAtom);
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
                <span>Tutorial</span>
                <span>Changelog</span>
                <span>Instagram</span>
            </div>

            <Button
                style={{ minWidth: `50px` }}
                size="small"
                icon={<Sun />}
                ghost
                onClick={() => setTheme(!theme)}
            />
            <style jsx>{`
                nav {
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                }
                .nav-center {
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
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
