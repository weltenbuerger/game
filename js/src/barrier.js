class Barrier {
  constructor(xLeft, xRight, yTop, yBottom) {
    this.xLeft = xLeft
    this.xRight = xRight
    this.yTop = yTop
    this.yBottom = yBottom
  }
  setUp() {}

  draw() {
    fill(255)
    rect(
      this.xLeft,
      this.yTop,
      this.xRight - this.xLeft,
      this.yBottom - this.yTop
    )
  }
}
