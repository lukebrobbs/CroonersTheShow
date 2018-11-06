import React from 'react'
import styled from 'styled-components'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramLogo from '../images/instagram-logo.svg'

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: lightGrey;
`
const Heading = styled.h3`
  padding-top: 2vh;
  padding-left: 15vw;
  margin-bottom: 1.5vh;
`

const Inline = styled.div`
  display: inline-grid;
  grid-gap: ${props => (props.right ? '20px' : '5%')};
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 0.5rem;
  padding-left: 15vw;
  ${props =>
    props.right && {
      position: 'fixed',
      right: '10%',
      bottom: '3%',
    }};
`
const FooterInput = styled.input`
  min-width: 40%;
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
`
const FooterSubmitButton = styled.button`
  margin-right: 10vw;
  min-width: 60%;
  font-size: 0.9em;
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
          <FooterInput placeHolder="Name:" type="text" required />
          <FooterInput placeHolder="Email:" type="email" required />
          <FooterSubmitButton type="submit">SUBMIT</FooterSubmitButton>
        </Inline>
      </form>
      <Inline right>
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
      </Inline>
    </Footer>
  )
}
