import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

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

const TheMiniBigBand = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCastMemeber(
          id: { eq: "3906faeb-effe-5a9b-a147-a3782f19ed5d" }
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
          fixed: { src },
        },
        description: {
          childMarkdownRemark: { html },
        },
        castName,
      },
    }) => (
      <Layout>
        <Header page="Cast" />
        <Logo>
          <CroonersLogo />
        </Logo>

        <CastMember castName={castName} imageUrl={src} description={html} />
      </Layout>
    )}
  />
)

export default TheMiniBigBand
