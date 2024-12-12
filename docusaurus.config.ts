import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const path = require('path')

const config: Config = {
  title: 'Data Science Dances',
  tagline: 'Mỗi bài toán là một bản nhạc',
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
  plugins: [path.resolve(__dirname, 'plugins', 'add-fb-chat'),'docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
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
        gtag: {
          trackingID: "G-88PWBGGNQW",
          anonymizeIP: true,
        }
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
  ],
  themeConfig: {
  
    metadata: [
      {name: 'keywords', content: 'data science, blog'},
      {name: 'twitter:card', content: 'data science, blog'},
    ],
    headTags: [

      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: [
          {
            rel: 'preconnect',
            href: 'http://datasciencedances.com/',
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
          url: 'http://datasciencedances.com/',
          logo: 'https://i.pinimg.com/736x/d3/bb/d0/d3bbd0c4629972b9c74a78c9539bd1cb.jpg',
        }),
      },
    ],
    // Replace with your project's social card
    image: 'https://kungfupandas.lhduc.com/images/index/cover.jpg',
    navbar: {
      title: 'Data Science Dances',
      logo: {
        alt: 'Data Science Dances',
        src: 'img/dsd2-favicon.jpg',
      },
      items: [
        

        {
          to: '/blog', label: 'Blog', position: 'left'
        },
        // {
        //   type: 'dropdown',
        //   label: "Khóa học",
        //   to: '/courses',
        //   items:[
        //     // {
        //     //   label: "Giới thiệu",
        //     //   to: "/courses"
        //     // },
        //     {
        //       label: "Time Series Analysis",
        //       to: "/courses/list/time-series-analysis/time-series-analysis"
        //     },
        //     {
        //       label: "Thực hành Phân tích dữ liệu",
        //       to: "/courses/list/analysis-in-practice/analysis-in-practice"
        //     },
        //     {
        //       label: "Đánh giá hiệu suất Mô hình",
        //       to: "/courses/list/evaluation-metrics/evaluation-metrics"
        //     }
        //   ]
        // },
        {type:'docSidebar',
          sidebarId: 'tailieuSidebar',
          position: 'left',
          label: 'Tài liệu tham khảo'},
        {
          type: 'dropdown',
          label: "Roadmap",
          items:[
            {
              label: "Data Scientist",
              to: '/roadmap/datascientist'},
            {
              label: "Phân tích định vị thương hiệu",
              to: '/roadmap/phan_tich_dinh_vi_thuong_hieu'
            }
          ]
        },
        {
          to: '/datasets/data', label: 'Datasets', position: 'left'
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu tham khảo',
          items: [
            {
              label: 'Kungfu Pandas',
              to: 'docs/kungfupandas/gioithieu',
            },
            {
              label: 'Pytorch',
              to: 'docs/pytorch/gioithieu'
            }
          ],
        },
        {
          title: 'Liên Hệ',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/khoai.kho.7/',
            },
            {
              label: 'Fanpage',
              href: 'https://www.facebook.com/datasciencedances/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/lhduc94'
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lê Huỳnh Đức`},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;
