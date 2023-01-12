import { checkRequiredProperty } from '../../utils/validator';
import { Region, Country } from '.';
import { ApiAddressData } from '../typings';

export class VenueAddress {
  private readonly firstLine: string;
  private readonly secondLine: string;
  private readonly thirdLine: string;
  private readonly city: string;
  private readonly state: string;
  private readonly postCode: string;
  private readonly region: Region;
  private readonly country: Country;

  constructor (addressData: ApiAddressData) {
    checkRequiredProperty(addressData, 'Venue Address: address data');

    const {
      firstLine,
      secondLine,
      thirdLine,
      city,
      state,
      region,
      country,
      postCode
    } = addressData as ApiAddressData;

    this.firstLine = firstLine;
    this.secondLine = secondLine;
    this.thirdLine = thirdLine;
    this.city = city;
    this.state = state;
    this.postCode = postCode;
    this.region = region ? new Region(region) : null;
    this.country = country ? new Country(country) : null;
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

  getState () {
    return this.state;
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
}
