/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { useAtom } from 'jotai';
import { themeAtom } from '@/store/theme.store';
import SEO from '../next-seo.config';
import '../styles/main.css';

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
    const [theme, setTheme] = useAtom(themeAtom);
    const switchThemes = () => {
        setTheme(!theme);
    };
    return (
        <>
            <DefaultSeo {...SEO} />
            <GeistProvider themeType={theme ? 'dark' : 'light'}>
                <CssBaseline />
                <Component {...pageProps} toggleTheme={switchThemes} />
            </GeistProvider>
        </>
    );
};

export default Application;
