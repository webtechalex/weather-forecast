import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ isLoading }) => isLoading ? <p>Loading...</p> : null

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loading