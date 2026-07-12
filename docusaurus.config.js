// @ts-check
const config = {
  title: 'Flagstaff Water Futures',
  tagline: 'A fair evaluation of Advanced Water Treatment and Red Gap Ranch',
  favicon: 'img/favicon.svg',
  url: 'https://wbdongithub.github.io',
  baseUrl: '/Flagstaff-Water-Futures-website/',
  organizationName: 'flagstaff-water-group',
  projectName: 'flagstaff-water-futures-website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {
    docs: {sidebarPath: './sidebars.js', routeBasePath: 'library'},
    blog: false,
    theme: {customCss: './src/css/custom.css'},
  }]],
  themeConfig: {
    navbar: {
      title: 'Flagstaff Water Futures',
      logo: {alt: 'Flagstaff Water Futures', src: 'img/logo.svg'},
      items: [
        {to: '/why-awt', label: 'Why AWT?', position: 'left'},
        {to: '/compare', label: 'Compare', position: 'left'},
        {to: '/red-gap-ranch', label: 'Red Gap Ranch', position: 'left'},
        {to: '/water-quality', label: 'Water Quality', position: 'left'},
        {to: '/library/overview', label: 'Water Library', position: 'left'},
        {to: '/about', label: 'About FWG', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Start Here', items: [
          {label: 'Why AWT?', to: '/why-awt'},
          {label: 'Compare the Alternatives', to: '/compare'},
          {label: 'Why Now?', to: '/why-now'},
        ]},
        {title: 'Background', items: [
          {label: "Flagstaff's Water System", to: '/current-system'},
          {label: 'Red Gap Ranch', to: '/red-gap-ranch'},
          {label: 'Project History', to: '/history'},
        ]},
        {title: 'Project', items: [
          {label: 'About FWG', to: '/about'},
          {label: 'Sources & Notes', to: '/library/sources'},
        ]},
      ],
      copyright: `Draft working site of the Flagstaff Water Group · ${new Date().getFullYear()}`,
    },
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true},
    metadata: [{name: 'description', content: 'An evidence-based case for a full evaluation of Advanced Water Treatment alongside Red Gap Ranch.'}],
  },
};
module.exports = config;
