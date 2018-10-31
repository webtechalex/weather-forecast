import React from 'react'
import PropTypes from 'prop-types'

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

DataTable.propTypes = {
  dates: PropTypes.array,
  forecastData: PropTypes.array
}

export default DataTable