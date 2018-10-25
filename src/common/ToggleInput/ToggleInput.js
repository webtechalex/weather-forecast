import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ToggleInput = ({ value, handleChange, options }) => (
  <Fragment>
    {
      options.map((option, key) =>
        <label key={key}>{option.label}
          <input type='radio' value={option.value} checked={option.value === value} onChange={handleChange} />
        </label>)
    }
  </Fragment>
)

ToggleInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default ToggleInput