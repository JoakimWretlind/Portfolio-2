import { createGlobalStyle } from 'styled-components';
import CabinetL from './assets/fonts/CabinetGrotesk-Light.woff2';
import Nomark from './assets/fonts/Nomark.otf';
import Stretch from './assets/fonts/StretchPro.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'cabinetL';
    src: url(${CabinetL});
}
@font-face {
    font-family: 'nomark';
    src: url(${Nomark});
}
@font-face {
    font-family: 'stretch';
    src: url(${Stretch});
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
    }
    
    body {
      box-sizing: border-box;
      font-family: "cabinetL";
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;