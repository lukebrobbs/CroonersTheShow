import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const TourDateWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10vh 10vw;
  grid-gap: 10px;
  line-height: 3px;
  padding-bottom: 5%;
`

const Logo = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  justify-self: right;
`

const TitleAndDate = styled.div`
  justify-self: center;
  padding-top: 10px;
`

const BookButton = styled.button`
  justify-self: left;
  padding: 0px 20px;
  max-height: 45%;
`

const Tour = ({ logo, theatreName, date }) => {
  return (
    <TourDateWrapper>
      <Logo src={logo} alt="theatreName" />
      <TitleAndDate>
        <p>
          <strong>{theatreName}</strong>
        </p>
        <p>{moment(date).format('Do MMMM YYYY')}</p>
      </TitleAndDate>
      <BookButton>Book Now</BookButton>
    </TourDateWrapper>
  )
}

export default Tour
