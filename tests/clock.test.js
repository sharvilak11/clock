const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

jest.dontMock('fs');

import {findHandElement, setHandElement, calculateAngle} from '../src/helpers';

describe('Angles based on time', () => {
    let testData = {    // common test data
        hour: {
            value: 6,
            value2: 18,
            span: 30,
            angle: 180
        },
        minute: {
            value: 20,
            span: 6,
            angle: 120
        },
        second: {
            value: 40,
            span: 6,
            angle: 240
        }
    };
    test(`angle must be ${testData.hour.angle} when hour is ${testData.hour.value}`, () => {
        expect(calculateAngle(testData.hour.value, testData.hour.span, true)).toBe(testData.hour.angle);
    });
    test(`angle must be ${testData.hour.angle} when hour is ${testData.hour.value2}`, () => {
        expect(calculateAngle(testData.hour.value2, testData.hour.span, true)).toBe(testData.hour.angle);
    });
    test(`angle must be ${testData.minute.angle} when minute is ${testData.minute.value}`, () => {
        expect(calculateAngle(testData.minute.value, testData.minute.span)).toBe(testData.minute.angle);
    });
    test(`angle must be ${testData.second.angle} when second is ${testData.second.value}`, () => {
        expect(calculateAngle(testData.second.value, testData.second.span)).toBe(testData.second.angle);
    });
});

describe('Existence of hand elements in the clock', () => {
    document.documentElement.innerHTML = html.toString();

    test('there are exactly 3 hands', () => {
        const elements = document.getElementsByClassName('clock__hand');
        expect(elements).toHaveLength(3);
    });
    test('there must exist an hour hand', () => {
        const element = findHandElement('clock__hand--hour');
        expect(element).not.toBe(null);
    });
    test('there must exist a minute hand', () => {
        const element = findHandElement('clock__hand--minute');
        expect(element).not.toBe(null);
    });
    test('there must exist a second hand', () => {
        const element = findHandElement('clock__hand--second');
        expect(element).not.toBe(null);
    });
});

describe('Hand elements positioning in the clock', () => {
    let testData = {    // common test data
        hour: {
            value: 6,
            span: 30,
            angle: 180
        },
        minute: {
            value: 20,
            span: 6,
            angle: 120
        },
        second: {
            value: 40,
            span: 6,
            angle: 240
        }
    };
    afterEach(() => {   // restore the original func after test
        jest.resetModules();
    });
    test(`transform property must be set to ${testData.hour.angle} in hour hand element when hour is ${testData.hour.value}`, () => {
        const element = setHandElement(testData.hour.value, 'hour');
        expect(element.style.transform).toBe(`rotate(${testData.hour.angle}deg)`);
    });
    test(`transform property must be set to ${testData.minute.angle} in minute hand element when minute is ${testData.minute.value}`, () => {
        const element = setHandElement(testData.minute.value, 'minute');
        expect(element.style.transform).toBe(`rotate(${testData.minute.angle}deg)`);
    });
    test(`transform property must be set to ${testData.second.angle} in second hand element when second is ${testData.minute.value}`, () => {
        const element = setHandElement(testData.second.value, 'second');
        expect(element.style.transform).toBe(`rotate(${testData.second.angle}deg)`);
    });
});

describe('Detect change of degree in hand elements when value is changed', () => {
    let testData = {    // common test data
        hour: {
            value: 6,
            newValue: 7,
            span: 30,
            angle: 180
        },
        minute: {
            value: 20,
            newValue: 21,
            span: 6,
            angle: 120
        },
        second: {
            value: 40,
            newValue: 41,
            span: 6,
            angle: 240
        }
    };
    afterEach(() => {   // restore the original func after test
        jest.resetModules();
    });
    test('transform property should when hour gets updated', () => {
        const oldValue = setHandElement(testData.hour.value, 'hour').style.transform;
        const newElement = setHandElement(testData.hour.newValue, 'hour');
        expect(newElement.style.transform).not.toBe(oldValue);
    });
    test('transform property should when minute gets updated', () => {
        const oldValue = setHandElement(testData.minute.value, 'minute').style.transform;
        const newElement = setHandElement(testData.minute.newValue, 'minute');
        expect(newElement.style.transform).not.toBe(oldValue);
    });
    test('transform property should when second gets updated', () => {
        const oldValue = setHandElement(testData.second.value, 'second').style.transform;
        const newElement = setHandElement(testData.second.newValue, 'second');
        expect(newElement.style.transform).not.toBe(oldValue);
    });
});
