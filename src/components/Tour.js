import React from 'react'
import styled from 'styled-components'

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

const Logo = styled.img`
  object-fit: cover;
  border: 3px solid #f7b300;
`
const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
  justify-self: right;
  overflow: hidden;
  grid-area: img;
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
  max-width: 45%;
  height: 35%;
  /* margin: 0, auto; */
  text-decoration: none;
  text-transform: uppercase;
  :hover {
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
  return (
    <TourDateWrapper>
      <ImageWrapper>
        <Logo src={logo} alt="theatreName" />
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
