/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const detail = path.resolve('./src/templates/detail.js')
  return graphql(`
    {
      github {
        repository(owner: "mottox2-sandbox", name: "gatsby-github-blog") {
          issues(first: 10) {
            edges {
              node {
                number
                bodyHTML
                title
              }
            }
          }
        }
      }
    }
  `).then(result => {
    const { github } = result.data

    console.log(github)
    github.repository.issues.edges.map(edge => {
      console.log(edge)
      const issue = edge.node
      createPage({
        path: `/issues/${issue.number}`,
        component: detail,
        context: {
          number: issue.number
        }
      })
    })
  })
}