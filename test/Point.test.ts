import Point from '../src/Point'

describe('Point', () => {
  test('init Point', () => {
    const p = () => new Point(2, 4, 5, 7)
    expect(p).toThrowError('(2, 4) is not on the curve')
    const q = () => new Point(-1, -1, 5, 7)
    expect(q).toBeDefined()
  })
})
