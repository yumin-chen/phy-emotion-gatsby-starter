import { h } from 'phy-emotion';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => {
  return h(
    Layout,
    { siteTitle: '404: Page not found' },
    h('main', { css: { color: '#232129', padding: '96px' } }, [
      h('title', 'Not found'),
      h(
        'h1',
        { css: { marginTop: 0, marginBottom: 64, maxWidth: 320 } },
        'Page not found'
      ),
      h('p', { css: { marginBottom: 48 } }, [
        'Sorry ',
        h('span', { role: 'img', 'aria-label': 'Pensive emoji' }, '😔'),
        " we couldn't find what you were looking for.",
      ]),
      h('p', [h(Link, { to: '/' }, 'Go home'), '.']),
    ])
  );
};

export default NotFound;
