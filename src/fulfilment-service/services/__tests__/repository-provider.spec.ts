import { getFulfilmentServiceRepository } from '../repository-provider';
import { getFulfilmentServiceApi } from '../api-provider';
import { Environment } from '../../../shared/typings';

const getDeliveryOptionsData = jest.fn();

jest.mock('../api-provider', () => ({
  getFulfilmentServiceApi: jest.fn().mockImplementation(() => ({
    getDeliveryOptions: getDeliveryOptionsData,
  })),
}));

describe('Fulfilment repository', () => {
  const environment = Environment.Dev;
  const { _unstable_ } = getFulfilmentServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getFulfilmentServiceApi).toBeCalledWith(environment, undefined);
  });

  describe('getDeliveryOptions function', () => {
    it('should return delivery options', async () => {
      const channelId = 'encoretickets';
      const countryCode = 'UK';
      const basketItems = [];
      await _unstable_.getDeliveryOptions(channelId, countryCode, basketItems);
  
      expect(getDeliveryOptionsData).toBeCalledWith(channelId, countryCode, basketItems);
    });  
  });
});
