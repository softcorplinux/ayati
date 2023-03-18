import Circle from './core/Circle';
import G from './core/G';
import Svg from './core/Svg';

export default class Mindmap {
  private _dataSource: IDatasource[];
  private _container: HTMLElement;
  private _coordinates: string[] = [];
  private _svg: Svg;

  constructor(dataSource: IDatasource[], container: HTMLElement) {
    this._container = container;
    this._dataSource = dataSource;
    this._svg = new Svg(this._getWidth().toString(), this._getHeight().toString());
  }

  private _getWidth() {
    return this._container.getBoundingClientRect().width;
  }

  private _getHeight() {
    return this._container.getBoundingClientRect().height;
  }

  private _pushToCoordinates(w: number, h: number) {
    this._coordinates.push(`${w}:${h}`);
  }

  private _drawCircle(w: number, h: number) {
    const g = new G();
    const circle = new Circle(w.toString(), h.toString(), '10');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'black');

    g.append(circle);
    this._svg.append(g);
  }

  private _draw(dataSource: IDatasource[], width: number, height: number, level: number) {
    const length = dataSource.length;
    let index = length;

    while (index--) {
      let w = dataSource[index].x ?? (level === 0 ? width / 2 : width + 100);
      let h =
        dataSource[index].y ??
        (level === 0 ? (height / (length + 1)) * (index + 1) : height - 50 * index + ((length - 1) * 50) / 2);

      if (this._coordinates.find((i) => i === `${w}:${h}`)) {
        w = dataSource[index].x ?? w + Math.floor(Math.random() * 100);
        h = dataSource[index].y ?? h + Math.floor(Math.random() * 100);
      }

      this._pushToCoordinates(w, h);
      this._drawCircle(w, h);

      if (dataSource[index]?.children.length) {
        this._draw(dataSource[index]?.children, w, h, level + 1);
      }
    }
  }

  public draw() {
    this._draw(this._dataSource, this._getWidth(), this._getHeight(), 0);
    this._container.appendChild(this._svg.draw());
  }
}

interface IDatasource {
  id: number;
  title: string;
  children: IDatasource[];
  x?: number;
  y?: number;
}
