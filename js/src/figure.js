class Figure {
  constructor(x, y, width, height, gif) {
    this.xLeft = x
    this.yTop = y
    this.xRight = x + width
    this.yBottom = y + height
    this.width = width
    this.height = height
    this.gif = gif
  }
  setUp() {}

  move(x, y) {
    this.xLeft = x
    this.xRight = x + this.width
    this.yTop = y
    this.yBottom = y + this.height
  }

  moveUp() {
    console.log('move up')
    this.yTop -= 1
  }

  moveDown() {
    console.log('move down')
    this.yTop += 1
  }

  moveLeft() {
    console.log('move left')
    this.xLeft -= 1
  }

  moveRight() {
    console.log('move right')
    this.xLeft += 1
  }

  draw() {
    if (typeof this.gif === 'undefined') {
      fill('red')
      rect(this.xLeft, this.yTop, this.width, this.height)
    } else {
      this.gif.position(this.xLeft + width / 2 + 40, this.yTop + 40)
      // fill('red')
      // rect(this.xLeft, this.yTop, this.width, this.height)
    }
  }
}
