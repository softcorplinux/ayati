import EventListener from './EventListener';

class Mazu {
  public observers: EventListener[] = [];

  subscribe(f: EventListener) {
    this.observers.push(f);
  }

  unsubscribe(f: EventListener) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }
}

export default new Mazu();
