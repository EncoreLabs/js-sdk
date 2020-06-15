import { SummaryAvailabilityItem } from './summary-availability-item';
import { checkRequiredProperty } from '../../utils/validator';
import { ApiSummaryAvailabilityItemData } from '../typings';

export class SummaryAvailability {
  private readonly summaryAvailability: SummaryAvailabilityItem[];

  constructor (summaryAvailabilityData: ApiSummaryAvailabilityItemData[]) {
    checkRequiredProperty(summaryAvailabilityData, 'SummaryAvailability: summary availability data');

    this.summaryAvailability = this.prepareSummaryAvailability(summaryAvailabilityData);
  }

  prepareSummaryAvailability (summaryAvailabilityData: ApiSummaryAvailabilityItemData[]) {
    return summaryAvailabilityData.map(item => new SummaryAvailabilityItem(item))
  };

  getCollection () {
    return this.summaryAvailability;
  }
}
