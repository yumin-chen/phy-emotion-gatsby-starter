import { h } from 'phy-emotion';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return h(Helmet, {
    htmlAttributes: { lang },
    title,
    titleTemplate: defaultTitle ? `%s / ${defaultTitle}` : null,
    meta: [
      {
        name: 'description',
        content: metaDescription,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: site.siteMetadata?.author || '',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      },
    ].concat(meta),
  });
};

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

export default Seo;
