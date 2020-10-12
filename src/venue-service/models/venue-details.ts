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

  constructor (seatSettings: VenueDetailsApi) {
    checkRequiredProperty(seatSettings, 'Venue details: api settings');

    this.seatSettings = new SeatSettings(seatSettings.seatSettings);
    this.address = new VenueAddress(seatSettings.address);
    this.title = seatSettings.title;
    this.internalId = seatSettings.internalId;
    this.description = seatSettings.description;
    this.createdAt = seatSettings.createdAt;
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
