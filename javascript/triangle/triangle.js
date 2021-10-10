export class Triangle {
  
  constructor(a, b, c) {
    this.sides = [a, b, c];
    this.isTriangle = this.isTriangle();
    this.isEquilateral = this.isEquilateral();
    this.isIsosceles = this.isIsosceles();
    this.isScalene = this.isScalene();
  }
  
  isTriangle() {
    const [a, b, c] = this.sides;
    return (
      a > 0 && b > 0 && c > 0 &&
      a + b >= c &&
      b + c >= a &&
      c + a >= b
    );
  }

  isEquilateral() {
    const [a,b,c] = this.sides;
    return this.isTriangle && a == b && b == c;
  }

  isIsosceles() {
    const [a,b,c] = this.sides;
    return this.isTriangle && ((a == b) || (a == c) || (b == c));
  }

  isScalene() {
    return this.isTriangle && !(this.isEquilateral || this.isIsosceles);
  }

}
