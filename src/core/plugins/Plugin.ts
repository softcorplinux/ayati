// types
import { PluginConfigType } from '../types/plugin';

class ObjectPlugin {
  private readonly _maxEntries: number;
  private readonly _maxAgeSeconds: number;

  constructor(config?: PluginConfigType) {
    this._maxEntries = config && config.maxEntries ? config.maxEntries : 10;
    this._maxAgeSeconds = config && config.maxAgeSeconds ? config.maxAgeSeconds : 1000 * 60 * 60 * 24;
  }
}

export default ObjectPlugin;
