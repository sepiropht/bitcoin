export default class Point {
  private x: number
  private y: number
  private a: number
  private b: number
  constructor(x: number, y: number, a: number, b: number) {
    this.a = a
    this.b = b
    this.x = x
    this.y = y

    if (this.x === Infinity && this.y === Infinity) {
      return
    }

    if (this.y ** 2 !== this.x ** 3 + a * x + b)
      throw Error(`(${x}, ${y}) is not on the curve`)
  }

  add(other: Point): Point {
    if (this.a !== other.a || this.b !== other.b) {
      throw Error(`Points ${this}, ${other} are not on the same curve`)
    }

    if (this.x === Infinity) {
      return other
    }
    if (other.x === Infinity) {
      return this
    }

    if (this.x == other.x && this.y != other.y) {
      return new Point(Infinity, Infinity, this.a, this.b)
    }

    if (this.x != other.x) {
      const s = (other.y - this.y) / (other.x - this.x)
      const x = s ** 2 - this.x - other.x
      const y = s * (this.x - x) - this.y
      return new Point(x, y, this.a, this.b)
    }

    if (this == other && this.y == 0 * this.x) {
      return new Point(Infinity, Infinity, this.a, this.b)
    }

    if (this === other) {
      let s = (3 * this.x ** 2 + this.a) / (2 * this.y)
      let x = s ** 2 - 2 * this.x
      let y = s * (this.x - x) - this.y
      return new Point(x, y, this.a, this.b)
    }
  }

  eq(other: Point): boolean {
    return (
      this.x == other.x &&
      this.y == other.y &&
      this.a == other.a &&
      this.b == other.b
    )
  }
}
