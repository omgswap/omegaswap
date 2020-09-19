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
  backgroundColor: darkMode ? '#222732' : '#F2F2FF',

  switchColor: darkMode ? '#212543' : '#DBDDFF',
  shadowBox: darkMode ? 'rgba(25,29,37,0.4)' : 'rgba(201,201,223,0.4)',
  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  inputBackground: darkMode ? '#1A1E27' : "#FFFFFF",
  placeholderGray: darkMode ? '#303745' : '#CCCFFF',
  shadowColor: darkMode ? '#000' : '#727FFF',

  // grays
  concreteGray: darkMode ? '#1F232D' : '#FBFBFF',
  mercuryGray: darkMode ? '#252A37' : '#EEEFFF',
  silverGray: darkMode ? '#606BD5' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#828395',
  doveGray: darkMode ? '#C3C9D7' : '#4E4E55',
  mineshaftGray: darkMode ? '#E1E1E1' : '#2B2B2B',
  activeGray: darkMode ? '#252B37' : '#CCCFFF',
  buttonOutlineGrey: darkMode ? '#FAFAFA' : '#DCDEFF',
  tokenRowHover: darkMode ? '#2C323E' : '#DCDEFF',

  //blacks
  charcoalBlack: darkMode ? '#DCDEFF' : '#2C323E',
  // blues
  zumthorBlue: darkMode ? '#212529' : '#DCDEFF',
  malibuBlue: darkMode ? '#727FFF' : '#727FFF',
  royalBlue: darkMode ? '#727FFF' : '#727FFF',
  loadingBlue: darkMode ? '#e4f0ff' : '#e4f0ff',

  // purples
  wisteriaPurple: '#727FFF',
  activeBotton: '#5868ff',
  // reds
  salmonRed: '#FF6871',
  // orange
  pizazzOrange: '#FF8F05',
  // yellows
  warningYellow: '#FFE270',
  // pink
  uniswapPink: '#727FFF',
  //green
  connectedGreen: '#27AE60',

  //branded
  metaMaskOrange: '#E8831D',

  //specific
  textHover: darkMode ? theme.uniswapPink : theme.doveGray,

  // connect button when loggedout
  buttonFaded: darkMode ? '#727FFF' : '#606BD5',

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
    background-image: radial-gradient(55% 55% at 55% 55%, rgb(114 127 255 / 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`
