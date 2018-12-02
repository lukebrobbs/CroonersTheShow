import React from 'react'
import Header from '../components/header'
import CastImages from '../components/CastImages'
import Layout from '../components/layout'

const Cast = () => (
  <Layout creative padTop>
    {isMobile => (
      <>
        <Header page="Cast" isMobile={isMobile} />
        <h1>Crooners Logo</h1>
        <CastImages />
      </>
    )}
  </Layout>
)

export default Cast
