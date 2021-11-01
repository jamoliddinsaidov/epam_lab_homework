import React from 'react'
import styled from 'styled-components'

// utils
import { Container } from '../GlobalStyles'
import FooterLinks from './FooterLinks'
import { content } from './Content'

const FooterContent = () => {
  return (
    <StyledFooterContainer>
      {content.map((obj) => (
        <StyledFooterColumn key={obj.heading}>
          <h4>{obj.heading}</h4>
          <FooterLinks obj={obj} />
        </StyledFooterColumn>
      ))}
    </StyledFooterContainer>
  )
}

const StyledFooterContainer = styled(Container)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 3em 0;

  @media screen and (max-width: 480px) {
    padding: 2em 1em;
  }
`

const StyledFooterColumn = styled.div`
  h4 {
    font-size: 1.2rem;
  }

  h4,
  p {
    margin-bottom: 1em;
  }

  @media screen and (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media screen and (max-width: 600px) {
    &:nth-child(1) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    &:nth-child(2) {
      display: none;
    }
  }
`

export default FooterContent
