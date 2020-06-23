export const base64Encode = (data: string) => {
  if (Buffer) {
    return Buffer.from(data).toString('base64');
  }

  return btoa(data);
}
