import CoreObject from './CoreObject';

export default class CoreChildren extends CoreObject {
  private _children: Set<CoreObject> = new Set();

  constructor(qualifiedName: string) {
    super(qualifiedName);
  }

  public append(element: CoreObject) {
    this._children.add(element);
  }

  public draw() {
    this._children.forEach((element) => {
      this.element.append(element.draw());
    });
    return super.draw();
  }
}
