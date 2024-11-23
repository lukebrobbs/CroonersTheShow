import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PhilHeadshot = () => (
  <StaticImage
    src="../../images/Phil-Headshot.jpg"
    alt="Phil Headshot"
    placeholder="blurred"
    layout="fixed"
    width={250}
    height={250}
    style={{ border: '4px solid #f7b300' }}
  />
)
export default PhilHeadshot
