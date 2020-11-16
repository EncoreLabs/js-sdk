import { getBasketServiceRepository } from '../repository-provider';
import { getBasketServiceApi } from '../api-provider';
import { Basket, BasketItemsCollection, Delivery } from '../../models';
import { getMockFunctionArguments } from '../../../utils';
import { basketDataMock, deliveriesMock, basketItemDataMock } from '../../__mocks__';
import { Environment } from '../../../shared/typings'
import { BasketData, DeliveryMethod } from '../../typings';

const getBasketData = jest.fn().mockImplementation(() => basketDataMock);
const getDeliveriesData = jest.fn().mockImplementation(() => deliveriesMock);
const upsertBasketData = jest.fn().mockImplementation((requestBasketData: BasketData) => requestBasketData);
const deleteItem = jest.fn().mockImplementation(() => {
  basketDataMock.reservations.shift();

  return basketDataMock;
});
const clearBasketData = jest.fn().mockImplementation(() => null);

const mockBasket = (forUpsells?: boolean) => {
  (Basket as any).mockImplementation(() => ({
    getBasketData: () => basketDataMock,
    getReference: () => basketDataMock.reference,
    getItemsCollection: () => new BasketItemsCollection(basketDataMock.reservations),
    prepareBasketData: forUpsells ? jest.fn() : () => basketDataMock,
    replaceBasketData: () => basketDataMock,
    upsertBasket: () => basketDataMock,
  }));
};

jest.mock('../api-provider', () => ({
  getBasketServiceApi: jest.fn().mockImplementation(() => ({
    getBasket: getBasketData,
    getDeliveries: getDeliveriesData,
    upsertBasket: upsertBasketData,
    deleteItem,
    clearBasket: clearBasketData,
  })),
}));
jest.mock('../../models/delivery');
jest.mock('../../models/basket');

