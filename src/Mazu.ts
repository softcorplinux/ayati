import EventListener, { ListenerType } from './EventListener';

class Mazu {
  private _observers: EventListener[] = [];
  private _scriptURL: string | URL = 'index.js';
  private _options: RegistrationOptions = {
    scope: '/',
  };

  public register(scriptURL: string | URL, options?: RegistrationOptions) {
    this._scriptURL = scriptURL;
    this._options = { ...this._options, ...options };
    return this;
  }

  public subscribe(type: string, listener: ListenerType) {
    this._observers.push(new EventListener(type, listener));
    return this;
  }

  public unsubscribe(listener: ListenerType) {
    this._observers = this._observers.filter((subscriber) => subscriber.listener !== listener);
    return this;
  }

  public async subscription(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(this._scriptURL, this._options);
        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }

        console.log('_observers', this._observers);

        // if (navigator.serviceWorker.controller) {
        //   console.log(
        //     'This page is currently controlled by:',
        //     navigator.serviceWorker.controller
        //   );
        // }
      } catch (e) {
        console.log(`Error ${e}`);
      }
    }
  }
}

export default new Mazu();
