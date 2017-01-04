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
