import { ApiCountryData, ApiRegionData } from '../../content-service/typings';

export interface ApiSeatAttribute {
  title: string;
  description: string;
  intention: string;
}

export interface ApiSeatAttributes {
  seatIdentifier: string;
  area: string;
  attributes: ApiSeatAttribute[];
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

export interface VenueApiAddressData {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  city: string;
  region: ApiRegionData;
  country: ApiCountryData;
  latitude: string;
  longitude: string;
  postcode: string;
}

export interface VenueDetailsApi {
  address: VenueApiAddressData;
  facilities: ApiFacility[];
  internalId: string;
  title: string;
  transportAttributes: ApiTransportAttribute[];
  venueTerminals: ApiVenueTerminal[];
  seatSettings: VenueSeatSettings;
  description: string;
  createdAt: string;
}

export interface VenueSeatSettings {
  allocationType: {
    name: string;
  };
  seatSelectionMode: {
    name: string;
  };
  seatsSupplied: boolean;
}

export interface ApiFacility {
  description: string;
  path: string;
}

export interface ApiTransportAttribute {
  description: string;
}

export interface ApiVenueTerminal {
  directions: string | null;
  journeyTime: string | null;
  terminal: ApiTerminal;
}

export interface ApiTerminal {
  name: string;
  routes: ApiTerminalRoute[];
}

export interface ApiTerminalRoute {
  description: string;
  transportMode: ApiTransportMode;
}

export interface ApiTransportMode {
  name: string;
}
