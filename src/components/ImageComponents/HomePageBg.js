import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HomePageBg = () => (
  <StaticImage
    src="../../images/Crooners-with-description.png"
    alt="Crooners with description"
    placeholder="blurred"
    layout="fullWidth"
    maxWidth={1400}
  />
)
export default HomePageBg
