import Observable from '../Observable';
// types
import { FuncEventType } from '../types/common';
import { StrategyConfigType, CacheFirstSubscriptionType } from '../types/strategy';

class CacheFirst {
  private _observable = new Observable<CacheFirstSubscriptionType>();

  constructor(config: StrategyConfigType);
  constructor(config: StrategyConfigType, func?: FuncEventType);
  constructor(config: StrategyConfigType, func?: FuncEventType) {
    this._observable.subscribe({ config, func });
  }

  get observable() {
    return this._observable;
  }
}

export default CacheFirst;
