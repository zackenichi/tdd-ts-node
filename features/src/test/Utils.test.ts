import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup');
    });

    afterEach(() => {
      // clearing mocks
      console.log('Teardown');
    });

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
      console.log('actual test');
    });
  });

  // parametarised tests
  describe('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-String', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    it('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });

    it('return right lowercase', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    });

    it('return right uppercase', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });

    it('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      );
    });

    it('return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
