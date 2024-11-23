import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../../components/layout'
import CastMember from '../../components/CastMember'
import CroonersLogo from '../../components/ImageComponents/CroonersLogo'

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  padding-top: 10vh;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    margin-top: 5%;
    width: 80%;
  }
`

const TheMiniBigBand = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCastMemeber(id: { eq: "61f04ccb-2d99-5cea-86c9-2e55e0082498" }) {
        description {
          childMarkdownRemark {
            html
          }
        }
        headshot {
          gatsbyImageData(width: 250, height: 250)
        }
        castName
      }
    }
  `)

  const {
    headshot: { gatsbyImageData },
    description: { childMarkdownRemark: { html } },
    castName
  } = data.contentfulCastMemeber

  return (
    <Layout pathname={location.pathname}>
      <Logo>
        <CroonersLogo />
      </Logo>
      <CastMember castName={castName} imageUrl={gatsbyImageData} description={html} />
    </Layout>
  )
}

export default TheMiniBigBand
