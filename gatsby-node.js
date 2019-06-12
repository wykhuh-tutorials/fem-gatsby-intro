// this function will load data, so make it async

// reporter is like Gatsby logger
exports.createPages = async ( { actions, graphql, reporter }) => {
  // When using graphql in node, graphql is a function calll
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if(result.errors) {
    // panic logs the errors and stops the Gatsby build
    reporter.panic('faild to create posts', reslut.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      // context is what is passed to the component
      context: {
        slug: post.frontmatter.slug
      }
    })
  })
}
