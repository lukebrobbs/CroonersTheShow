import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import GoogleMap from '../components/GoogleMap'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'
import Tour from '../components/Tour'
import moment from 'moment'

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
    margin-top: 5%;
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

// const TourDateSearch = styled.input`
//   width: 50%;
//   margin: auto;
//   @media screen and (min-width: 650px) {
//     display: none;
//   }
// `

const Tourdates = ({ location }) => {
  const [searchValue] = useState('')

  const data = useStaticQuery(graphql`
    query {
      allContentfulTourDate(sort: { date: ASC }) {
        edges {
          node {
            theatreName
            date
            website
            logo {
              gatsbyImageData(layout: CONSTRAINED)
            }
            location {
              lat
              lon
            }
          }
        }
      }
    }
  `)

  const isTourDateInSearch = theatreName => {
    if (!searchValue.length) return true
    return theatreName
      .toUpperCase()
      .includes(searchValue.toUpperCase())
  }

  return (
    <Layout pathname={location.pathname}>
      {/* <Header page="TourDates" /> */}
      <Logo>
        <CroonersLogo />
      </Logo>
      <MapWrapper>
        <GoogleMap
          node={data.allContentfulTourDate.edges.map(edge => edge.node)}
        />
      </MapWrapper>
      <TourDateWrapper>
        <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>
          Tour Dates
        </h1>
        {/* <TourDateSearch
          value={searchValue}
          onChange={handleChange}
        /> */}
        {data.allContentfulTourDate.edges.reduce((dates, date) => {
          if (
            isTourDateInSearch(date.node.theatreName) &&
            moment(date.node.date).isAfter()
          ) {
            const momentDate = moment(date.node.date).format(
              'Do MMM YYYY'
            )

            dates.push(
              <Tour
                theatreName={date.node.theatreName}
                date={momentDate}
                logo={date.node.logo.gatsbyImageData}
                key={date.node.theatreName}
                website={date.node.website}
              />
            )
          }
          return dates
        }, [])}
      </TourDateWrapper>
    </Layout>
  )
}

export default Tourdates
