import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = (props) => {
  return <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    { props.data.github.repository.issues.edges.map(edge => {
      return <div>
        <h2>
          <Link to={`/issues/${edge.node.number}`}>
            {edge.node.title}
          </Link>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: edge.node.bodyHTML }} />
      </div>
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
}

export const query = graphql`
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
`

export default IndexPage
