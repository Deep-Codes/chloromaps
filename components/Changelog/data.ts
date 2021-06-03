interface ChangeLogType {
  date: string;
  data: {
    type: 'feat' | 'fix' | 'docs' | 'map';
    text: string;
  }[];
  version: string;
}
const changeLogData : ChangeLogType[] =  [
  {
    date: '1st June 2021',
    data: [{
      type: 'feat',
      text: 'Releasing Alpha Version for Limited Users'
    }],
    version: `0.0.0-alpha`
  },
  {
    date: '1st June 2021',
    data: [{
      type: 'feat',
      text: 'Export Maps in SVG & PDF Format'
    },
    {
      type: 'docs',
      text: 'Adding Contributions Page'
    },
    {
      type: 'feat',
      text: 'Clicking on Landing Page World Map would route to Country\'s Map to Edit it'
    },
    {
      type: 'fix',
      text: 'Remove Redundant SVG tag'
    },
    {
      type: 'fix',
      text: 'Labels SVG Fill / Stroke Issue'
    },
    ],
    version: `0.1.0-alpha`
  },
  {
    date: '3rd June 2021',
    data: [{
      type: 'fix',
      text: 'Remove Light Mode , add Version Tag'
    },
    {
      type: 'map',
      text: 'Introducing Argentina , Nigeria , Japan'
    }
    ],
    version: `0.2.0-alpha`
  },
  
]

export default changeLogData;