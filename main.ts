input.onButtonPressed(Button.A, function () {
    basic.showNumber(sec)
    while (stop == 0) {
        sec += 1
        basic.pause(200)
        basic.showNumber(sec)
    }
    stop = 0
    sec = 0
    basic.showNumber(sec)
})
input.onButtonPressed(Button.B, function () {
    stop = 1
})
let stop = 0
let sec = 0
basic.showIcon(IconNames.Happy)
sec = 0
stop = 0
