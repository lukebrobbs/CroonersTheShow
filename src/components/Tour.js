import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const TourDateWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 10vh 10vw;
  grid-gap: 20px;
  line-height: 5px;
  padding-bottom: 5%;
  @media screen and (max-width: 900px) {
    grid-template-areas:
      'img info'
      '. bookNow';
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
  }
`

const Logo = styled.img`
  object-fit: cover;
`
const ImageWrapper = styled.div`
  width: 50%;
  height: auto;
  justify-self: right;
  overflow: hidden;
`

const TitleAndDate = styled.div`
  justify-self: center;
  padding-top: 10px;
`
const BookLink = styled.a`
  background-color: red;
  color: white;
  text-align: center;
  padding: 1em 1.5em;
  max-width: 60%;
  height: 35%;
  margin: 0, auto;
  text-decoration: none;
  border: 1px solid red;
  text-transform: uppercase;
  :hover {
    background-color: #555;
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
          <strong>{theatreName}</strong>
        </p>
        <p>{moment(date).format('Do MMMM YYYY')}</p>
      </TitleAndDate>

      <BookLink href={website} target="about_blank">
        Book Now
      </BookLink>
    </TourDateWrapper>
  )
}

export default Tour
