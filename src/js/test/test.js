import orderByProps, { swordman } from '../app.js';

test('test sort function', () => {
  expect(orderByProps(swordman, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('test own', () => {
  const dummy = Object.create(swordman);
  expect(orderByProps(dummy, ['name', 'level'])).toEqual([]);
});
