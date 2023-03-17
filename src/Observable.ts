class Observable<T> {
  public observers: T[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(f: any) {
    this.observers.push(f);
  }

  unsubscribe(f: any) {
    this.observers = this.observers.filter((subscriber: any) => subscriber !== f);
  }

  notify(data: any) {
    this.observers.forEach((observer: any) => observer(data));
  }
}

export default Observable;
