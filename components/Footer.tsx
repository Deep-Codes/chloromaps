import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const data = [
    [
        { text: 'Company', link: '/company' },
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Inspiration', link: '/inspiration' },
        { text: 'Changelog', link: '/changelog' }
        // { text: 'Contact', link: '/contact' }
    ],
    [
        // { text: 'Resources', link: '/' },
        { text: 'Acknowledgement', link: '/acknowledgement' },
        //    { text: 'Contributions', link: '/contributions' },
        // { text: 'Blogs', link: '/blogs' },
        { text: 'Open Source', link: '/open-source' },
        { text: 'Quiz', link: 'https://quiz-affinity.vercel.app/' },
        { text: 'Maps', link: '/maps' }
    ],
    [
        { text: 'Socials', link: '/' },
        { text: 'Instagram', link: 'https://www.instagram.com/maps_affinity/' },
        { text: 'Twitter', link: 'https://twitter.com/DeepankarBhade' },
        { text: 'Github', link: 'https://github.com/Deep-Codes' }
        // { text: 'Feedback', link: '/feedback' }
    ]
    // [
    //     { text: 'Policies', link: '/' },
    //     { text: 'Terms', link: 'terms' },
    //     { text: 'Privacy', link: 'privacy' },
    //     { text: 'License', link: 'license' }
    // ]
];

const Footer = () => {
    const [open, setOpen] = React.useState<number | null>(null);
    const handleClick = (n: number) => {
        if (n === open) {
            setOpen(null);
        } else {
            setOpen(n);
        }
    };
    return (
        <>
            <div className="footer">
                {data.map((dt, j) => (
                    <div key={uuidv4()} className="footer-box">
                        {dt.map((el, i) =>
                            i === 0 ? (
                                <div className="footer-head" key={uuidv4()}>
                                    {el.text}{' '}
                                    <button
                                        type="button"
                                        onClick={() => handleClick(j)}
                                        className="plus">
                                        {j === open ? '-' : '+'}
                                    </button>
                                </div>
                            ) : (
                                <div key={uuidv4()}>
                                    <div className="footer-content mob pointer">
                                        {el.link.startsWith('http') ? (
                                            <a
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={el.link}
                                                aria-label={el.text}>
                                                {el.text}
                                            </a>
                                        ) : (
                                            <Link href={el.link}>
                                                <a className="nav-link">{el.text}</a>
                                            </Link>
                                        )}
                                    </div>
                                    {j === open ? (
                                        <div className="footer-content-mob mob">
                                            {el.link.startsWith('http') ? (
                                                <a
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    href={el.link}
                                                    aria-label={el.text}>
                                                    {el.text}
                                                </a>
                                            ) : (
                                                <Link href={el.link}>
                                                    <a className="nav-link">{el.text}</a>
                                                </Link>
                                            )}
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
                .footer {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    padding: 30px 0;
                }

                .footer-box {
                    display: flex;
                    flex-direction: column;
                }
                .plus {
                    display: none;
                    background: none;
                    border: none;
                }
                .footer-box .mob {
                    opacity: 0.6;
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .footer-box .mob:hover {
                    opacity: 1;
                }
                .footer-box .footer-head {
                    opacity: 1;
                }
                .footer-head {
                    margin-bottom: 10px;
                }
                .footer-content-mob {
                    display: none;
                }
                a {
                    color: inherit;
                }
                @media screen and (max-width: 640px) {
                    .footer {
                        flex-direction: column;
                    }
                    .footer-box {
                        border-bottom: 1px solid rgba(141, 147, 171, 0.3);
                    }
                    .footer-head {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        padding: 10px 0px;
                        margin-bottom: 0px;
                    }
                    .footer-content {
                        display: none;
                    }
                    .footer-content-mob {
                        display: block;
                    }
                    .plus {
                        display: block;
                    }
                }
            `}</style>
        </>
    );
};

export default Footer;
