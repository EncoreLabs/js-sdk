import { getRequestHeadersForConfirmBooking } from '../request-headers-confirm-booking';

describe('getRequestHeadersForConfirmBooking function', () => {
  it('should return object with headers', () => {
    const data = {
      agentId: 'test',
      agentPassword: 'test',
    };
    const result = {
      'X-AGENT-ID': 'dGVzdA==',
      'X-AGENT-PASSWORD': 'dGVzdA==',
    };

    expect(getRequestHeadersForConfirmBooking(data)).toEqual(result);
    expect(getRequestHeadersForConfirmBooking()).toEqual({});
  });
});
