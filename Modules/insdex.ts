// ======================================== SECTION: MODULES ========================================
/* 
* How to create and use modules in typescript
* Modules formats and how to congigure typescript compiler to generate code for different module formats
* Default exports
* Wildcard imports
* Re-exporting modules
*/

// Modules are a way to organize code in a reusable way. Modules are a way to split your code into multiple files.



// =========================== IMPORTING AND EXPORTING MODULES ===========================

// import { Circle as CustomNameForCircle, Circle } from './shapes';
import {Circle, Square} from './shapes';

let circle = new Circle(5);
console.log(circle.radius);

let square = new Square(10);
console.log(square.side);



