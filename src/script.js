import {initialiseElements} from './helpers';
/*
 * init - Initialise the clock
 */
let prevHours, prevMinutes;
export function initClock() {
    const currentTime = new Date();
    const h = currentTime.getHours(), m=currentTime.getMinutes(), s=currentTime.getSeconds();
    ({prevHours, prevMinutes} = initialiseElements(h, m, s, prevHours, prevMinutes));   // Destructure previous values
}

/*
 * runClock - Runs the clock with an interval of 1 seconds indefinitely
 */
export function runClock() {
    setInterval(() => {
        initClock(prevHours, prevMinutes);
    }, 1000);
}
