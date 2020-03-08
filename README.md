# Clock

A simple clock built-in vanilla js, CSS and HTML without any production level dependencies.

## Development Setup

- `@babel/preset` is used to enable ES6 features to run within the JS code. Few more dev dependencies are present to support testing environment.  To install the same, run below command

```bash
npm install
```
- open **index.html** in the browser.

### Code Structure

Code has been segregated in mainly two directories: 

i. src

ii. test

#### Development

All the related source code has been kept under **src** folder.

- index.html
- style.css
- script.js

**Assumptions**
- Time is always checked as per the system date time.
- Extra deviation for Hour's angle is considered in the code (when time is 5:30, hour's angle will be 165 degree instead of 150 degree).
- Extra deviation for Minute's angle is ignored since it will be negligible for each second (0.1 degree for each second).
- Exercise is not to make it look pretty but to make it work with good code.
- The project is a pure vanilla js based project and no extra production level dependency has been added.
- Javascript files within the project has been treated as modules so the functions can easily be imported into any other files (e.g. tests, main script).
- JavaScript code has been written in such a way that we would be able to test them function by function.

**runClock()** : function keeps running the clock within the interval of 1s and keeps moving the hands of the clock depending upon the current time.

**initClock()** : function initialises the clock for the first time and subsequently every time runClock is called within interval of 1s.

Helper functions can be found in **src/helpers/index.js** file

**initialiseElements()** : function responsible for initialising hour, minute and seconds elements and keeps track of previous hour and minute values.

**setHandElement()** : function responsible for setting the transform of hand according to the type of the hand.

**findHandElement()** : function responsible for finding the element from the DOM.

**calculateAngle()** : function responsible for calculating the angle from value and span (per unit degree) 

#### Test

All the tests are being written through jest and the test suite can be found under **tests** folder.

All the describe functions has a common `testData` which can be changed globally within each describe( ) in order to see different outcomes.

To run the tests use below command :

```bash
npm run jest
```
