import { checkRequiredProperty } from '../../utils/validator';
import { PaymentType, ApiPaymentDetails } from '../typings';

export class PaymentDetails {
  private readonly paymentId: string;
  private readonly paymentType: PaymentType;

  constructor (paymentData: ApiPaymentDetails) {
    checkRequiredProperty(paymentData, 'PaymentDetails: payment data');

    const { paymentId, paymentType } = paymentData;

    this.paymentId = paymentId;
    this.paymentType = paymentType;
  }

  getPaymentId () {
    return this.paymentId;
  }

  getPaymentType () {
    return this.paymentType;
  }
}
