export const getAffiliateId = (channelId: string) => {
  return channelId.split('-').slice(-1)[0];
};

export const getRequestHeadersByChannel = (channelId?: string) => {
  return channelId ? {
    affiliateId: getAffiliateId(channelId),
  } : {};
}
