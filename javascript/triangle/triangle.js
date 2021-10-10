export class Triangle {
  
  constructor(a, b, c) {
    this.sides = [a, b, c];
    this.isTriangle = this.isTriangle();
    this.isEquilateral = this.isEquilateral();
    this.isIsosceles = this.isIsosceles();
    this.isScalene = this.isScalene();
  }
  
  isTriangle() {
    return this.sides
      .sort((a,b) => a - b)
      .every(side => side > 0) && this.sides[2] <= this.sides[0] + this.sides[1];
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
