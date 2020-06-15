export const base64Encode = (data: string, isNode: boolean = false) => {
  if (isNode) {
    return Buffer.from(data).toString('base64');
  }

  return btoa(data);
}
