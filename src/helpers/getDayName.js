const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const getDayName = date => dayNames[new Date(date).getDay()]

export default getDayName