import { getRandomItems, getRandomItemFotCategorizedTodo } from './shuttle';

describe('getRandomItems', () => {
  const sampleArray = [1, 2, 3, 4, 5];

  test('returns an array of specified count', () => {
    const result = getRandomItems(sampleArray, 3);
    expect(result).toHaveLength(3);
  });

  test('returns an empty array when count is 0', () => {
    const result = getRandomItems(sampleArray, 0);
    expect(result).toEqual([]);
  });

  test('returns the entire array when count is greater than the array length', () => {
    const result = getRandomItems(sampleArray, 10);
    expect(result).toEqual(sampleArray);
  });
});

describe('getRandomItemFotCategorizedTodo', () => {
  const sampleArray = [
    { category: 'A' },
    { category: 'B' },
    { category: 'C' },
    { category: 'D' },
    { category: 'E' },
    { category: 'F' },
  ];

  test('returns an array of specified count with categorized todos', () => {
    const result = getRandomItemFotCategorizedTodo(sampleArray, 3);
    expect(result).toHaveLength(3);
    expect(result.every(item => item.category)).toBe(true);
  });

  test('returns an empty array when there are no categorized todos', () => {
    const result = getRandomItemFotCategorizedTodo([{ category: '' }, { category: '' }], 3);
    expect(result).toEqual([]);
  });

  test('returns the entire array when count is greater than the categorized todos length', () => {
    const result = getRandomItemFotCategorizedTodo(sampleArray, 10);
    expect(result).toEqual(sampleArray);
  });
});
