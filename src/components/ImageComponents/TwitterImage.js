import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const TwitterImage = () => (
  <a
    href="https://twitter.com/croonerstheshow"
    target="_blank"
    rel="noopener noreferrer"
    style={{ height: '25px', width: '25px' }}
  >
    <StaticImage
      src="../../images/twitter-logo.png"
      alt="Twitter"
      placeholder="blurred"
      layout="fixed"
      width={25}
      height={25}
    />
  </a>
)
export default TwitterImage
