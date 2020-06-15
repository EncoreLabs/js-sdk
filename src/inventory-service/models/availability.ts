import { checkRequiredProperty } from '../../utils/validator';
import { Area } from './area';
import { ApiAvailability } from '../typings';

export class Availability {
  private readonly availability: ApiAvailability;

  constructor (availabilityData: ApiAvailability) {
    checkRequiredProperty(availabilityData, 'Availability: availability data');

    this.availability = availabilityData;
  }

  getAvailability () {
    return this.availability;
  }

  getAreas () {
    return this.availability.areas.map(area => new Area(area));
  }
}
