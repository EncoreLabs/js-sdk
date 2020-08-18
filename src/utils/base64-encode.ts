export const base64Encode = (data: string) => {
  /* istanbul ignore next */
  if (Buffer) {
    return Buffer.from(data).toString('base64');
  }

  /* istanbul ignore next */
  return btoa(data);
}
