# Challenge 2 - CSS + JS Clock

This challenge is to create a clock with hour, minute and second hands styled using CSS and updated via the time retrieved using JavaScript. The clock hands are to be rotated using CSS transforms and transitioned smoothly at each clock tick. The JavaScript calls a function every second (clock tick) using the setInterval function which will set the styles for each of the hands with the proper rotation.

## Improvements

### 1. Hand Styles
Fix the hand styles so that they can be distinguished. The hour hand is made shorter. The second hand is made thinner, a lighter gray color, and positioned behind the other hands.

### 2. Center Nob and Hour Dots
Added a center nob to hide away the angles of the clock hands and make it look like they are being held together by something. Added dots in place of each hour to help tell the time.

### 3. Use CSS Variables
Instead of setting the transform for the hands using JavaScript, set a CSS variable on the root document that can be used in the CSS using the CSS variables (custom properties).
