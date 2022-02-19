import FieldElement from '../src/FieldElement'

describe('FieldElement', () => {
  const a = new FieldElement(7, 13)
  const b = new FieldElement(6, 13)
  test('2 same FieldElement should be equal', () => {
    expect(a.eq(a)).toBeTruthy()
  })
  test('2 different FieldElement equal should be equal', () => {
    expect(a.eq(b)).toBeFalsy()
  })
})
