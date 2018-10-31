const selectForecastDates = ({list}) =>
  list.reduce((datesArray, dataPoint) => {
    const nextDate = dataPoint.dt_txt.split(' ')[0]
    return datesArray.includes(nextDate) ? datesArray : datesArray.concat(nextDate)
  }, [])

export default selectForecastDates