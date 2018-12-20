import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import CreativeTeam from './CreativeTeam'
import CreativeFooter from './CreativeFooter'
import Footer from './Footer'
import tash from '../images/tash.ico'
import AboutPicture from './ImageComponents/AboutPicture'

import './layout.css'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const AboutPictureWrapper = styled.div`
  width: 45%;
  margin: auto;
  background-color: '#201915';
  @media screen and (max-width: 1000px) {
    width: 100% !important;
    margin: 0;
  }
`

const Layout = ({ children, creative, about, padTop, pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            {
              name: 'keywords',
              content: 'Crooner, music, big band, Swing, Jazz, Show, Theatre',
            },
            {
              name: 'viewport',
              content:
                'width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover',
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${tash}` },
            {
              rel: 'canonical',
              href: `${data.site.siteMetadata.siteUrl}${pathname}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {padTop && <div style={{ paddingTop: '10vh' }} />}

        <div
          style={{
            maxWidth: '1150px',
            minWidth: '50%',
            margin: '0 auto',
            paddingTop: 0,
            flex: '1 0 auto',
          }}
        >
          {children}
        </div>
        {about && (
          <div
            style={{
              width: '100%',
              flexShrink: '3',
              backgroundColor: '#201915',
            }}
          >
            <AboutPictureWrapper
              style={{
                width: '45%',
                margin: 'auto',
                backgroundColor: '#201915',
              }}
              data-cy="about-page-picture"
            >
              <AboutPicture />
            </AboutPictureWrapper>
          </div>
        )}
        {creative && (
          <>
            <CreativeTeam />
            <CreativeFooter />
          </>
        )}
        <Footer />
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
