const selectForecastData = ({list}) => list.map(dataPoint => ({
  temp: dataPoint.main.temp,
  date: dataPoint.dt_txt
}))

export default selectForecastData