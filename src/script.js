import {initialiseElements} from './helpers';
/*
 * init - Initialise the clock
 */
export function initClock() {
    let prevHours = null;
    let prevMinutes = null;
    const currentTime = new Date();
    const h = currentTime.getHours(), m=currentTime.getMinutes(), s=currentTime.getSeconds();
    ({prevHours, prevMinutes} = initialiseElements(h, m, s, prevHours, prevMinutes));
}

/*
 * runClock - Runs the clock with an interval of 1 seconds indefinitely
 */
export function runClock() {
    setInterval(() => {
        initClock();
    }, 1000);
}
