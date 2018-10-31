import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ value, handleChange, label }) => (
  <Fragment>
    <label className='block-label'>{label}</label>
    <input type='text' value={value} onChange={handleChange} />
  </Fragment>
)

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TextInput