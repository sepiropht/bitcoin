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
    if (Math.pow(this.y, 2) !== Math.pow(this.x, 3) + a * x + b)
      throw Error(`(${x}, ${y}) is not on the curve`)
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
