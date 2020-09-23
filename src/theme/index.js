import React, { useEffect } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle, css } from 'styled-components'
import { getQueryParam, checkSupportedTheme } from '../utils'
import { SUPPORTED_THEMES } from '../constants'
import { useDarkModeManager } from '../contexts/LocalStorage'

export * from './components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export default function ThemeProvider({ children }) {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const themeURL = checkSupportedTheme(getQueryParam(window.location, 'theme'))
  const themeToRender = themeURL
    ? themeURL.toUpperCase() === SUPPORTED_THEMES.DARK
      ? true
      : themeURL.toUpperCase() === SUPPORTED_THEMES.LIGHT
      ? false
      : darkMode
    : darkMode
  useEffect(() => {
    toggleDarkMode(themeToRender)
  }, [toggleDarkMode, themeToRender])
  return <StyledComponentsThemeProvider theme={theme(themeToRender)}>{children}</StyledComponentsThemeProvider>
}

const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : '#252529',
  greyText: darkMode ? white : '#6C7284',
  whiteColor: '#FFFFFF',
  headText: darkMode ? white : '#252529',

  // for setting css on <html>
  backgroundColor: darkMode ? '#313333' : '#F2F2F2',

  switchColor: darkMode ? '#353737' : '#D7DDDD',
  shadowBox: darkMode ? 'rgba(42,49,48,0.4)' : 'rgba(205,223,221,0.4)',
  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  inputBackground: darkMode ? '#2B2D2D' : "#FFFFFF",
  placeholderGray: darkMode ? '#303745' : '#D7E3E3',
  shadowColor: darkMode ? '#000' : '#009685',

  // grays
  concreteGray: darkMode ? '#2B2D2D' : '#FBFBFF',
  submitGray: darkMode ? '#353737' : '#D7DDDD',
  mercuryGray: darkMode ? '#3A3B3B' : '#EAEAEA',
  silverGray: darkMode ? '#009685' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#828395',
  doveGray: darkMode ? '#C5C9C9' : '#4E4E55',
  mineshaftGray: darkMode ? '#E1E1E1' : '#2B2B2B',
  activeGray: darkMode ? '#252B37' : '#D7E3E3',
  buttonOutlineGrey: darkMode ? '#FAFAFA' : '#EBFFFD',
  tokenRowHover: darkMode ? '#323535' : '#EBFFFD',

  //blacks
  charcoalBlack: darkMode ? '#EBFFFD' : '#323535',
  // blues
  zumthorBlue: darkMode ? '#3A3B3B' : '#EBFFFD',
  malibuBlue: darkMode ? '#009685' : '#009685',
  royalBlue: darkMode ? '#009685' : '#009685',
  loadingBlue: darkMode ? '#e4f0ff' : '#e4f0ff',

  // purples
  wisteriaPurple: '#009685',
  activeBotton: '#00AB98',
  // reds
  salmonRed: '#FF6871',
  // orange
  pizazzOrange: '#FF8F05',
  // yellows
  warningYellow: '#FFE270',
  // pink
  uniswapPink: '#009685',
  //green
  connectedGreen: '#27AE60',

  //branded
  metaMaskOrange: '#E8831D',

  //specific
  textHover: darkMode ? theme.uniswapPink : theme.doveGray,

  // connect button when loggedout
  buttonFaded: darkMode ? '#009685' : '#009685',

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body > div {
    height: 100%;
    -webkit-overflow-scrolling: touch;
}
/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.backgroundColor};;
  -webkit-border-radius: 2px;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  border-radius: 4px;
  background: #707377;
}
  html {
    font-size: 16px;
    font-variant: none;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    background-image: radial-gradient(55% 55% at 55% 55%, rgb(0,150,133,0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`
