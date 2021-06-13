import MainLayout from '@/layouts/MainLayout';
import UsaMap from 'labs/usa.map';
import React from 'react';

const Lab = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {}, []);
    return (
        <MainLayout>
            <div className="flex justify-between container items-start">
                <UsaMap />
            </div>
            <style jsx>{`
                .items-start {
                    align-items: flex-start;
                }
                table {
                    width: 300px;
                    overflow-y: scroll;
                    height: 80vh;
                }
            `}</style>
        </MainLayout>
    );
};

export default Lab;
