import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import { useStaticQuery, graphql } from 'gatsby'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'
import Layout from '../components/layout'
import GalleryVideo from '../components/GalleryVideo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  padding-top: 10vh;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    margin-top: 5%;
    width: 80%;
  }
`
const Video = styled.div`
  padding: 32.71% 0 0 0;
  position: relative;
  margin: 5% 0;
  @media screen and (max-width: 700px) {
    padding: 62.71% 0 0 0;
    margin: 0;
  }
`

const Title = styled.h2`
  padding-top: 0.5em;
  margin: auto;
  text-align: center;
`

const GalleryWrapper = styled.div`
  @media screen and (max-width: 1166px) {
    width: 90vw;
  }
`

const Gallery = ({ location }) => {
  const [, setNav1] = useState(null)
  const [, setNav2] = useState(null)
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)

  const firstClientXRef = useRef(null)
  const firstClientYRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulGalleryImages {
        edges {
          node {
            image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      allContentfulVideos {
        edges {
          node {
            video
          }
        }
      }
    }
  `)

  useEffect(() => {
    const handleTouchStart = e => {
      firstClientXRef.current = e.touches[0].clientX
      firstClientYRef.current = e.touches[0].clientY
    }

    const preventTouch = e => {
      const minValue = 5
      const clientX = e.touches[0].clientX - firstClientXRef.current

      if (Math.abs(clientX) > minValue) {
        e.preventDefault()
        e.returnValue = false
        return false
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', handleTouchStart)
      window.addEventListener('touchmove', preventTouch, { passive: false })
    }

    setNav1(slider1Ref.current)
    setNav2(slider2Ref.current)

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchmove', preventTouch)
      }
    }
  }, [])

  const content = data.allContentfulGalleryImages.edges.map(edge => {
    return edge.node.image.map((image, index) => {
      const img = getImage(image)
      return (
        <div key={`gallery-image-${ index }`}>
          <GatsbyImage
            className="Slider-inner-image"
            image={img}
            alt="Crooners on stage"
          />
        </div>
      )
    })
  })
  const videos = data.allContentfulVideos.edges.map(video => {
    return (
      <Video key={video.node.video}>
        <GalleryVideo url={video.node.video} />
      </Video>
    )
  })

  return (
    <Layout pathname={location.pathname}>
      {/* <Header page="Gallery" /> */}
      <Logo>
        <CroonersLogo />
      </Logo>
      <GalleryWrapper>
        <Title>Production Photos</Title>
        <Carousel content={content} />
        <Title>videos</Title>
        {videos}
      </GalleryWrapper>
    </Layout>
  )
}

export default Gallery
