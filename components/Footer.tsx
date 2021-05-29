/* eslint-disable react/no-array-index-key */
import React from 'react';

const data = [
    ['Company', 'Home', 'About', 'Changelog', 'Contact'],
    ['Resources', 'Documentation', 'Acknowledgement', 'Open Source', 'Maps'],
    ['Socials', 'Instagram', 'Twitter', 'Github', 'Buy a Coffee'],
    ['Legal', 'Privacy Policy', 'Terms of Service', 'Trademark Policy', 'Inactivity Policy']
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
                    <div key={dt[j]} className="footer-box">
                        {dt.map((el, i) =>
                            i === 0 ? (
                                <div className="footer-head" key={`${el}-${i}`}>
                                    {el}{' '}
                                    <button
                                        type="button"
                                        onClick={() => handleClick(j)}
                                        className="plus">
                                        {j === open ? '-' : '+'}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="footer-content" key={`${el}-${i}`}>
                                        {el}
                                    </div>
                                    <div
                                        className="footer-content-mob"
                                        style={{ display: `${j === open ? 'block' : 'none'}` }}
                                        key={el}>
                                        {el}
                                    </div>
                                </>
                            )
                        )}
                    </div>
                ))}
            </div>
            <div className="author flex justify-between">
                <span>Developed by Deepankar Bhade</span>
                <span>Chloromaps v0.0.0-alpha</span>
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
                .author {
                    max-width: 1000px;
                    margin: 0px auto 40px auto;
                    font-size: 14px;
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
                .footer-box div {
                    opacity: 0.6;
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .footer-box .footer-head {
                    opacity: 1;
                }
                .footer-content-mob {
                    display: none;
                }
                @media screen and (max-width: 640px) {
                    .footer {
                        flex-direction: column;
                    }
                    .footer-head {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        padding: 10px 0px;
                        border-bottom: 1px solid rgba(141, 147, 171, 0.3);
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
