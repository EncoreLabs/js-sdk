import { checkRequiredProperty } from '../../utils/validator';
import { ApiSeatAttribute } from '../typings';

export class SeatAttribute {
  private readonly title: string;
  private readonly description: string;
  private readonly intention: string;

  constructor (seatAttributeData: ApiSeatAttribute) {
    checkRequiredProperty(seatAttributeData, 'Seat Attribute: seat attribute data');

    this.title = seatAttributeData.title;
    this.description = seatAttributeData.description;
    this.intention = seatAttributeData.intention;
  }

  getTitle () {
    return this.title;
  }

  getDescription () {
    return this.description;
  }

  getIntention () {
    return this.intention;
  }
}
