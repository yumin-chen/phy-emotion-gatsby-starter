import type { GatsbyConfig } from 'gatsby';
import { theme } from './src/styles/global';
import { version } from './package.json' assert { type: 'json' };

const siteMetadata = {
  title: 'Gastby Preact Starter',
  description: 'Website Starter for Gatsby + Preact + Emotion',
  siteUrl: 'https://phy-emotion-gatsby-starter.chen.so',
  author: 'Yumin Chen <yumin@chen.so>',
};

const plugins = [
  'gatsby-plugin-preact',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: ['auto', 'webp'],
        placeholder: 'dominantColor',
        quality: 50,
        breakpoints: [
          theme.breakpoints.sm,
          theme.breakpoints.md,
          theme.breakpoints.lg,
          theme.breakpoints.xl,
        ],
        backgroundColor: 'transparent',
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: 'minimal-ui',
      icon: 'src/images/icon.png', // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];

const config: GatsbyConfig = {
  siteMetadata: {
    ...siteMetadata,
    version,
  },
  plugins,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: 'never',
};

export default config;
