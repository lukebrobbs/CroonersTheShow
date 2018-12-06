import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import CastMember from '../../components/CastMember'
import Header from '../../components/header'
import CroonersLogo from '../../components/ImageComponents/CroonersLogo'

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

const Roman = () => (
  <Layout>
    <Header page="Cast" />
    <Logo>
      <CroonersLogo />
    </Logo>
    <h2 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}>
      Roman Marek
    </h2>
    <CastMember />
  </Layout>
)

export default Roman
