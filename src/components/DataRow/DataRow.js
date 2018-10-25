import React from 'react'

const getRealDay = n => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][n]

const DataRow = ({day, forecasts}) => (
  <tr>
    <td>{getRealDay(day)}</td>
    {forecasts.map(({time, temp}) =>
      <td key={time}>
        <p>{`${new Date(time).getHours()}:00`}</p>
        <p>{`${temp - 273.15}C`}</p>
      </td>
    )}
  </tr>
)

export default DataRow