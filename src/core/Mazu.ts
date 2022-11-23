import Observable from './Observable';
// events
import Install from './events/Install';
// types
import { StrategySubscriptionType } from './types/strategy';
import { FuncEventType } from './types/common';

class Mazu {
  private _observable = new Observable<Install>();

  constructor() {
    // this.observers = [];
  }

  install(capture: string | RegExp, strategy: StrategySubscriptionType): Mazu;
  install(capture: string | RegExp, strategy: StrategySubscriptionType, event?: FuncEventType): Mazu;
  install(capture: string | RegExp, strategy: StrategySubscriptionType, event?: FuncEventType): Mazu {
    const install = new Install();
    this._observable.subscribe({ capture, strategy, event });
    return this;
  }
}

export default Mazu;
