import Strategy from './Strategy';

class Listener {
  public readonly event: Event;
  public readonly strategy: Strategy;
  public readonly cacheStorage: CacheStorage = caches;

  constructor(event: Event) {
    this.event = event;
    this.strategy = new Strategy(this.event, this.cacheStorage);
  }
}

export default Listener;
