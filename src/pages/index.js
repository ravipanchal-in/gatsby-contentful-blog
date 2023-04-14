import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Home = ({ data }) => {
  const { title, description, slug } = data.site.siteMetadata

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {data.allContentfulBlogPost.nodes.map((item, index) => {
          return (
            <div key={index}>
              <h4>
                <Link to={`blogs/${item.slug}`}>{item.title}</Link>
              </h4>
              <p>{item.subtitle}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost {
      nodes {
        title
        subtitle
        slug
      }
    }
  }
`
