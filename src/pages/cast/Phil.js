import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
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

const Phil = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCastMemeber(
          id: { eq: "5bcdf1c0-54c2-5dda-a045-f212cfbf0076" }
        ) {
          description {
            childMarkdownRemark {
              html
            }
          }
          headshot {
            fixed(width: 250, height: 250) {
              src
            }
          }
          castName
        }
      }
    `}
    render={({
      contentfulCastMemeber: {
        headshot: {
          fixed: { src }
        },
        description: {
          childMarkdownRemark: { html }
        },
        castName
      }
    }) => (
      <Layout pathname={location.pathname}>
        {/* <Header page="Cast" /> */}
        <Logo>
          <CroonersLogo />
        </Logo>

        <CastMember castName={castName} imageUrl={src} description={html} />
      </Layout>
    )}
  />
)

export default Phil
