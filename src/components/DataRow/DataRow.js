import React from 'react'
import PropTypes from 'prop-types'

import getDayName from '../../helpers/getDayName'

const DataRow = ({ date, forecasts }) => (
  <tr>
    <td>{getDayName(date)}</td>
    {forecasts.map(({date, temp}) =>
      <td key={date}>
        <p>{`${new Date(date).getHours()}:00`}</p>
        <p>{`${Math.floor((temp - 273.15) * 100) / 100}C`}</p>
      </td>
    )}
  </tr>
)

DataRow.propTypes = {
  date: PropTypes.string,
  forecasts: PropTypes.array
}

export default DataRow