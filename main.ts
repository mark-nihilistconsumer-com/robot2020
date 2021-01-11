input.onButtonPressed(Button.A, function () {
    BubbaBlocks.fireGun()
})
input.onButtonPressed(Button.B, function () {
    BubbaBlocks.joinGame()
})
BubbaBlocks.addOnShotHandler(function (shooter) {
    basic.showString("Shot by: " + (shooter.toString()))
})
