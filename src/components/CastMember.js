import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
    color: #001025;
    :hover {
      color: white;
    }
  }
`
const Headshot = styled.img`
  border: 4px solid #f7b300;
  width: 100%;
`
const ImageGrid = styled.div`
  grid-row: 1;
  grid-column: 3;
`

const Title = styled.h2`
  margin-bottom: 3%;
`

const CastMember = ({ description, castName, imageUrl }) => (
  <Wrapper>
    <div>
      <Link to="/cast">BACK</Link>
    </div>
    <div>
      <Title>{castName}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
    <ImageGrid>
      <Headshot src={imageUrl} alt={`${castName} headshot`} />
    </ImageGrid>
  </Wrapper>
)

export default CastMember
