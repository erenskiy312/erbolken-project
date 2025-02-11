import { classNames } from './classNames';

describe('classNames', () => {
  test('check first class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('check additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('check mods class', () => {
    const expected = 'someClass class1 class2 hovered,scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('check undefined class', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
