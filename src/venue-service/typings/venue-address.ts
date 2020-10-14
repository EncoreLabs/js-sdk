export interface VenueApiRegionData {
  name: string;
  isoCode: string;
}

export interface VenueApiCountryData {
  name: string;
  isoCode: string;
}

export interface VenueApiAddressData {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  city: string;
  region: VenueApiRegionData;
  country: VenueApiCountryData;
  latitude: string;
  longitude: string;
  postcode: string;
}
