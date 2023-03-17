export default class Mindmap {
  private _xmlns: string = 'http://www.w3.org/2000/svg';
  private _svg: Element = document.createElementNS(this._xmlns, 'svg');
  private _dataSource: IDatasource[];
  private _el: HTMLElement;

  constructor(dataSource: IDatasource[], el: HTMLElement) {
    this._el = el;
    this._dataSource = dataSource;
  }

  private _drawCircle(w: number, h: number) {
    const g = document.createElementNS(this._xmlns, 'g');
    const circle = document.createElementNS(this._xmlns, 'circle');
    circle.setAttributeNS(null, 'cx', w.toString());
    circle.setAttributeNS(null, 'cy', h.toString());
    circle.setAttributeNS(null, 'r', '10');
    circle.setAttributeNS(null, 'fill', 'none');
    circle.setAttributeNS(null, 'stroke', 'black');

    g.appendChild(circle);
    this._svg.appendChild(g);
  }

  private _draw(dataSource: IDatasource[], width: number, height: number) {
    const length = dataSource.length;
    let index = length;

    while (index--) {
      const w = width + 100;
      const h = height - 50 * index + ((length - 1) * 50) / 2;
      this._drawCircle(w, h);

      if (dataSource[index]?.children.length) {
        this._draw(dataSource[index]?.children, w, h);
      }
    }
  }

  public draw() {
    const length = this._dataSource.length;
    const { width, height } = this._el.getBoundingClientRect();
    this._svg.setAttributeNS(null, 'width', width.toString());
    this._svg.setAttributeNS(null, 'height', height.toString());
    this._svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);

    let index = length;
    while (index--) {
      const w = width / 2;
      const h = (height / (length + 1)) * (index + 1);
      this._drawCircle(w, h);
      if (this._dataSource[index]?.children.length) {
        this._draw(this._dataSource[index].children, w, h);
      }
    }

    this._el.appendChild(this._svg);
  }
}

interface IDatasource {
  id: number;
  title: string;
  children: IDatasource[];
}
