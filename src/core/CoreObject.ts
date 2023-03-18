export default class CoreObject {
  protected xmlns: string = 'http://www.w3.org/2000/svg';
  protected element: Element;

  constructor(qualifiedName: string) {
    this.element = document.createElementNS(this.xmlns, qualifiedName);
  }

  public setAttribute(qualifiedName: string, value: string) {
    this.element.setAttributeNS(null, qualifiedName, value);
  }

  public draw() {
    return this.element;
  }
}
