import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Tourdates = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulTourDate {
          edges {
            node {
              theatreName
            }
          }
        }
      }
    `}
    render={({ allContentfulTourDate }) => {
      return allContentfulTourDate.edges.map(date => (
        <p>{date.node.theatreName}</p>
      ))
    }}
  />
)

export default Tourdates
