import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';

type Props = {
    children?: ReactNode;
    title?: string;
};

export const Layout = ({
    children,
    title = 'Otis | Find your new friend',
}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
        </Head>
        <Navbar />
        {children}

        {/* 
        Ant Design will follow

        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer> */}
    </div>
);
