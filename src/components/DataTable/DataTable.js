import React from 'react'

import DataRow from '../DataRow/DataRow'
import filterForecastsByDate from '../../helpers/filterForecastsByDate'

const DataTable = ({ dates, forecastData }) => {
  return (
    <table>
      <tbody>
        {dates.map((date) =>
          <DataRow key={date} date={date} forecasts={filterForecastsByDate(date, forecastData)} />
        )}
      </tbody>
    </table>
  )
}


export default DataTable