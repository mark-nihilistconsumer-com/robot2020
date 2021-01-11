BubbaBlocks.addOnShotHandler(function (shooter: Number) {
    //basic.showIcon(IconNames.Sad)
    basic.showString(shooter.toString())
    basic.pause(2000)
})
BubbaBlocks.addOnResurrectionHandler(function () {
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})

input.onButtonPressed(Button.A, function () {
    BubbaBlocks.fireGun()
})

input.onButtonPressed(Button.B, function () {
    BubbaBlocks.introduceSelf()
})

