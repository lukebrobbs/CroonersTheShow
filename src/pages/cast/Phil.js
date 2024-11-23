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

const Phil = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCastMemeber(id: { eq: "f2cca01a-a5f7-515a-bed2-0243e3fc15bc" }) {
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

export default Phil
