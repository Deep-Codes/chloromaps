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
    },
    {
      type: 'feat',
      text: 'Adding Source Value to Legend'
    }
    ],
    version: `0.2.0-alpha`
  },
  {
    date: '6th June 2021',
    data: [{
      type: 'fix',
      text: 'Swap with Preact on Production'
    },
    {
      type: 'map',
      text: 'Introducing Europe Detailed , South Korea , Egypt'
    },
    {
      type:'fix',
      text: 'Merging SVG Paths'
    }
    ],
    version: `0.3.0-alpha`
  },
  {
    date: '10th June 2021',
    data: [{
      type: 'docs',
      text: 'New Examples Added'
    },
    {
      type: 'map',
      text: 'France , Italy , USA Counties , World Mercator'
    },
    {
      type:'feat',
      text: 'Highlight Colors Already used in Palette'
    }
    ],
    version: `0.4.0-alpha`
  },
  
]

export default changeLogData;