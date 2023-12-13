import { ApiProductDataV3 } from "../typings";
import { checkRequiredProperty } from "../../utils";

export class ProductV3 {
  private readonly id: string;
  private readonly venueChartKey: string;

  constructor (productData: ApiProductDataV3) {
    checkRequiredProperty(productData, 'Product: product data');

    const {
      id,
      venueChartKey
    } = productData;
    this.id = id;
    this.venueChartKey = venueChartKey;
  }

  getId () {
    return this.id;
  }

  getVenueChartKey () {
    return this.venueChartKey;
  }
}
