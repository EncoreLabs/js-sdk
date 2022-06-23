import { SourceInformation } from '../shared/typings';


const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

export const getAttributionCookies = () => {
  const allowedCookieNames = ['_ga', '_fbp', '_gcl_au'];

  let cookie = ''
  for (const cookieName of allowedCookieNames) {
    const value = getCookieValue(cookieName)
    if (value) {
      if (cookie.length > 0) cookie += ' ';
      cookie += `${cookieName}=${value};`;
    }
  }

  return cookie
};

export const getAdditionalHeaders = ({
  sourceName,
  sourceVersion,
  viewName,
  affiliateId,
}: SourceInformation = {}, includeCookie: boolean = false) => {
  const sourceNamePart = sourceName ? `${sourceName} | ` : '';
  const viewNamePart = viewName ? `${viewName} using ` : '';
  const requestInformation = `${sourceNamePart}${viewNamePart}JS SDK`;
  const anonymousId = getAnonymousId();
  const cookie = getAttributionCookies();

  const headers: { [key:string]: string } = {
    'x-ttg-client': requestInformation,
  };

  if (sourceVersion) {
    headers['x-ttg-client-version'] = sourceVersion
  }

  if (anonymousId) {
    headers['x-tt-anonymous-id'] = anonymousId
  }

  if (affiliateId) {
    headers.affiliateId = affiliateId
  }

  if (includeCookie && cookie) {
    headers['x-ttg-cookie'] = cookie;
  }

  return headers;
}

export const getAnonymousId = () => {
  return localStorage.getItem('ajs_anonymous_id')?.replace(/"/g, '');
}
