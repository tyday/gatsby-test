import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Header One Here</h1>
    <p>Sample site for the Gatsby crash course.</p>
    <p>Now go build something great.</p>
    <br/>
    <p>Followed along with Traversy Media tutorila</p>
    <a href="https://www.youtube.com/watch?v=6YhqQ2ZW1sc">Link to course here</a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
