
export interface VenueChartType {
  version: number;
  sectionScaleFactor: number;
  subChart: Record<string, unknown>;
  venueType: string;
  name: string;
  rowChairSpacing: number;
  rowSpacing: number;
  referenceChartVisible: boolean;
  // venue-builder doesn't use attributes below
  colorScheme?: string;
  categories?: any[];
  tablesLabelCounter?: number;
  uuidCounter?: number;
}
