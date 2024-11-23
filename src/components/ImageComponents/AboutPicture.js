import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPicture = () => {
  return <StaticImage src="../../images/About-picture.png"
    alt="About picture"
    placeholder="blurred"
    layout="fullWidth"
    maxWidth={1400}
  />
}

export default AboutPicture
