BubbaBlocks.addOnShotHandler(function () {
    basic.showIcon(IconNames.Sad)
})
BubbaBlocks.addResurrectionHandler(function () {
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    BubbaBlocks.detectIfShot()
    basic.pause(1000)
})
