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
