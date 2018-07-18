import React from 'react'
import Navbar from 'components/Navbar'
import JoinUsSection from 'components/JoinUsSection'

const Homepage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div>
      <Navbar {...post.frontmatter}/>
      <JoinUsSection {...post.frontmatter}/>
    </div>
  )
}

export default Homepage

export const HomepageQuery = graphql`
  query Homepage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        logo
        joinUsBackground
        joinUsTitle
        joinUsButtonText
        joinUsButtonURL
      }
    }
  }
`
