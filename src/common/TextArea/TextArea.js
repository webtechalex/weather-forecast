import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ value, handleChange, label }) => <label>{label}<textarea type='text' value={value} onChange={handleChange} /></label>

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TextArea