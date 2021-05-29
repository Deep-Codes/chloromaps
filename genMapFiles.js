const chalk = require('chalk');
const fs = require('fs');

const country = process.argv[2];
const viewBoxW = process.argv[3];
const viewBoxH = process.argv[4];

const capFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const capName = capFirst(country);

const dir = `./data/${capName}`;

const svgData = fs.readFileSync(`./temp/map.svg`, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    return data;
});
const stateData = fs.readFileSync(`./temp/map.data`, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    return data;
});

const filesArr = [
    {
        file: `${capName}.map.tsx`,
        content: `
import MapLayout from '@/layouts/MapLayout';
import React from 'react';
import { ${capName}StateCodes } from './${capName}StateCodes';

const ${capName}Map = () => (
    <MapLayout name="${country}" width={650} viewBox={[0, 0, ${viewBoxW}, ${viewBoxH}]} stateCodes={${capName}StateCodes}>
        ${svgData}
    </MapLayout>
);

export default ${capName}Map;
        `
    },
    {
        file: `${capName}StateCodes.tsx`,
        content: `export const ${capName}StateCodes ={
            ${stateData}
        }`
    }
];

const genTemplate = (country) => {
    // Create folder
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        filesArr.forEach((el) => {
            fs.writeFile(
                `${dir}/${el.file}`,
                el.content,
                {
                    encoding: 'utf8',
                    flag: 'w',
                    mode: 0o666
                },
                (err) => {
                    if (err) console.log(err);
                    else {
                        console.log(chalk.green(`Created: ${chalk.blue.bold(el.file)}`));
                    }
                }
            );
        });
        // Generate Pages file
        fs.writeFile(
            `./pages/map/${country}.tsx`,
            `import ControlContainer from '@/components/ControlContainer';
import ${capName}Map from '@/data/${capName}/${capName}.map';
import { ${capName}StateCodes } from '@/data/${capName}/${capName}StateCodes';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const ${capName} = () => (
    <MainLayout>
        <div className="flex justify-between container">
            <ControlContainer stateCodes={${capName}StateCodes} mapId="${country}-map" />
            <${capName}Map />
        </div>
    </MainLayout>
);

export default ${capName};`,
            {
                encoding: 'utf8',
                flag: 'w',
                mode: 0o666
            },
            (err) => {
                if (err) console.log(err);
                else {
                    console.log(chalk.green(`Created: ${chalk.blue.bold(`pages/${country}.tsx`)}`));
                }
            }
        );
    } else {
        console.log(chalk.red('Folder Already Exists'));
        console.log(chalk.red('Delete and Run the Script Again '));
    }
};

const noArgsFunc = () => {
    console.log(chalk.red(`Please Pass Map Name as an Argument.`));
    console.log(chalk.blue('Example :'));
    console.log(chalk.green('yarn generate india 1000 1000 \n'));
};

country !== undefined ? genTemplate(country.toLowerCase()) : noArgsFunc();
module.exports = genTemplate;
