import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const config: Config = {
  title: 'Data Science Dances',
  tagline: 'Mỗi Bài toán là một bản nhạc',
  favicon: 'img/logo_ds.svg',

  // Set the production url of your site here
  url: 'https://datasciencedances.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lhduc94', // Usually your GitHub org/user name.
  projectName: 'datasciencedances', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Các bài viết',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
         label: 'Tài liệu Tham khảo'},
        {
          type: 'docSidebar',
          sidebarId: 'timeseriesSidebar',
          position: 'left',
          label: 'Khóa học',
        },
        {
          to: '/blog', label: 'Blog', position: 'left'
        },
        {
          href: 'https://github.com/lhduc94',
          label: 'GitHub',
          position: 'right',
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
