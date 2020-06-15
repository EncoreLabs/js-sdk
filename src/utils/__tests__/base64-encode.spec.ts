import { base64Encode } from '../base64-encode';

describe('base64Encode function', () => {
  const defaultString = 'test';
  const encodedString = 'dGVzdA==';

  it('should return encoded string', () => {
    expect(base64Encode(defaultString)).toBe(encodedString)
    expect(base64Encode(defaultString, true)).toBe(encodedString)
  })
})
