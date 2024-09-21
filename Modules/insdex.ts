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



// =========================== MODULE FORMATS ===========================
// CommonJS, AMD, System, UMD, ES6, ES2015
// CommonJS is used in Node.js
// AMD is used in require.js
// System is used in System.js
// UMD is used in both Node.js and require.js
// ES6 is used in ES6 modules
// ES2015 is used in ES2015 modules

// To generate code for different module formats, you can use the --module flag with the tsc command like this:
// tsc --module commonjs shapes.ts
// tsc --module amd shapes.ts
// tsc --module system shapes.ts
// tsc --module umd shapes.ts
// tsc --module es6 shapes.ts
// tsc --module es2015 shapes.ts

// You can also use the module property in tsconfig.json file to specify the module format like this:
// {
//   "compilerOptions": {
//     "module": "commonjs"
//   }
// }

// So depending on the module format you choose, the generated JS code will be different.



// =========================== DEFAULT EXPORTS ===========================
// Sometimes you want to export a single class, function, or variable from a module. You can use default exports for that.
// You can have only one default export per module.

// See storage.ts for an example of default export

import Store, {Format} from './storage';

