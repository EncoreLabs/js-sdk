import { base64Encode } from './base64-encode';
import { ApiConfirmBookingAgentDetails } from '../checkout-service/typings';

export const getRequestHeadersForConfirmBooking = (agentDetails?: ApiConfirmBookingAgentDetails) => {
  if (!agentDetails) {
    return {};
  }

  const { agentId, agentPassword } = agentDetails;
  const headers = {
    'X-AGENT-ID': base64Encode(agentId),
    'X-AGENT-PASSWORD': base64Encode(agentPassword),
  }

  return { headers };
}
