import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { Link } from '../../theme'
import Web3Status from '../Web3Status'
import { darken, transparentize } from 'polished'
import Toggle from 'react-switch'
import { useDarkModeManager } from '../../contexts/LocalStorage'

const HeaderFrame = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.concreteGray};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadowBox};
`

const HeaderSpan = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const HeaderElement = styled.div`
  margin: 1.25rem;
  display: flex;
  min-width: 0;
  align-items: center;
  @media screen and (max-width: 600px) {
        margin: 0.75rem;
        display: block;
        flex-direction: column;
        align-items: flex-end;
        min-width: 0;
        align-items: center;
      }
`

const Title = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  #link {
    text-decoration-color: ${({ theme }) => theme.UniswapPink};
  }

  #title {
    display: inline;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.headText};
    :hover {
      color: ${({ theme }) => darken(0.2, theme.headText)};
    }
  }
`
const StyledToggle = styled(Toggle)`
  margin-right: 24px;

  .react-switch-bg[style] {
    background-color: ${({ theme }) => darken(0.05, theme.switchColor)} !important;
    border: 1px solid ${({ theme }) => theme.concreteGray} !important;
  }

  .react-switch-handle[style] {
    background-color: ${({ theme }) => theme.inputBackground};
    box-shadow: 0 4px 8px 0 ${({ theme }) => transparentize(0.93, theme.shadowColor)};
    border: 1px solid ${({ theme }) => theme.mercuryGray};
    border-color: ${({ theme }) => theme.mercuryGray} !important;
    top: 2px !important;
  }
`

const EmojiToggle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: Arial sans-serif;
`

const List = styled.div`
  align-items: center;
  margin: 10px;
  @media screen and (max-width: 600px) {
    margin: 5px;
      }
`
export default function Header() {
  const [isDark, toggleDarkMode] = useDarkModeManager()

  return (
    <HeaderFrame>
      <HeaderSpan>
        <HeaderElement>
          <Title>
            <Link id="link" href="https://omegaswap.com/">
              <h1 id="title"><Logo alt="OMGSwap"/></h1>
            </Link>
          </Title>
          <Title>
            <List>
              <Link id="link" href="https://omgswap.com/">
                <h1 id="title"> OMGSwap </h1>
              </Link>
            </List>
            <List>
              <Link id="link" href="https://omegaex.io/">
                <h1 id="title"> OmegaEx </h1>
              </Link>
            </List>
            <List>
              <Link id="link" href="https://omegabox.io/">
                <h1 id="title"> OmegaBOX </h1>
              </Link>
            </List>
          </Title>
        </HeaderElement>
        <HeaderElement>
        <StyledToggle
          checked={!isDark}
          uncheckedIcon={
            <EmojiToggle role="img" aria-label="moon">
              {/* eslint-disable-line jsx-a11y/accessible-emoji */}
              {'🌕'}
            </EmojiToggle>
          }
          checkedIcon={
            <EmojiToggle role="img" aria-label="sun">
              {/* eslint-disable-line jsx-a11y/accessible-emoji */}
              {'☀️'}
            </EmojiToggle>
          }
          onChange={() => {
            ReactGA.event({
              category: 'Advanced Interaction',
              action: 'Toggle Theme',
              label: isDark ? 'Light' : 'Dark'
            })
            toggleDarkMode()
          }}
        />
          <Web3Status />
        </HeaderElement>
      </HeaderSpan>
    </HeaderFrame>
  )
}
