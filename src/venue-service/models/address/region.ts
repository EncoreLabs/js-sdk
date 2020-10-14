import { checkRequiredProperty } from '../../../utils';
import { VenueApiRegionData } from '../../typings/venue-address';

export class VenueRegion {
  private readonly name: string;
  private readonly isoCode: string;

  constructor (regionData: VenueApiRegionData) {
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
