import { createGlobalStyle } from "styled-components";

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #9b65e6;
        text-rendering: optimizeLegibility;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
