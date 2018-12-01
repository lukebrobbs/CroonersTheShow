import React from 'react'

import Layout from '../components/layout'
import HomePageBg from '../components/ImageComponents/HomePageBg'

const IndexPage = () => (
  <Layout>
    <HomePageBg />
    <p style={{ textAlign: 'center', margin: 'auto' }}>
      A witty and exhilarating new comedy music show chock full of crooner
      classics, big band swing, and hilarious laugh out loud comedy has been
      wowing UK audiences with its quintessentially British take on a timeless
      free music...
    </p>
  </Layout>
)

export default IndexPage
