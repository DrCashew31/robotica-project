radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        COUNT = 1
        basic.showNumber(1)
    } else if (receivedNumber == 0) {
        COUNT = 0
        basic.showNumber(0)
    }
})
let COUNT = 0
let UPDOWN = 0
COUNT = 0
radio.setGroup(10)
basic.forever(function () {
    if (COUNT == 1 && UPDOWN == 0) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 840)
        basic.pause(4800)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        UPDOWN = 1
    } else if (COUNT == 0 && UPDOWN == 1) {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 750)
        basic.pause(4300)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
        UPDOWN = 0
    }
})
basic.forever(function () {
    if (ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3) > 980) {
        radio.sendNumber(1)
        basic.showNumber(1)
    } else if (ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3) < 800) {
        radio.sendNumber(0)
        basic.showNumber(0)
    }
})
