# Challenge 4 - Array Cardio Day 1

This challenge is simply a JavaScript challenge and does not really involve a browser. Although we are running the JavaScript array challenges through the browser, we could easily run it using node or another JavaScript interpreter.

We are given 4 arrays to perform some basic [array function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on.

The first one is an object array of inventors, each object contains the inventor's `first` name, `last` name, `year` (presumably year of birth), and `passed` (presumably the year of their death).

```javascript
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
```

The second array is a string array containing flavours.

```javascript
const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 
  'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 
  'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 
  'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 
  'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];
```

The third array is a string array of people. Each string contains the person's last name a comma and the person's first name.

```javascript
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
  'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 
  'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 
  'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
  'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 
  'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
```

The fourth array is a string array of data which includes duplicate entries:

```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
  'walk', 'car', 'van', 'car', 'truck' ];
```

This challenge has 8 parts:

1. Filter the list of inventors for those who were born in the 1500's
2. Give us an array of the inventors' first and last names
3. Sort the inventors by birthdate, oldest to youngest
4. How many years did all the inventors live?
5. Sort the inventors by years lived
6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
7. Sort the people alphabetically by last name
8. Sum up the instances of each of entries in the data array

The output for each section will be delivered to the browser console.

### Part 1: Filter the list of inventors for those who were born in the 1500's

Using the [array filter function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), output a list of inventors who were born in the 1500's. The filter function will simple make sure the inventor's year is greater or equal to 1500 and less than 1600.

```javascript
inventors.filter( inventor => inventor.year >= 1500 && inventor.year < 1600 )
```

The output gives us the following entries:

```javascript
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
```

### Part 2: Give us an array of the inventors' first and last names

Using the [array map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), create a new array containing the inventors' first and last names. The map function takes a function which will affect a change on each array item and return a new array containing all the changes. In this case, the function will output the inventor's first name and last name separated by a space.

```javascript
inventors.map( inventor => `${inventor.first} ${inventor.last}` )
```

Which outputs an array of strings:

```javascript
["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler",
	"Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace",
	"Sarah E. Goode", "Lise Meitner", "Hanna Hammarström"]
```

### Part 3: Sort the inventors by birthdate, oldest to youngest

The challenge wants us to use the [array sort function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to sort the array of objects depending on the inventor's year of birth. The sort function is a mutative function, which is not good for our unit tests. If you use the mutative sort, the previous unit tests will also be affected. It's much better to use pure functions and therefore we need to do the sort on a copy of the array. We can use the ES2015 spread operator to copy the array and apply the sort the function on it.

```javascript
[...invArray].sort((a, b) => a.year - b.year)
```

This will display the array in order of the inventors' birth year as follows:

```javascript
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
```

### Part 4: How many years did all the inventors live?

Using the map function we can add an `age` entry to each inventor object in the inventors list and manually add them up to 861 years.

```javascript
inventors.map(inventor => {
  inventor.age = inventor.passed - inventor.year;
  return inventor;
})
```

But using the [array reduce function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) we can skip the step of adding the age to the inventor objects.

```javascript
inventors.reduce( (total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
```

### Part 5: Sort the inventors by years lived

This is a slightly harder version of part 3. For this challenge we need to sort the array using the inventor's age. Therefore the sort's comparison function will need to calculate the age of both inventors before comparing them.

```javascript
[...inventors].sort( (a, b) => (a.passed - a.year) - (b.passed - b.year) );
```

The result is as follows:

```javascript
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }
```

### Part 6: Create a list of Boulevards in Paris that contain 'de' anywhere in the name

This part involves selected dom nodes from a [wikipedia page](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) and therefore has to be run within the inspector console while viewing that page. The solution is: 

```javascript
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
	.map(link => link.textContent)
	.filter(streetName => streetName.includes('de'));
de
```

If you copy/paste the code in the inspector's console while viewing the wikipedia page you'll get an array of all the boulevards in Paris that contain the string 'de':

```javascript
["Boulevard de l'Amiral-Bruix", "Boulevard de Strasbourg", "Boulevard des Capucines",
"Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", 
"Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta",
"Boulevard de Rochechouart", "Boulevard de Sébastopol", "Boulevard de la Zone"]
```

## Improvements

### Unit tests
Adding unit tests to prove that these javascript function are outputting what is expected. I'm using QUnit as it is simple and the output can be displayed within the browser.

### Pure functions
Make sure all functions used are pure functions. Pure functions help reduce the amount of bugs in a program because none of the data is ever changed and therefore we don't have any unexpected results. The array mutative functions are [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse), and [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
