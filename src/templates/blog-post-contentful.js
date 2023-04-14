import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPostContnetfulTemplate = ({ data }) => {
  console.log("props---", data)
  const { title, content, author, image, subtitle, slug } =
    data.contentfulBlogPost
  return (
    <Layout>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <img src={image.url} alt={slug} width={500} />
        <div>{content.raw}</div>
        <br />
        <b>Author : {author}</b>
      </div>
    </Layout>
  )
}

export default BlogPostContnetfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      image {
        url
      }
      author
      content {
        raw
      }
    }
  }
`
