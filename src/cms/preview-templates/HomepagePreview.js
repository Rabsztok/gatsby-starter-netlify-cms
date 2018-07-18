import React from 'react'
import PropTypes from 'prop-types'
import { HomepageTemplate } from 'templates/homepage'

const HomepagePreview = ({ entry, widgetFor }) => (
  <HomepageTemplate
    logo={entry.getIn(['data', 'logo'])}
    joinUsBackground={entry.getIn(['data', 'joinUsBackground'])}
    joinUsTitle={entry.getIn(['data', 'joinUsTitle'])}
    joinUsButtonText={entry.getIn(['data', 'joinUsButtonText'])}
    joinUsButtonURL={entry.getIn(['data', 'joinUsButtonURL'])}
  />
)

HomepagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomepagePreview
