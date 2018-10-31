import React from 'react'
import ForecastDataContainer from '../ForecastDataContainer/ForecastDataContainer'
import ForecastForm from '../ForecastForm/ForecastForm'

const App = () => (
  <div className='container'>
    <ForecastForm />
    <ForecastDataContainer />
  </div>
)

export default App