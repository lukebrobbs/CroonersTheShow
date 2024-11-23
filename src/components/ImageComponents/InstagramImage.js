import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const InstagramLogo = () => (
  <a
    href="https://www.instagram.com/croonerstheshow/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ height: '30px', width: '30px' }}
  >
    <StaticImage
      src="../../images/instagram-logo.png"
      alt="Instagram"
      placeholder="blurred"
      layout="fixed"
      width={30}
      height={30}
    />
  </a>
)

export default InstagramLogo
