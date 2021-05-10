import isBlank from './blank';

describe('isBlank', () => {
  it('return true when the string informed is undefined', () => {
    expect(isBlank(undefined)).toBeTruthy();
  });

  it('return true when the string informed is empty', () => {
    expect(isBlank('')).toBeTruthy();
  });

  it('return true when the string informed has only empty spaces', () => {
    expect(isBlank('   ')).toBeTruthy();
  });

  it('return false when the string informed is not empty', () => {
    expect(isBlank('  a ')).toBeFalsy();
  });
});
