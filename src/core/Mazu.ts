import EventListener from './EventListener';

class Mazu {
  private _observers: EventListener[] = [];

  public subscribe(f: EventListener) {
    this._observers.push(f);
    return this;
  }

  public unsubscribe(f: EventListener) {
    this._observers = this._observers.filter((subscriber) => subscriber !== f);
    return this;
  }

  public subscription(): void {
    console.log('_observers', this._observers);
  }
}

export default new Mazu();
