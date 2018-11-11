import React from 'react'
import styled from 'styled-components'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramImage from './ImageComponents/InstagramImage'

const Footer = styled.div`
  background-color: lightgrey;
  width: 100%;
  flex-shrink: 1;
  display: grid;
  grid-gap: 10px;
  padding-left: 10vw;
  grid-auto-rows: minmax(60px, auto);
  grid-template-areas:
    '. hd . . scl .'
    '. form form form . .';
  grid-template-columns: 0.5fr 0.7fr 0.7fr 0.7fr 0.25fr 1fr;
  @media screen and (max-width: 1270px) {
    grid-template-areas:
      'hd'
      'form'
      'form'
      'form'
      'scl';
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding-left: 0;
    text-align: center;
  }
`

const Heading = styled.h3`
  padding-top: 2vh;
  margin: 0;
  grid-area: hd;
  @media screen and (max-width: 1270px) {
    padding-left: 0;
    padding-top: 4vh;
  }
`

const SocialIcons = styled.div`
  display: inline-grid;
  padding-top: 2vh;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(30px, auto);
  grid-area: scl;
  @media screen and (max-width: 1270px) {
    justify-self: center;
    padding-top: 1vh;
    padding-bottom: 0;
  }
`
const FooterInput = styled.input`
  max-width: 80%;
  max-height: 2rem;
  padding: 10px 10px;
  grid-area: ${props => props.gridArea};
  border: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: grey;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: grey;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: grey;
  }
  @media screen and (max-width: 1270px) {
    justify-self: center;
    min-width: 40%;
  }
`
const FooterSubmitButton = styled.button`
  max-height: 2rem;
  padding: 0px 0px;
  min-width: 30%;
  max-width: 10vw;
  font-size: 0.9em;
  @media screen and (max-width: 1270px) {
    justify-self: center;
  }
`

const Form = styled.form`
  display: inline-grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-area: form;
  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr;
  }
`

export default () => {
  return (
    <Footer>
      <Heading>SIGN UP FOR NEWS</Heading>
      <Form>
        <FooterInput placeHolder="Name:" type="text" required />
        <FooterInput placeHolder="Email:" type="email" required />
        <FooterSubmitButton type="submit" row="3">
          SUBMIT
        </FooterSubmitButton>
      </Form>
      <SocialIcons>
        <TwitterImage />
        <FacebookImage />
        <InstagramImage />
      </SocialIcons>
    </Footer>
  )
}
