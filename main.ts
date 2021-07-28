blockSettings.writeNumber("test1", 1)
game.splash("number test done")
blockSettings.writeString("test2", "test 2")
game.splash("string test done")
blockSettings.writeNumberArray("test3", [3, 4])
game.splash("array test done")
if (blockSettings.readNumber("test1") == 1) {
    game.splash("number read test done")
} else {
    game.splash("number read test failed: value not equal-", convertToText(blockSettings.readNumber("test1")))
}
if (blockSettings.readString("test2") == "test 2") {
    game.splash("string read test done")
} else {
    game.splash("string read test failed: value not equal-", blockSettings.readString("test2"))
}
if (blockSettings.readNumberArray("test3") == [3, 4]) {
    game.splash("array read test done")
} else {
    game.splash("array read test failed: value not equal")
}
game.showLongText(convertToText(blockSettings.list()), DialogLayout.Bottom)
game.splash("setting name list test done")
