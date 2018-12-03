import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import CastImages from '../components/CastImages'
import Layout from '../components/layout'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'

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

const Cast = () => (
  <Layout creative>
    <Header page="Cast" />
    <Logo>
      <CroonersLogo />
    </Logo>
    <CastImages />
  </Layout>
)

export default Cast
