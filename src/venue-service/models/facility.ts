import { ApiFacility } from '../typings';

export class Facility {
  private readonly description: string;
  private readonly path: string;

  constructor (data: ApiFacility) {
    this.description = data.description;
    this.path = data.path;
  }

  getDescription () {
    return this.description;
  }

  getPath () {
    return this.path;
  }
}
