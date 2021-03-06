import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
            year
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <p>
        Conversion of old posts based on{' '}
        <a href="http://unlikenesses.com/2017-11-06-migrating-blog-to-gatsby/">
          this tutorial
        </a>
      </p>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => (
        <div className="post" key={idx}>
          <Link to={node.fields.slug}>
            <h3 className="post-title">
              {node.frontmatter.title} ({node.fields.year})
            </h3>
          </Link>
          <span className="post-date">{node.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}
