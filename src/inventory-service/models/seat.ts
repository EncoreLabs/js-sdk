import { checkRequiredProperty } from '../../utils/validator';
import { AreaPricing } from './area-pricing';
import { ApiAvailabilitySeat } from '../typings';

export class Seat {
  private readonly aggregateReference: string;
  private readonly number: number;
  private readonly pricing: AreaPricing;
  private readonly row: string;
  private readonly seatIdentifier: string;
  private readonly attributes: {
    restrictedView: boolean;
    sideView: boolean;
  };

  constructor (seatData: ApiAvailabilitySeat) {
    checkRequiredProperty(seatData, 'Seat: seat data');

    this.aggregateReference = seatData.aggregateReference;
    this.number = seatData.number;
    this.pricing = seatData.pricing ? new AreaPricing(seatData.pricing) : null;
    this.row = seatData.row;
    this.seatIdentifier = seatData.seatIdentifier;
    this.attributes = seatData.attributes;
  }

  getAggregateReference () {
    return this.aggregateReference;
  }

  getNumber () {
    return this.number;
  }

  getPricing () {
    return this.pricing;
  }

  getRow () {
    return this.row;
  }

  getSeatIdentifier () {
    return this.seatIdentifier;
  }

  getAttributes () {
    return this.attributes;
  }
}
