import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../styles/index.scss'

import { Person } from "schema-dts";
import { JsonLd } from "react-schemaorg";


import { Row, Col } from 'reactstrap'

export function GraceHopper() {
  return <JsonLd
    item={{
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Grace Hopper",
      alternateName: "Grace Brewster Murray Hopper",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: ["Yale University", "Vassar College"]
      },
      knowsAbout: ["Compilers", "Computer Science"]
    }}/>;
}

const Layout = ({ children, pageTitle }) => (
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
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar />
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
