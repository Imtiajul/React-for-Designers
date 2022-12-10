/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: {fields: [createdAt] order: ASC}) { 
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
      allContentfulFooterDownloadLink(sort: {fields: [createdAt] order: ASC}) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
      allContentfulFooterCommunityLink(sort: {fields: [createdAt] order: ASC})  {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <>
        <main>{children}
        </main>
        <footer style={{
          background: `#F1F3F5`,
        }}
        // style={{
        //   margin: `0 auto`,
        // maxWidth: `var(--size-content)`,
        // padding: `var(--size-gutter)`,
        //   marginTop: `var(--space-5)`,
        //   fontSize: `var(--font-sm)`,
        // }}
        >
          <Footer data={data}>
            {/* © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
            Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <br /> <a href="mailto:iimtiajul@gmail.com">Email us</a> to ask anything. © 2018 - Terms of Service - Privacy Policy
          </Footer>
        </footer>
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
