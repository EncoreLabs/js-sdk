import { checkRequiredProperty } from '../../utils/validator';
import { ApiCountryData } from '../typings';

export class Country {
  private readonly name: string;
  private readonly isoCode: string;

  constructor (countryData: ApiCountryData) {
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
