import Observable from '../Observable';
// types
import { FuncEventType } from '../types/common';
import { CacheFirstConfigType, CacheFirstSubscriptionType } from '../types/strategie';

class CacheFirst {
  private _observable = new Observable<CacheFirstSubscriptionType>();

  constructor(config: CacheFirstConfigType);
  constructor(config: CacheFirstConfigType, func?: FuncEventType) {
    this._observable.subscribe({ config, func });
  }

  get observable() {
    return this._observable;
  }
}

export default CacheFirst;
