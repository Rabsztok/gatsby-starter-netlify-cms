import React from 'react'
import PropTypes from 'prop-types'

export const HomepageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      {content}
    </section>
  )
}

HomepageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Homepage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomepageTemplate
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

Homepage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Homepage

export const HomepageQuery = graphql`
  query Homepage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
