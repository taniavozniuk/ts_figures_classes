export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';
  color = 'red';

  constructor(
    public a: number,
    public b: number,
    public c: number,
  ) {}

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2; // напівпериметр

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // формула
  }
}

export class Circle implements Figure {
  shape = 'circle';
  color = 'green';

  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';
  color = 'blue';

  constructor(
    public width: number,
    public height: number,
  ) {}

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return typeof figure;
}
