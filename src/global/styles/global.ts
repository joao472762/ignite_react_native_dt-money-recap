import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    body{
        background-color: ${( {theme} ) => theme.colors["gray-800"]};
    }

    *:focus{
        outline:  none;
        box-shadow: 0px 0px 0px 2px ${( {theme} ) => theme.colors["green-500"]};
    }

    body, input, button{
        font: 400 1rem ${( {theme} ) => theme.fonts.Roboto};
        color:  ${( {theme} ) => theme.colors["gray-300"]};
    }
`