import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Dongle', sans-serif;
        box-sizing: border-box;
    }

    table {
        border-collapse: collapse;
        td {
            border: 1px solid;
            width: 50px;
            height: 50px;
            text-align: center;
            border-color: #464646;
            &:nth-child(3n) {
                border-right-width: 3px;
            }
        }
    }

    tr:nth-child(3n) td {
        border-bottom-width: 3px;
    }

    .occupied {
        font-size: 2rem;
        pointer-events: none;
        background-color: #eee;
  }

    .valid {
        background-color: #f0faff !important;
        color: #007cba !important;
        pointer-events: all;
        font-size: 2rem;
    }

    .invalid {
        background-color: #ff7c7c !important;
        color: red !important;
        pointer-events: all;
        font-size: 2rem;
    }
`;

export default GlobalStyle;
