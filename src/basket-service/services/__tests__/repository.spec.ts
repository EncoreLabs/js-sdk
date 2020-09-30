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

const mockBasket = (forUpsells?: boolean) => {
  (Basket as any).mockImplementation(() => ({
    getBasketData: () => basketDataMock,
    getReference: () => basketDataMock.reference,
    getItemsCollection: () => new BasketItemsCollection(basketDataMock.reservations),
    prepareBasketData: forUpsells ? jest.fn() : () => basketDataMock,
    replaceBasketData: () => basketDataMock,
  }));
};

jest.mock('../api-provider', () => ({
  getBasketServiceApi: jest.fn().mockImplementation(() => ({
    getBasket: getBasketData,
    getDeliveries: getDeliveriesData,
    upsertBasket: upsertBasketData,
    deleteItem,
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
    _unstable_,
  } = getBasketServiceRepository(environment);
  const { setUpsellProducts } = _unstable_;

  beforeEach(() => {
    jest.clearAllMocks();
    getBasketServiceRepository(environment);
  });

  it('should create api for specific environment', () => {
    expect(getBasketServiceApi).toBeCalledWith(environment, undefined, undefined);
  });

  it('should create api for specific apiUrl', () => {
    getBasketServiceRepository(environment, settings, '');

    expect(getBasketServiceApi).toBeCalledWith(environment, settings.basketApiUrl, '');
  });

  it('should return basket', async () => {
    const reference = 'test';
    await getBasket(reference);

    expect(getBasketData).toBeCalledWith(reference);
    expect(Basket).toBeCalledWith(basketDataMock);
  });

  it('should return deliveriesMock', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const reference = basket.getReference();
    const basketCollection = basket.getItemsCollection();

    await getDeliveries(reference, basketCollection);

    const [ deliveryData, itemsToDeliver ] = getMockFunctionArguments(Delivery);

    expect(getDeliveriesData).toBeCalledWith(reference);
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

  it('should add item', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    await addItems(basket, [basketItemDataMock]);
    const callArguments = getMockFunctionArguments(upsertBasketData);

    expect(callArguments.length).toBe(1);
    expect((callArguments[0] as BasketData).reservations.length).toBe(3);
  });

  it('should remove item', async () => {
    mockBasket();

    const basket = new Basket(basketDataMock);
    const itemId = 2;

    await removeItem(basket.getReference(), itemId);

    const callArguments = getMockFunctionArguments(deleteItem);

    expect(callArguments.length).toBe(2);
    expect(callArguments[0]).toBe(basketDataMock.reference);
    expect(callArguments[1]).toBe(itemId);
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
});
