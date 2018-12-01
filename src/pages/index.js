import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import HomePageBg from '../components/ImageComponents/HomePageBg'
import LeftReview from '../components/ImageComponents/LeftReview'
import MiddleReview from '../components/ImageComponents/MiddleReview'
import RightReview from '../components/ImageComponents/RightReview'

const Description = styled.p`
  text-align: center;
  margin: auto;
  margin-top: -100px;
  width: 60%;
  @media screen and (max-width: 1370px) {
    margin-top: -10px;
  }
`
const Reviews = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 1370px) {
    grid-template-columns: 1fr;
  }
`
const ReviewWrapper = styled.div`
  height: 70%;
  width: 70%;
  padding-top: 5vh;
  @media screen and (max-width: 1370px) {
    height: 30%;
    width: 30%;
    justify-self: center;
  }
`
const IndexPage = () => (
  <>
    <Layout>
      <div style={{ height: 'auto' }}>
        <HomePageBg />
        <Description>
          A witty and exhilarating new comedy music show chock full of crooner
          classics, big band swing, and hilarious laugh out loud comedy has been
          wowing UK audiences with its quintessentially British take on a
          timeless free music...
        </Description>
        <Reviews>
          <ReviewWrapper>
            <LeftReview />
          </ReviewWrapper>
          <ReviewWrapper>
            <MiddleReview />
          </ReviewWrapper>
          <ReviewWrapper>
            <RightReview />
          </ReviewWrapper>
        </Reviews>
      </div>
    </Layout>
  </>
)

export default IndexPage
