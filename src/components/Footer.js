import React from 'react'
import styled from 'styled-components'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramLogo from '../images/instagram-logo.svg'

const Footer = styled.div`
  background-color: lightgrey;
  width: 100%;
  flex-shrink: 1;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
const Heading = styled.h3`
  padding-top: 2vh;
  padding-left: 15vw;
  @media screen and (max-width: 600px) {
    padding-left: 0;
  }
`

const Inline = styled.div`
  display: inline-grid;
  grid-gap: ${props => (props.right ? '20px' : '5%')};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding-left: 15vw;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: ${props => (props.right ? '0px' : '10px')};
    padding-left: 0;
  }
`
const SocialIcons = styled.div`
  display: inline-grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 0.5rem;
  justify-self: right;
  ${'' /* grid-column-start: 4;
  grid-column-end: 6; */} @media screen and (max-width: 600px) {
    justify-self: center;
    grid-row: 4;
    padding-bottom: 0;
  }
`
const FooterInput = styled.input`
  width: 100%;
  max-height: 2rem;
  padding: 10px 10px;
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
  @media screen and (max-width: 600px) {
    grid-row: ${props => props.row};
  }
`
const FooterSubmitButton = styled.button`
  max-height: 2rem;
  padding: 0px 0px;
  min-width: 30%;
  font-size: 0.9em;
  @media screen and (max-width: 600px) {
    grid-row: ${props => props.row};
  }
`
const SocialMediaIcon = styled.img`
  width: ${props => props.width};
`

export default () => {
  return (
    <Footer>
      <Heading>SIGN UP FOR NEWS</Heading>
      <form>
        <Inline>
          <FooterInput placeHolder="Name:" type="text" required row="1" />
          <FooterInput placeHolder="Email:" type="email" required row="2" />
          <FooterSubmitButton type="submit" row="3">
            SUBMIT
          </FooterSubmitButton>
          <SocialIcons>
            <a
              href="https://twitter.com/croonerstheshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterImage />
            </a>
            <a
              href="https://www.facebook.com/croonerstheshow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookImage />
            </a>
            <a
              href="https://www.instagram.com/croonerstheshow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon
                src={InstagramLogo}
                alt="Instagram Logo"
                width="30px"
              />
            </a>
          </SocialIcons>
        </Inline>
      </form>
    </Footer>
  )
}
