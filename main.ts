input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    basic.pause(.000001)
})
let c = 0
let d = 0
let b = 0
let a = 0
let steps = 0
steps = 0
basic.forever(function () {
    a = 0.01
    b = 20
    d = 1
    if (steps > 1) {
        d = steps
    }
    if (d % b == 0) {
        for (let index = 0; index < 1; index++) {
            music.playMelody("G B A G C5 B A B ", 120)
        }
        c = steps / b
        basic.showString("You walked")
        basic.showString("" + (a * c))
        basic.showString("miles")
    }
})
