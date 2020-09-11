import { checkRequiredProperty } from '../../utils/validator';
import { Area } from './area';
import { ApiAvailability } from '../typings';

export class Availability {
  private readonly availability: ApiAvailability;
  private readonly areas: Area[];

  constructor (availabilityData: ApiAvailability) {
    checkRequiredProperty(availabilityData, 'Availability: availability data');

    this.availability = availabilityData;
    this.areas = this.availability.areas.map(area => new Area(area));
  }

  getAvailability () {
    return this.availability;
  }

  getAreas () {
    return this.areas;
  }
}
