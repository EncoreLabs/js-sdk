import { BasketItem } from './basket-item';
import { checkRequiredProperty } from '../../utils/validator';
import { BasketItemData } from '../typings';

export class BasketItemsCollection {
  private readonly items: BasketItem[] = [];

  constructor (basketItemsData: BasketItemData[]) {
    checkRequiredProperty(basketItemsData, 'BasketItemsCollection: basket items collection');

    this.items = basketItemsData.map((basketItemData) => new BasketItem(basketItemData));
  }

  getItems () {
    return [ ...this.items ];
  }

  hasVoucher () {
    return this.items.some(item => item.isVoucher());
  }

  hasPostage () {
    return this.items.some(item => item.isPostage());
  }

  hasFlexiticket () {
    return this.items.some(item => item.isFlexiticket());
  }

  hasShow () {
    return this.items.some(item => item.isShow());
  }

  hasAttraction () {
    return this.items.some(item => item.isAttraction());
  }

  getLength () {
    return this.items.filter(item => !item.isFlexiticket() && !item.isPostage()).length;
  }

  getAttractions () {
    return this.items.filter(item => item.isAttraction());
  }

  getFlexitickets () {
    return this.items.filter(item => item.isFlexiticket());
  }

  getPostage () {
    return this.items.find(item => item.isPostage());
  }

  getTickets () {
    return this.items.filter(item => item.isTicket());
  }

  getTicketsWithFlexiticket () {
    return this.items.filter(item => item.isTicket() || item.isFlexiticket());
  }
}
