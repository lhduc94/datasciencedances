import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const path = require('path')

const config: Config = {

  title: 'Data Science Dances',
  tagline: 'Data Science Dances sẽ giúp bạn hiểu thêm về những vấn đề của Data Science. Hãy xem những bài toán như những điệu nhảy và thưởng thức nó nào!',
  favicon: 'img/favicon.png',

  url: 'https://datasciencedances.com',
  baseUrl: '/',
  organizationName: 'lhduc94', 
  projectName: 'datasciencedances', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          admonitions: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          
        },
        blog: {
          showReadingTime: true,
          // blogSidebarTitle: 'Các bài viết',
          blogSidebarCount: 'ALL',
          postsPerPage: 100,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss:[ './src/css/custom.scss',
          "./src/css/design-style.scss",
          "./src/css/design-class.scss"
        ]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: process.env.NODE_ENV === 'production' ? {
          trackingID: 'G-88PWBGGNQW',
          anonymizeIP: true,
        } : undefined
      } satisfies Preset.Options,
    ],
   
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
      type: 'text/css',
    }
  ],
  themeConfig: {
  
    metadata: [
      {name: 'keywords', content: 'data science, blog, machine learning, data analysis, data visualization, data engineering, data science dances'},
      {name: 'twitter:card', content: 'data science, blog, machine learning, data analysis, data visualization, data engineering, data science dances'},
    ],
    headTags: [

      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: [
          {
            rel: 'preconnect',
            href: 'https://datasciencedances.com',
          },
          {
            rel: 'icon',
            type: "image/png",
            href: 'img/favicon.png',
          }
        ],
      },
      
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'Data Science Dances',
          url: 'https://datasciencedances.com',
          logo: 'https://i.pinimg.com/736x/d3/bb/d0/d3bbd0c4629972b9c74a78c9539bd1cb.jpg',
        }),
      },
    ],
    // Replace with your project's social card
    image: 'https://datasciencedances.com/img/dsd3-favicon.jpg',
    navbar: {
      // title: 'Data Science Dances',
      logo: {
        alt: 'Data Science Dances',
        src: 'img/dsd3-favicon.jpg',
      },
      items: [
        {type: 'dropdown',
          label: 'Tài liệu tham khảo',
          position: 'right',
          items: [
            {type:'docSidebar',
              sidebarId: 'kungfupandasSidebar',
              label: 'Kungfu Pandas'}
          ]
        },
       
        {
          to: '/blog', label: 'Blog', position: 'right'
        },
        {type: 'dropdown',
          label: 'Khóa học',
          position: 'right',
          items: [
            { 
              label: "Tất cả",
              to: '/courses',
            },
            {
              label: "Phân tích dữ liệu chuỗi thời gian",
              to: '/courses/list/time-series-analysis/time-series-analysis',
            },
            {
              label: "Thực hành phân tích dữ liệu",
              to: '/courses/list/analysis-in-practice/analysis-in-practice',
            },
            {
              label: "Giám sát mô hình Machine Learning",
              to: '/courses/list/ml-observation/ml-observation',
            },
          ]
        },
        
        
        {
          label: "Boost",
          to: '/boost',
          position: 'right',
        },
        {
          to: '/datasets/data', label: 'Datasets', position: 'right'
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu tham khảo',
          items: [
            {
              label: 'Kungfu Pandas',
              to: 'docs/kungfupandas/gioithieu',
            },
            {
              label: 'Roadmap Data Science',
              to: '/boost/list/data-scientist/data-scientist',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/datasciencedances',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/lhduc94',
            },
          ],
        },
        {
          title: 'Thông tin thêm',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/datasciencedances',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Data Science Dances.`,
      // logo: {
      //   alt: 'Your Logo',
      //   src: 'img/logo.svg',
      //   href: 'https://your-website.com',
      //   width: 160,
      // },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;
