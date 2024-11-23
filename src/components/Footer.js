import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramImage from './ImageComponents/InstagramImage'

const Footer = styled.div`
  background-color: #003f6d;
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
  @media screen and (max-width: 1306px) {
    grid-template-areas:
      'hd'
      'form'
      'scl';
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding-left: 0;
    text-align: center;
    justify-content: center;
    grid-auto-rows: auto;
  }
`

const Heading = styled.h3`
  padding-top: 2vh;
  color: #f7b300;
  margin: 0;
  grid-area: hd;

  @media screen and (max-width: 1306px) {
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
  @media screen and (max-width: 1306px) {
    justify-self: center;
    padding-top: 1vh;
    padding-bottom: 10px;
  }
`
const FooterInput = styled.input`
  max-width: 80%;
  max-height: 2rem;
  padding: 10px 20px;
  grid-area: ${ props => props.gridArea };
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
  @media screen and (max-width: 1306px) {
    justify-self: center;
    min-width: 40%;
  }
  @media screen and (max-width: 500px) {
    margin: 12px;
    padding: 10px 40px;
  }
`
const FooterSubmitButton = styled.button`
  font-family: 'Bourton-base-drop';
  max-height: 2rem;
  min-width: 40%;
  border: none;
  max-width: 6vw;
  font-size: 1.1em;
  background-color: #f7b300;
  box-shadow: 1px 1px 3px black;
  cursor: pointer;
  border-radius: 3px;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  @media screen and (max-width: 1306px) {
    justify-self: center;
  }
  &:hover {
    color: white;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
  }
`

const Form = styled.form`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: form;
  grid-gap: 10px;
  @media screen and (max-width: 1306px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`

const PageFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    submitted: false,
    showSubmitSuccess: false,
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, name } = formData
    
    try {
      const encodedEmail = encodeURIComponent(email);
      const response = await fetch(`https://croonerstheshow.us11.list-manage.com/subscribe/post-json?u=0ca34c813d340053a881e8c79&id=4da641c8ab&f_id=00bc74e1f0&EMAIL=${encodedEmail}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // Since we're using no-cors, we can't actually read the response
      // We'll assume success if no error was thrown
      setFormData(prev => ({ 
        ...prev, 
        submitted: true, 
        message: 'Thank you for subscribing!' 
      }))
    } catch (error) {
      setFormData(prev => ({ 
        ...prev, 
        submitted: true, 
        message: 'Oops, something went wrong. Please try again later.' 
      }))
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Footer data-cy="footer">
      <Heading>SIGN UP FOR NEWS</Heading>
      <Form onSubmit={handleSubmit}>
        <CSSTransition
          classNames="example"
          in={formData.showSubmitSuccess}
          timeout={500}
          mountOnEnter
        >
          <p style={{ color: '#f7b300' }} data-cy="footer-message">
            {formData.message}
          </p>
        </CSSTransition>
        <CSSTransition
          classNames="submitted"
          in={!formData.submitted}
          timeout={500}
          unmountOnExit
          onExited={() => {
            setFormData(prev => ({ ...prev, showSubmitSuccess: true }))
          }}
        >
          <FooterInput
            placeholder="Name:"
            value={formData.name}
            name="name"
            type="text"
            required
            onChange={handleChange}
            data-cy="footer-name"
          />
        </CSSTransition>
        <CSSTransition
          classNames="submitted"
          in={!formData.submitted}
          timeout={500}
          unmountOnExit
        >
          <FooterInput
            placeholder="Email:"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            data-cy="footer-email"
          />
        </CSSTransition>
        <CSSTransition
          classNames="submitted"
          in={!formData.submitted}
          timeout={500}
          unmountOnExit
        >
          <FooterSubmitButton
            type="submit"
            row="3"
            key="footerButton"
            data-cy="footer-submit"
          >
            <strong>SUBMIT</strong>
          </FooterSubmitButton>
        </CSSTransition>
      </Form>

      <SocialIcons data-cy="footer-icons">
        <TwitterImage />
        <FacebookImage />
        <InstagramImage />
      </SocialIcons>
    </Footer>
  )
}

export default PageFooter
