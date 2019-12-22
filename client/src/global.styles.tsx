import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Montserrat", sans-serif;

        input{ 
            border: 1px solid #CDC0B2;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 8px;

        }

        button { 
            cursor: pointer;
        }
    }
`;
