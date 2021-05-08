import LegendGradient from '@/components/LegendGradient';
import { colorPickerPalette } from '@/data/colors';
import { WorldMap } from '@/data/World/World.map';
import { WorldCountryCodes } from '@/data/World/WorldCountryCodes';
import MainLayout from '@/layouts/MainLayout';
import { Button, Spacer } from '@geist-ui/react';
import React, { useEffect, useState } from 'react';

const Temp = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    useEffect(() => {
        const temp = colorPickerPalette[count];
        const data = WorldCountryCodes;
        Object.keys(data).forEach((e) => {
            const el = document.getElementById(e);
            if (el) {
                const rand = Math.floor(Math.random() * 10);
                el.style.fill = temp[rand];
            }
        });
    }, [count]);
    const handleCount = () => {
        if (count >= colorPickerPalette.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };
    return (
        <MainLayout>
            <WorldMap />

            <div className="flex-center flex-col mx-auto">
                <LegendGradient gradArr={colorPickerPalette[count]} />
                <Spacer y={0.5} />
                <Button onClick={() => handleCount()}>Change</Button>
            </div>
        </MainLayout>
    );
};

export default Temp;
