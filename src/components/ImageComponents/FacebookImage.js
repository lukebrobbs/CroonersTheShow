import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const FacebookImage = () => (
  <a
    href="https://www.facebook.com/croonerstheshow/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ height: '25px', width: '25px' }}
  >
    <StaticImage
      src="../../images/facebook-logo.png"
      alt="Facebook"
      placeholder="blurred"
      layout="fixed"
      width={25}
      height={25}
    />
  </a>
)

export default FacebookImage
