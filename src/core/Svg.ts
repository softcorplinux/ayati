import CoreObject from './CoreObject';

export default class Svg extends CoreObject {
  private _children: Set<CoreObject> = new Set();

  constructor(width: string, height: string) {
    super('svg');
    this.element.setAttribute('width', width);
    this.element.setAttribute('height', height);
    this.element.setAttribute('viewBox', `0 0 ${width} ${height}`);
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
