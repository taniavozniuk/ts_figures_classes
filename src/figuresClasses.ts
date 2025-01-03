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

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2; // напівпериметр

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // формула
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
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
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
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `Shape: ${figure.shape}, Color: ${figure.color}, Ared: ${figure.getArea()}`;
}
