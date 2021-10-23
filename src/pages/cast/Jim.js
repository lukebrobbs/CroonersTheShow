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

const Jim = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCastMemeber(
          id: { eq: "fb54b1ab-940a-5820-9fe2-c3c98c0e1e38" }
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

export default Jim
