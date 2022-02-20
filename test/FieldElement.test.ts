import FieldElement from '../src/FieldElement'

describe('FieldElement', () => {
  const a = new FieldElement(7, 13)
  const b = new FieldElement(6, 13)
  test('2 same FieldElement should be equal', () => {
    expect(a.eq(a)).toBeTruthy()
  })
  test('2 different FieldElement equal should be false', () => {
    expect(a.eq(b)).toBeFalsy()
  })
  test('2 different FieldElement should be not equal', () => {
    expect(a.ne(b)).toBeTruthy()
  })
  test('add FieldElement', () => {
    let a = new FieldElement(7, 13)
    let b = new FieldElement(12, 13)
    let c = new FieldElement(6, 13)
    expect(a.add(b)).toStrictEqual(c)
  })
})
