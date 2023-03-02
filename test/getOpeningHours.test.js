const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('A função getOpeningHours é definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('A função getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('A função getOpeningHours sem receber argumentos deve retonar um objeto com os dias da semana e hórarios para open e close', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('A função getOpeningHours recebendo como argumentos: Monday e 09:00-AM ', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('A função getOpeningHours recebendo como argumentos: Tuesday e 09:00-AM ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('A função getOpeningHours recebendo como argumentos: Thursday e 09:00-AM ', () => {
    expect(getOpeningHours('Thursday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('A função getOpeningHours recebendo como argumentos: Thu e 09:00-AM ', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('A função getOpeningHours recebendo como argumentos: Friday e 09:00-ZM ', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('A função getOpeningHours recebendo como argumentos: Saturday e C9:00-A` ', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });
  it('A função getOpeningHours recebendo como argumentos: Sunday e 09:c0-AM ', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(new Error('The minutes should represent a number'));
  });
  it('A função getOpeningHours recebendo como argumentos: Tuesday e 16:20-AM ', () => {
    expect(() => getOpeningHours('Tuesday', '16:20-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('A função getOpeningHours recebendo como argumentos: `Tuesday` e `9:70-AM` ', () => {
    expect(() => getOpeningHours('Tuesday', '09:70-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
