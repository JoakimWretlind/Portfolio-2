import { createGlobalStyle } from 'styled-components';
import CabinetL from './assets/fonts/CabinetGrotesk-Light.woff2';
import CabinetB from './assets/fonts/CabinetGrotesk-Bold.woff2';
import CabinetXLight from './assets/fonts/CabinetGrotesk-Extralight.woff2';
import Nomark from './assets/fonts/Nomark.otf';
import Stretch from './assets/fonts/StretchPro.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'cabinetL';
    src: url(${CabinetL});
    font-display: swap;
}
@font-face {
    font-family: 'cabinetBold';
    src: url(${CabinetB});
    font-display: swap;
}
@font-face {
    font-family: 'cabinetXLight';
    src: url(${CabinetXLight});
    font-display: swap;
}
@font-face {
    font-family: 'nomark';
    src: url(${Nomark});
    font-display: swap;
}
@font-face {
    font-family: 'stretch';
    src: url(${Stretch});
    font-display: swap;
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    
    body {
      color: #f1f1f1;
      box-sizing: border-box;
      font-family: "cabinetL";
      background: linear-gradient(-5deg, hsl(228, 100%, 4%), hsl(228, 100%, 1%));
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;