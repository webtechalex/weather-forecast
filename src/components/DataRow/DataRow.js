import React from 'react'

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

export default DataRow