/*
 * initialiseElements - Initialise the hand elements
 * @param (Number) hours - Current hours
 * @param (Number) minutes - Current minutes
 * @param (Number) seconds - Current seconds
 * @param (Number) prevHours - Previous value of hours
 * @param (Number) prevMinutes - Previous value of minutes
 */
export function initialiseElements (hours, minutes, seconds, prevHours, prevMinutes) {
    if (hours !== prevHours) {  // Check if hours has changed
        setHandElement(hours, 'hour');
        prevHours = hours;
    }
    if (minutes !== prevMinutes) {  // Check if minutes has changed
        setHandElement(minutes, 'minute');
        prevMinutes = minutes;
    }
    setHandElement(seconds, 'second');
    return {
        prevHours,
        prevMinutes
    }
}

/*
 * setHandElement - Identify the type of the hand and set the angle accordingly
 * @param (Number) value - Current hours
 * @param (String) type - type of the hand (enum: 'hour', 'minute', 'second')
 */
export function setHandElement (value, type) {
    let isHour, span, className;
    switch(type) {
        case 'hour': {
            isHour = true;
            span = 30;
            className = 'clock__hand--hour';
            break;
        }
        case 'minute': {
            span = 6;
            className = 'clock__hand--minute';
            break;
        }
        case 'second': {
            span = 6;
            className = 'clock__hand--second';
            break;
        }
    }
    const element = findHandElement(className);
    element.style.transform = `rotate(${calculateAngle(value, span, isHour)}deg)`;
    return element;
}

/*
 * getHandElement - Find the element in the DOM by css-class
 * @param (String) className - Name of the css-class
 */
export function findHandElement (className) {
    const el = document.getElementsByClassName(className);
    return el && el[0] ? el[0] : null;
}

/*
 * calculateAngle - Calculate the angle respective to the origin for each hand based on the value
 * @param (Number) value - Value of the time's unit (enum:  hours, minutes, seconds)
 * @param (Number) span - Unit angle for a span (360/12, 360/6)
 * @param (Boolean) isHour - true when angle is being checked for hour value
 */
export function calculateAngle (value, span, isHour) {
    if (isHour && value > 12)
        value = value - 12;
    return value*span;
}
