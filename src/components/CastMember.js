import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.7fr 0.8fr;
  margin: 5%;
  background-color: #0067a6;
  padding: 5%;
  grid-gap: 20px;
  @media screen and (max-width: 500px) {
    display: block;
  }
  a {
    text-decoration: none;
    -webkit-transition: 0.15s ease-in-out !important;
    transition: 0.15s ease-in-out !important;
    color: #001025;
    &:hover {
      color: white;
      opacity: 0.9;
    }
  }
`
const Headshot = styled(GatsbyImage)`
  border: 4px solid #f7b300;
  width: 100%;
`
const ImageGrid = styled.div`
  width: 250px;
  height: 250px;
  grid-row: 1;
  grid-column: 3;
`

const Title = styled.h2`
  margin-bottom: 3%;
`

const CastMember = ({ description, castName, imageUrl }) => (
  <Wrapper>
    <div>
      <Link to="/cast" data-cy="cast-back">
        BACK
      </Link>
    </div>
    <div>
      <Title>{castName}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </div>
    <ImageGrid>
      <Headshot image={imageUrl} alt={`${ castName } headshot`} />
    </ImageGrid>
  </Wrapper>
)

export default CastMember
