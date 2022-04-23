/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { useAtom, Provider } from 'jotai';
import { themeAtom } from '@/store/theme.store';
import '../styles/main.css';
import 'inter-ui/inter.css';
import { useRouter } from 'next/router';
import SEO from '../next-seo.config';
import * as gtag from '../lib/gtag';

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
    const [theme, setTheme] = useAtom(themeAtom);
    const switchThemes = () => {
        setTheme(!theme);
    };
    const router = useRouter();
    React.useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <Provider>
            <DefaultSeo {...SEO} />
            <GeistProvider themeType={theme ? 'dark' : 'light'}>
                <CssBaseline />
                <Component {...pageProps} toggleTheme={switchThemes} />
            </GeistProvider>
        </Provider>
    );
};

export default Application;
