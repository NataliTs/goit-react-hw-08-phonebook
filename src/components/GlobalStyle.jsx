import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}


ul, ol {
    margin: 0;
    padding-left: 0;
}

// li {
//     list-style: none;
// }

.list {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.link {
    text-decoration: none;
}
`;
