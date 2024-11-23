import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const JimHeadshot = () => (
  <StaticImage
    src="../../images/JimCrooners.jpg"
    alt="Jim Headshot"
    placeholder="blurred"
    layout="fixed"
    width={250}
    height={250}
    style={{ border: '4px solid #f7b300' }}
  />
)
export default JimHeadshot
