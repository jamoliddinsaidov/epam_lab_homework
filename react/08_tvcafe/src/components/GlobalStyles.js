import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
	bgBodyColor: '#3c414b',
	bgNavColor: '#2A2F39',
	primaryColorOne: '#1e90ff',
	primaryColorTwo: '#fe5a60',
	textColor: '#F4F9FF',
	dangerColor: '#ff0044',
	successClor: '#009d00',
}

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        color: ${colors.textColor};
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html{
        scroll-behavior: smooth;

        &::-webkit-scrollbar{
            width: .4em;
        }
        &::-webkit-scrollbar-thumb{
            background-color: ${colors.primaryColorTwo};
        }
    }

    body{
        background: ${colors.bgBodyColor};
        width: 100%;              
    }    

    a{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 500;
        text-decoration: none;
        line-height: 150%;
        border-bottom: 1px solid transparent;        
        font-size: 1.1rem;
        outline: none;			
        transition: 300ms ease-in-out;
        transition-property: color, padding, border-color;
        
        &:hover, &:focus, &.active{
            color: ${colors.primaryColorTwo};
        }

        &.active{
            border-color: ${colors.primaryColorTwo};
            padding: 0 0.5em;
        }
    }

    ul{
        list-style-type: none;
    }

    h1{
        font-size: 3rem;
    }

    h2{
        font-size: 2.5rem;
    }

    h3{
        font-size: 2rem;
    }

    p{
        font-size: 1rem;
        line-height: 150%;
    }

    input{        
        border: 1.5px solid ${colors.textColor};
        border-radius: 6px;
        outline: none;
        background: transparent;
        transition: 300ms ease-in-out;
        transition-property: border-color;
        padding: 1em 0.5em;
        font-size: 1rem;

        &:active,
        &:focus{
            border-color: ${colors.primaryColorTwo}; 
        }        
    }

    button{
        font-size: 1rem;  
        padding: 1em;
        cursor: pointer;
        border-radius: 6px;
        border: 1.5px solid ${colors.primaryColorTwo};        
        background: ${colors.primaryColorTwo};
        outline: none;
        transition: 300ms ease-in-out;     
        transition-property: background, border-color, box-shadow;
    }
`

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`
