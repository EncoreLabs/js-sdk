import { checkRequiredProperty } from '../../utils/validator';
import moment, { Moment } from 'moment';
import { ApiSummaryAvailabilityItemData } from '../typings';

export class SummaryAvailabilityItem {
  private readonly availableSeatCount: number;
  private readonly datetime: Moment;
  private readonly partTwoDatetime: Moment | null;
  private readonly rawDateTime: string;
  private readonly rawPartTwoDateTime: string | null;
  private readonly discount: boolean;
  private readonly offer: boolean;
  private readonly largestLumpOfTickets: number;
  private readonly maxPrice: number;
  private readonly minPrice: number;
  private readonly noBookingFee: boolean;
  private readonly currency: string;
  private readonly promotionLabel: string | null;
  private readonly availabilityLevel: string | null;

  constructor (summaryAvailabilityItemData: ApiSummaryAvailabilityItemData) {
    checkRequiredProperty(summaryAvailabilityItemData, 'Summary Availability Item: summary availability item data');

    const {
      availableSeatCount,
      datetime,
      partTwoDatetime,
      discount,
      offer,
      largestLumpOfTickets,
      maxPrice,
      minPrice,
      noBookingFee,
      currency,
      promotionLabel,
      availabilityLevel,
    } = summaryAvailabilityItemData;
    this.availableSeatCount = availableSeatCount;
    this.datetime = moment(datetime);
    this.partTwoDatetime = partTwoDatetime ? moment(partTwoDatetime) : null;
    this.rawDateTime = datetime;
    this.rawPartTwoDateTime = partTwoDatetime || null;
    this.discount = discount;
    this.offer = offer;
    this.largestLumpOfTickets = largestLumpOfTickets;
    this.maxPrice = maxPrice;
    this.minPrice = minPrice;
    this.noBookingFee = noBookingFee;
    this.currency = currency;
    this.promotionLabel = promotionLabel || null;
    this.availabilityLevel = availabilityLevel || null;
  }

  getAvailableSeatCount () {
    return this.availableSeatCount;
  }

  getDateTime () {
    return this.datetime;
  }

  getPartTwoDateTime () {
    return this.partTwoDatetime;
  }

  getRawDateTime () {
    return this.rawDateTime;
  }

  getRawPartTwoDateTime () {
    return this.rawPartTwoDateTime;
  }

  getDiscount () {
    return this.discount;
  }

  getLargestLumpOfTickets () {
    return this.largestLumpOfTickets;
  }

  getMaxPrice () {
    return this.maxPrice;
  }

  getMinPrice () {
    return this.minPrice;
  }

  hasBookingFee () {
    return this.noBookingFee === false;
  }

  getOffer () {
    return this.offer;
  }

  getCurrency () {
    return this.currency;
  }

  getPromotionLabel () {
    return this.promotionLabel;
  }

  getAvailabilityLevel () {
    return this.availabilityLevel;
  }
}
