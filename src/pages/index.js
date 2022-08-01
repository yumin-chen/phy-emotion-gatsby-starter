import { h } from 'phy-emotion';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: 'Examples',
    url: 'https://github.com/gatsbyjs/gatsby/tree/master/examples',
    description:
      'A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    description:
      "Now you're ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
];

const samplePageLinks = [
  {
    text: 'Page 2',
    url: 'page-2',
    badge: false,
    description:
      'A simple example of linking to another page within a Gatsby site',
  },
  { text: 'TypeScript', url: 'using-typescript' },
  { text: 'Server Side Rendering', url: 'using-ssr' },
  { text: 'Deferred Static Generation', url: 'using-dsg' },
];

const moreLinks = [
  { text: 'Join us on Discord', url: 'https://gatsby.dev/discord' },
  {
    text: 'Documentation',
    url: 'https://gatsbyjs.com/docs/',
  },
  {
    text: 'Starters',
    url: 'https://gatsbyjs.com/starters/',
  },
  {
    text: 'Showcase',
    url: 'https://gatsbyjs.com/showcase/',
  },
  {
    text: 'Contributing',
    url: 'https://www.gatsbyjs.com/contributing/',
  },
  { text: 'Issues', url: 'https://github.com/gatsbyjs/gatsby/issues' },
];

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "example.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 64
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return h(Layout, { title: 'Home' }, [
    h('div', { css: { textAlign: 'center' } }, [
      h(GatsbyImage, {
        image: data.file.childImageSharp.gatsbyImageData,
        loading: 'eager',
        alt: '',
        css: { marginBottom: 'var(--space-3)' },
      }),

      h('h1', ['Welcome to ', h('b', 'Gatsby!')]),
      h(
        'p',
        { css: { maxWidth: 'none', lineHeight: 'var(--line-height-loose)' } },
        [
          h('b', 'Example pages: '),
          samplePageLinks.map((link, i) => [
            h(Link, { to: link.url }, link.text),
            i !== samplePageLinks.length - 1 && ' · ',
          ]),
          h('br'),
          'Edit ',
          h('code', 'src/pages/index.js'),
          ' to update this page.',
        ]
      ),
    ]),

    h(
      'ul',
      {
        css: {
          display: 'grid',
          margin: 0,
          /* https://css-tricks.com/responsive-layouts-fewer-media-queries/ */
          '--w': '280px',
          '--n': 2,
          gap: 'var(--size-gap)',
          gridTemplateColumns: `repeat(
            auto-fit,
            minmax(max(var(--w), 100%/ (var(--n) + 1) + 0.1%), 1fr)
          )`,
          marginBottom: 'var(--size-gap)',
          marginTop: 'var(--size-gap)',
        },
      },

      links.map(link =>
        h('li', { key: link.url, css: { margin: 0 } }, [
          h(
            'a',
            {
              href: link.url,
              css: { color: 'var(--color-primary)', fontWeight: 'bold' },
            },
            `${link.text} ↗`
          ),
          h(
            'p',
            {
              css: {
                color: 'var(--color-text)',
                marginBottom: 0,
                marginTop: 'var(--space-1)',
              },
            },
            link.description
          ),
        ])
      )
    ),

    moreLinks.map((link, i) => [
      h('a', { href: link.url }, link.text),
      i !== moreLinks.length - 1 && ' · ',
    ]),
  ]);
};

export default Index;
