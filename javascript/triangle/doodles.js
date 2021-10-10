import { Triangle } from './triangle';

const myTriangle = new Triangle(0,0,0);
const isTriangle = myTriangle.isTriangle ? 'yes, is triangle' : 'no, not a triangle';
console.log(isTriangle);