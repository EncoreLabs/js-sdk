import { TerminalItem } from './terminal-item';
import { ApiVenueTerminal } from '../../typings';

export class VenueTerminal {
  private readonly directions: string;
  private readonly journeyTime: string;
  private readonly terminal: TerminalItem;

  constructor (data: ApiVenueTerminal) {
    this.directions = data.directions;
    this.journeyTime = data.journeyTime;
    this.terminal = new TerminalItem(data.terminal);
  }

  getDirections () {
    return this.directions;
  }

  getJourneyTime () {
    return this.journeyTime;
  }

  getTerminal () {
    return this.terminal;
  }
}

