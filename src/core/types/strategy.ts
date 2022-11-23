import ExpirationPlugin from '../plugins/ExpirationPlugin';
import { FuncEventType } from './common';

type StrategyConfigType = {
  cacheName: string;
  plugins: ExpirationPlugin[];
};

type StrategySubscriptionType = {
  config: StrategyConfigType;
  func?: FuncEventType;
};

type CacheFirstSubscriptionType = StrategySubscriptionType;
type NetworkOnlySubscriptionType = StrategySubscriptionType;

export { StrategyConfigType, CacheFirstSubscriptionType, NetworkOnlySubscriptionType, StrategySubscriptionType };
