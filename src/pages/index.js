import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              productName
              productCode
              title
            }
          }
        }
      }
    }
 `)
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to EIS Goup.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div className='ddd'>
      {
        data.allMarkdownRemark.edges.map( nodes => {
            return (
              <Link to={nodes.node.frontmatter.path} key={nodes.node.frontmatter.productCode} >{nodes.node.frontmatter.productName}</Link>
            )
          }
        )
      }
      </div>
    </Layout>
  )}

export default IndexPage
