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

            <Button
                style={{ minWidth: `50px` }}
                size="small"
                icon={<Sun />}
                ghost
                onClick={() => setTheme(!theme)}
            />
            <style jsx>{`
                nav {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 10px 0;
                    padding: 10px 0;
                    position: sticky;
                    top: 0;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
