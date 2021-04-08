const game = new Game()

function preload() {
  game.preload()
}

function setup() {
  game.setup()
}

function draw() {
  game.draw()

  if (keyIsDown(38)) {
    game.gretel.parentFigure.moveUp()
  }
  if (keyIsDown(40)) {
    game.gretel.parentFigure.moveDown()
  }
  if (keyIsDown(37)) {
    game.gretel.parentFigure.moveLeft()
  }
  if (keyIsDown(39)) {
    game.gretel.parentFigure.moveRight()
  }
}

function keyPressed() {
  if (keyCode === 32) {
  }
}
