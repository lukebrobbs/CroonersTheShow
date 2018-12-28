import React from 'react'
import styled from 'styled-components'

const CreativeWrapper = styled.div`
  width: 100%;
  background-color: #0067a6;
  border: 1px solid black;
  flex-shrink: 2;
`

const TeamItem = styled.div`
  padding-bottom: 10px;
`

const Content = styled.div`
  display: grid;
  color: white;
  grid-template-columns: 1fr 1fr 1fr;
  width: 50%;
  text-align: center;
  margin: auto;
  padding-bottom: 5vh;
  @media screen and (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Header = styled.h2`
  color: #f7b300;
  grid-column: span 3;
  justify-self: center;
  padding-top: 5vh;
  @media screen and (max-width: 1020px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 800px) {
    grid-column: span 1;
  }
`

const CreativeTeam = () => {
  return (
    <CreativeWrapper>
      <Content>
        <Header>The Creative Team</Header>
        <TeamItem>
          <h4>Producers</h4>
          <strong>Roman Marek</strong>
          <p>
            And
            <strong> Jonathan Hibbard</strong>
          </p>
        </TeamItem>
        <TeamItem>
          <h4>Script</h4>
          <strong>Roman Marek</strong>
          <p />
        </TeamItem>
        <TeamItem>
          <h4>Co Writer</h4>
          <strong>Simon Young</strong>
          <p />
        </TeamItem>
        <TeamItem>
          <h4>Director</h4>
          <strong>Roman Marek</strong>
          <p />
        </TeamItem>
        <TeamItem>
          <h4>Musical Directors</h4>
          <strong>Jonathan</strong>
          <p>
            And
            <strong> Christopher Hibbard</strong>
          </p>
        </TeamItem>
        <TeamItem>
          <h4>Choreography</h4>
          <strong>Roman Marek</strong>
          <p>
            And
            <strong> Jim Whitely</strong>
          </p>
        </TeamItem>
        <TeamItem>
          <h4>Costume/Wardrobe</h4>
          <strong>Rebecca Marek</strong>
          <p />
        </TeamItem>
        <TeamItem>
          <h4>Graphic Design</h4>
          <strong>Rebecca Pitt</strong>
          <p />
        </TeamItem>
        <TeamItem>
          <h4>Photography</h4>
          <strong>Stevieroy</strong>
          <p />
        </TeamItem>
      </Content>
    </CreativeWrapper>
  )
}

export default CreativeTeam
