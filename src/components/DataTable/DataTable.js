import React from 'react'

import DataRow from '../DataRow/DataRow'

const DataTable = ({ forecastData }) => <table>{forecastData.map(({ day, forecasts }) => <DataRow key={day} day={day} forecasts={forecasts} />)}</table>

export default DataTable