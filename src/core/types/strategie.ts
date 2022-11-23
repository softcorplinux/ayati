import ExpirationPlugin from '../plugins/ExpirationPlugin';
import { FuncEventType } from './common';

type CacheFirstConfigType = {
  cacheName: string;
  plugins: ExpirationPlugin[];
};

type CacheFirstSubscriptionType = {
  config: CacheFirstConfigType;
  func?: FuncEventType;
};

export { CacheFirstConfigType, CacheFirstSubscriptionType };
