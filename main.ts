input.onButtonPressed(Button.A, function () {
    if (szunet > 10) {
        game.resume()
        szunet = szunet - 10
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
        game.pause()
    }
})
input.onButtonPressed(Button.AB, function () {
    indul()
})
input.onButtonPressed(Button.B, function () {
    if (szunet < 100) {
        game.resume()
        szunet = szunet + 10
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
        game.pause()
    }
})
function indul () {
    led.setBrightness(20)
    szunet = 50
    basic.clearScreen()
    mano1 = game.createSprite(randint(0, 4), 0)
    mano2 = game.createSprite(randint(0, 4), 4)
    mano3 = game.createSprite(0, randint(0, 4))
    mano4 = game.createSprite(4, randint(0, 4))
}
let irany = 0
let mano4: game.LedSprite = null
let mano3: game.LedSprite = null
let mano2: game.LedSprite = null
let mano1: game.LedSprite = null
let szunet = 0
indul()
basic.forever(function () {
    irany = randint(0, 1)
    if (irany == 0) {
        mano1.turn(Direction.Right, 45)
        mano2.turn(Direction.Right, 45)
        mano3.turn(Direction.Right, 45)
        mano4.turn(Direction.Right, 45)
    }
    if (irany == 1) {
        mano1.turn(Direction.Left, -45)
        mano2.turn(Direction.Left, -45)
        mano3.turn(Direction.Left, -45)
        mano4.turn(Direction.Right, -45)
    }
    mano1.move(1)
    mano1.ifOnEdgeBounce()
    basic.pause(szunet)
    mano2.move(1)
    mano2.ifOnEdgeBounce()
    basic.pause(szunet)
    mano3.move(1)
    mano3.ifOnEdgeBounce()
    basic.pause(szunet)
    mano4.move(1)
    mano4.ifOnEdgeBounce()
    basic.pause(szunet)
})
