radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
basic.forever(function () {
    if (ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3) > 970) {
        radio.sendNumber(1)
    } else if (ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3) < 970) {
        radio.sendNumber(0)
    } else {
    	
    }
})
