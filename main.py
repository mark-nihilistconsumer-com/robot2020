def on_add_shot_handler():
    basic.show_icon(IconNames.SAD)
BubbaBlocks.add_on_shot_handler(on_add_shot_handler)

def on_add_resurrection_handler():
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
BubbaBlocks.add_resurrection_handler(on_add_resurrection_handler)

def on_forever():
    BubbaBlocks.detect_if_shot()
    basic.pause(1000)
basic.forever(on_forever)
