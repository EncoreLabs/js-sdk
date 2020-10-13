import { checkRequiredProperty } from '../../utils/validator';
import { Region, Country } from '.';
import { ApiAddressData } from '../typings';
import { VenueApiAddressData } from '../../venue-service/typings';

export class VenueAddress {
  private readonly firstLine: string;
  private readonly secondLine: string;
  private readonly thirdLine: string;
  private readonly city: string;
  private readonly postCode: string;
  private readonly region: Region;
  private readonly country: Country;
  private readonly latitude: string;
  private readonly longitude: string;

  constructor (addressData: (ApiAddressData | VenueApiAddressData)) {
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
    const { postCode } = addressData as ApiAddressData;

    this.firstLine = firstLine;
    this.secondLine = secondLine;
    this.thirdLine = thirdLine;
    this.city = city;
    this.postCode = postCode || postcode;
    this.region = region ? new Region(region) : null;
    this.country = country ? new Country(country) : null;
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
