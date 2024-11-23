import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TourDateWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 10vh 10vw;
  grid-template-areas: 'img info booknow';
  text-align: center;

  grid-gap: 20px;
  line-height: 5px;
  padding-bottom: 5%;
  @media screen and (max-width: 900px) {
    grid-template-areas:
      'img info'
      'img bookNow';
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
  }
  @media screen and (max-width: 575px) {
    display: block;
    text-align: center;
    padding-bottom: 8%;
  }
`

const Logo = styled(GatsbyImage)`
  border: 3px solid #f7b300;
  max-width: 400px;
  max-height: 100px;
`
const ImageWrapper = styled.div`
  width: 60%;
  height: auto;
  object-fit: scale-down;

  justify-self: center;
  grid-area: img;
  @media screen and (max-width: 900px) {
    justify-self: right;
  }
  @media screen and (max-width: 575px) {
    margin: auto;
    padding-top: 5%;
  }
`

const TitleAndDate = styled.div`
  justify-self: center;
  padding-top: 10px;
  grid-area: info;
  @media screen and (max-width: 575px) {
    display: block;
    margin: auto;
    padding-bottom: 5%;
  }
`
const BookLink = styled.a`
  font-family: 'Bourton-base';
  background-image: linear-gradient(
    to right,
    #ff7b08,
    #f79c08,
    #faca00,
    #faca00,
    #f79c08,
    #ff7b08
  );
  color: black;
  border: none;
  text-align: center;
  padding: 0.8em;
  width: fit-content;
  height: fit-content;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  /* margin: 0, auto; */
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: white;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
  }
  :active {
    background-color: black;
  }
  ::visited {
    background-color: #ccc;
  }
  @media screen and (max-width: 900px) {
    grid-area: bookNow;
    justify-self: center;
    padding: 0.5em;
  }
  @media screen and (max-width: 575px) {
    margin: auto;
    padding: 0.5em 0.75em;
  }
`

const Tour = ({ logo, theatreName, date, website }) => {
  const imageData = getImage(logo)
  return (
    <TourDateWrapper>
      <ImageWrapper>
        <a href={website} target="about_blank">
          <Logo image={imageData} alt={theatreName} />
        </a>
      </ImageWrapper>
      <TitleAndDate>
        <p>
          <strong style={{ color: '#f7b300' }}>{theatreName}</strong>
        </p>
        <p>{date}</p>
      </TitleAndDate>

      <BookLink href={website} target="about_blank">
        Book Now
      </BookLink>
    </TourDateWrapper>
  )
}

export default Tour
