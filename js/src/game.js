class Game {
  constructor() {}

  preload() {
    soundFormats('mp3', 'ogg')
    this.walkSound = loadSound('../../assets/sounds/gretel_steps.mp3')
    this.walkLaughSound = loadSound('../../assets/sounds/gretel_walk_laugh.mp3')
    this.gretel = new Gretel()
    this.gretel.preload()
  }

  setup() {
    clear()
    createCanvas(600, 600)

    this.gretel.setup()
  }

  draw() {
    this.playSound(this.walkSound)
    clear()

    background(51)
    this.gretel.draw()

    let distance = dist(
      this.gretel.gretelFigure.xLeft,
      this.gretel.gretelFigure.yTop,
      this.gretel.parentFigure.xLeft,
      this.gretel.parentFigure.yTop
    )
    if (distance < 20) {
      alert('Gretel we got you! Time to go to sleep!')
      this.gretel.parentFigure.move(20, 20)
      this.gretel.gretelFigure.move(100, 200)
    } else if (distance < 60) {
      this.gretel.changeDirection()
      this.pauseSound(this.walkSound)
      this.playSound(this.walkLaughSound)
    }
  }

  playSound(sound) {
    if (!sound.isPlaying()) {
      sound.setVolume(0.5)
      sound.play()
    }
  }

  pauseSound(sound) {
    sound.pause()
  }
}
