import React from 'react';
import {
    Tag as TagIcon,
    Book as BookIcon,
    Tool as ToolIcon,
    Package as PackageIcon,
    MapPin as MapIcon
} from '@geist-ui/react-icons';
import { Spacer } from '@geist-ui/react';
import data from './data';

const Changelog = () => (
    <>
        <div className="ctx">
            {data.map((el) => (
                <div className="card" key={el.version}>
                    <div className="header">
                        <span>
                            <TagIcon size={20} /> <Spacer x={0.4} /> {el.version}
                        </span>
                        {el.date}
                    </div>
                    <div className="content">
                        {el.data.map((d) => (
                            <div key={d.text} className="log-card">
                                {d.type === 'fix' ? <ToolIcon size={20} /> : ''}
                                {d.type === 'map' ? <MapIcon size={20} /> : ''}
                                {d.type === 'feat' ? <PackageIcon size={20} /> : ''}
                                {d.type === 'docs' ? <BookIcon size={20} /> : ''}
                                <span>{d.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <style jsx>
                {`
                    .ctx {
                        width: 100%;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    .card {
                        padding: 10px 15px;
                        border: 1px solid rgba(141, 147, 171, 0.3);
                        border-radius: 5px;
                    }
                    .header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        border-bottom: 1px solid rgba(141, 147, 171, 0.3);
                    }
                    .header span {
                        display: flex;
                        align-items: center;
                    }
                    .log-card {
                        display: flex;
                        align-items: center;
                        opacity: 0.8;
                        margin: 10px 0;
                    }
                    .log-card span {
                        margin-left: 10px;
                    }
                `}
            </style>
        </div>
    </>
);

export default Changelog;
