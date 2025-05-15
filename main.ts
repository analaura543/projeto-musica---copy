basic.showIcon(IconNames.EighNote)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        music.playMelody("C5 B A G A B C5 - ", 120)
        basic.showString ("Feliz!")
    } else if (input.isGesture (Gesture.TiltRight)) {
        music.playMelody(" E D C D E E E - ", 100)
        basic.showString("Triste!")
    } else if (input.isGesture(Gesture.LogoDown)) {
        for (let index = 0; index < 4; index++) {
        music.playTone(800, music.beat(BeatFraction.Eighth))
        music.rets(music.beat(BeatFraction.Sixteenth))
        }
        basic.showString("Techoo! ")
    } else {
        basic.showString(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
