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

export interface VenueDetails {
  address: VenueDetailsApiAddress;
  facilities: ApiFacility[];
  internalId: string;
  title: string;
  transportAttributes: ApiTransportAttribute[];
  venueTerminals: ApiVenueTerminal[];
}

export interface VenueDetailsApiAddress {
  city: string;
  country: ApiLocation;
  firstLine: string;
  latitude: string;
  longitude: string;
  postcode: string;
  region: ApiLocation;
  secondLine: string;
  thirdLine: string;
  [key:string]: string | ApiLocation;
}

export interface ApiLocation {
  name: string | null;
  isoCode: string;
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
