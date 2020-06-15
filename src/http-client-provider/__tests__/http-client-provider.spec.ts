import axios  from 'axios';

import { getHttpClient } from '../index';
import { getMockFunctionArguments } from '../../utils';

const baseUrl = 'http://test.com';
const use = jest.fn();

jest.mock('axios', () => ({
  create: jest.fn().mockImplementation(() => ({
    interceptors: {
      response: {
        use,
      },
    },
  })),
}));

let successInterceptor;
let errorInterceptor;

describe('Http client provider', () => {
  beforeEach(() => {
    getHttpClient(baseUrl);
    successInterceptor = getMockFunctionArguments(use)[0];
    errorInterceptor = getMockFunctionArguments(use)[1];
  });

  it('should provide base url to axios', () => {
    expect(axios.create).toBeCalledWith({ baseURL: baseUrl });
  });

  describe('success response decorator', () => {
    it('should decorate success response', () => {
      const responseData = 'test';
      const successResponse = {
        data: {
          response: responseData,
        },
      };

      expect(successInterceptor(successResponse)).toEqual({ data: responseData });
    });

    it('should decorate success response for old api', () => {
      const responseData = 'test';
      const successResponse = {
        data: {
          result: responseData,
        },
      };

      expect(successInterceptor(successResponse)).toEqual({ data: responseData });
    });

    it ('should return response', () => {
      const response = { test: 'test' };

      expect(successInterceptor(response)).toEqual(response);
    });
  });

  describe('fail response decorator', () => {
    const errors = [{
      code: 'error_code',
      message: 'Error message',
    }];
    const failResponse = {
      response: {
        data: {
          context: {
            errors,
          },
        },
        status: 1001,
        statusText: 'Error message',
      },
    };
    const failResponseWithoutData = {
      response: {
        data: '',
        status: 1001,
        statusText: 'Error message',
      },
    };

    it('should decorate fail response', () => {
      try {
        expect(errorInterceptor(failResponse))
      } catch (e) {
        expect(e).toEqual(errors[0]);
      }
    });

    it ('should return empty array', () => {
      const { status, statusText } = failResponseWithoutData.response;

      try {
        expect(errorInterceptor(failResponseWithoutData))
      } catch (e) {
        expect(e).toEqual({
          code: status,
          message: statusText,
        });
      }
    });
  });
});
