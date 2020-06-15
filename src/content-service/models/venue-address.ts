import { checkRequiredProperty } from '../../utils/validator';
import { Region, Country } from '.';
import { ApiAddressData } from '../typings';

export class VenueAddress {
  private readonly firstLine: string;
  private readonly secondLine: string;
  private readonly thirdLine: string;
  private readonly city: string;
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
      postCode,
      region,
      country,
    } = addressData;
    this.firstLine = firstLine
    this.secondLine = secondLine;
    this.thirdLine = thirdLine;
    this.city = city;
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
