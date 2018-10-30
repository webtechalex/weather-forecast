import React from 'react'

import DataRow from '../DataRow/DataRow'
import filterForecastsByDate from '../../helpers/filterForecastsByDate'

const DataTable = ({ dates, forecastData }) =>
  <table>
    {dates.map((date) =>
      <DataRow key={date} date={date} forecasts={filterForecastsByDate(date, forecastData)} />
    )}
  </table>

export default DataTable