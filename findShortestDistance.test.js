const findShortestDistance = require('./findShortestDistance');

test('general 1', () => {
    const input = 'red green red blue yellow green yellow blue orange red orange';
    const params = ['green', 'orange']

    const actual = findShortestDistance(input, params);
    const expected = 3;

    expect(actual).toBe(expected);
});

test('general 2', () => {
    const input = 'red red blue red';
    const params = ['red', 'blue']

    const actual = findShortestDistance(input, params);
    const expected = 1;

    expect(actual).toBe(expected);
});

test('general 3', () => {
    const input = 'red yellow blue';
    const params = ['red', 'blue']

    const actual = findShortestDistance(input, params);
    const expected = 2;

    expect(actual).toBe(expected);
});

test('general 4', () => {
    const input = 'yellow yellow blue yellow yellow red';
    const params = ['red', 'blue']

    const actual = findShortestDistance(input, params);
    const expected = 3;

    expect(actual).toBe(expected);
});

test('same param colors', () => {
    const input = 'red green red blue yellow green yellow blue orange red orange';
    const params = ['yellow', 'yellow']

    const actual = findShortestDistance(input, params);
    const expected = 2;

    expect(actual).toBe(expected);
});


test('no match', () => {
    const input = 'red green red blue yellow green yellow blue orange red orange';
    const params = ['green', 'black']

    expect(() => findShortestDistance(input, params)).toThrowError('No match found');
});

test('empty input', () => {
    const input = '';
    const params = ['yellow', 'yellow']

    expect(() => findShortestDistance(input, params)).toThrowError('No match found');
});