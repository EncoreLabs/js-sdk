import { checkRequiredProperty } from '../../utils';
import { VenueAddress } from '../../content-service/models';
import { SeatSettings } from './seat-settings';
import { VenueDetailsApi } from '../typings';

export class VenueDetails {
  private readonly seatSettings: SeatSettings;
  private readonly address: VenueAddress;
  private readonly title: string;
  private readonly internalId: string;
  private readonly description: string;
  private readonly createdAt: string;

  constructor (venueDetails: VenueDetailsApi) {
    checkRequiredProperty(venueDetails, 'Venue details: api settings');

    this.seatSettings = new SeatSettings(venueDetails.seatSettings);
    this.address = new VenueAddress(venueDetails.address);
    this.title = venueDetails.title;
    this.internalId = venueDetails.internalId;
    this.description = venueDetails.description;
    this.createdAt = venueDetails.createdAt;
  }

  getSeatSettings () {
    return this.seatSettings;
  }

  getAddress () {
    return this.address;
  }

  getTitle () {
    return this.title;
  }

  getInternalId () {
    return this.internalId;
  }

  getDescription () {
    return this.description;
  }

  getCreatedAt () {
    return this.createdAt;
  }
}
