import { getAdditionalHeaders } from '../additional-headers';

const serviceName = 'Service name';
const sourceName = 'Source name';
const sourceVersion = 'v1';

describe('getAdditionalHeaders function', () => {
  it('should return right headers', () => {
    const result = {
      'x-ttg-client': 'JS SDK',
    };

    expect(getAdditionalHeaders()).toEqual(result);
  });

  it('should return right headers when the service name is provided', () => {
    const result = {
      'x-ttg-client': `${serviceName} | JS SDK`,
    };

    expect(getAdditionalHeaders(serviceName)).toEqual(result);
  });

  it('should return right headers when the service name, version are provided', () => {
    const result = {
      'x-ttg-client': `${serviceName} | ${sourceName} using JS SDK`,
    };

    expect(getAdditionalHeaders(serviceName, sourceName)).toEqual(result);
  });

  it('should return right headers when all arguments were provided', () => {
    const result = {
      'x-ttg-client': `${serviceName} | ${sourceName} using JS SDK`,
      'x-ttg-client-version': sourceVersion,
    };

    expect(getAdditionalHeaders(serviceName, sourceName, sourceVersion)).toEqual(result);
  });
})
