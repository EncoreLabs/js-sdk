import { UpsellProduct } from './index';
import { checkRequiredProperty } from '../../utils/validator';
import { ApiUpsellApiProductData, ApiUpsellProductsData } from '../typings';

export class UpsellCollection {
  private readonly displayCurrency: string;
  private readonly upSellProducts: UpsellProduct[];

  constructor (upsellProducts: ApiUpsellProductsData) {
    checkRequiredProperty(upsellProducts, 'UpsellCollection: api upsell products data');

    const { displayCurrency, upSellItems } = upsellProducts;

    this.displayCurrency = displayCurrency;
    this.upSellProducts = this.prepareUpsellProducts(upSellItems, displayCurrency);
  }

  prepareUpsellProducts (productCollection: ApiUpsellApiProductData[], currency: string): UpsellProduct[] {
    return productCollection.map(item => new UpsellProduct(item, currency))
  };

  hasFlexiTicket () {
    return this.upSellProducts.some(item => item.isFlexiTicket());
  }

  getFlexiTickets () {
    return this.upSellProducts.filter(item => item.isFlexiTicket());
  }

  getCollection () {
    return this.upSellProducts;
  }
}
