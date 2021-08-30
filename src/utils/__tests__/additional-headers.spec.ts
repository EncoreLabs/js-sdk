import { getAdditionalHeaders } from '../additional-headers';

const sourceName = 'Source name';
const sourceVersion = 'v1';
const viewName = 'View name';

describe('getAdditionalHeaders function', () => {
  it('should return right headers', () => {
    const result = {
      'x-ttg-client': 'JS SDK',
    };

    expect(getAdditionalHeaders()).toEqual(result);
  });

  it('should return right headers when the source name is provided', () => {
    const result = {
      'x-ttg-client': `${sourceName} | JS SDK`,
    };

    expect(getAdditionalHeaders({ sourceName })).toEqual(result);
  });

  it('should return right headers when the source name and view name are provided', () => {
    const result = {
      'x-ttg-client': `${sourceName} | ${viewName} using JS SDK`,
    };

    expect(getAdditionalHeaders({ sourceName, viewName })).toEqual(result);
  });

  it('should return right headers when all arguments were provided', () => {
    const anonymousId = 'anonymous'
    const result = {
      'x-ttg-client': `${sourceName} | ${viewName} using JS SDK`,
      'x-ttg-client-version': sourceVersion,
      'x-tt-anonymous-id': anonymousId,
    };

    localStorage.setItem('ajs_anonymous_id', anonymousId)

    expect(getAdditionalHeaders({ sourceName, sourceVersion, viewName })).toEqual(result);
  });
})
