import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ value, handleChange, label }) => (
  <Fragment>
    <label className='block-label'>{label}</label>
    <textarea type='text' value={value} onChange={handleChange} />
  </Fragment>
)

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default TextArea