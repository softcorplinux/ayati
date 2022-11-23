import Observable from '../Observable';
// types
import { FuncEventType } from '../types/common';
import { StrategySubscriptionType } from '../types/strategy';

class Install {
  private readonly prefix = 'static';
  private readonly defaultVersion = 'v1';

  constructor(capture: string | RegExp, strategy: StrategySubscriptionType);
  constructor(capture: string | RegExp, strategy: StrategySubscriptionType, event?: FuncEventType);
  constructor(capture: string | RegExp, strategy: StrategySubscriptionType, event?: FuncEventType) {}
}

export default Install;
