import CoreObject from './CoreObject';

export default class Circle extends CoreObject {
  constructor(cx: string, cy: string, r: string) {
    super('circle');
    this.element.setAttributeNS(null, 'cx', cx);
    this.element.setAttributeNS(null, 'cy', cy);
    this.element.setAttributeNS(null, 'r', r);
  }
}
