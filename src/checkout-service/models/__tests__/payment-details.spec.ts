import { PaymentDetails } from '../payment-details';
import { paymentDataMock } from '../../__mocks__';

describe('Payment details model', () => {
  const getPaymentDetails = () => {
    return new PaymentDetails(paymentDataMock);
  };

  describe('getPaymentId function', () => {
    it('should get payment id', () => {
      const details = getPaymentDetails();

      expect(details.getPaymentId()).toBe(paymentDataMock.paymentId);
    });
  });

  describe('getPaymentType function', () => {
    it('should get payment type', () => {
      const details = getPaymentDetails();

      expect(details.getPaymentType()).toBe(paymentDataMock.paymentType);
    });
  });
});
