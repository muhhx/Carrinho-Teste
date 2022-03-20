import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar {
        height: 0px;
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #bfbfbf;
        border-radius: 9px;
    }
`;