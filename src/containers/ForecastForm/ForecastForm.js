import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TextInput from '../../common/TextInput/TextInput'
import TextArea from '../../common/TextArea/TextArea'
import ToggleInput from '../../common/ToggleInput/ToggleInput'
import Button from '../../common/Button/Button'
import { fetchForecast, fetchForecastSuccess } from '../../redux/actions'

class ForecastForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      csvData: '',
      city: '',
      dataSource: 'csv'
    }
  }

  handleChangeDataSource = (event) => {
    this.setState({
      dataSource: event.target.value
    })
  }

  handleChangeCSVData = (event) => {
    this.setState({
      csvData: event.target.value
    })
  }

  handleChangeCityData = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleGetWeatherData = () => {
    if (this.state.dataSource === 'csv') {
      this.handleSubmitCSVData()
    } else {
      this.handleGetCityData()
    }
  }

  handleSubmitCSVData = () => {
    this.props.fetchForecastSuccess({
      list: this.state.csvData.split(', ').map(dataPoint => {
        const [ dt_txt, temp ] = dataPoint.split(',')
        return {
          dt_txt,
          main: {
            temp
          }
        }
      })
    })
    this.setState({
      csvData: ''
    })
  }

  handleGetCityData = () => {
    this.props.fetchForecast(this.state.city)
    this.setState({
      city: ''
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <p>Choose a data source to display more info:</p>
          <ToggleInput
            options={[ { label: 'CSV', value: 'csv' },{ label: 'City', value: 'city' } ]}
            value={this.state.dataSource}
            handleChange={this.handleChangeDataSource}
          />
        </div>
        {this.state.dataSource === 'city' && <div>
          <TextInput value={this.state.city} handleChange={this.handleChangeCityData} label='Get weather for a city' />
        </div>}
        {this.state.dataSource === 'csv' && <div>
          <TextArea
            value={this.state.csvData}
            handleChange={this.handleChangeCSVData}
            label='Enter weather data in comma separated format'
          />
        </div>}
        <div>
          <Button handleClick={this.handleGetWeatherData} label='Get Weather Data'/>
        </div>
      </Fragment>
    )
  }
}

ForecastForm.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
  fetchForecastSuccess: PropTypes.func.isRequired
}

export default connect(undefined, {fetchForecast, fetchForecastSuccess})(ForecastForm)