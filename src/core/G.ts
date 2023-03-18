import CoreObject from './CoreObject';

export default class G extends CoreObject {
  private _children: Set<CoreObject> = new Set();

  constructor() {
    super('g');
  }

  public append(element: CoreObject) {
    this._children.add(element);
  }

  public draw() {
    this._children.forEach((element) => {
      this.element.appendChild(element.draw());
    });
    return this.element;
  }
}
