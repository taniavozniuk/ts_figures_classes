type Color = 'green' | 'red' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: Color;

  constructor(
    public a: number,
    public b: number,
    public c: number,
    color: Color = 'green',
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: Color;

  constructor(
    public radius: number,
    color: Color = 'red',
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const radiucs = Math.PI * this.radius ** 2;

    return +radiucs.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: Color;

  constructor(
    public width: number,
    public height: number,
    color: Color = 'blue',
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const rectangles = this.width * this.height;

    return +rectangles.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return ` Color: ${figure.color}, Shape: ${figure.shape}, Ared: ${figure.getArea()}`;
}
