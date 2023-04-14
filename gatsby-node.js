const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query BlogPostDetail {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allContentfulBlogPost.nodes.forEach(post => {
    actions.createPage({
      path: "/blogs/" + post.slug,
      component: path.resolve("./src/templates/blog-post-contentful.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
