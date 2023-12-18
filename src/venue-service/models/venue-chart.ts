import { VenueChartType } from "../typings";

export class VenueChart {
  private readonly categories: any[];
  private readonly colorScheme: string;
  private readonly name: string;
  private readonly referenceChartVisible: boolean;
  private readonly rowChairSpacing: number;
  private readonly rowSpacing: number;
  private readonly sectionScaleFactor: number;
  private readonly subChart: any;
  private readonly tablesLabelCounter: number;
  private readonly uuidCounter: number;
  private readonly venueType: string;
  private readonly version: number;

  constructor (venueChart: VenueChartType) {
    this.categories = venueChart.categories;
    this.colorScheme = venueChart.colorScheme;
    this.name = venueChart.name;
    this.referenceChartVisible = venueChart.referenceChartVisible;
    this.rowChairSpacing = venueChart.rowChairSpacing;
    this.rowSpacing = venueChart.rowSpacing;
    this.sectionScaleFactor = venueChart.sectionScaleFactor;
    this.subChart = venueChart.subChart;
    this.tablesLabelCounter = venueChart.tablesLabelCounter;
    this.uuidCounter = venueChart.uuidCounter;
    this.venueType = venueChart.venueType;
    this.version = venueChart.version;
  }

  getCategories () {
    return this.categories;
  }

  getColorScheme () {
    return this.colorScheme;
  }

  getName () {
    return this.name;
  }

  getReferenceChartVisible () {
    return this.referenceChartVisible;
  }

  getRowChairSpacing () {
    return this.rowChairSpacing;
  }

  getRowSpacing () {
    return this.rowSpacing;
  }

  getSectionScaleFactor () {
    return this.sectionScaleFactor;
  }

  getSubChart () {
    return this.subChart;
  }

  getTablesLabelCounter () {
    return this.tablesLabelCounter;
  }

  getUuidCounter () {
    return this.uuidCounter;
  }

  getVenueType () {
    return this.venueType;
  }

  getVersion () {
    return this.version;
  }
}
