import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ hasError }) => hasError ? <p>There was an error getting the data</p> : null

Error.propTypes = {
  hasError: PropTypes.bool.isRequired,
}

export default Error