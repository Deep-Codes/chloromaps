import React from 'react';
import { themeAtom } from '@/store/theme.store';
import { useAtom } from 'jotai';
import { Button, Text } from '@geist-ui/react';
import { Sun } from '@geist-ui/react-icons';
import Link from 'next/link';

const Navbar = () => {
    const [theme, setTheme] = useAtom(themeAtom);
    return (
        <nav>
            <Link href="/">
                <Text className="pointer" h4>
                    Chloromaps
                </Text>
            </Link>
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
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
