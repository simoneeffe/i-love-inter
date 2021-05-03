let random_script = 0
input.onGesture(Gesture.Shake, function () {
    random_script = randint(0, 3)
    basic.showString("i love inter ")
    basic.showString("i'm inter")
    basic.showString("forza inter")
})
basic.forever(function () {
	
})
