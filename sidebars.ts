import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tailieuSidebar: [
    {
      type: 'category',
      label: 'Kungfu Pandas',
      items: ['kungfupandas/gioithieu'],
    }
  ],

  timeseriesSidebar: [
    {
      type: 'category',
      label: 'Phân tích chuỗi thời gian',
      items: ['time-series-analysis/tuan01', 
              'time-series-analysis/tuan02',
              'time-series-analysis/tuan03',
              'time-series-analysis/tuan04',
              'time-series-analysis/tuan05',
              'time-series-analysis/tuan06',
              'time-series-analysis/tuan07'],
    }
  ],
};

export default sidebars;
