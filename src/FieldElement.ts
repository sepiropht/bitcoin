export default class FieldElement {
  private num: number
  private prime: number
  constructor(num: number, prime: number) {
    if (num >= prime || num < 0) {
      console.error(`Num ${num} not in fiels range 0 to ${prime - 1}`)
    }
    this.num = num
    this.prime = prime
  }

  eq(other: FieldElement): boolean {
    return this.num === other.num && this.num === other.num
  }
}
