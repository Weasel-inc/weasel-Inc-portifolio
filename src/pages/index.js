import React from "react"
import { Link } from "gatsby"

import Container from "../components/Container"

const IndexPage = () => (
  <Container title="Home">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Container>
)

export default IndexPage
