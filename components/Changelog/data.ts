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
      text: 'Releasing Pre-Alpha Version for Limited Users'
    },
    {
      type: 'docs',
      text: 'Updating Changelog Page'
    },
    {
      type: 'fix',
      text: 'Fix Safari Flexbox Bug'
    },
    {
      type: 'map',
      text: 'New Zealand , Norway , Kenya Added'
    }],
    version: `0.0.0-pre-alpha`
  }
  
]

export default changeLogData;