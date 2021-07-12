import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
	bgBodyColor: '#3c414b',
	bgNavColor: '#252429',
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
        font-family: 'Roboto', sans-serif;
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
        transition: color 300ms ease-in-out;
        
        &:hover, &:focus, &.active{
            color: ${colors.primaryColorTwo};
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

    button{
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
`

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`
