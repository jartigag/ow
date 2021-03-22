type Point = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

class BoundingBox {
  private _minX: number;
  private _maxX: number;
  private _minY: number;
  private _maxY: number;

  private _paddingTop = 0;
  private _paddingRight = 0;
  private _paddingBottom = 0;
  private _paddingLeft = 0;

  constructor(points: Point[]) {
    this._minX = Infinity;
    this._maxX = -Infinity;
    this._minY = Infinity;
    this._maxY = -Infinity;

    for (const point of points) {
      this._maxX = Math.max(this._maxX, point.x);
      this._minX = Math.min(this._minX, point.x);
      this._maxY = Math.max(this._maxY, point.y);
      this._minY = Math.min(this._minY, point.y);
    }

    if (points.length === 0) {
      this._maxX = 0;
      this._minX = 0;
      this._maxY = 0;
      this._minY = 0;
    }
  }

  get size(): Size {
    return {
      width: this._maxX - this._minX + (this._paddingLeft + this._paddingRight),
      height:
        this._maxY - this._minY + (this._paddingTop + this._paddingBottom),
    };
  }

  setPadding(padding: number) {
    this._paddingTop = padding;
    this._paddingRight = padding;
    this._paddingBottom = padding;
    this._paddingLeft = padding;
  }

  pointFor(point: Point): Point {
    return {
      x: point.x - this._minX + this._paddingLeft,
      y: point.y - this._minY + this._paddingTop,
    };
  }
}

export default BoundingBox;
