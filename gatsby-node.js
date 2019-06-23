const _ = require('lodash')

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/blog.js')

  const result = await wrapper(
    graphql(`
      {
        allPrismicBlogs {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  )

  const postsList = result.data.allPrismicBlogs.edges

  // Double check that the post has a category assigned
  postsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/blogs/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })
}
