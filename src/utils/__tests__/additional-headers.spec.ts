import {getAdditionalHeaders, getAuthHeader, getCookieValue} from '../additional-headers';

const sourceName = 'Source name';
const sourceVersion = 'v1';
const viewName = 'View name';
const affiliateId = 'mockretailer';

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

  it('should return right headers for affiliateId', () => {
    const result = {
      'x-ttg-client': 'JS SDK',
      'affiliateId': affiliateId,
      'x-tt-retailer': affiliateId,
    };

    expect(getAdditionalHeaders({ affiliateId })).toEqual(result);
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

  it('should remove quotes from anonymous id before setting the header', () => {
    localStorage.setItem('ajs_anonymous_id', '"anonymous"')

    const headers = getAdditionalHeaders({ sourceName, sourceVersion, viewName })

    expect(headers['x-tt-anonymous-id']).toEqual('anonymous');
  });

  it('should fetch and attache cookie header', () => {
    document.cookie = '_fbp=fb.1.1635882611934.721450586;'
    document.cookie = '_ga=GA1.2.1987863969.1635949433;'
    document.cookie = '_clsk=12njzoh|1655497229922|2|1|i.clarity.ms/collect;'
    document.cookie = '_gcl_au=1.1.652822416.1651692668;'


    const headers = getAdditionalHeaders({ sourceName, sourceVersion, viewName }, true)

    expect(headers['x-ttg-cookie']).toEqual('_ga=GA1.2.1987863969.1635949433; _fbp=fb.1.1635882611934.721450586; _gcl_au=1.1.652822416.1651692668;');
  });

  it('Get specify cookie value works', () => {
    const cookie = '_ga=GA1.2.1987863969.1635949433; _fbp=fb.1.1635882611934.721450586'

    expect(getCookieValue('_ga', cookie)).toEqual('GA1.2.1987863969.1635949433');
    expect(getCookieValue('_fbp', cookie)).toEqual('fb.1.1635882611934.721450586');
  });
})

describe('getAuthHeader function', () => {
  it('should return right header', () => {
    const result = {
      'x-ttg-authorization': 'abc',
    };

    expect(getAuthHeader('abc')).toEqual(result);
  });

  it('if there is no jwt, return an empty object', () => {
    expect(getAuthHeader(undefined)).toEqual({});
  });
})
