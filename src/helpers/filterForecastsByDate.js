const filterForecastsByDate = (date, forecasts) => forecasts.filter(forecast => forecast.date.split(' ')[0] === date)

export default filterForecastsByDate