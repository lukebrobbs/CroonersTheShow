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

const TwitterImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "twitter-logo.png" }) {
          childImageSharp {
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <a
        href="https://twitter.com/croonerstheshow"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: '25px', width: '25px' }}
      >
        <Img fixed={data.file.childImageSharp.fixed} />
      </a>
    )}
  />
)
export default TwitterImage
