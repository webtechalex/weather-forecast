import getDayName from './getDayName'

describe('getDayName', () => {
  describe('given a date string', () => {
    it('returns the day name for the given date', () => {
      expect(getDayName('2018-10-28')).toBe('Sunday')
      expect(getDayName('2018-10-29')).toBe('Monday')
      expect(getDayName('2018-10-30')).toBe('Tuesday')
      expect(getDayName('2018-10-31')).toBe('Wednesday')
      expect(getDayName('2018-11-01')).toBe('Thursday')
      expect(getDayName('2018-11-02')).toBe('Friday')
      expect(getDayName('2018-11-03')).toBe('Saturday')
    })
  })
})