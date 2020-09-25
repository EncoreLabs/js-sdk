import { getAdditionalHeaders, getVersion } from '../additional-headers';

const serviceTitle = 'Service title';
const widgetTitle = 'Widget title';
const apiVersion = 'v1';
const serviceVersion = 'v2';
const apiUrl = `https://service-url.test/api/${apiVersion}`;

describe('getVersion function', () => {
  it('should return right version if apiUrl isn\'t provided', () => {
    expect(getVersion(serviceVersion)).toBe(serviceVersion);
  });

  it('should return right version if apiUrl is provided', () => {
    expect(getVersion(serviceVersion, apiUrl)).toBe(apiVersion);
  });
});

describe('getAdditionalHeaders function', () => {
  it('should return right headers when the service title, version are provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | JS SDK`,
      'x-ttg-client-version': serviceVersion,
    };

    expect(getAdditionalHeaders(serviceTitle, serviceVersion)).toEqual(result);
  });

  it('should return right headers when the service title, version, apiUrl are provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | JS SDK`,
      'x-ttg-client-version': apiVersion,
    };

    expect(getAdditionalHeaders(serviceTitle, serviceVersion, apiUrl)).toEqual(result);
  });

  it('should return right headers when all arguments are provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | ${widgetTitle} using JS SDK`,
      'x-ttg-client-version': apiVersion,
    };

    expect(getAdditionalHeaders(serviceTitle, serviceVersion, apiUrl, widgetTitle)).toEqual(result);
  });

  it('should return right headers when all arguments were provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | ${widgetTitle} using JS SDK`,
      'x-ttg-client-version': apiVersion,
    };

    expect(getAdditionalHeaders(serviceTitle, serviceVersion, apiUrl, widgetTitle)).toEqual(result);
  });
})
