import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import CreativeTeam from './CreativeTeam'
import CreativeFooter from './CreativeFooter'
import Footer from './Footer'
import tash from '../images/tash.ico'
import './layout.css'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Layout = ({ children, creative, padTop }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${tash}` },
            {
              rel: 'stylesheet',
              href: 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
              integrity:
                'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==',
              crossorigin: '',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {padTop && <div style={{ paddingTop: '10vh' }} />}
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1100,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            flex: '1 0 auto',
          }}
        >
          {children}
        </div>
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
  children: PropTypes.func.isRequired,
}

export default Layout
