import React from 'react'
import PropTypes from 'prop-types'
import { HomepageTemplate } from '../../templates/homepage'

const HomepagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HomepagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomepagePreview
