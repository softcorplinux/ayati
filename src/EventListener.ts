import Listener from './Listener';

class EventListener {
  public readonly type: string;
  public readonly listener: ListenerType;

  constructor(type: string, listener: ListenerType) {
    this.type = type;
    this.listener = listener;
  }
}

export type ListenerType = {
  (listener: Listener): void;
};

export default EventListener;
