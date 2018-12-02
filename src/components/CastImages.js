import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MiniBigBand from './ImageComponents/BandImage'
import JimHeadshot from './ImageComponents/JimHeadshot'

const CastWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-areas:
    'Phil Roman Jim'
    'band band band';
  grid-gap: 2rem;
  @media screen and (max-width: 900px) {
    grid-template-areas:
      'Phil'
      'Roman'
      'Jim'
      'band';
  }
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
  width: 50%;
  height: auto;
  overflow: hidden;
  justify-self: center;
  text-align: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const CastImages = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', color: '#f7b300' }}>THE CAST</h2>
      <CastWrapper>
        <CastMemberWrapper name="Phil">
          <Link to="/cast/phil">
            <CastImage />
          </Link>
          <h3>PHIL BARLEY</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Roman">
          <Link to="/cast/roman">
            <CastImage />
          </Link>
          <h3>ROMAN MAREK</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Jim">
          <Link to="/cast/jim">
            <JimHeadshot />
          </Link>
          <h3>JIM WHITLEY</h3>
        </CastMemberWrapper>
        <BandWrapper>
          <MiniBigBand />
          <h3>THE MINI BIG BAND</h3>
        </BandWrapper>
      </CastWrapper>
    </>
  )
}

export default CastImages
