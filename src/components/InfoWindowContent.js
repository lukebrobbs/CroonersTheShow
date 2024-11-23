import React from 'react'
import styled from 'styled-components'

const InfoWindowContent = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'date'
    'button';
  justify-content: center;
  text-align: center;
`
const Title = styled.h4`
  grid-area: title;
`
const Date = styled.p`
  color: black;
  margin-bottom: 5%;
  font-family: 'Bourton-base';
`
const BookLink = styled.a`
  font-family: 'Bourton-base';
  grid-area: button;
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
  padding: 0.3em;
  width: 75px;
  margin: auto;
  height: auto;
  margin: 0, auto;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  cursor: pointer;
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
`

const Info = ({ title, date, url }) => {
  return (
    <InfoWindowContent>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <BookLink href={url} target="about_blank">
        Book now
      </BookLink>
    </InfoWindowContent>
  )
}

export default Info
