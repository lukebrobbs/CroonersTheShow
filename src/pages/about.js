import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'

const AboutWrapper = styled.div`
  padding-top: 10vh;
  input:checked {
    padding-top: 0;
  }
`

const About = () => (
  <Layout>
    <AboutWrapper>
      <Header page="About" />
      <h1>Crooners Logo</h1>
      <h2>ABOUT CROONERS</h2>
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
        temporibus in expedita consequatur voluptate, sunt nisi omnis voluptates
        libero quisquam praesentium.
      </p>
    </AboutWrapper>
  </Layout>
)

export default About
