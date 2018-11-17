import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Tour from '../components/Tour'

const TourDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`

const Tourdates = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulTourDate {
          edges {
            node {
              theatreName
              date
              website
              logo {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulTourDate }) => {
      return (
        <Layout>
          <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>
            Crooners Logo
          </h1>
          <TourDateWrapper>
            {allContentfulTourDate.edges.map(date => (
              <Tour
                theatreName={date.node.theatreName}
                date={date.node.date}
                logo={date.node.logo.fluid.src}
                key={date.node.theatreName}
                website={date.node.website}
              />
            ))}
          </TourDateWrapper>
        </Layout>
      )
    }}
  />
)

export default Tourdates
