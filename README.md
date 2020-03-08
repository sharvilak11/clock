# Clock

A simple clock built-in vanilla js, CSS and HTML without any dependencies.

## Development Setup

- `@babel/preset` is used to enable ES6 features to run within the JS code. Few more dev dependencies are present to support testing environment.  To install the same, run below command

```bash
npm install
```

### Code Structure

Code has been segregated in mainly two directories: 

i. src

ii. test

#### Development

All the related source code has been kept under **src** folder.

- index.html
- style.css
- script.js

JS code has been written in such a way that we would be able to test them function by function.

**runClock** : function keeps running the clock within the interval of 1s and keeps moving the hands of the clock depending upon the current time.

**initClock** : function initialises the clock for the first time and subsequently every time runClock is called within interval of 1s.

Helper functions can be found in **src/helpers/index.js** file

**initialiseElements** : function repsonsible for initialising hour, minute and seconds elements and keeps track of previous hour and minute values.

**setHandElement** : function responsible for setting the transform of hand according to the type of the hand.

**findHandElement** : function responsible for finding the element from the DOM.

**calculateAngle** : function responsible for calculating the angle from value and span (per unit degree) 

#### Test

All the tests are being written through jest and the test suite can be found under **tests** folder.

All the describe functions has a common `testData` which can be changed globally within each describe( ) in order to see different outcomes.

To run the tests use below command :

```bash
npm run jest
```
