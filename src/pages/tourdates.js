import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Tour from '../components/Tour'

const Tourdates = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulTourDate {
          edges {
            node {
              theatreName
              date
              logo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulTourDate }) => {
      console.log(allContentfulTourDate)
      return (
        <Layout>
          <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>
            Crooners Logo
          </h1>
          {allContentfulTourDate.edges.map(date => (
            <Tour
              theatreName={date.node.theatreName}
              date={date.node.date}
              logo={date.node.logo.file.url}
              key={date.node.theatreName}
            />
          ))}
        </Layout>
      )
    }}
  />
)

export default Tourdates
