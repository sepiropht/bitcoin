import Point from '../src/Point'

describe('Point', () => {
  test('init Point', () => {
    const p = () => new Point(2, 4, 5, 7)
    expect(p).toThrowError('(2, 4) is not on the curve')
    const q = () => new Point(-1, -1, 5, 7)
    expect(q).toBeDefined()
  })
  test('add Point', () => {
    let a = new Point(3, 7, 5, 7)
    let b = new Point(-1, -1, 5, 7)
    expect(a.add(b)).toEqual(new Point(2, -5, 5, 7))

    const c = new Point(-1, 1, 5, 7)
    expect(c.add(c)).toEqual(new Point(18, -77, 5, 7))
  })
})
