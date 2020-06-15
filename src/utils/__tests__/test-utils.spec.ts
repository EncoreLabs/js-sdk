import { getMockFunctionArguments, getMockFunctionReturnValue } from '../test-utils';

describe('Test utils', () => {
  const returnValue = 'test';
  const mockFunction = jest.fn().mockImplementation(() => returnValue);

  beforeEach(() => {
    mockFunction.mockClear();
  });

  it('should get arguments of mock function', () => {
    const argument = 'test';
    mockFunction(argument);

    expect(getMockFunctionArguments(mockFunction)).toEqual([ argument ]);
  });

  it('should get return value of mock function', () => {
    mockFunction();

    expect(getMockFunctionReturnValue(mockFunction)).toBe(returnValue);
  });
});
