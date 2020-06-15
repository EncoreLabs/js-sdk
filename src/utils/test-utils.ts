export const getMockFunctionArguments = (mockFunction: any) => mockFunction.mock.calls[0];
export const getMockFunctionReturnValue = (mockFunction: any) => mockFunction.mock.results[0].value;
