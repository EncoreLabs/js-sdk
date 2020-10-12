import { ChartDetails } from '../typings';

export class ChartInfo {
  private readonly chartId: string;
  private readonly createdAt: string;
  private readonly startDate: string;
  private readonly productId: string;

  constructor (chartDetails: ChartDetails) {
    this.chartId = chartDetails.chartId;
    this.createdAt = chartDetails.createdAt;
    this.startDate = chartDetails.startDate;
    this.productId = chartDetails.product?.id;
  }

  getChartId () {
    return this.chartId;
  }

  getCreatedAt () {
    return this.createdAt;
  }

  getStartDate () {
    return this.startDate;
  }

  getProductId () {
    return this.productId;
  }
}
