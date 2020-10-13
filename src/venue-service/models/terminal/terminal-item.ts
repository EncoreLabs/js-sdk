import { Route } from './route';
import { ApiTerminal } from '../../typings';

export class TerminalItem {
  private readonly name: string;
  private readonly routes: Route[];

  constructor (data: ApiTerminal) {
    this.name = data.name;
    this.routes = data.routes.map(item => new Route(item));
  }

  getName () {
    return this.name;
  }

  getRoutes () {
    return this.routes;
  }
}
