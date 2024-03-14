import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const config: Config = {
  title: 'Data Science Dances',
  tagline: 'Mỗi bài toán là một bản nhạc',
  favicon: 'img/logo_ds.svg',

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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Các bài viết',
          blogSidebarCount: 'ALL',
          postsPerPage: 3,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
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
    // Replace with your project's social card
    image: 'https://kungfupandas.lhduc.com/images/index/cover.jpg',
    navbar: {
      title: 'Data Science Dances',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_ds.svg',
      },
      items: [
        {type:'docSidebar',
         sidebarId: 'tailieuSidebar',
         position: 'left',
         label: 'Tài liệu tham khảo'},

        {
          to: '/blog', label: 'Blog', position: 'left'
        },
        {
          type: 'dropdown',
          label: "Khóa học",
          to: '/courses',
          items:[
            {
              label: "Giới thiệu",
              to: "/courses"
            },
            {
              label: "Time Series Analysis",
              to: "/courses/time-series-analysis"
            },
            {
              label: "Đánh giá hiệu suất Mô hình",
              to: "/courses/evaluation-metrics"
            }
          ]
        },
        {
          type: 'dropdown',
          label: "Roadmap",
          items:[
            {
              label: "Data Scientist",
              to: '/roadmap/roadmap_ds'}
          ]
        }
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
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/lhduc94'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.linkedin.com/lhduc94',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lê Huỳnh Đức`},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
