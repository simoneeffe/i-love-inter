input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . # . . .
        `)
})
control.onEvent(EventBusSource.MICROBIT_ID_GESTURE, EventBusValue.MES_DEVICE_GESTURE_DEVICE_SHAKEN, function () {
	
})
basic.forever(function () {
	
})
