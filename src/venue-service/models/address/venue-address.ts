import { checkRequiredProperty } from '../../../utils';
import { VenueRegion, VenueCountry } from '.';
import { VenueApiAddressData } from '../../typings';

export class AddressModel {
  private readonly firstLine: string;
  private readonly secondLine: string;
  private readonly thirdLine: string;
  private readonly city: string;
  private readonly postCode: string;
  private readonly region: VenueRegion;
  private readonly country: VenueCountry;
  private readonly latitude: string;
  private readonly longitude: string;

  constructor (addressData: VenueApiAddressData) {
    checkRequiredProperty(addressData, 'Venue Address: address data');

    const {
      firstLine,
      secondLine,
      thirdLine,
      city,
      region,
      country,
      latitude,
      longitude,
      postcode,
    } = addressData as VenueApiAddressData;

    this.firstLine = firstLine;
    this.secondLine = secondLine;
    this.thirdLine = thirdLine;
    this.city = city;
    this.postCode = postcode;
    this.region = region ? new VenueRegion(region) : null;
    this.country = country ? new VenueCountry(country) : null;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getFirstLine () {
    return this.firstLine;
  }

  getSecondLine () {
    return this.secondLine;
  }

  getThirdLine () {
    return this.thirdLine;
  }

  getCity () {
    return this.city;
  }

  getPostCode () {
    return this.postCode;
  }

  getRegion () {
    return this.region;
  }

  getCountry () {
    return this.country;
  }

  getCoordinates () {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
    };
  }
}
