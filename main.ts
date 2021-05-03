control.onEvent(EventBusSource.MICROBIT_ID_GESTURE, EventBusValue.MES_DEVICE_GESTURE_DEVICE_SHAKEN, function () {
    basic.showLeds(`
        . # # . .
        . . . . #
        . # . . .
        . . . # .
        # . . . .
        `)
})
