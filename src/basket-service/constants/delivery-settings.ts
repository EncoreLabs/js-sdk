import { DeliveryMethod } from '../typings';

export const deliverySettings = {
  [DeliveryMethod.Collection]: {
    name: "Collect at the Box Office",
    voucherName: "Free postal delivery",
    attractionName: "Print at home voucher",
  },
  [DeliveryMethod.Postage]: {
    name: "By Post – UK Addresses only",
  },
  [DeliveryMethod.Eticket]: {
    name: "Print at Home",
  },
  [DeliveryMethod.Evoucher]: {
    name: "Print at Home E-Voucher",
  },
};
