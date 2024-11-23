import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const RomanHeadshot = () => (
  <StaticImage
    src="../../images/Roman-Headshot.jpg"
    alt="Roman Headshot"
    placeholder="blurred"
    layout="fixed"
    width={250}
    height={250}
    style={{ border: '4px solid #f7b300' }}
  />
)
export default RomanHeadshot
