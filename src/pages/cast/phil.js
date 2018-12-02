import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Header from '../../components/header'

const Phil = () => (
  <Layout padTop>
    {isMobile => (
      <>
        <Header page="Cast" isMobile={isMobile} />

        <h1>Crooners Logo</h1>
        <h2>Phil Barley</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          magnam nobis perspiciatis iure adipisci minus obcaecati. Nemo deserunt
          natus facere maiores totam eaque voluptatibus accusamus repellendus
          nobis, quam aliquam.
        </p>
        <h2>THE STORY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          magnam quisquam recusandae! Esse aliquid delectus ipsum quod, iusto
          temporibus in expedita consequatur voluptate, sunt nisi omnis
          voluptates libero quisquam praesentium.
        </p>
        <Link to="/cast">BACK</Link>
      </>
    )}
  </Layout>
)

export default Phil
