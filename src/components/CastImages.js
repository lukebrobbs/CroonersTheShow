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
  justify-content: center;
  grid-template-columns: min-content min-content min-content;
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
    grid-template-columns: min-content;
  }
`

const CastMemberWrapper = styled.div`
  text-align: center;
  place-items:center;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  &:hover {
    color: #f7b300;
    transform: scale(1.05);
  }
`

const BandWrapper = styled.div`
  grid-area: band;
  width: 50%;
  height: auto;
  overflow: hidden;
  justify-self: center;
  text-align: center;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  &:hover {
    color: #f7b300;
    transform: scale(1.05);
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const CastImages = () => {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center', color: '#f7b300' }}>THE CAST</h2>
      <CastWrapper>
        <CastMemberWrapper name="Phil">
          <Link to="/cast/Phil" data-cy="cast-image-Phil">
            <PhilHeadshot />
          </Link>
          <h3>PHIL BARLEY</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Roman">
          <Link to="/cast/Roman" data-cy="cast-image-Roman">
            <RomanHeadshot />
          </Link>
          <h3>ROMAN MAREK</h3>
        </CastMemberWrapper>
        <CastMemberWrapper name="Jim">
          <Link to="/cast/Jim" data-cy="cast-image-Jim">
            <JimHeadshot />
          </Link>
          <h3>JIM WHITLEY</h3>
        </CastMemberWrapper>
        <BandWrapper>
          <Link to="/cast/TheMiniBigBand" data-cy="cast-image-Mbb">
            <MiniBigBand />
          </Link>
          <h3>THE MINI BIG BAND</h3>
        </BandWrapper>
      </CastWrapper>
    </React.Fragment>
  )
}

export default CastImages
