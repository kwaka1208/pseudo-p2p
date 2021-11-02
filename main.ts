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
input.onButtonPressed(Button.AB, function () {
    mode = (mode + 1) % 2
    show_mode()
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
            basic.pause(1000)
            show_mode()
        }
    } else {
        _return = value + 1
        if (_return > 9) {
            _return = 0
        }
        radio.sendValue(name, _return)
    }
    basic.showNumber(_return)
    basic.pause(1000)
    show_mode()
})
let _return = 0
let data = 0
let mode = 0
mode = 0
data = 1
radio.setGroup(1)
show_mode()
