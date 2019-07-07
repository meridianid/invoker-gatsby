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
        prismic {
          allBlogss {
            edges {
              node {
                _meta {
                  id
                  lang
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const postsList = result.data.prismic.allBlogss.edges

  postsList.forEach(edge => {
    createPage({
      path: `/blogs/${edge.node._meta.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        id: edge.node._meta.id,
        uid: edge.node._meta.uid,
        lang: edge.node._meta.lang,
      },
    })
  })
}
