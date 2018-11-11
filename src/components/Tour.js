import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const TourDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 80%;
  margin: auto;
  line-height: 0.3rem;
  padding-bottom: 5vh;
`

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  justify-self: right;
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
