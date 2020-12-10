let irany = 0
let mano1 = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    irany = randint(0, 2)
    if (irany == 1) {
        mano1.turn(Direction.Right, 45)
    }
    if (irany == 2) {
        mano1.turn(Direction.Right, -45)
        mano1.move(1)
    }
    mano1.ifOnEdgeBounce()
    basic.pause(100)
})
