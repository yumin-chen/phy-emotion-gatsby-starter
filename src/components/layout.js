import { h } from 'phy-emotion';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/react';
import Header from './header';
import Seo from './seo';
import { globalStyles } from '../styles/global';

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return [
    h(Global, { styles: globalStyles }),
    h(Seo, { title: title || data.site.siteMetadata?.title }),
    h(Header, { siteTitle: data.site.siteMetadata?.title || `Title` }),
    h(
      'div',
      {
        css: {
          margin: '0 auto',
          maxWidth: 'var(--size-content)',
          padding: 'var(--size-gutter)',
        },
      },
      [
        h('main', children),
        h(
          'footer',
          { css: { marginTop: 'var(--space-5)', fontSize: 'var(--font-sm)' } },

          [
            `© ${new Date().getFullYear()} · Built with `,
            h('a', { href: 'https://www.gatsbyjs.com' }, 'Gatsby'),
          ]
        ),
      ]
    ),
  ];
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
