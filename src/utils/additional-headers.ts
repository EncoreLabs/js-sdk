import { SourceInformation } from '../shared/typings';

export const getAdditionalHeaders = ({
  sourceName,
  sourceVersion,
  viewName,
  affiliateId,
}: SourceInformation = {}) => {
  const sourceNamePart = sourceName ? `${sourceName} | ` : '';
  const viewNamePart = viewName ? `${viewName} using ` : '';
  const requestInformation = `${sourceNamePart}${viewNamePart}JS SDK`;
  const anonymousId = getAnonymousId();

  const header = {
    'x-ttg-client': requestInformation,
  };

  if (sourceVersion) {
    header['x-ttg-client-version'] = sourceVersion
  }

  if (anonymousId) {
    header['x-tt-anonymous-id'] = anonymousId
  }

  if (affiliateId) {
    header['x-tt-affiliate-id'] = affiliateId
  }

  return header;
}

export const getAnonymousId = () => {
  return localStorage.getItem('ajs_anonymous_id');
}
