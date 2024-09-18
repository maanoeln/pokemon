import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';

describe('Should assert function return', () => {
  it('when first letter is lower case, it shou convert to uppercase', () => {
    const result = capitalizeFirstLetter('hello');

    expect(result).toEqual('Hello');
  });

  it('when first letter is already in uppercase, it shoud no change anything', () => {
    const result = capitalizeFirstLetter('Simba');

    expect(result).toEqual('Simba');
  });
});
