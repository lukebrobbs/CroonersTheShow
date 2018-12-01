import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const MiniBigBand = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "The-Mini-Big-Band.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ border: '4px solid #f7b300' }}
      />
    )}
  />
)
export default MiniBigBand
