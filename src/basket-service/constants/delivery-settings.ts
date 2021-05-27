import { DeliveryMethod } from '../typings';

export const deliverySettings = {
  [DeliveryMethod.Collection]: {
    name: "Collect at the venue",
    voucherName: "Free postal delivery",
    attractionName: "Print at home voucher",
  },
  [DeliveryMethod.Postage]: {
    name: "By Post – UK Addresses only",
  },
  [DeliveryMethod.Eticket]: {
    name: "Download as E-Ticket",
  },
  [DeliveryMethod.Evoucher]: {
    name: "Print at Home E-Voucher",
  },
  [DeliveryMethod.HandDelivered]: {
    name: "Hand Delivered",
  },
  [DeliveryMethod.PrintBoxOffice]: {
    name: "Collect at the venue",
  },
  [DeliveryMethod.DelayedBarcode]: {
    name: "Download as E-Ticket",
  },
  [DeliveryMethod.Streaming]: {
    name: "Streaming",
  },
  [DeliveryMethod.Supplier]: {
    name: "Download as E-Ticket",
  },
};
