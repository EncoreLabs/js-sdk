export const checkRequiredProperty = (value: any, fieldName: string) => {
  if (value === null || typeof value === 'undefined') {
    throw new Error(`${fieldName} is required`);
  }
};

export const checkDateProperty = (value: string, fieldName: string) => {
  if (!(/^((1|2)\d\d\d)(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/.test(value))) {
    throw new Error(`${fieldName} should be in Ymd format`);
  }
};
