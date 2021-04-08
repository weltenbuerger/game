class Gretel {
  constructor() {
    //   random and curved movement
    this.beginX = 20.0 // Initial x-coordinate
    this.beginY = 10.0 // Initial y-coordinate
    this.endX = 570.0 // Final x-coordinate
    this.endY = 320.0 // Final y-coordinate
    this.distX // X-axis distance to move
    this.distY // Y-axis distance to move
    this.exponent = 4 // Determines the curve
    this.x = 0.0 // Current x-coordinate
    this.y = 0.0 // Current y-coordinate
    this.step = 0.008 // Size of each step along the path
    this.pct = 0.0 // Percentage traveled (0.0 to 1.0)
    // turn circles
    this.angle = 0 // initialize angle variable
    this.scalar = 0.2 // set the radius of circle
    this.startX = 100 // set the x-coordinate for the circle center
    this.startY = 100 // set the y-coordinate for the circle center
    // sounds
    this.walkSound
    this.running_gif
  }

  preload() {
    this.running_gif = createImg(
      'assets/img/gretel4-main-200px.gif',
      'walking gretel'
    )
    // this.walkSound = loadSound('assets/sounds/gretel_steps.mp3')
    this.daddy_img = createImg('assets/img/daddy.png', 'daddy')

    this.gretelFigure = new Figure(this.x, this.y, 20, 20, this.running_gif)
    this.parentFigure = new Figure(100, 400, 40, 40, this.daddy_img)
  }

  setup() {
    this.distX = this.endX - this.beginX
    this.distY = this.endY - this.beginY
    angleMode(DEGREES) // change the angle mode from radians to degrees
    this.barriers = []
    const barrier1 = new Barrier(300, 400, 100, 200)
    const barrier2 = new Barrier(300, 400, 400, 500)
    const barrier3 = new Barrier(150, 100, 300, 400)
    this.barriers.push(barrier1, barrier2, barrier3)
  }
  draw() {
    for (const barrier of this.barriers) {
      barrier.draw()
    }
    this.runGretel()
    this.gretelFigure.draw()
    this.parentFigure.draw()
  }

  runGretel() {
    this.gretelFigure.move(this.x, this.y)
    this.pct += this.step
    if (this.pct < 1.0) {
      this.x = this.beginX + this.pct * this.distX
      this.y = this.beginY + pow(this.pct, this.exponent) * this.distY
    }
    for (const barrier of this.barriers) {
      if (this.isCollision(barrier)) {
        this.changeDirection()
        this.pct -= 0.01
      } else {
        if (this.pct >= 1) {
          this.circleAround()
          if (sin(this.angle) < 0) {
            this.changeDirection()
          }
        }
      }
    }
  }

  isCollision(barrier) {
    if (
      this.gretelFigure.xRight > barrier.xLeft &&
      this.gretelFigure.xLeft < barrier.xRight &&
      this.gretelFigure.yBottom > barrier.yTop &&
      this.gretelFigure.yTop < barrier.yBottom
    ) {
      return true
    } else {
      return false
    }
  }

  circleAround() {
    //   circle around
    this.x = this.x = this.x + this.scalar * cos(this.angle)
    this.y = this.y + this.scalar * sin(this.angle)
    this.angle++
  }

  changeDirection() {
    this.pct = 0.0
    this.beginX = this.x
    this.beginY = this.y
    this.endX =
      Math.floor(Math.random() * height - this.gretelFigure.height) + 0
    this.endY = Math.floor(Math.random() * width - this.gretelFigure.width) + 0
    this.distX = this.endX - this.beginX
    this.distY = this.endY - this.beginY
    this.angle = 0
  }
}
