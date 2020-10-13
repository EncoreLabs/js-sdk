import { ApiTerminalRoute } from '../../typings';

export class Route {
  private readonly description: string;
  private readonly transportModeName: string;

  constructor (data: ApiTerminalRoute) {
    this.description = data.description;
    this.transportModeName = data.transportMode?.name;
  }

  getDescription () {
    return this.description;
  }

  getTransportModeName () {
    return this.transportModeName;
  }
}
