import { h } from 'phy-emotion';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(height: 20, placeholder: BLURRED)
        }
      }
    }
  `);

  return h(
    'header',
    {
      css: {
        margin: '0 auto',
        padding: 'var(--space-4) var(--size-gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    [
      h(
        Link,
        {
          to: '/',
          css: { fontSize: 'var(--font-sm)', textDecoration: 'none' },
        },
        siteTitle
      ),

      h(GatsbyImage, {
        image: data.file.childImageSharp.gatsbyImageData,
        loading: 'eager',
        alt: 'logo',
      }),
    ]
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
