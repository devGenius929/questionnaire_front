import cpf from './cpf';

describe('cpf', () => {
  it('validates 095.973.307-84', () => {
    expect(cpf('095.973.307-84')).toBeTruthy();
  });

  it('validates 09597330784', () => {
    expect(cpf('09597330784')).toBeTruthy();
  });

  it('does not validate 01597330784', () => {
    expect(cpf('01597330784')).toBeFalsy();
  });

  it('does not validate 00000000000', () => {
    expect(cpf('00000000000')).toBeFalsy();
  });

  it('does not validate undefined', () => {
    expect(cpf(undefined)).toBeFalsy();
  });

  it('does not validate empty string', () => {
    expect(cpf('')).toBeFalsy();
  });

  it('does not validate blank spaces', () => {
    expect(cpf('           ')).toBeFalsy();
  });
});
