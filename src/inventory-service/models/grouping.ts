import { checkRequiredProperty } from '../../utils/validator';
import { AreaPricing } from './area-pricing';
import { Seat } from './seat';
import { SeatLump } from './seat-lump';
import { ApiAreaGroup, SeatAllocationMode } from '../typings';

export class Grouping {
  private readonly row: string;
  private readonly availableCount: number;
  private readonly seatNumberStart: number;
  private readonly seatNumberEnd: number;
  private readonly groupIdentifier: string;
  private readonly pricing: AreaPricing;
  private seats: Seat[];
  private readonly seatLumps: SeatLump[];
  private readonly aggregateReference?: string;
  private readonly attributes?: {
    restrictedView: boolean;
    sideView: boolean;
  };
  private readonly mode?: SeatAllocationMode;

  constructor (grouping: ApiAreaGroup) {
    checkRequiredProperty(grouping, 'Grouping: groping data');

    const {
      row,
      availableCount,
      seatNumberStart,
      seatNumberEnd,
      groupIdentifier,
      pricing,
      seats,
      seatLumps,
      aggregateReference,
      attributes,
      mode,
    } = grouping;

    this.row = row;
    this.availableCount = availableCount;
    this.seatNumberStart = seatNumberStart;
    this.seatNumberEnd = seatNumberEnd;
    this.groupIdentifier = groupIdentifier;
    this.pricing = pricing ? new AreaPricing(pricing) : null;
    this.seats = seats.map(seat => new Seat(seat));
    this.seatLumps = seatLumps.map(seatLump => new SeatLump(seatLump));
    this.aggregateReference = aggregateReference;
    this.attributes = attributes;
    this.mode = mode as SeatAllocationMode;
  }

  getRow () {
    return this.row;
  }

  getAvailableCount () {
    return this.availableCount;
  }

  getFirstSeatInGrouping () {
    return this.seatNumberStart;
  }

  getLastSeatInGrouping () {
    return this.seatNumberEnd;
  }

  getGroupIdentifier () {
    return this.groupIdentifier;
  }

  getPricing () {
    return this.pricing;
  }

  getSeats () {
    return this.seats;
  }

  setSeats (seats: Seat[]) {
    this.seats = seats;
  }

  getSeatLumps () {
    return this.seatLumps;
  }

  getAggregateReference () {
    return this.aggregateReference;
  }

  getAttributes () {
    return this.attributes;
  }

  getMode () {
    return this.mode;
  }
}
