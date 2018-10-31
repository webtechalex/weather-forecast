import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchForecast } from '../../redux/actions'
import selectForecastDates from '../../redux/selectors/selectForecastDates'
import selectForecastData from '../../redux/selectors/selectForecastData'
import DataTable from '../../components/DataTable/DataTable'
import Loading from '../../common/Loading/Loading'
import Error from '../../common/Error/Error'

class ForecastDataContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchForecast()
  }

  render() {
    const { dates, forecasts, isLoading, hasError } = this.props
    return (
      <Fragment>
        <Error hasError={hasError} />
        <Loading isLoading={isLoading} />
        <DataTable dates={dates} forecastData={forecasts} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  dates: state.forecast && selectForecastDates(state.forecast),
  forecasts: state.forecast && selectForecastData(state.forecast),
  isLoading: state.isLoading,
  hasError: state.hasError
})

ForecastDataContainer.propTypes = {
  dates: PropTypes.array,
  forecasts: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  fetchForecast: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchForecast})(ForecastDataContainer)