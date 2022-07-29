const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se para o argumento "count" retorna o número inteiro "4"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Verifica se para o argumento "names" retorna um array de nomes que possui o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
  });

  it('Verifica se para o argumento "averageAge" retorna um número próximo a "10.5"', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
