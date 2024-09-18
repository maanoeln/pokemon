import { formattedPokemnonId } from '@/helpers/returnFormattedPokemId';

describe('Should convert numbers to maximum chars accepted', () => {
  it('When the number there is only on digit, and the maximum should be 4, should complete it with 0`s on the right', () => {
    const result = formattedPokemnonId('1');

    expect(result).toEqual('0001');
  });

  it('when all the four numbers are given, should return itself', () => {
    const result = formattedPokemnonId('1340');

    expect(result).toEqual('1340');
  });
});
