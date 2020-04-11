import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "../Header"
import SEO from "../SEO"

const Container = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
