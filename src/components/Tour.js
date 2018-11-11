import React from 'react'
import styled from 'styled-components'

const TourDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`
const Logo = styled.img`
  height: 80%;
  justify-self: center;
`

const TitleAndDate = styled.div`
  justify-self: left;
`

const BookButton = styled.button`
  justify-self: left;
  padding: 0px 20px;
  max-height: 30%;
`

const Tour = ({ logo, theatreName, date }) => {
  return (
    <TourDateWrapper>
      <Logo src={logo} alt="theatreName" />
      <TitleAndDate>
        <p>{theatreName}</p>
        <p>{date}</p>
      </TitleAndDate>
      <BookButton>Book Now</BookButton>
    </TourDateWrapper>
  )
}

export default Tour
