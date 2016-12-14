# Challenge 1 - JavaScript Drum Kit

This challenge is to have drum sounds play when a key on the homerow is pressed. The UI shows each of the homerow keys and their corresponding sounds. When the key is pressed, a subtle animation where the key scales by 10% and the border changes to yellow for 0.07 seconds.

Here is the mapping of the keys to sound:

```
A - Clap
S - HiHat
D - Kick
F - OpenHat
G - Boom
H - Ride
J - Snare
K - Tom
L - Tink
```

## Enhancement

To make this more interesting, I decided to add a DDR-like feature to this app. The idea is to have "keys" scroll down the screen indicating when to press each drum note to play a riff. To keep it simple, it will be a short "rimshot" composed of 3 keys: the tom, kick, then ride.

## Things I Learnt

### 1- &lt;kdb>

I've never worked with keybindings and would not have thought about using the `<kdb>` semantic tag if I had written the HTML for this challenge.

### 2- keycode.info

I usually use `console.log` when I want to know the keycode of the key that is pressed. Watching the video has taught me about the [keycode.info](http://keycode.info/) site that Wes Bos made which will make that process easier.
