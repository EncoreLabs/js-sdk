import { getAdditionalHeaders } from '../additional-headers';

const serviceTitle = 'Service title';
const sourceName = 'Source name';
const sourceVersion = 'v1';

describe('getAdditionalHeaders function', () => {
  it('should return right headers when the service title, version are provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | JS SDK`,
    };

    expect(getAdditionalHeaders(serviceTitle)).toEqual(result);
  });

  it('should return right headers when all arguments are provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | ${sourceName} using JS SDK`,
    };

    expect(getAdditionalHeaders(serviceTitle, sourceName)).toEqual(result);
  });

  it('should return right headers when all arguments were provided', () => {
    const result = {
      'x-ttg-client': `${serviceTitle} | ${sourceName} using JS SDK`,
      'x-ttg-client-version': sourceVersion,
    };

    expect(getAdditionalHeaders(serviceTitle, sourceName, sourceVersion)).toEqual(result);
  });
})
