# Clock

A simple clock built-in vanilla js, CSS and HTML without any dependencies.

## Developnent Setup

- Only developement dependency being used in `@babel/preset` to enable ES6 features to run within the JS code. To install the same, run below command

```bash
npm install
```

### Code Structure

All the related source code has been kept under **src** folder.

- index.html
- style.css
- script.js

JS code has been written in such a way that we would be able to test them function by function.

**runClock** : function keeps running the clock within the interval of 1s and keeps moving the hands of the clock depending upon the current time.

**initClock** : function initialises the clock for the first time and subsequently every time runClock is called within interval of 1s.
