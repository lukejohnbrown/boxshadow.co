import { createGlobalStyle } from "styled-components";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Hind:400,500,600,700&display=swap');

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'Hind', 'Helvetica', sans-serif;
    vertical-align: baseline;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 15px;
    color: ${theme.palette.grey[900]};

    @media ${theme.breakpoints.up.md} {
      font-size: 16px;
    }
  }

  h1, h2, h3, h4, h5, h6, p, a, button {
    font-size: 1rem;
    color: ${theme.palette.blue[900]};
  }

  button {
    border: none;
    font-family: 'Hind', 'Helvetica', sans-serif;
  }
`;

export default GlobalStyle;