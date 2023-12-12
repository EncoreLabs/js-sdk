# TTE JS SDK

[Developer portal](https://developer.encore.co.uk/)

## Installation

Using npm:
```shell
$ npm i tte-api-services
```

```js
// In Browser:
var { contentService } = require('tte-api-services');
// or
import { contentService } from 'tte-api-services';
// or
import apiServices from 'tte-api-services';

// In Node.js:
var { contentService } = require('tte-api-services/node');
// or
import { contentService } from 'tte-api-services/node';
// or
import apiServices from 'tte-api-services/node';
```

**Usage:**
1) Import service object
2) Call *create* function to get service methods configured for specific environment

`*` All requests in the services methods are asynchronous  
`**` Params in the square brackets are non-mandatory  

------------------------------------------------------------------------
## Basket Service
[Basket Service in the developer portal](https://developer.encore.co.uk/basket-service/api)

### basketService.create(environment, [settings], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [settings] | Settings |
| [sourceInformation] | SourceInformation | 

```typescript
interface Settings {
    basketApiUrl?: string;
}

interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* getBasket(reference, [channelId], returnTTId) ⇒ Basket
* createBasket(basketData, returnTTId) ⇒ Basket
* getDeliveries(basketReference, basketItems, [channelId]) ⇒ Array&lt;Delivery&gt;
* setSelectedDelivery(basket, selectedDelivery) ⇒ Basket
* addItems(basket, basketItems, returnTTId) ⇒ Basket
* replaceItems(basket, basketItems, returnTTId) ⇒ Basket
* removeItem(basketReference, itemId, [channelId]) ⇒ Basket
* addPromoCode(basket, promoCode, returnTTId) ⇒ Basket
* removePromoCode(basket, returnTTId) ⇒ Basket
* clearBasket(basketReference, [channelId]) ⇒ Basket

#### ➥ getBasket(reference, [channelId], returnTTId) ⇒ Basket
*Get basket by reference*
**Returns**: Basket - *basket model*  

| Param       | Type   |
|-------------|--------|
| reference   | string | 
| [channelId] | string | 
| returnTTId  | bool   | 

#### ➥ createBasket(basketData, returnTTId) ⇒ Basket
*Create new basket*
**Returns**: Basket - *basket model*  

| Param      | Type              |
|------------|-------------------|
| basketData | RequestBasketData | 
| returnTTId | bool              | 

```typescript
interface RequestBasketData {
    channelId: string;
    reservations: RequestBasketItemData[];
    reference?: string;
    checksum?: string;
    delivery?: DeliveryData;
    createdAt?: string;
    expiredAt?: string;
    status?: BasketStatus;
    coupon?: CouponData;
    shopperReference?: string;
    shopperCurrency?: string;
    exchangeRate?: number;
}

interface RequestBasketItemData {
    productId: string;
    venueId: string;
    quantity: number;
    items: RequestSeat[];
    date: string; /* date format: 'YYYY-MM-DDTHH:mm:ssZ' */
    id?: string;
    productName?: string;
    productType?: ProductType;
    venueName?: string;
    adjustedSalePriceInShopperCurrency?: Amount;
    faceValueInShopperCurrency?: Amount | null;
    adjustmentAmountInShopperCurrency?: Amount;
    salePriceInShopperCurrency?: Amount;
    feeInShopperCurrency?: Amount | null;
    deliveryFeeInShopperCurrency?: Amount | null;
}

interface RequestSeat {
    aggregateReference: string;
    blockId?: string;
    blockName?: string;
    row?: string;
    number?: string;
    locationDescription?: string;
}

interface Amount {
    value: number;
    currency: string;
    decimalPlaces?: number;
}

enum ProductType {
    Show = "SHW",
    Attraction = "ATT",
    Flexitickets = "FLX",
    GiftVoucher = "GVC",
    Postage = "PST"
}
```

#### ➥ getDeliveries(basketReference, basketItems, [channelId]) ⇒ Array&lt;Delivery&gt;
*Get delivery options available for basket*
**Returns**: Array&lt;Delivery&gt; - *delivery models*  

| Param | Type |
| --- | --- |
| basketReference | string | 
| basketItems | BasketItemsCollection | 
| [channelId] | string | 

#### ➥ setSelectedDelivery(basket, selectedDelivery) ⇒ Basket
*Set delivery option*
**Returns**: Basket - *basket*  

| Param | Type |
| --- | --- |
| basket | Basket | 
| selectedDelivery | DeliveryData | 

```typescript
interface DeliveryData {
    method: DeliveryMethod;
    charge: Amount;
}

enum DeliveryMethod {
    Collection = "collection",
    Postage = "postage",
    Eticket = "eticket",
    Evoucher = "evoucher",
    PrintBoxOffice = 'print_box_office',
    HandDelivered = 'hand_delivered', 
    DelayedBarcode = 'delayed_barcode',
    Streaming = 'streaming',
    Supplier = 'supplier',
}

interface Amount {
    value: number;
    currency: string;
    decimalPlaces?: number;
}
```

#### ➥ addItems(basket, basketItems, returnTTId) ⇒ Basket
*Add item to the basket*
**Returns**: Basket - *basket*  

| Param       | Type                        |
|-------------|-----------------------------|
| basket      | Basket                      | 
| basketItems | Array&lt;BasketItemData&gt; | 
| returnTTId  | bool                        | 

```typescript
interface BasketItemData {
    id: string;
    productId: string;
    productName: string;
    productType: ProductType;
    venueId: string;
    venueName: string;
    date: string; /* date format: 'YYYY-MM-DDTHH:mm:ssZ' */
    quantity: number;
    items: ReservationSeat[];
    adjustedSalePriceInShopperCurrency: Amount;
    salePriceInShopperCurrency: Amount;
    faceValueInShopperCurrency: Amount | null;
    adjustmentAmountInShopperCurrency: Amount;
    feeInShopperCurrency: Amount | null;
    deliveryFeeInShopperCurrency: Amount | null;
    linkedReservationId?: number;
    seats?: ReservationSeat[];
}

enum ProductType {
    Show = "SHW",
    Attraction = "ATT",
    Flexitickets = "FLX",
    GiftVoucher = "GVC",
    Postage = "PST"
}

interface ReservationSeat {
    aggregateReference: string;
    areaId: string;
    areaName: string;
    row: string;
    number: string;
    locationDescription: string;
}

interface Amount {
    value: number;
    currency: string;
    decimalPlaces?: number;
}
```

#### ➥ replaceItems(basket, basketItems, returnTTId) ⇒ Basket
*Replace items in basket with new items*
**Returns**: Basket - *basket*  

| Param       | Type                        |
|-------------|-----------------------------|
| basket      | Basket                      | 
| basketItems | Array&lt;BasketItemData&gt; | 
| returnTTId  | bool                        | 

```typescript
interface BasketItemData {
    id: string;
    productId: string;
    productName: string;
    productType: ProductType;
    venueId: string;
    venueName: string;
    date: string; /* date format: 'YYYY-MM-DDTHH:mm:ssZ' */
    quantity: number;
    items: ReservationSeat[];
    adjustedSalePriceInShopperCurrency: Amount;
    salePriceInShopperCurrency: Amount;
    faceValueInShopperCurrency: Amount | null;
    adjustmentAmountInShopperCurrency: Amount;
    feeInShopperCurrency: Amount | null;
    deliveryFeeInShopperCurrency: Amount | null;
    linkedReservationId?: number;
    seats?: ReservationSeat[];
}

enum ProductType {
    Show = "SHW",
    Attraction = "ATT",
    Flexitickets = "FLX",
    GiftVoucher = "GVC",
    Postage = "PST"
}

interface ReservationSeat {
    aggregateReference: string;
    areaId: string;
    areaName: string;
    row: string;
    number: string;
    locationDescription: string;
}

interface Amount {
    value: number;
    currency: string;
    decimalPlaces?: number;
}
```

#### ➥ removeItem(basketReference, itemId, [channelId]) ⇒ Basket
*Remove item from the basket*
**Returns**: Basket - *basket*  

| Param | Type |
| --- | --- |
| basketReference | string | 
| itemId | number | 
| [channelId] | string | 

#### ➥ addPromoCode(basket, promoCode, returnTTId) ⇒ Basket
*Apply promo code*
**Returns**: Basket - *basket*  

| Param      | Type   |
|------------|--------|
| basket     | Basket | 
| promoCode  | string | 
| returnTTId | bool   | 

#### ➥ removePromoCode(basket, returnTTId) ⇒ Basket
*Remove promo code*
**Returns**: Basket - *basket*  

| Param      | Type   |
|------------|--------|
| basket     | Basket |
| returnTTId | bool   |

#### ➥ clearBasket(basketReference, [channelId]) ⇒ Basket
*Remove all items from basket*
**Returns**: Basket - *basket*  

| Param | Type |
| --- | --- |
| basketReference | string | 
| [channelId] | string | 

------------------------------------------------------------------------

## Checkout Service
[Checkout Service in the developer portal](https://developer.encore.co.uk/checkout-service/api-reference)

### checkoutService.create(environment, [checkoutApiUrl], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [checkoutApiUrl] | string | 
| [sourceInformation] | SourceInformation | 

```typescript
interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* createOrder(bookingData, [channelId]) ⇒ Order;
* confirmBooking(reference, channelId, paymentId, [agentDetails]) ⇒ ApiConfirmBooking;

#### ➥ createOrder(bookingData, [channelId]) ⇒ Order;
*create new Order*
**Returns**: Order - *new order model* 

| Param | Type |
| --- | --- |
| bookingData | ApiBookingData |
| [channelId] | string | 

```typescript
interface ApiBookingData {
    channelId: string;
    billingAddress: ApiAddress;
    deliveryMethod: ApiDeliveryMethodCheckout;
    redirectUrl: string;
    reference: string;
    shopper: ApiShopper;
    origin?: string;
    deliveryCharge?: number;
    recipientName?: string;
    giftVoucherMessage?: string;
    hasFlexiTickets?: boolean;
    paymentType?: PaymentType;
    deliveryAddress?: ApiAddress;
}

type ApiDeliveryMethodCheckout = 'C' | 'E' | 'M';

interface ApiShopper {
    firstName: string;
    lastName: string;
    email?: string;
    title?: string;
    telephoneNumber?: string;
    externalId?: string;
}

interface ApiAddress {
    countryCode: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
    state?: string;
    city?: string;
    countryName?: string;
    stateOrProvince?: string;
}

enum PaymentType {
    Card = 'card',
    Amex = 'amex',
    Paypal = 'paypal',
    Account = 'account',
    Alipay = 'alipay',
    Wechatpay = 'wechatpay',
}
```

#### ➥ confirmBooking(reference, channelId, paymentId, [agentDetails]) ⇒ ApiConfirmBooking
*Confirm booking*
**Returns**: ApiConfirmBooking - *API booking confirmation response* 

| Param | Type |
| --- | --- |
| reference | string | 
| channelId | string | 
| paymentId | string | 
| [agentDetails] | ApiConfirmBookingAgentDetails | 

```typescript
interface ApiConfirmBookingAgentDetails {
    agentId: string;
    agentPassword: string;
}
```

------------------------------------------------------------------------
## Content Service
[Content Service in the developer portal](https://developer.encore.co.uk/content-service/api-reference)

### contentService.create(environment, [settings], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [settings] | Settings | 
| [sourceInformation] | SourceInformation | 

```typescript
interface Settings {
    contentApiUrl?: string;
    contentImagesUrl?: string;
}

interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* getProducts(page, limit) ⇒ Array&lt;Product&gt;
* getProduct(productId, getContentFromV3) ⇒ Product
* getProductFromV3(productId) ⇒ ProductV3
* getImages(entityType, entityId, orientation) ⇒ Array&lt;Image&gt;

#### ➥ getProducts([page], [limit]) ⇒ Array&lt;Product&gt;
*Get list of products*
**Returns**: Array&lt;Product&gt; - *product models* 

| Param | Type |
| --- | --- |
| [page] | number | 
| [limit] | number |

#### ➥ getProduct(productId, getContentFromV3) ⇒ Product
*Get product details*
**Returns**: Product - *product model* 

| Param            | Type   |
|------------------|--------|
| productId        | string | 
| getContentFromV3 | bool   | 

#### ➥ getProductFromV3(productId) ⇒ ProductV3
*Get product from V3 details*
**Returns**: ProductV3 - *product model*

| Param            | Type   |
|------------------|--------|
| productId        | string |

#### ➥ getImages(entityType, entityId, [orientation]) ⇒ Array&lt;Image&gt;
*Get list of images*
**Returns**: Array&lt;Image&gt; - *image models* 

| Param | Type |
| --- | --- |
| entityType | EntityType | 
| entityId | string |
| [orientation] | ImageOrientation |

```typescript
enum EntityType {
    Products = "products"
}

enum ImageOrientation {
    Square = "square",
    Landscape = "landscape",
    Portrait = "portrait",
    Default = "default"
}
```

------------------------------------------------------------------------
## Inventory Service
[Inventory Service in the developer portal](https://developer.encore.co.uk/inventory-service/api-reference)

### inventoryService.create(environment, [inventoryApiUrl], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [inventoryApiUrl] | string | 
| [sourceInformation] | SourceInformation | 

```typescript
interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* getPerformanceAvailability(affiliateId, productId, quantity, date, time) ⇒ Availability
* getMaxQuantity(productId, [affiliateId]) ⇒ number
* getSummaryAvailability(affiliateId, productId, quantity, fromDate, toDate) ⇒ SummaryAvailability

#### ➥ getPerformanceAvailability(affiliateId, productId, quantity, date, time) ⇒ Availability
*Get performance availability*
**Returns**: Availability - *performance availability models* 

| Param | Type |
| --- | --- |
| affiliateId | string | 
| productId | string | 
| quantity | number |
| date | string (YYYYMMDD) |
| time | string (HHmm) |

#### ➥ getMaxQuantity(productId, affiliateId) ⇒ number
*Get max quantity*
**Returns**: number - *max quantity* 

| Param | Type |
| --- | --- |
| productId | string | 
| [affiliateId] | string | 

#### ➥ getSummaryAvailability(affiliateId, productId, quantity, fromDate, toDate) ⇒ SummaryAvailability
*Get summary availability*
**Returns**: SummaryAvailability - *summary availability models* 

| Param | Type |
| --- | --- |
| affiliateId | string | 
| productId | string | 
| quantity | number |
| fromDate | string (YYYYMMDD) |
| toDate | string (YYYYMMDD) |

------------------------------------------------------------------------
## Pricing Service
[Pricing Service in the developer portal](https://developer.encore.co.uk/pricing-service/api-reference)

### pricingService.create(environment, [pricingApiUrl], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [pricingApiUrl] | string | 
| [sourceInformation] | SourceInformation | 

```typescript
interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* getFromPrices(productId) ⇒ Array&lt;FromPrices&gt;

#### ➥ getFromPrices(productId) ⇒ Array&lt;FromPrices&gt;
*Get list of from prices*
**Returns**: Array&lt;FromPrices&gt; - *from prices models* 

| Param | Type |
| --- | --- |
| productId | string | 

------------------------------------------------------------------------
## Venue Service
[Venue Service in the developer portal](https://developer.encore.co.uk/venue-service/api-reference)

### venueService.create(environment, [venueApiUrl], [sourceInformation])

| Param | Type |
| --- | --- |
| environment | Environment | 
| [venueApiUrl] | string |
| [sourceInformation] | SourceInformation |

```typescript
interface SourceInformation {
    sourceName?: string;
    sourceVersion?: string;
    viewName?: string;
}
```

* getSeatAttributes(venueId) ⇒ Array&lt;SeatAttributes&gt;
* getSeatAttributesBySeatIds(venueId, seatIdCollection) ⇒ Array&lt;SeatAttributes&gt;
* getDetails(venueId) ⇒ Object&lt;VenueDetails&gt;
* getChartDetails(productId, date) ⇒ Object&lt;ChartDetails&gt;

#### ➥ getSeatAttributes(venueId) ⇒ Array&lt;SeatAttributes&gt;
*Get list of seat attributes*
**Returns**: Array&lt;SeatAttributes&gt; - *seat attribute models*

| Param | Type |
| --- | --- |
| venueId | string |
| [performanceDate] | string |
| [performanceTime] | string |

performanceDate should have format YYYY-MM-DD, e.g. 2021-12-24
performanceTime should have format HH:MM e.g. 12:30

#### ➥ getSeatAttributesBySeatIds(venueId, seatIdCollection) ⇒ Array&lt;SeatAttributes&gt;
*Get list of seat attributes by seat id*
**Returns**: Array&lt;SeatAttributes&gt; - *seat attribute models*

| Param | Type |
| --- | --- |
| venueId | string |
| seatIdCollection | array<string> |

seatIdCollection should contain array with seat identifier e.g. [STALLS-A13, STALLS-R24]

#### ➥ getDetails(venueId) ⇒ Array&lt;VenueDetails&gt;
*Get venue details*
**Returns**: Object&lt;VenueDetails&gt; - *venue details models*

| Param | Type |
| --- | --- |
| venueId | string |

#### ➥ getChartDetails(venueId) ⇒ Array&lt;ChartDetails&gt;
*Get chart details*
**Returns**: Object&lt;ChartDetails&gt; - *chart details models*

| Param | Type |
| --- | --- |
| venueId | string |
| [date] | string |
