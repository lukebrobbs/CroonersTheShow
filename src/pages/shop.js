import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'
import Layout from '../components/layout'

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  padding-top: 10vh;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
  }
`
const ShopWrapper = styled.div`
  width: 100%;
`

const Shop = ({ location }) => (
  <Layout pathname={location.pathname}>
    <Header page="Shop" />
    <ShopWrapper>
      <Logo>
        <CroonersLogo />
      </Logo>
    </ShopWrapper>
  </Layout>
)

export default Shop
