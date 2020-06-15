import { checkRequiredProperty } from '../../utils/validator';
import { ApiShowTypeData } from '../typings';

export class ShowType {
  private readonly id: string;
  private readonly type: string;

  constructor (showTypeData: ApiShowTypeData) {
    checkRequiredProperty(showTypeData, 'ShowType: show type data');

    const {
      id,
      type,
    } = showTypeData;
    this.id = id;
    this.type = type;
  }

  getId () {
    return this.id;
  }

  getType () {
    return this.type;
  }
}
