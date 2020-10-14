import { checkRequiredProperty } from '../../utils';
import { AddressModel } from './address';
import { SeatSettings } from './seat-settings';
import { VenueDetailsApi } from '../typings';
import { VenueTerminal } from './terminal';
import { Facility } from './facility';

export class VenueDetails {
  private readonly seatSettings: SeatSettings;
  private readonly address: AddressModel;
  private readonly title: string;
  private readonly internalId: string;
  private readonly description: string;
  private readonly createdAt: string;
  private readonly venueTerminals: VenueTerminal[];
  private readonly facilities: Facility[];
  private readonly transportAttributes: string[];

  constructor (venueDetails: VenueDetailsApi) {
    checkRequiredProperty(venueDetails, 'Venue details: api settings');

    const { venueTerminals = [], facilities = [], transportAttributes = [] } = venueDetails;

    this.seatSettings = new SeatSettings(venueDetails.seatSettings);
    this.address = new AddressModel(venueDetails.address);
    this.title = venueDetails.title;
    this.internalId = venueDetails.internalId;
    this.description = venueDetails.description;
    this.createdAt = venueDetails.createdAt;
    this.venueTerminals = venueTerminals.map(item => new VenueTerminal(item));
    this.facilities = facilities.map(item => new Facility(item));
    this.transportAttributes = transportAttributes
      .map(item => item?.description)
      .filter(item => item);
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
