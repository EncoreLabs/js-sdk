
import { venueChartMock } from '../../__mocks__';
import { VenueChart } from "../venue-chart";

const getVenueChartByKey = () => new VenueChart(venueChartMock);

describe('Venue chart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should return valid object', () => {
      expect(new VenueChart(venueChartMock)).toEqual(venueChartMock);
    });
  });

  describe('getCategories method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getCategories()).toEqual(venueChartMock.categories);
    });
  });

  describe('getColorScheme method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getColorScheme()).toEqual(venueChartMock.colorScheme);
    });
  });

  describe('getName method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getName()).toEqual(venueChartMock.name);
    });
  });

  describe('getReferenceChartVisible method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getReferenceChartVisible()).toEqual(venueChartMock.referenceChartVisible);
    });
  });

  describe('getRowChairSpacing method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getRowChairSpacing()).toEqual(venueChartMock.rowChairSpacing);
    });
  });

  describe('getRowSpacing method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getRowSpacing()).toEqual(venueChartMock.rowSpacing);
    });
  });

  describe('getSectionScaleFactor method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getSectionScaleFactor()).toEqual(venueChartMock.sectionScaleFactor);
    });
  });

  describe('getSubChart method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getSubChart()).toEqual(venueChartMock.subChart);
    });
  });

  describe('getTablesLabelCounter method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getTablesLabelCounter()).toEqual(venueChartMock.tablesLabelCounter);
    });
  });

  describe('getUuidCounter method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getUuidCounter()).toEqual(venueChartMock.uuidCounter);
    });
  });

  describe('getVenueType method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getVenueType()).toEqual(venueChartMock.venueType);
    });
  });

  describe('getVersion method', () => {
    it('should return valid info', () => {
      expect(getVenueChartByKey().getVersion()).toEqual(venueChartMock.version);
    });
  });
});
