import Isogram from './isogram';

describe('Isogram Test Suite', () => {
  test('empty string', () => {
    const word = new Isogram('');

    expect(word.isIsogram()).toEqual(true);
  });

  test('isogram with only lower case characters', () => {
    const word = new Isogram('isogram');

    expect(word.isIsogram()).toEqual(true);
  });

  test('word with one duplicated character', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toEqual(false);
  });

  test('word with one duplicated character from the end of the alphabet', () => {
    const word = new Isogram('zzyzx');

    expect(word.isIsogram()).toEqual(false);
  });

  test('longest reported english isogram', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toEqual(true);
  });

  test('word with duplicated character in mixed case', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toEqual(false);
  });

  test('hypothetical isogrammic word with hyphen', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toEqual(true);
  });

  test('isogram with duplicated hyphen', () => {
    const word = new Isogram('six-year-old');

    expect(word.isIsogram()).toEqual(true);
  });

  test('made-up name that is an isogram', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toEqual(true);
  });

  test('duplicated character in the middle', () => {
    const word = new Isogram('accentor');

    expect(word.isIsogram()).toEqual(false);
  });
});
