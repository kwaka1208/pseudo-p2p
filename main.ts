function show_mode () {
    if (mode == 0) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.Square)
    }
}
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        radio.sendValue(control.deviceName(), data)
    }
})
input.onButtonPressed(Button.B, function () {
    data += 1
    if (data > 9) {
        data = 1
    }
    basic.showNumber(data)
    basic.pause(200)
    show_mode()
})
radio.onReceivedValue(function (name, value) {
    if (mode == 0) {
        // 送信モードなら、応答受信の処理を行う。
        if (control.deviceName() == name) {
            basic.showNumber(value)
        }
    } else {
        radio.sendValue(name, value + 1)
    }
})
let data = 0
let mode = 0
mode = 0
data = 1
radio.setGroup(1)
