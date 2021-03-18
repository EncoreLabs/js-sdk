import moment, { Moment } from 'moment';
import { checkRequiredProperty } from '../../utils/validator';
import { Grouping } from './grouping';
import { ApiArea } from '../typings';

export class Area {
  private readonly availableCount: number;
  private readonly date: Moment;
  private readonly partTwoDate: Moment | null;
  private readonly rawDate: string;
  private groupings: Grouping[];
  private readonly mode: string;
  private readonly name: string;
  private readonly aggregateReference?: string;

  constructor (areaData: ApiArea) {
    checkRequiredProperty(areaData, 'Area: area data');

    this.availableCount = areaData.availableCount;
    this.date = moment(areaData.date);
    this.partTwoDate = areaData.partTwoDate ? moment(areaData.partTwoDate) : null;
    this.rawDate = areaData.date;
    this.groupings = areaData.groupings.map(grouping => new Grouping(grouping));
    this.mode = areaData.mode;
    this.name = areaData.name;
    this.aggregateReference = areaData.aggregateReference;
  }

  getAvailableCount () {
    return this.availableCount;
  }

  getDate () {
    return this.date;
  }

  getPartTwoDate () {
    return this.partTwoDate;
  }

  getRawDate () {
    return this.rawDate;
  }

  getGroupings () {
    return this.groupings;
  }

  setGroupings (groupings: Grouping[]) {
    this.groupings = groupings;
  }

  getMode () {
    return this.mode;
  }

  getName () {
    return this.name;
  }

  getAggregateReference () {
    return this.aggregateReference;
  }
}
