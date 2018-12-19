import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MiniBigBand from './ImageComponents/BandImage'
import JimHeadshot from './ImageComponents/JimHeadshot'
import PhilHeadshot from './ImageComponents/PhilHeadshot'
import RomanHeadshot from './ImageComponents/RomanHeadshot'

const CastWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'Phil Roman Jim'
    'band band band';
  grid-gap: 2rem;
  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 99vw;
  }
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
          <Link to="/cast/Phil">
            <PhilHeadshot />
          </Link>
          <h3>PHIL BARLEY</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Roman">
          <Link to="/cast/Roman">
            <RomanHeadshot />
          </Link>
          <h3>ROMAN MAREK</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Jim">
          <Link to="/cast/Jim">
            <JimHeadshot />
          </Link>
          <h3>JIM WHITLEY</h3>
        </CastMemberWrapper>
        <BandWrapper>
          <Link to="/cast/TheMiniBigBand">
            <MiniBigBand />
          </Link>
          <h3>THE MINI BIG BAND</h3>
        </BandWrapper>
      </CastWrapper>
    </>
  )
}

export default CastImages
