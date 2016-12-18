# Challenge 3 - Playing with CSS Variables and JS

This challenge introduces CSS variables that can be updated via JavaScript. The exercise involves 3 parameters that can be fiddled with using HTML controls. The first one changes the spacing around an image. The second one changes the blur level of the image. The third one changes the background color for the image backdrop.

## Improvements

### 1. Variables with No Units
From my experience, using units in a CSS variable can cause issues. Rather than using the data attribute and appending it to the value in the JavaScript, I am using the CSS calc function to add the units using a multiplication with the unary 1px value.

### 2. Postcard
Instead of just modifying a picture, this challenge is now about placing an image on a postcard where you can change the border color, rotate the image, round the image corners, and shrink the image on the postcard.
