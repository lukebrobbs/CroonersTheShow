import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/layout'
import Image from '../../components/image'
import Header from '../../components/header'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
`

const ImageGrid = styled.div`
  grid-row: 1;
  grid-column: 3;
`

const Roman = () => (
  <Layout padTop>
    {isMobile => (
      <>
        <Header page="Cast" isMobile={isMobile} />
        <h1 style={{ textAlign: 'center' }}>Crooners Logo</h1>
        <h2 style={{ textAlign: 'center' }}>Roman Marek</h2>
        <Wrapper>
          <Link to="/cast">BACK</Link>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam quisquam recusandae! Esse aliquid delectus ipsum quod,
              iusto temporibus in expedita consequatur voluptate, sunt nisi
              omnis voluptates libero quisquam praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam quisquam recusandae! Esse aliquid delectus ipsum quod,
              iusto temporibus in expedita consequatur voluptate, sunt nisi
              omnis voluptates libero quisquam praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam quisquam recusandae! Esse aliquid delectus ipsum quod,
              iusto temporibus in expedita consequatur voluptate, sunt nisi
              omnis voluptates libero quisquam praesentium.
            </p>
          </div>
          <ImageGrid>
            <Image />
          </ImageGrid>
        </Wrapper>
      </>
    )}
  </Layout>
)

export default Roman
