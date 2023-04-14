import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <div>
        <h1>About Page - {title}</h1>
      </div>
    </Layout>
  )
}

export default About
