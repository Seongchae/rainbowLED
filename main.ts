/**
 * 가변저항(다이얼) 모듈은 0-1023까지 숫자를 가지고 있는데, 그 숫자를 반으로 나눈 512보다 작으면 led가 왼쪽으로 회전하고, 512보다 크면 오른쪽으로 회전하도록 코딩함
 */
let item = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
item.showRainbow(1, 360)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 512) {
        item.show()
        item.rotate(-1)
        basic.pause(100)
    } else {
        item.show()
        item.rotate(1)
        basic.pause(100)
    }
})
