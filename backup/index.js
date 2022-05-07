import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../src/components/Layout"
import Seo from "../src/components/seo"
import PostItem from "../src/components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(({
        node: {
          frontmatter: { background, category, date, description, title },
          timeToRead,
          fields: { slug },
          wordCount: { words },
        },
      }) => (
        <PostItem
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
          words={words}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
