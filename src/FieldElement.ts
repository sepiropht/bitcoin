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
  ne(other: FieldElement): boolean {
    return this.num !== other.num && this.num !== other.num
  }
  add(other: FieldElement): FieldElement {
    if (this.prime != other.prime) {
      console.log('Cannot add two numbers in different field')
    }
    return new FieldElement((this.num + other.num) % this.prime, this.prime)
  }
  sub(other: FieldElement): FieldElement {
    if (this.prime != other.prime) {
      console.log('Cannot sub two numbers in different field')
    }
    let num = this.num - other.num

    if (num < 0) {
      num += this.prime
    }

    return new FieldElement(num % this.prime, this.prime)
  }

  mul(other: FieldElement): FieldElement {
    if (this.prime !== other.prime) {
      console.error('Cannot mutliplicate two numbers in different field')
    }
    const num = this.num * other.num

    return new FieldElement(num % this.prime, this.prime)
  }

  pow(exponente: number): FieldElement {
    let exponent = exponente % (this.prime - 1)
    let num = Math.pow(this.num, exponent) % this.prime
    return new FieldElement(num, this.prime)
  }
}
