import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #e5e5e5;
    }

    h1 {
        font: 600 61px 'Josefin Sans', sans-serif;
    }
    h2 {
        font: 600 48px/130% 'Josefin Sans', sans-serif;
    }
    h3 {
        font: 500 39px/58px 'Josefin Sans', sans-serif;
    }
    h4 {
        font: 600 31px/47px 'Josefin Sans', sans-serif;
    }
    h5 {
        font: 500 25px/37.5px 'Josefin Sans', sans-serif;
    }
    h6 {
        font: 500 20px/30px 'Josefin Sans', sans-serif;
    }
    p {
        font: 400 16px/24px 'Josefin Sans', sans-serif;
    }
    small {
        font: 300 12.8px 'Josefin Sans', sans-serif;
    }
`;

export default GlobalStyle