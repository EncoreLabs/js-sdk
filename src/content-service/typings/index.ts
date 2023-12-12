export interface ApiShowTypeData {
  id: string;
  type: string;
}

export interface ApiVenueData {
  id: string;
  name: string;
  address: ApiAddressData;
}

export interface ApiProductData {
  id: string;
  name: string;
  areaCode: string;
  showType: ApiShowTypeData;
  venue: ApiVenueData;
  showFaceValue: boolean;
  posterImageUrl?: string;
}

export interface ApiProductDataV3 {
  id: string;
  venueChartKey: string;
}

export interface ApiRegionData {
  name: string;
  isoCode: string;
}

export interface ApiCountryData {
  name: string;
  isoCode: string;
}

export interface ApiAddressData {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  city: string;
  state: string;
  postCode: string;
  region: ApiRegionData;
  country: ApiCountryData;
}

export interface ChartDetails {
  chartId: string;
  createdAt: string;
  endDate: string;
  id: number;
  startDate: string;
  updatedAt: string;
  product: {
    createdAt: string;
    id: string;
    updatedAt: string;
  };
}

export enum EntityType {
  Products = 'products',
  SeatPlan = 'seat-plan',
}

export enum ImageOrientation {
  Square = 'square',
  Landscape = 'landscape',
  Portrait = 'portrait',
  Default = 'default',
}

export interface Image {
  screenSize: string;
  url: string;
}
