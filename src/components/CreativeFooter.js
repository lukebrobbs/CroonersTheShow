import React from 'react'
import styled from 'styled-components'

const Centered = styled.div`
  text-align: center;
  padding-top: 5vh;
`

const CreativeFooter = () => {
  return (
    <Centered>
      <p>
        Management and Booking Agent:{' '}
        <strong>Murmur Music Management LTD</strong>
      </p>
      <p>
        <a href="mailto:jon@murmur-music.com">jon@murmur-music.com</a>
      </p>
      <p>This is a ChipperChaps LTD Production</p>
    </Centered>
  )
}

export default CreativeFooter
