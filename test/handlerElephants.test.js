const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('HandlerElephants é definida', () => {
    expect(handlerElephants).toBeDefined();
  });
  it('HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('HandlerElephants retorna undefined se não receber parâmetro ou parâmetro indefinido', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('HandlerElephants retorna: Parâmetro inválido, é necessário uma string, caso parâmetro seja diferente de string', () => {
    expect(handlerElephants(25)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('HandlerElephants retorna o número total de elefantes residentes caso recebe a string count como parâmetro', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('HandlerElephants retorna um array com nome dos elefantes residentes caso recebe a string names como parâmetro', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('HandlerElephants retorna um número próximo a 10.5 caso recebe a string averageAge como parâmetro', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('HandlerElephants retorna (NW) caso recebe a string location como parâmetro', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('HandlerElephants retorna o número maior ou igual a 5 caso recebe a string popularity como parâmetro', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('HandlerElephants retorna um array com dias da semana que não contém monday caso recebe a string availability como parâmetro', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('HandlerElephants retorna null caso recebe uma string que não seja referente aos retornos padrões ou propriedades do objeto elephants como parâmetro', () => {
    expect(handlerElephants('age')).toBe(null);
  });
});
