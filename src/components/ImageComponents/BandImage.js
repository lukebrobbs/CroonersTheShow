import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MiniBigBand = () => (
  <StaticImage
    src="../../images/The-Mini-Big-Band.jpg"
    alt="The Mini Big Band"
    placeholder="blurred"
    layout="constrained"
    maxWidth={960}
    maxHeight={500}
    style={{ border: '4px solid #f7b300' }}
  />
)
export default MiniBigBand
