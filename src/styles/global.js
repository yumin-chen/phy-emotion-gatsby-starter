import { css } from '@emotion/react';

export const theme = {
  breakpoints: {
    xs: 400,
    sm: 720,
    md: 1080,
    lg: 1366,
    xl: 1920,
  },
  color: {
    text: '#333',
    primary: '#43b3ae',
    codeBg: '#fff4db',
    code: '#8a6534',
  },
  font: {
    lg: '18px',
    md: '16px',
    sm: '14px',
    sx: '12px',
    sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace`,
  },
  lineHeight: {
    loose: 1.75,
    normal: 1.5,
    dense: 1.1,
  },
  size: {
    space: [0, '4px', '8px', '16px', '24px', '32px', '64px'],
    content: '54rem',
    gutter: '32px',
    gap: '64px',
  },
};

export const globalStyles = css`
  * {
    font-family: Helvetica, sans-serif;
  }
  :root {
    --border-radius: 4px;
    --color-text: ${theme.color.text};
    --color-primary: ${theme.color.primary};
    --color-code-bg: ${theme.color.codeBg};
    --color-code: ${theme.color.code};
    --font-sans: ${theme.font.sans};
    --font-mono: ${theme.font.mono};
    --font-lg: ${theme.font.lg};
    --font-md: ${theme.font.md};
    --font-sm: ${theme.font.sm};
    --font-sx: ${theme.font.sx};
    --line-height-loose: ${theme.lineHeight.loose};
    --line-height-normal: ${theme.lineHeight.normal};
    --line-height-dense: ${theme.lineHeight.dense};
    --space-1: ${theme.size.space[1]};
    --space-2: ${theme.size.space[2]};
    --space-3: ${theme.size.space[3]};
    --space-4: ${theme.size.space[4]};
    --space-5: ${theme.size.space[5]};
    --space-6: ${theme.size.space[6]};
    --size-content: ${theme.size.content};
    --size-gutter: ${theme.size.gutter};
    --size-gap: ${theme.size.gap};
  }
  html {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font: sans-serif;
    font-size: var(--font-md);
    line-height: var(--line-height-normal);
    overflow-y: scroll;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    font-family: sans-serif;
    font-family: var(--font-sans);
    font-weight: normal;
    margin: 0;
    word-wrap: break-word;
  }
  a {
    background-color: transparent;
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 2px;
  }
  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: none;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    margin: 0;
    margin-bottom: 3rem;
    padding: 0;
    line-height: var(--line-height-dense);
    letter-spacing: -0.01em;
  }
  h1 > b {
    color: var(--color-primary);
  }
  img {
    border-style: none;
    max-width: 100%;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: var(--font-mono);
    font-size: 1em;
    line-height: inherit;
  }
  hr {
    box-sizing: content-box;
    overflow: visible;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: calc(var(--space-4) - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  hgroup,
  img,
  figure,
  fieldset,
  ul,
  ol,
  dl,
  dd,
  p {
    margin: 0;
    padding: 0;
    margin-bottom: var(--space-4);
  }
  ul,
  ol {
    margin-left: var(--space-4);
    list-style-position: outside;
    list-style-image: none;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: var(--space-4);
    font-size: 0.875rem;
    line-height: var(--line-height-normal);
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: var(--border-radius);
    overflow: auto;
    word-wrap: normal;
    padding: var(--space-4);
  }
  b,
  strong,
  dt,
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(var(--space-4) / 2);
  }
  ol li,
  ul li {
    padding-left: 0;
  }
  li > ol,
  li > ul {
    margin-bottom: calc(var(--space-4) / 2);
    margin-left: var(--space-4);
    margin-top: calc(var(--space-4) / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(var(--space-4) / 2);
  }
  p {
    max-width: 680px;
  }
  code {
    font-size: 0.875rem;
  }
  kbd {
    font-size: 0.875rem;
  }
  samp {
    font-size: 0.875rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  tt,
  code {
    background-color: var(--color-code-bg);
    border-radius: var(--border-radius);
    color: var(--color-code);
    font-family: var(--font-mono);
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    word-break: normal;
  }
  pre code {
    background: none;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    content: '\\00a0';
    letter-spacing: -0.2em;
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: none;
  }
`;
