class Strategy {
  private readonly _event: Event;
  private readonly _cacheStorage: CacheStorage;

  constructor(event: Event, cacheStorage: CacheStorage) {
    this._event = event;
    this._cacheStorage = cacheStorage;
  }

  public cacheOnly(cacheConfig: ICacheConfig): void {}

  public networkOnly(cacheConfig: ICacheConfig): void {}

  public cacheFirst(cacheConfig: ICacheConfig): void {}

  public networkFirst(cacheConfig: ICacheConfig): void {}

  public staleWhileRevalidate(cacheConfig: ICacheConfig): void {}
}

interface ICacheConfig {
  maxEntries: number;
  maxAgeSeconds: number;
}

export default Strategy;
