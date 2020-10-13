import { checkRequiredProperty } from '../../utils';
import { VenueAddress } from '../../content-service/models';
import { SeatSettings } from './seat-settings';
import { VenueDetailsApi } from '../typings';
import { VenueTerminal } from './terminal';
import { Facility } from './facility';

export class VenueDetails {
  private readonly seatSettings: SeatSettings;
  private readonly address: VenueAddress;
  private readonly title: string;
  private readonly internalId: string;
  private readonly description: string;
  private readonly createdAt: string;
  private readonly venueTerminals: VenueTerminal[];
  private readonly facilities: Facility[];
  private readonly transportAttributes: string[];

  constructor (venueDetails: VenueDetailsApi) {
    checkRequiredProperty(venueDetails, 'Venue details: api settings');

    this.seatSettings = new SeatSettings(venueDetails.seatSettings);
    this.address = new VenueAddress(venueDetails.address);
    this.title = venueDetails.title;
    this.internalId = venueDetails.internalId;
    this.description = venueDetails.description;
    this.createdAt = venueDetails.createdAt;
    this.venueTerminals = (venueDetails.venueTerminals || []).map(item => new VenueTerminal(item));
    this.facilities = (venueDetails.facilities || []).map(item => new Facility(item));
    this.transportAttributes = (venueDetails.transportAttributes || []).map(item => item?.description);
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

  getVenueTerminals () {
    return this.venueTerminals;
  }

  getFacilities () {
    return this.facilities;
  }

  getTransportAttributes () {
    return this.transportAttributes;
  }
}