describe('Basket repository', () => {
  const environment = Environment.Dev;
  const settings = {
    basketApiUrl: 'basketApiUrl',
    contentApiUrl: 'contentApiUrl',
    contentImagesUrl: 'contentImagesUrl',
  };
  const {
    getBasket,
    getDeliveries,
    createBasket,
    addItems,
    removeItem,
    replaceItems,
    setSelectedDelivery,
    addPromoCode,
    removePromoCode,
    upsertBasket,
    clearBasket,
    _unstable_,
  } = getBasketServiceRepository(environment);
  const { setUpsellProducts } = _unstable_;

  beforeEach(() => {
    jest.clearAllMocks();
    getBasketServiceRepository(environment);
  });

  it('should create api for specific environment', () => {
    expect(getBasketServiceApi).toBeCalledWith(environment, undefined, {});
  });

  it('should create api for specific apiUrl', () => {
    getBasketServiceRepository(environment, settings);

    expect(getBasketServiceApi).toBeCalledWith(environment, settings.basketApiUrl, {});
  });

  it('should return basket', async () => {
    const reference = 'test';
    await getBasket(reference);

    expect(getBasketData).toBeCalledWith(reference, undefined);
    expect(Basket).toBeCalledWith(basketDataMock);
  });

  it('should return basket with channel id', async () => {
    const reference = 'test';
    const channelId = 'channel';
    await getBasket(reference, channelId);

    expect(getBasketData).toBeCalledWith(reference, channelId);
    expect(Basket).toBeCalledWith(basketDataMock);
  });

  it('should return deliveriesMock', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const reference = basket.getReference();
    const basketCollection = basket.getItemsCollection();

    await getDeliveries(reference, basketCollection);

    const [ deliveryData, itemsToDeliver ] = getMockFunctionArguments(Delivery);

    expect(getDeliveriesData).toBeCalledWith(reference, undefined);
    expect(Delivery).toBeCalledTimes(2);
    expect(deliveryData).toEqual(deliveriesMock[0]);
    expect(itemsToDeliver).toEqual(basketCollection);
  });

  it('should return deliveriesMock', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const reference = basket.getReference();
    const channelId = 'channel';
    const basketCollection = basket.getItemsCollection();

    await getDeliveries(reference, basketCollection, channelId);

    const [ deliveryData, itemsToDeliver ] = getMockFunctionArguments(Delivery);

    expect(getDeliveriesData).toBeCalledWith(reference, channelId);
    expect(Delivery).toBeCalledTimes(2);
    expect(deliveryData).toEqual(deliveriesMock[0]);
    expect(itemsToDeliver).toEqual(basketCollection);
  });

  it('should create basket', async () => {
    jest.mock('../../models/basket');
    await createBasket(basketDataMock);

    expect(upsertBasketData).toBeCalledWith(basketDataMock);
    expect(Basket).toBeCalledWith(basketDataMock);
  });

  it('should add items', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    await addItems(basket, [basketItemDataMock, basketItemDataMock]);
    const callArguments = getMockFunctionArguments(upsertBasketData);

    expect(callArguments.length).toBe(1);
    expect((callArguments[0] as BasketData).reservations.length).toBe(4);
  });

  it('should remove item', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const itemId = 2;

    await removeItem(basket.getReference(), itemId);

    const callArguments = getMockFunctionArguments(deleteItem);

    expect(callArguments.length).toBe(3);
    expect(callArguments[0]).toBe(basketDataMock.reference);
    expect(callArguments[1]).toBe(itemId);
    expect(callArguments[2]).toBe(undefined);
  });

  it('should remove item with channel id', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const channelId = 'channel';
    const itemId = 2;

    await removeItem(basket.getReference(), itemId, channelId);

    const callArguments = getMockFunctionArguments(deleteItem);

    expect(callArguments.length).toBe(3);
    expect(callArguments[0]).toBe(basketDataMock.reference);
    expect(callArguments[1]).toBe(itemId);
    expect(callArguments[2]).toBe(channelId);
  });

  it('should replace item', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    await replaceItems(basket, [basketItemDataMock]);
    const callArguments = getMockFunctionArguments(upsertBasketData);

    expect(callArguments.length).toBe(1);
    expect((callArguments[0] as BasketData).reservations.length).toBe(2);
  });

  it('should set selected delivery', async () => {
    mockBasket();

    const deliveryData = {
      method: DeliveryMethod.Eticket,
      charge: {
        value: 200,
        currency: 'USD',
      },
    };
    const basket = new Basket(basketDataMock);

    expect(basket.getBasketData().delivery).toEqual(basketDataMock.delivery);

    await setSelectedDelivery(basket, deliveryData);

    expect(basket.getBasketData().delivery).toEqual(deliveryData);
  });

  it('should add promo code', async () => {
    mockBasket();

    const promoCode = 'PROMO_CODE';
    const basket = new Basket(basketDataMock);

    expect(basket.getBasketData().coupon).toBe(basketDataMock.coupon);

    await addPromoCode(basket, promoCode);

    expect(basket.getBasketData().coupon).toEqual({ code: promoCode });
  });

  it('should remove promo code', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);

    expect(basket.getBasketData().coupon).toBe(basketDataMock.coupon);

    await removePromoCode(basket);

    expect(basket.getBasketData().coupon).toBeNull();
  });

  it('should set upsell products', async () => {
    mockBasket(true);

    const upsellProducts = {
      'productId': [{
        aggregateReference: 'aggregateReference',
        productType: 'productType',
      }],
    };
    const basket = new Basket(basketDataMock);

    await setUpsellProducts(basket, upsellProducts);

    const callArguments = getMockFunctionArguments(upsertBasketData);

    expect(basket.prepareBasketData).toBeCalledWith(upsellProducts);
    expect(callArguments.length).toBe(1);
  });

  describe('upsertBasket function', () => {
    it('should upsert basket', async () => {
      mockBasket();

      const basket = new Basket(basketDataMock);
      await upsertBasket(basket);
      const callArguments = getMockFunctionArguments(upsertBasketData);

      expect(callArguments.length).toBe(1);
      expect((callArguments[0] as BasketData).reservations.length).toBe(2);
    })
  });

  describe('clearBasket function', () => {
    it('should clear basket', async () => {
      mockBasket();

      const basket = new Basket(basketDataMock);

      await clearBasket(basket.getReference());

      const callArguments = getMockFunctionArguments(clearBasketData);

      expect(callArguments.length).toBe(2);
      expect(callArguments[0]).toBe(basketDataMock.reference);
      expect(callArguments[1]).toBe(undefined);
    });

    it('should return basket model if basket still exist after delete', async () => {
      mockBasket();
      clearBasketData.mockImplementationOnce(() => basketDataMock);

      const basket = new Basket(basketDataMock);

      await clearBasket(basket.getReference());

      expect(Basket).toHaveBeenCalledWith(basketDataMock);
    });
  });
});
