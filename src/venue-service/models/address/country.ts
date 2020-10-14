import { checkRequiredProperty } from '../../../utils';
import { VenueApiCountryData } from '../../typings/venue-address';

export class VenueCountry {
  private readonly name: string;
  private readonly isoCode: string;

  constructor (countryData: VenueApiCountryData) {
    checkRequiredProperty(countryData, 'Country: country data');

    const {
      name,
      isoCode,
    } = countryData;
    this.name = name;
    this.isoCode = isoCode;
  }

  getName () {
    return this.name;
  }

  getISOCode () {
    return this.isoCode;
  }
}
