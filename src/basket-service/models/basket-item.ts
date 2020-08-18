import { basketDetailsRepositoryProvider } from '../services/basket-details-repository-provider';
import { Product } from '../../content-service/models';
import { checkRequiredProperty } from '../../utils/validator';
import { BasketItemData, ProductType, ReservationSeat, BasketLocationType } from '../typings';
import { EntityType } from '../../content-service/typings';
import { Amount } from '../../shared/typings';

export class BasketItem {
  private quantity: number;
  private readonly id: string;
  private readonly productId: string;
  private readonly productName: string;
  private readonly productType: ProductType;
  private readonly faceValueInShopperCurrency: Amount | null;
  private readonly salePriceInShopperCurrency: Amount;
  private readonly adjustedSalePriceInShopperCurrency: Amount;
  private readonly adjustmentAmountInShopperCurrency: Amount;
  private readonly date: Date;
  private readonly rawDate: string;
  private readonly seats: ReservationSeat[];
  private readonly venueId: string;
  private readonly linkedReservationId: number;
  private readonly repository = basketDetailsRepositoryProvider.getRepository();
  private productDetails: Promise<Product>;

  constructor (basketItemData: BasketItemData) {
    checkRequiredProperty(basketItemData, 'BasketItem: basket item data');

    const {
      id,
      quantity,
      productId,
      productName,
      productType,
      faceValueInShopperCurrency,
      adjustedSalePriceInShopperCurrency,
      salePriceInShopperCurrency,
      adjustmentAmountInShopperCurrency,
      date,
      items,
      venueId,
      linkedReservationId,
      seats,
    } = basketItemData;

    this.id = id;
    this.quantity = quantity;
    this.productId = productId;
    this.productName = productName;
    this.productType = productType;
    this.faceValueInShopperCurrency = faceValueInShopperCurrency;
    this.adjustedSalePriceInShopperCurrency = adjustedSalePriceInShopperCurrency;
    this.salePriceInShopperCurrency = salePriceInShopperCurrency;
    this.adjustmentAmountInShopperCurrency = adjustmentAmountInShopperCurrency;
    this.date = date ? new Date(date) : null;
    this.rawDate = date;
    this.seats = items || seats;
    this.venueId = venueId;
    this.linkedReservationId = linkedReservationId || 0;
  }

  getId () {
    return this.id;
  }

  getQuantity () {
    return this.quantity;
  }

  getProductId () {
    return this.productId;
  }

  getProductName () {
    return this.productName;
  }

  isVoucher () {
    return this.productType === ProductType.GiftVoucher;
  }

  isPostage () {
    return this.productType === ProductType.Postage;
  }

  isFlexiticket () {
    return this.productType === ProductType.Flexitickets;
  }

  isShow () {
    return this.productType === ProductType.Show;
  }

  isAttraction () {
    return this.productType === ProductType.Attraction;
  }

  getProductType () {
    return this.productType;
  }

  getFaceValue () {
    return this.faceValueInShopperCurrency;
  }

  getSalePrice () {
    return this.adjustedSalePriceInShopperCurrency;
  }

  getOriginalSalePrice () {
    return this.salePriceInShopperCurrency;
  }

  getAdjustmentAmount () {
    return this.adjustmentAmountInShopperCurrency;
  }

  getFaceValueAmount () {
    return this.faceValueInShopperCurrency ? this.faceValueInShopperCurrency.value : null;
  }

  getSalePriceAmount () {
    return this.adjustedSalePriceInShopperCurrency.value;
  }

  getOriginalSalePriceAmount () {
    return this.salePriceInShopperCurrency.value;
  }

  hasDiscount () {
    const faceValueAmount = this.getFaceValueAmount();

    if (!faceValueAmount) {
      return false;
    }

    return faceValueAmount > this.getOriginalSalePriceAmount();
  }

  getPromotionDiscount () {
    return this.adjustmentAmountInShopperCurrency ? (this.quantity * this.adjustmentAmountInShopperCurrency.value) : 0;
  }

  hasPromotionDiscount () {
    return !!this.getPromotionDiscount();
  }

  getDiscount () {
    const hasDiscount = this.hasDiscount();

    return hasDiscount
      ? this.quantity * (this.getFaceValueAmount() - this.getOriginalSalePriceAmount())
      : 0;
  }

  getTotalPrice () {
    return this.quantity * this.getSalePriceAmount();
  }

  getTotalPriceWithoutPromotion () {
    return this.quantity * this.getOriginalSalePriceAmount();
  }

  getPriceBeforeDiscount () {
    const faceValueAmount = this.getFaceValueAmount();

    if (!faceValueAmount) {
      return 0;
    }

    return this.quantity * faceValueAmount;
  }

  getDate () {
    return this.date;
  }

  getRawDate () {
    return this.rawDate;
  }

  getSeats () {
    return this.seats;
  }

  async getProductDetails () {
    if (!this.isTicket()) {
      return null;
    }

    if (!this.productDetails) {
      this.productDetails = this.repository.getShowDetails(this.getProductId());
    }

    return this.productDetails;
  }

  getImages () {
    return this.repository.getImages(EntityType.Products, this.getProductId());
  }

  getVenueId () {
    return this.venueId;
  }

  isTicket () {
    return !this.isFlexiticket() && !this.isPostage();
  }

  async isUKShow () {
    const countryCode = await this.getCountryCode();

    return countryCode === BasketLocationType.UK;
  }

  async isUSShow () {
    const countryCode = await this.getCountryCode();

    return countryCode === BasketLocationType.USA;
  }

  async getCountryCode () {
    if (this.isVoucher()) {
      return BasketLocationType.UK;
    }

    const product = await this.getProductDetails();

    return product ? product.getVenue().getAddress().getCountry().getISOCode() : '';
  }

  hasLinkedPerformance () {
    return parseInt(this.linkedReservationId.toString(), 10) > 0;
  }

  getLinkedReservationId () {
    return this.linkedReservationId;
  }

  setQuantity (count: number) {
    this.quantity = count;
  }
}
