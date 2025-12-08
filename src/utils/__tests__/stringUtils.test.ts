import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    test('should capitalize the first letter of each word', () => {
      expect(stringUtils.capitalizeFirstLetter('caio nemésio')).toBe(
        'Caio Nemésio',
      );
      expect(stringUtils.capitalizeFirstLetter('CAIO NEMÉSIO')).toBe(
        'Caio Nemésio',
      );
      expect(stringUtils.capitalizeFirstLetter('caio')).toBe('Caio');
    });
    it('should remove leading and trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' caio ')).toBe('Caio');
    });
    it('should remove inner spaces', () => {
      expect(stringUtils.capitalizeFirstLetter('caio  nemésio')).toBe(
        'Caio Nemésio',
      );
    });
  });
});
