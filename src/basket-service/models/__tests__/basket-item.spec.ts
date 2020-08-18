import { BasketItem } from '../basket-item';
import { Product } from '../../../content-service/models';
import { ProductType, BasketLocationType } from '../../typings';
import { EntityType } from '../../../content-service/typings';
import { basketItemDataMock } from '../../__mocks__';
import { apiProductDataMock } from '../../../__mocks__/product-data';

const getRepositoryMock = {
  getShowDetails: jest.fn(() => Promise.resolve()),
  getImages: jest.fn(() => Promise.resolve()),
};

jest.mock('../../services/basket-details-repository-provider', () => ({
  basketDetailsRepositoryProvider: {
    getRepository: jest.fn(() => getRepositoryMock),
  },
}));

const getBasketItem = (customBasketItemProps = {}) => (
  new BasketItem({
    ...basketItemDataMock,
    ...customBasketItemProps,
  })
);

describe('Basket item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should set null in date if date is not presented', () => {
      expect(getBasketItem({ date: null }).getDate()).toBeNull();
    });
  });

  describe('getId function', () => {
    it('should get product id', () => {
      expect(getBasketItem().getId()).toBe('1');
    });
  });

  describe('getQuantity function', () => {
    it('should get quantity', () => {
      expect(getBasketItem().getQuantity()).toBe(10);
    });
  });

  describe('getProductId function', () => {
    it('should get product id', () => {
      expect(getBasketItem().getProductId()).toBe('1001');
    });
  });

  describe('getProductName function', () => {
    it('should get product name', () => {
      expect(getBasketItem().getProductName()).toBe('Wicked');
    });
  });

  describe('isVoucher function', () => {
    it('should get if product is voucher', () => {
      expect(getBasketItem({ productType: ProductType.GiftVoucher }).isVoucher()).toBe(true);
      expect(getBasketItem().isVoucher()).toBe(false);
    });
  });

  describe('isPostage function', () => {
    it('should get if product is postage', () => {
      expect(getBasketItem({ productType: ProductType.Postage }).isPostage()).toBe(true);
      expect(getBasketItem().isPostage()).toBe(false);
    });
  });

  describe('isFlexiticket function', () => {
    it('should get if product is flexiticket', () => {
      expect(getBasketItem({ productType: ProductType.Flexitickets }).isFlexiticket()).toBe(true);
      expect(getBasketItem().isFlexiticket()).toBe(false);
    });
  });

  describe('isShow function', () => {
    it('should get if product is show', () => {
      expect(getBasketItem().isShow()).toBe(true);
      expect(getBasketItem({ productType: ProductType.Postage }).isShow()).toBe(false);
    });
  });

  describe('isAttraction function', () => {
    it('should get if product is attraction', () => {
      expect(getBasketItem({ productType: ProductType.Attraction }).isAttraction()).toBe(true);
      expect(getBasketItem().isAttraction()).toBe(false);
    });
  });

  describe('getProductType function', () => {
    it('should get product type', () => {
      expect(getBasketItem().getProductType()).toBe(ProductType.Show);
    });
  });

  describe('getFaceValue function', () => {
    it('should get face value details', () => {
      expect(getBasketItem().getFaceValue()).toEqual({
        value: 100,
        currency: 'GBP',
      });
    });
  });

  describe('getSalePrice function', () => {
    it('should get sale price details', () => {
      expect(getBasketItem().getSalePrice()).toEqual({
        value: 50,
        currency: 'GBP',
      });
    });
  });

  describe('getOriginalSalePrice function', () => {
    it('should get original sale price details', () => {
      expect(getBasketItem().getOriginalSalePrice()).toEqual({
        value: 70,
        currency: 'GBP',
      });
    });
  });

  describe('getAdjustmentAmount function', () => {
    it('should get adjustment amount', () => {
      expect(getBasketItem().getAdjustmentAmount()).toEqual({
        value: 20,
        currency: 'GBP',
      });
    });
  });

  describe('getFaceValueAmount function', () => {
    it('should get product face value amount', () => {
      expect(getBasketItem().getFaceValueAmount()).toBe(100);
    });
  });

  describe('getSalePriceAmount function', () => {
    it('should get product sale price amount', () => {
      expect(getBasketItem().getSalePriceAmount()).toBe(50);
    });
  });

  describe('getOriginalSalePriceAmount function', () => {
    it('should get original sale price amount', () => {
      expect(getBasketItem().getOriginalSalePriceAmount()).toBe(70);
    });
  });

  describe('hasDiscount function', () => {
    it('should get discount availability', () => {
      expect(getBasketItem().hasDiscount()).toBe(true);
      expect(getBasketItem({
        productType: ProductType.Show,
        salePriceInShopperCurrency: {
          value: 100,
          currency: 'GBP',
        },
      }).hasDiscount()).toBe(false);
    });

    it('should return false if face value is not defined', () => {
      expect(getBasketItem({
        productType: ProductType.Show,
        faceValueInShopperCurrency: null,
      }).hasDiscount()).toBe(false);
    });
  });

  describe('getPromotionDiscount function', () => {
    it('should get promotion discount', () => {
      expect(getBasketItem().getPromotionDiscount()).toBe(200);
      expect(getBasketItem({ adjustmentAmountInShopperCurrency: null }).getPromotionDiscount()).toBe(0);
    });
  });

  describe('hasPromotionDiscount function', () => {
    it('should check that promotion discount is not 0', () => {
      expect(getBasketItem().hasPromotionDiscount()).toBe(true);
      expect(getBasketItem({ adjustmentAmountInShopperCurrency: null }).hasPromotionDiscount()).toBe(false);
    });
  });

  describe('getDiscount function', () => {
    it('should get discount', () => {
      expect(getBasketItem().getDiscount()).toBe(300);
    });

    it('should return 0 if there is no discount', () => {
      expect(getBasketItem({
        faceValueInShopperCurrency: { value: 100, currency: 'GBP' },
        salePriceInShopperCurrency: { value: 100, currency: 'GBP' },
      }).getDiscount()).toBe(0);
    });
  });

  describe('getTotalPrice function', () => {
    it('should get total price', () => {
      expect(getBasketItem().getTotalPrice()).toBe(500);
    });
  });

  describe('getTotalPriceWithoutPromotion function', () => {
    it('should get total price without promotion', () => {
      expect(getBasketItem().getTotalPriceWithoutPromotion()).toBe(700);
    });
  });

  describe('getPriceBeforeDiscount function', () => {
    it('should get price before discount value', () => {
      expect(getBasketItem().getPriceBeforeDiscount()).toBe(1000);
    });

    it('should return 0 if face value is not defined', () => {
      expect(getBasketItem({
        productType: ProductType.Show,
        faceValueInShopperCurrency: null,
      }).getPriceBeforeDiscount()).toBe(0);
    });
  });

  describe('getDate function', () => {
    it('should get date', () => {
      expect(getBasketItem().getDate()).toEqual(new Date('2020-01-01T19:30:00+02:00'));
    });
  });

  describe('getRawDate function', () => {
    it('should get raw date', () => {
      expect(getBasketItem().getRawDate()).toBe('2020-01-01T19:30:00+02:00');
    });
  });

  describe('getSeats function', () => {
    it('should get seats', () => {
      expect(getBasketItem().getSeats()).toBe(basketItemDataMock.items);
    });
  });

  describe('getProductDetails function', () => {
    it('should return null if basket item is not a ticket', async () => {
      expect(await getBasketItem({ productType: ProductType.Postage }).getProductDetails()).toBeNull();
    });

    it('should request product details from repository', async () => {
      await getBasketItem().getProductDetails();

      expect(getRepositoryMock.getShowDetails).toHaveBeenCalledTimes(1);
      expect(getRepositoryMock.getShowDetails).toHaveBeenCalledWith('1001');
    });

    it('should not request product details on second call', async () => {
      const basketItem = getBasketItem();
      await basketItem.getProductDetails();
      await basketItem.getProductDetails();

      expect(getRepositoryMock.getShowDetails).toHaveBeenCalledTimes(1);
    });
  });

  describe('getImages function', () => {
    it('should request images from repository', async () => {
      await getBasketItem().getImages();

      expect(getRepositoryMock.getImages).toHaveBeenCalledTimes(1);
      expect(getRepositoryMock.getImages).toHaveBeenCalledWith(EntityType.Products, '1001');
    });
  });

  describe('getVenueId function', () => {
    it('should get venue id', () => {
      expect(getBasketItem().getVenueId()).toBe('199');
    });
  });

  describe('isTicket function', () => {
    it('should check that basket item is ticket', () => {
      expect(getBasketItem().isTicket()).toBe(true);
      expect(getBasketItem({ productType: ProductType.GiftVoucher }).isTicket()).toBe(true);
      expect(getBasketItem({ productType: ProductType.Postage }).isTicket()).toBe(false);
      expect(getBasketItem({ productType: ProductType.Flexitickets }).isTicket()).toBe(false);
    });
  });

  describe('isUKShow function', () => {
    it('should return true if product is voucher', async () => {
      expect(await getBasketItem({ productType: ProductType.GiftVoucher }).isUKShow()).toBe(true);
    });

    it('should return false if product does not exist', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(null));

      expect(await getBasketItem().isUKShow()).toBe(false);
    });

    it('should return true if product venue iso code is GBR', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(new Product(apiProductDataMock)) as any);

      expect(await getBasketItem().isUKShow()).toBe(true);
    });
  });

  describe('isUSShow function', () => {
    it('should return false since vouchers are available in UK only', async () => {
      expect(await getBasketItem({ productType: ProductType.GiftVoucher }).isUSShow()).toBe(false);
    });

    it('should return false if product does not exist', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(null));

      expect(await getBasketItem().isUSShow()).toBe(false);
    });

    it('should return false if product venue iso code is GBR', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(new Product(apiProductDataMock)) as any);

      expect(await getBasketItem().isUSShow()).toBe(false);
    });
  });

  describe('getCountryCode function', () => {
    it('should return UK for voucher', async () => {
      expect(await getBasketItem({ productType: ProductType.GiftVoucher }).getCountryCode()).toBe(BasketLocationType.UK);
    });

    it('should return empty string if product does not exist', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(null));

      expect(await getBasketItem().getCountryCode()).toBe('');
    });

    it('should return true if product venue iso code is GBR', async () => {
      getRepositoryMock.getShowDetails.mockImplementationOnce(() => Promise.resolve(new Product(apiProductDataMock)) as any);

      expect(await getBasketItem().getCountryCode()).toBe('GBR');
    });
  });

  describe('hasLinkedPerformance function', () => {
    it('should check that basket item has linked performance', () => {
      expect(getBasketItem().hasLinkedPerformance()).toBe(false);
      expect(getBasketItem({ linkedReservationId: '1' }).hasLinkedPerformance()).toBe(true);
    });
  });

  describe('getLinkedReservationId function', () => {
    it('should check that basket item has linked performance', () => {
      const linkedReservationId = '1';

      expect(getBasketItem().getLinkedReservationId()).toBe(0);
      expect(getBasketItem({ linkedReservationId }).getLinkedReservationId()).toBe(linkedReservationId);
    });
  });

  describe('setQuantity function', () => {
    it('should set quantity', async () => {
      const basketItem = getBasketItem();

      basketItem.setQuantity(1);

      expect(basketItem.getQuantity()).toBe(1);
    });
  });
});
