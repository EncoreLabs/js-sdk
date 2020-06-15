import { checkRequiredProperty, checkDateProperty } from '../validator';

describe('Validator', () => {
  const fieldName = 'Test field';

  describe('checkRequiredProperty function', () => {
    const errorMessage = 'Test field is required';

    it('should throw an error for required field with value that is not set', () => {
      expect(() => checkRequiredProperty(null, fieldName)).toThrowError(errorMessage);
      expect(() => checkRequiredProperty(undefined, fieldName)).toThrowError(errorMessage);
    });

    it('should not throw an error for required field with value set', () => {
      expect(() => checkRequiredProperty(false, fieldName)).not.toThrowError(errorMessage);
    });
  });

  describe('checkDateProperty function', () => {
    const errorMessage = 'Test field should be in Ymd format';

    it('should throw an error for date in incorrect format', () => {
      expect(() => checkDateProperty('2020-01-01', fieldName)).toThrowError(errorMessage);
      expect(() => checkDateProperty('20203012', fieldName)).toThrowError(errorMessage);
      expect(() => checkDateProperty('1591626099081', fieldName)).toThrowError(errorMessage);
    });

    it('should not throw an error for date in Ymd format', () => {
      expect(() => checkDateProperty('20200101', fieldName)).not.toThrowError(errorMessage);
    });
  });
});
