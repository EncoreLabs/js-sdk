import { getBasketServiceApi } from './api-provider';
import { basketDetailsRepositoryProvider } from './basket-details-repository-provider';
import { Basket, BasketItemsCollection, Delivery } from '../models';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, Settings, SourceInformation } from '../../shared/typings';
import { RequestBasketData, DeliveryData, BasketItemData, BasketData, UpsellApiProductData } from '../typings';

export const getBasketServiceRepository = (
  environment: Environment,
  settings?: Settings,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getBasketServiceRepository: environment');

  const basketApi = getBasketServiceApi(environment, settings?.basketApiUrl, sourceInformation);

  basketDetailsRepositoryProvider.setEnvironment(environment, settings, sourceInformation);

  const getBasket = async (reference: string, channelId?: string) => {
    checkRequiredProperty(reference, 'getBasket: basket reference');

    const basketData = await basketApi.getBasket(reference, channelId);

    return new Basket(basketData);
  };

  const createBasket = async (basketData: RequestBasketData) => {
    checkRequiredProperty(basketData, 'createBasket: basket data');

    const responseBasketData = await basketApi.upsertBasket(basketData);

    return new Basket(responseBasketData as BasketData);
  };

  const getDeliveries = async (basketReference: string, basketItems: BasketItemsCollection, channelId?: string) => {
    checkRequiredProperty(basketReference, 'getDeliveries: basket reference');
    checkRequiredProperty(basketItems, 'getDeliveries: basket items collection');

    const deliveries = await basketApi.getDeliveries(basketReference, channelId);

    return deliveries.map(deliveryData => new Delivery(deliveryData, basketItems));
  };

  const setSelectedDelivery = async (basket: Basket, selectedDelivery: DeliveryData) => {
    checkRequiredProperty(basket, 'setSelectedDelivery: basket');
    checkRequiredProperty(selectedDelivery, 'setSelectedDelivery: selected delivery data');

    let requestBasketData = basket.getBasketData();

    requestBasketData.delivery = selectedDelivery;
    requestBasketData = { ...requestBasketData, ...basket.prepareBasketData()};

    const responseBasketData = await basketApi.upsertBasket(requestBasketData);

    return new Basket(responseBasketData as BasketData);
  };

  const addItems = async (basket: Basket, basketItems: BasketItemData[]) => {
    checkRequiredProperty(basket, 'addItems: basket');
    checkRequiredProperty(basketItems, 'addItems: basket items collection');

    let requestBasketData = basket.getBasketData();

    requestBasketData.reservations = requestBasketData.reservations.concat(basketItems);
    requestBasketData = { ...requestBasketData, ...basket.prepareBasketData()};

    const responseBasketData = await basketApi.upsertBasket(requestBasketData);

    return new Basket(responseBasketData as BasketData);
  };

  const replaceItems = async (basket: Basket, basketItems: BasketItemData[]) => {
    checkRequiredProperty(basket, 'replaceItems: basket');
    checkRequiredProperty(basketItems, 'replaceItems: basket items collection');

    await clearBasket(basket.getReference(), basket.getChannelId());

    let requestBasketData = basket.getBasketData();

    requestBasketData = {
      ...requestBasketData,
      ...basket.replaceBasketData(basketItems),
    };

    delete requestBasketData.reference;

    return await createBasket(requestBasketData);
  };

  const removeItem = async (basketReference: string, itemId: number, channelId?: string) => {
    checkRequiredProperty(basketReference, 'removeItem: basket reference');
    checkRequiredProperty(itemId, 'removeItem: item id');

    const responseBasketData = await basketApi.deleteItem(basketReference, itemId, channelId);

    return new Basket(responseBasketData);
  };

  const addPromoCode = async (basket: Basket, promoCode: string) => {
    checkRequiredProperty(basket, 'addPromoCode: basket');
    checkRequiredProperty(promoCode, 'addPromoCode: promo code');

    let requestBasketData = basket.getBasketData();

    requestBasketData.coupon = { code: promoCode };
    requestBasketData = { ...requestBasketData, ...basket.prepareBasketData()};

    const responseBasketData = await basketApi.upsertBasket(requestBasketData);

    return new Basket(responseBasketData as BasketData);
  };

  const removePromoCode = async (basket: Basket) => {
    checkRequiredProperty(basket, 'removePromoCode: basket');

    let requestBasketData = basket.getBasketData();

    requestBasketData.coupon = null;
    requestBasketData = { ...requestBasketData, ...basket.prepareBasketData()};

    const responseBasketData = await basketApi.upsertBasket(requestBasketData);

    return new Basket(responseBasketData as BasketData);
  };

  const setUpsellProducts = async (basket: Basket, upsellProducts: UpsellApiProductData) => {
    checkRequiredProperty(basket, 'setUpsellProducts: basket');
    checkRequiredProperty(upsellProducts, 'setUpsellProducts: upsell products data');

    let requestBasketData = basket.getBasketData();
    requestBasketData = { ...requestBasketData, ...basket.prepareBasketData(upsellProducts)};
    const responseBasketData = await basketApi.upsertBasket(requestBasketData);

    return new Basket(responseBasketData as BasketData);
  };

  const upsertBasket = async (basket: Basket, basketData?: BasketData) => {
    const requestBasketData = basketData || basket.getBasketData();
    const responseBasketData = await basketApi.upsertBasket({
      ...requestBasketData,
      ...basket.prepareBasketData(),
    });

    return new Basket(responseBasketData as BasketData);
  };

  const clearBasket = async (basketReference: string, channelId?: string) => {
    checkRequiredProperty(basketReference, 'clearBasket: basket reference');

    const responseBasketData = await basketApi.clearBasket(basketReference, channelId);

    if (!responseBasketData) {
      return null;
    }

    return new Basket(responseBasketData);
  };

  return {
    getBasket,
    createBasket,
    getDeliveries,
    setSelectedDelivery,
    addItems,
    removeItem,
    addPromoCode,
    removePromoCode,
    replaceItems,
    upsertBasket,
    clearBasket,

    _unstable_: {
      setUpsellProducts,
    }
  };
};
