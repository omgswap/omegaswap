import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { Link } from '../../theme'

const FooterFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.concreteGray};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadowBox};
`

const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.uniswapPink};

  :hover {
    cursor: pointer;
  }
  #link {
    text-decoration-color: ${({ theme }) => theme.uniswapPink};
    margin: 5px;
  }

  #title {
    display: inline;
    font-size: 0.75rem;
    margin-right: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.headText};
    :hover {
      color: ${({ theme }) => darken(0.1, theme.headText)};
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`

const ColT = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  align-self: center;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
`
const ColS = styled.div`
  flex: 0 0 36%;
  max-width: 36%;
  align-self: center;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
      }
`

export default function Footer() {

  return (
    <FooterFrame>
      <Row>
      <ColT style={{display: 'flex', justifyContent: 'center'}}>
        <Title>
          <Link id="link" href="https://omgswap.com/" target="_blank" rel="noopener noreferrer">
            <h1 id="title">OMGSwap</h1>
          </Link>
          <Link id="link" href="https://omegaex.io/" target="_blank" rel="noopener noreferrer">
            <h1 id="title">OmegaEX</h1>
          </Link>
          <Link id="link" href="https://omegabox.io/" target="_blank" rel="noopener noreferrer">
            <h1 id="title">OmegaBOX</h1>
          </Link>
          <Link id="link" href="https://omgswap.link/" target="_blank" rel="noopener noreferrer">
            <h1 id="title">Analytics</h1>
          </Link>
         </Title>
      </ColT>
      <ColS style={{display: 'flex', justifyContent: 'center'}}>
        © 2020 | Ǒmega Protocol Ltd. Reg. No. <Link href="https://beta.companieshouse.gov.uk/company/12855720" target="_blank" rel="noopener noreferrer"> 12855720 </Link>
      </ColS>
      <ColT style={{display: 'flex', justifyContent: 'center'}}>
      <Title>
        <Link id="link" href="https://twitter.com/omegadefi" target="_blank" rel="noopener noreferrer">
          <h1 id="title">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path xmlns="http://www.w3.org/2000/svg" class="st0" d="M32,6.1c-1.2,0.5-2.5,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3    c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5    c-1.1,0-2.1-0.3-3-0.8c0,0,0,0,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.5,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1    c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.7-5.1,2.8-8.1,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7    c0-0.3,0-0.6,0-0.8C30,8.6,31.1,7.4,32,6.1z"/></svg>
          </h1>
        </Link>
        <Link id="link" href="https://t.me/omegadefi" target="_blank" rel="noopener noreferrer">
          <h1 id="title">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="st0" d="M7.7,18.2l4,9.9l5.2-5.2l8.9,7.1L32,1.9L0,15.3L7.7,18.2z M22.9,10l-9.8,8.9l-1.2,4.6l-2.3-5.6L22.9,10z"/></svg>
          </h1>
        </Link>
        <Link id="link" href="https://www.facebook.com/omegadefi" target="_blank">
          <h1 id="title">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="st0" d="M18,11V7c0-1.1,0.9-2,2-2h2V0h-4c-3.3,0-6,2.7-6,6v5H8v5h4v16h6V16h4l2-5H18z"/></svg>
          </h1>
        </Link>
        <Link id="link" href="https://github.com/omgswap" target="_blank" rel="noopener noreferrer">
          <h1 id="title">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="st0" d="M16,0.3C7.2,0.3,0,7.5,0,16.4c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7    c-4.4,1-5.4-2.2-5.4-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.4,2.5,3.7,1.7,4.7,1.3    c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.8,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.3c0,0,1.3-0.4,4.4,1.6    c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7c0.9,2.2,0.3,3.8,0.2,4.3c1,1.1,1.6,2.6,1.6,4.3    c0,6.2-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4    C32,7.5,24.8,0.3,16,0.3z"/></svg>
          </h1>
        </Link>
        <Link id="link" href="https://www.reddit.com/r/omegaprotocol/" target="_blank" rel="noopener noreferrer">
          <h1 id="title">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M32,15c0-2.2-1.8-4-4-4c-0.9,0-1.7,0.3-2.4,0.8c-2.2-1.5-5.1-2.5-8.2-2.7l1.7-3.9l4.9,1.1    c0.2,1.5,1.4,2.7,3,2.7c1.6,0,3-1.3,3-3s-1.3-3-3-3c-1,0-2,0.5-2.5,1.4l-5.7-1.3c-0.5-0.1-1,0.1-1.1,0.6l-2.3,5.4    c-3.3,0.1-6.5,1.1-8.9,2.7C5.7,11.3,4.8,11,4,11c-2.2,0-4,1.8-4,4c0,1.5,0.8,2.8,2,3.4c0,0.2,0,0.4,0,0.5c0,5.5,6.3,10,13.9,10    c7.7,0,13.9-4.5,13.9-10c0-0.2,0-0.3,0-0.5C31.2,17.9,32,16.5,32,15z M26.9,5c0.5,0,1,0.4,1,1s-0.4,1-1,1c-0.5,0-1-0.4-1-1    S26.3,5,26.9,5z M9,18c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S9,19.1,9,18z M20.5,24.6c-1.4,1-3,1.5-4.6,1.5s-3.2-0.5-4.6-1.5    c-0.4-0.3-0.5-0.9-0.2-1.4c0.3-0.4,0.9-0.5,1.4-0.2c2.1,1.5,4.8,1.5,6.9,0c0.4-0.3,1.1-0.2,1.4,0.2C21.1,23.7,21,24.3,20.5,24.6z     M20.9,20c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C22.9,19.1,22,20,20.9,20z"/></svg>
          </h1>
        </Link>
      </Title>
      </ColT>
      </Row>
    </FooterFrame>
  )
}
