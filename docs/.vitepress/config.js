export default {
  title: 'VitePress',
  description: 'just play around',
  themeConfig: {
    sidebar: {
      '/bar/': [
        {
          text: 'bar',
          collapsible: true,
          items: [
            // This shows `/guide/index.md` page.
            { text: 'bar', link: '/bar/' }, // /guide/one.md
            { text: 'One', link: '/bar/one' }, // /guide/one.md
            { text: 'Two', link: '/bar/two' }, // /guide/two.md
          ],
        },
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/foo/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/foo/' }, // /config/index.md
            { text: 'Three', link: '/foo/three' }, // /config/three.md
            { text: 'Four', link: '//four' }, // /config/four.md
          ],
        },
      ],
    },

    nav: [
      {
        text: 'bar',
        items: [
          {
            text: 'one',
            link: '/bar/one',
          },
          {
            text: 'two',
            link: '/bar/two',
          },
        ],
      },
      {
        text: 'foo',
        items: [
          {
            text: 'three',
            link: '/foo/three',
          },
          {
            text: 'two',
            link: '/foo/four',
          },
        ],
      },
    ],
  },
};
