import React, { Fragment } from 'react'
import ForecastDataContainer from '../ForecastDataContainer/ForecastDataContainer'
import ForecastForm from '../ForecastForm/ForecastForm'

const App = () => (
  <Fragment>
    <ForecastForm />
    <ForecastDataContainer />
  </Fragment>
)

export default App