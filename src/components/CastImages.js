import React from 'react'
import styled from 'styled-components'

const CastWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'Phil Roman Jim'
    'band band band';
  grid-gap: 2rem;
`

const CastMemberWrapper = styled.div`
  grid-area: ${props => props.name};
  text-align: center;
`

const CastImage = styled.div`
  height: 250px;
  width: 250px;
  border: 1px solid black;
`

const BandWrapper = styled.div`
  grid-area: band;
  justify-self: center;
  text-align: center;
`
const BandImage = styled.div`
  width: 450px;
  height: 250px;
  border: 1px solid black;
`

const CastImages = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>THE CAST</h2>
      <CastWrapper>
        <CastMemberWrapper name="Phil">
          <CastImage />
          <h3>PHIL BARLEY</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Roman">
          <CastImage />
          <h3>ROMAN MAREK</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Jim">
          <CastImage />
          <h3>JIM WHITLEY</h3>
        </CastMemberWrapper>
        <BandWrapper>
          <BandImage />
          <h3>THE MINI BIG BAND</h3>
        </BandWrapper>
      </CastWrapper>
    </>
  )
}

export default CastImages
