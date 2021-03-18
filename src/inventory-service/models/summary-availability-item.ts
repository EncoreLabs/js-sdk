import { checkRequiredProperty } from '../../utils/validator';
import moment, { Moment } from 'moment';
import { ApiSummaryAvailabilityItemData } from '../typings';

export class SummaryAvailabilityItem {
  private readonly availableSeatCount: number;
  private readonly datetime: Moment;
  private readonly partTwoDatetime: Moment | null;
  private readonly rawDateTime: string;
  private readonly discount: boolean;
  private readonly largestLumpOfTickets: number;
  private readonly maxPrice: number;
  private readonly minPrice: number;
  private readonly noBookingFee: boolean;

  constructor (summaryAvailabilityItemData: ApiSummaryAvailabilityItemData) {
    checkRequiredProperty(summaryAvailabilityItemData, 'Summary Availability Item: summary availability item data');

    const {
      availableSeatCount,
      datetime,
      partTwoDatetime,
      discount,
      largestLumpOfTickets,
      maxPrice,
      minPrice,
      noBookingFee,
    } = summaryAvailabilityItemData;
    this.availableSeatCount = availableSeatCount;
    this.datetime = moment(datetime);
    this.partTwoDatetime = partTwoDatetime ? moment(partTwoDatetime) : null;
    this.rawDateTime = datetime;
    this.discount = discount;
    this.largestLumpOfTickets = largestLumpOfTickets;
    this.maxPrice = maxPrice;
    this.minPrice = minPrice;
    this.noBookingFee = noBookingFee;
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
}
