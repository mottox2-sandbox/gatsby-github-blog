import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => {
  const issue = props.data.github.repository.issue
  return <Layout>
    <h1>{ issue.title }</h1>
    <div dangerouslySetInnerHTML={{__html: issue.bodyHTML}}/>
    <Link to="/">Go to Home</Link>
  </Layout>
}

export const query = graphql`
  query($number: Int!) {
    github {
      repository(owner: "mottox2-sandbox", name: "gatsby-github-blog") {
        issue(number: $number) {
          body
          number
          bodyHTML
          title
        }
      }
    }
  }
`

export default IndexPage
