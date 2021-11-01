import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        color: #000;
    }

    body{
        width: 80%;
        margin: 0 auto;
    }

    a{
        font-weight: 500;
        text-decoration: none;
        line-height: 150%;
        border-bottom: 1px solid transparent;
        transition: all .3s ease-in-out;
        font-size: 1.1rem;
        outline: none;			

        &.active{
            font-weight: 700;
            border-color: #000;
        }

        &:hover, &:focus{
            border-color: #000;
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
        font-size: 1.2rem;
        line-height: 150%;
    }

    button{
        cursor:pointer;
        transition: all .3s ease-in-out;
    }
    
`

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
`
