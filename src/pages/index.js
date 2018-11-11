import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem', margin: 'auto' }}>
      <h1>Crooners Logo</h1>
      <Image />
    </div>
    <p style={{ maxWidth: '35vw', textAlign: 'center', margin: 'auto' }}>
      A witty and exhilarating new comedy music show chock full of crooner
      classics, big band swing, and hilarious laugh out loud comedy has been
      wowing UK audiences with its quintessentially British take on a timeless
      free music...
    </p>

    <Link to="/about/">About page link</Link>
    <Link to="/cast/">cast page link</Link>
  </Layout>
)

export default IndexPage
