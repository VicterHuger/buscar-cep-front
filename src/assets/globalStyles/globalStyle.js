import { createGlobalStyle } from 'styled-components';

import { Default } from './defaultStyle.js';
import { Reset } from './reset.js';

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Default};
`;