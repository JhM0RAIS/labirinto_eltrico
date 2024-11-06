let counter = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
})
function Sinalizar () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        counter += 1
        Sinalizar()
        music.ringTone(932)
        basic.pause(8)
        music.stopAllSounds()
    }
})
