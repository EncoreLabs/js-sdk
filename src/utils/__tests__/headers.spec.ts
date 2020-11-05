import { getAffiliateId } from '../headers';
import { getRequestHeadersByChannel } from '../headers';

describe('Headers', () => {
  it('should return affiliate id from valid channel', () => {
    expect(getAffiliateId('test-qa-affiliate')).toBe('affiliate');
  });

  it('should return empty string when no affiliate provided', () => {
    expect(getAffiliateId('test-qa-')).toBe('');
  });

  it('should return same string when no channel prefixes provided', () => {
    expect(getAffiliateId('affiliate')).toBe('affiliate');
  });

  it('should return affiliate id header from valid channel', () => {
    expect(getRequestHeadersByChannel('test-qa-affiliate')).toEqual({
      affiliateId: 'affiliate',
    });
  });

  it('should return empty object when no channel provided', () => {
    expect(getRequestHeadersByChannel()).toEqual({});
  });
});
