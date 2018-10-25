import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ value, handleChange, label }) => <label>{label}<input type='text' value={value} onChange={handleChange} /></label>

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TextInput