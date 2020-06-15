import { checkRequiredProperty } from '../../utils/validator';
import { ApiRegionData } from '../typings';

export class Region {
  private readonly name: string;
  private readonly isoCode: string;

  constructor (regionData: ApiRegionData) {
    checkRequiredProperty(regionData, 'Region: region data');

    const {
      name,
      isoCode,
    } = regionData;
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
