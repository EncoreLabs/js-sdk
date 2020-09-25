export const getVersion = (serviceVersion: string, apiUrl? : string) => {
  if (!apiUrl) {
    return serviceVersion;
  }

  return apiUrl.substr(apiUrl.lastIndexOf('/') + 1);
};

export const getAdditionalHeaders = (
  serviceTitle: string,
  serviceVersion: string,
  apiUrl?: string,
  widgetTitle?: string,
) => {
  const requestInformation = `${serviceTitle} | ${widgetTitle ? `${widgetTitle} using ` : ''}JS SDK`;
  const version = getVersion(serviceVersion, apiUrl);

  return {
    'x-ttg-client': requestInformation,
    'x-ttg-client-version': version,
  };
}
