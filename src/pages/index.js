import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'
import HomePageBg from '../components/ImageComponents/HomePageBg'
import LeftReview from '../components/ImageComponents/LeftReview'
import MiddleReview from '../components/ImageComponents/MiddleReview'
import RightReview from '../components/ImageComponents/RightReview'

const VideoWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding-bottom: 5%;
  padding-top: 5%;
  @media screen and (max-width: 700px) {
    padding: 5% 0 5%;
  }
`
const Video = styled.div`
  padding: 42.71% 0 0 0;
  position: relative;
  @media screen and (max-width: 700px) {
    padding: 72.71% 0 0 0;
  }
`

const Description = styled.p`
  text-align: center;
  margin: auto;
  margin-top: -80px;
  width: 80%;
  @media screen and (max-width: 1370px) {
    margin-top: -10px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
const Reviews = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-areas: 'leftReview middleReview rightReview';
  @media screen and (max-width: 900px) {
    grid-template-areas:
      'middleReview middleReview middleReview middleReview middleReview'
      'leftReview  leftReview - rightReview rightReview';
  }
`
const ReviewWrapper = styled.div`
  height: 70%;
  width: 70%;
  padding: 3vh 0 3vh;
  margin: auto;
  grid-area: ${ props => props.name };
  @media screen and (max-width: 900px) {
    height: ${ props => (props.name === 'middleReview' ? '80%' : '100%') };
    width: ${ props => (props.name === 'middleReview' ? '80%' : '100%') };
    justify-self: center;
  }
`
const HomePageImageWrapper = styled.div`
  @media screen and (max-width: 650px) {
    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`
const IndexPage = ({ location }) => (
  <React.Fragment>
    <Layout pathname={location.pathname}>
      <div>
        {/* <Header page="Home" /> */}
        <HomePageImageWrapper>
          <HomePageBg />
        </HomePageImageWrapper>
        <Description>
          A witty and exhilarating new comedy music show chock full of crooner
          classics, big band swing, and hilarious laugh out loud comedy has been
          wowing UK audiences with its quintessentially British take on a
          timeless free music...
        </Description>
        <Reviews>
          <ReviewWrapper name="leftReview">
            <LeftReview />
          </ReviewWrapper>
          <ReviewWrapper name="middleReview">
            <MiddleReview />
          </ReviewWrapper>
          <ReviewWrapper name="rightReview">
            <RightReview />
          </ReviewWrapper>
        </Reviews>
        <VideoWrapper>
          <Video>
            <iframe
              // eslint-disable-next-line max-len
              src="https://player.vimeo.com/video/304318423?color=f7b300&title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
              }}
              title="Crooners Title Video"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              data-cy="home-page-iframe"
            />
          </Video>
        </VideoWrapper>
      </div>
    </Layout>
  </React.Fragment>
)

export default IndexPage
