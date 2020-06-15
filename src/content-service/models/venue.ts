import { checkRequiredProperty } from '../../utils/validator';
import { VenueAddress } from '../models';
import { ApiVenueData } from '../typings';

export class Venue {
  private readonly id: string;
  private readonly name: string;
  private readonly address: VenueAddress;

  constructor (venueData: ApiVenueData) {
    checkRequiredProperty(venueData, 'Venue: venue data');

    const {
      id,
      name,
      address,
    } = venueData;
    this.id = id;
    this.name = name;
    this.address = address ? new VenueAddress(address) : null;
  }

  getId () {
    return this.id;
  }

  getName () {
    return this.name;
  }

  getAddress () {
    return this.address;
  }
}
