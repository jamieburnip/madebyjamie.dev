const config = {
  siteTitle: `I'm Jamie Burnip`,
  siteTitleShort: `I'm Jamie Burnip`,
  siteTitleAlt:
    'Hello I’m Jamie Burnip and I’m a software developer from Newcastle-upon-tyne.', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://jamieburnip.dev', // Domain of your website without pathPrefix.
  siteEmail: 'me@jamieburnip.dev',
  siteDescription: `Hi, Hello! I'm Jamie Burnip.`,

  googleAnalyticsID: 'UA-48020081-6',

  socialLinks: [
    {
      name: 'twitter',
      label: 'TW.',
      url: 'https://twitter.com/jamieburnip',
    },
    {
      name: 'linkedin',
      label: 'IN.',
      url: 'https://www.linkedin.com/in/jamieburnip',
    },
    {
      name: 'github',
      label: 'GH.',
      url: 'https://github.com/jamieburnip',
    },
  ],

  copyright: `© ${new Date().getFullYear()}, jamieburnip.dev`,
  themeColor: '#ff1493', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff', // Used for setting manifest background color.
};

module.exports = config;
