import CoreChildren from './CoreChildren';

export default class Svg extends CoreChildren {
  constructor(width: string, height: string) {
    super('svg');
    this.element.setAttribute('width', width);
    this.element.setAttribute('height', height);
    this.element.setAttribute('viewBox', `0 0 ${width} ${height}`);
  }
}
