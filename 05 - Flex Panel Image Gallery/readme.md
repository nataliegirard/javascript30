# Challenge 5 - Flex Panel Image Gallery

This challenge is to create flexible panels that grow and display more information when clicked. This challenged uses very little JavaScript and is mostly a CSS challenge. We are given a starter file with the HTML and some CSS already written.

There are 3 flexbox container layers for the panels. We have the main container which holds the 5 containers horizontally, each with equal size, taking the entire container space. Then each panel is a flex container holding the 3 text paragraphs vertically, again each with equal size and taking the entire available space. Then each text paragraph is using flexbox to center the text vertically and horizontally.

```css
.panels {
	display: flex;
}
.panel {
	flex: 1;
	display: flex;
	flex-direction: column;
}
.panel > * {
	flex: 1 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
```

Move the top and bottom text paragraphs off the page so that when the panel is active they can be transitioned into position.

```css
.panel > *:first-child {
  transform: translateY(-100%);
}
.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:first-child,
.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

We want the panel to grow in size when it is clicked. Add event listeners to each panel that will add the open class when clicked.

```javascript
function toggleOpen() {
console.log(this.classList);
this.classList.toggle('open');
}

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
```

We also need to change the flex item's size when the panel has the `open` class.

```css
.panel.open {
	flex: 5;
}
```

Now we need to add the `open-active` class to the panel when the transition finished so that the top and bottom text paragraphs can transition into place.

```javascript
function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

## Improvements

I wanted to make this an accordian panel. Instead of simply opening another panel, I want to class the open panel before opening a new panel. I also want to keep the click to close of the open panel. To do this, I need to remove the `open` class from any panel that is not the current panel before I toggle the open state.

```javascript
function toggleOpen() {
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
  if (panel !== this) panel.classList.remove('open');
});
this.classList.toggle('open');
}
```
