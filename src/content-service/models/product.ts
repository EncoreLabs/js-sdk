import { checkRequiredProperty } from '../../utils/validator';
import { ShowType, Venue } from '../models';
import {
  ApiProductData,
  ApiVenueData,
} from '../typings';

export class Product {
  private readonly id: string;
  private readonly name: string;
  private readonly showType: ShowType;
  private readonly venue: Venue;
  private readonly showFaceValue: boolean;

  constructor (productData: ApiProductData) {
    checkRequiredProperty(productData, 'Product: product data');

    const {
      name,
      showType,
      venue,
      id,
      showFaceValue,
    } = productData;
    this.name = name;
    this.showType = showType ? new ShowType(showType) : null;
    this.venue = venue ? new Venue(venue) : null;
    this.id = id;
    this.showFaceValue = showFaceValue;
  }

  getId () {
    return this.id;
  }

  getName () {
    return this.name;
  }

  getType () {
    return this.showType ? this.showType.getType() : null;
  }

  getVenue () {
    return this.venue;
  }

  needShowFaceValue () {
    return this.showFaceValue;
  }
}
