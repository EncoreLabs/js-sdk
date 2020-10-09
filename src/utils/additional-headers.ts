export const getAdditionalHeaders = (
  serviceTitle: string,
  sourceName?: string,
  sourceVersion?: string,
) => {
  const requestInformation = `${serviceTitle} | ${sourceName ? `${sourceName} using ` : ''}JS SDK`;
  const header = {
    'x-ttg-client': requestInformation,
  };

  if (sourceVersion) {
    header['x-ttg-client-version'] = sourceVersion
  }

  return header;
}
