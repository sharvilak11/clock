let prevHours = null;
let prevMinutes = null;

/*
 * init - Initialise the clock
 */
const initClock = () => {
    const currentTime = new Date();
    const h = currentTime.getHours(), m=currentTime.getMinutes(), s=currentTime.getSeconds();
    initialiseElements(h, m, s);
};

/*
 * runClock - Runs the clock with an interval of 1 seconds indefinitely
 */
const runClock = () => {
    setInterval(() => {
        initClock();
    }, 1000);
};

/*
 * initialiseElements - Initialise the hand elements
 * @param (Number) hours - Current hours
 * @param (Number) minutes - Current minutes
 * @param (Number) seconds - Current seconds
 */
const initialiseElements = (hours, minutes, seconds) => {
    if (hours !== prevHours) {  // Check if hours has changed
        const hoursElement = getHandElement('clock__hand--hour');
        const hoursAngle = calculateAngle(hours, 30);
        setElementAngle(hoursElement, hoursAngle);
        prevHours = hours;
    }

    if (minutes !== prevMinutes) {  // Check if minutes has changed
        const minutesElement = getHandElement('clock__hand--minute');
        const minutesAngle = calculateAngle(minutes, 6);
        setElementAngle(minutesElement, minutesAngle);
        prevMinutes = minutes;
    }

    const secondsElement = getHandElement('clock__hand--second');
    const secondsAngle = calculateAngle(seconds, 6);
    setElementAngle(secondsElement, secondsAngle);
};

/*
 * getHandElement - Find the element in the DOM by css-class
 * @param (String) className - Name of the css-class
 */
const getHandElement = (className) => {
    const el = document.getElementsByClassName(className);
    return el && el[0] ? el[0] : null;
};

/*
 * setElementAngle - Set the element's angle
 * @param (Object) element - HTMLElement of clock's hand
 * @param (Number) angle - Angle to be set for hand
 */
const setElementAngle = (element, angle) => {
    element.style.transform = `rotate(${angle}deg)`;
};

/*
 * calculateAngle - Calculate the angle respective to the origin for each hand based on the value
 * @param (Number) value - Value of the time's unit (enum:  hours, minutes, seconds)
 * @param (Number) span - Unit angle for a span (360/12, 360/6)
 */
const calculateAngle = (value, span) => {
    return value*span;
};
