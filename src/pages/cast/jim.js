import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

const Jim = () => (
  <Layout>
    <h1>Crooners Logo</h1>
    <h2>Jim Whitley</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
      magnam nobis perspiciatis iure adipisci minus obcaecati. Nemo deserunt
      natus facere maiores totam eaque voluptatibus accusamus repellendus nobis,
      quam aliquam.
    </p>
    <h2>THE STORY</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam
      quisquam recusandae! Esse aliquid delectus ipsum quod, iusto temporibus in
      expedita consequatur voluptate, sunt nisi omnis voluptates libero quisquam
      praesentium.
    </p>
    <Link to="/cast">BACK</Link>
  </Layout>
)

export default Jim
