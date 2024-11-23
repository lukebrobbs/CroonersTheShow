import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CroonersLogo = () => (
  <StaticImage
    src="../../images/CroonersLogo.png"
    alt="Crooners Logo"
    placeholder="blurred"
    layout="fullWidth"
    maxWidth={1400}
  />
)
export default CroonersLogo
