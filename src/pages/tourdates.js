import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'
import Tour from '../components/Tour'
import GoogleMap from '../components/GoogleMap'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  padding-top: 10vh;
  padding-bottom: 3%;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
  }
`
const MapWrapper = styled.div`
  height: 600px;
  margin-bottom: 6%;
  width: 97.5vw;
  margin-left: calc(-48.5vw + 50%);
  div {
    position: relative;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`
const TourDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 960px;
  margin: auto;
`

const Tourdates = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulTourDate(sort: { fields: date }) {
          edges {
            node {
              theatreName
              date(formatString: "Do MMM YYYY")
              website
              logo {
                fluid(maxWidth: 500) {
                  src
                }
              }
              location {
                lat
                lon
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulTourDate }) => {
      return (
        <Layout pathname={location.pathname}>
          <Header page="TourDates" />
          <Logo>
            <CroonersLogo />
          </Logo>
          <MapWrapper>
            <GoogleMap
              node={allContentfulTourDate.edges.map(edge => edge.node)}
            />
          </MapWrapper>
          <TourDateWrapper>
            <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>
              Tour Dates
            </h1>
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
