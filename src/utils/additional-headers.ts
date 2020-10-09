export const getAdditionalHeaders = (
  serviceName?: string,
  sourceName?: string,
  sourceVersion?: string,
) => {
  const serviceNamePart = serviceName ? `${serviceName} | ` : '';
  const sourceNamePart = sourceName ? `${sourceName} using ` : '';
  const requestInformation = `${serviceNamePart}${sourceNamePart}JS SDK`;
  const header = {
    'x-ttg-client': requestInformation,
  };

  if (sourceVersion) {
    header['x-ttg-client-version'] = sourceVersion
  }

  return header;
}
