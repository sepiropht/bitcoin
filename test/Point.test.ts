import Point from '../src/Point'

describe('Point', () => {
  test('init Point', () => {
    const p = () => new Point(5, 7, 2, 4)
    expect(p()).toThrowError('(5, 7) is not on the curve')
    //expect(new Point(5, 7, -1, -1)).toBeDefined()
  })
})
