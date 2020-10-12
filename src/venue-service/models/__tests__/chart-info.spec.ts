import { ChartInfo } from '../chart-info';
import { chartInfoMock } from '../../__mocks__';

const getChartInfo = () => new ChartInfo(chartInfoMock);

describe('Chart Info', () => {
  describe('getChartId method', () => {
    it('should return valid info', () => {
      expect(getChartInfo().getChartId()).toEqual(chartInfoMock.chartId);
    });
  });

  describe('getCreatedAt method', () => {
    it('should return valid info', () => {
      expect(getChartInfo().getCreatedAt()).toEqual(chartInfoMock.createdAt);
    });
  });

  describe('getStartDate method', () => {
    it('should return valid info', () => {
      expect(getChartInfo().getStartDate()).toEqual(chartInfoMock.startDate);
    });
  });

  describe('getProductId method', () => {
    it('should return valid info', () => {
      expect(getChartInfo().getProductId()).toEqual(chartInfoMock.product.id);
    });

    it('should return undefined if product.id doesn\'t exist', () => {
      expect(new ChartInfo({} as any).getProductId()).toEqual(undefined);
    });
  });
});
