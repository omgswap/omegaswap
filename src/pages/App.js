import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Timeline } from 'react-twitter-widgets'
import { darken } from 'polished'

import Web3ReactManager from '../components/Web3ReactManager'
import Header from '../components/Header'
import Footer from '../components/Footer'

import NavigationTabs from '../components/NavigationTabs'
import { isAddress, getAllQueryParams } from '../utils'

import { Link } from '../theme'

const Swap = lazy(() => import('./Swap'))
const Send = lazy(() => import('./Send'))


const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  height: 100%;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`
const FooterWrapper = styled.div`
  width: 100%;
  min-height: 30px;
  align-self: flex-end;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow: auto;
`

const Body = styled.div`
  max-width: 35rem;
  width: 100%;
  /*margin: 1rem 0 1rem 0; */
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`
const HClass = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.concreteGray};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadowBox};
`
const BoxClass = styled.div`
  background-color: ${({ theme }) => theme.concreteGray};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`
const TClass = styled.div`
  position: relative;
  width: calc(100% - 0.5rem);
  padding: 0.75rem;
  border-radius: 0.5rem;
`
const LClass = styled.div`
  display: flex;
  padding: 0.75rem;
  font-weight: 500;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.mercuryGray};
  background-color: ${({ theme }) => theme.concreteGray};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadowBox};
  color: ${({ theme }) => theme.headText};
  :hover {
    color: ${({ theme }) => darken(0.2, theme.headText)};
  }
`

const ColT = styled.div`
  flex: 0 0 22%;
  max-width: 22%;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
      display: none;
    }
`
const ColS = styled.div`
  flex: 0 0 46%;
  max-width: 46%;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
      }
`

export default function App() {
  const params = getAllQueryParams()
  return (
    <>
      <Suspense fallback={null}>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Row>
          <ColT>
            <TClass>
              <HClass>
                Twitter Feed
              </HClass>
                <LClass>
                  <Timeline
                  dataSource={{ sourceType: "profile", screenName: "omegadefi" }}
                  options={{ chrome: "noheader, nofooter", width: "400", height: "400" }}
                  />
                </LClass>
            </TClass>
          </ColT>
          <ColS>
          <BodyWrapper>
            <Body>
              <Web3ReactManager>
                <BrowserRouter>
                  <NavigationTabs />
                  {/* this Suspense is for route code-splitting */}
                  <Suspense fallback={null}>
                    <Switch>
                      <Route exact strict path="/swap" component={() => <Swap params={params} />} />
                      <Route
                        exact
                        strict
                        path="/swap/:tokenAddress?"
                        render={({ match, location }) => {
                          if (isAddress(match.params.tokenAddress)) {
                            return (
                              <Swap
                                location={location}
                                initialCurrency={isAddress(match.params.tokenAddress)}
                                params={params}
                              />
                            )
                          } else {
                            return <Redirect to={{ pathname: '/swap' }} />
                          }
                        }}
                      />
                      <Route exact strict path="/send" component={() => <Send params={params} />} />
                      <Route
                        exact
                        strict
                        path="/send/:tokenAddress?"
                        render={({ match }) => {
                          if (isAddress(match.params.tokenAddress)) {
                            return <Send initialCurrency={isAddress(match.params.tokenAddress)} params={params} />
                          } else {
                            return <Redirect to={{ pathname: '/send' }} />
                          }
                        }}
                      />
                     <Redirect to="/swap" />
                    </Switch>
                  </Suspense>
                </BrowserRouter>
              </Web3ReactManager>
            </Body>
          </BodyWrapper>
          </ColS>
          <ColT>
            <TClass>
              <HClass>
                News
              </HClass>
              <BoxClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/21/opm-list-omgswap/" target="_blank">
                    OPM Listed
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/21/pdai-list-omgswap/" target="_blank">
                    pDAI Listed
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/20/new-innovations-in-the-cryptocurrency-space/" target="_blank">
                    New Innovations in the Cryptocurrency Space
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/21/dsr-list-omgswap/" target="_blank">
                    DSR Listed
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/21/qbtc-list-omgswap/" target="_blank">
                    QBTC Listed
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/16/basics-of-invessting-in-defi-liquidity-pools/" target="_blank">
                    DeFi Liquidity Pools
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/2020/08/09/omega-protocol/" target="_blank">
                    Omega Protocol | Omega DeFi
                  </Link>
                </LClass>
                <LClass>
                  <Link id="link" href="https://news.omgswap.in/" target="_blank">
                    More...
                  </Link>
                </LClass>
              </BoxClass>
            </TClass>
          </ColT>
          </Row>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </AppWrapper>
      </Suspense>
    </>
  )
}
