import React from 'react'
import styled from 'styled-components'

const CreativeWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  flex-shrink: 2;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 50%;
  text-align: center;
  margin: auto;
  padding-bottom: 5vh;
`

const Header = styled.h2`
  grid-column: span 3;
  justify-self: center;
  padding-top: 5vh;
`

const CreativeTeam = () => {
  return (
    <CreativeWrapper>
      <Content>
        <Header>The Creative Team</Header>
        <div>
          <p>Producers</p>
          <strong>Roman Marek</strong>
          <p>
            And
            <strong> Jonathan Hibbard</strong>
          </p>
        </div>
        <div>
          <p>Script</p>
          <strong>Roman Marek</strong>
        </div>
        <div>
          <p>Co Writer</p>
          <strong>Simon Young</strong>
        </div>
        <div>
          <p>Director</p>
          <strong>Roman Marek</strong>
        </div>
        <div>
          <p>Musical Directors</p>
          <strong>Jonathan</strong>
          <p>
            And
            <strong> Christopher Hibbard</strong>
          </p>
        </div>
        <div>
          <p>Choreography</p>
          <strong>Roman Marek</strong>
          <p>
            And
            <strong> Jim Whitely</strong>
          </p>
        </div>
        <div>
          <p>Costume/Wardrobe</p>
          <strong>Rebecca Marek</strong>
        </div>
        <div>
          <p>Graphic Design</p>
          <strong>Rebecca Pitt</strong>
        </div>
        <div>
          <p>Photography</p>
          <strong>Stevie Loy</strong>
        </div>
      </Content>
    </CreativeWrapper>
  )
}

export default CreativeTeam
