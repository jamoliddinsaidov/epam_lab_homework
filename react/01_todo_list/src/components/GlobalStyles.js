import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        width: 100%;
        min-height: 100vh;
        background-image: linear-gradient(to right top, #000000, #420f1d, #820327, #c20023, #ff0000);

        &::-webkit-scrollbar {
        	width: 0.4rem;
        }

        &::-webkit-scrollbar-track {
            background-color: #ff0000;
        }

        &::-webkit-scrollbar-thumb {
            background-color: 
            #000000;
        }
    }

    .app{        
        width: 50%;
        margin: 0 auto;
        padding: 3rem 0;

    }

    button, input{
        background: transparent;
        border: none;
        /* border: 1px solid rgba(238, 238, 238, 0.3);
        border-radius: .5em; */
    }

    button{
        cursor: pointer;
    }
`
