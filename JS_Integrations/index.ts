// ================================ INTEGRATION WITH JS ================================
// Running TypeScript and JavaScript code side by side

/**
 * Including JS code in TS projects
 * Type checking JS code using JSDocs
 * JSDocs
 * Declaration (Type Definition)
 * Using declaration files from @types/
 */

// ================================ Including JS code in TS projects ================================
// Sometimes, you need to include JS code in TS projects, especially when transitioning from a JS project to TS.

import { calculateTax } from './tax';  
// By default, TypeScript looks for a tax.ts file. If it doesn't find one, it throws an error:
// "Could not find a declaration file for module './tax'."

// To resolve this, set "allowJs" to true in your tsconfig.json file. This allows TS to include JS files in the project.



let tax = calculateTax();  // If we don't pass any arguments, it will still run because we added @ts-nocheck in tax.js
console.log(tax);




// ================================ TYPE CHECKING JS CODE USING JSDOCS =============================

// JSDocs are comments that help you document your code. They also help TypeScript understand JS code.
// We need to go to tsconfig.json and set "checkJs" to true to enable type checking for JS files.





// ================================== DESCRIBING TYPES USING JSDOCS ================================

import { newTaxCalculation } from './newTax';

// let tax2 = newTaxCalculation();  // This will throw an error because we didn't pass any arguments
let tax2 = newTaxCalculation(2_000);




// ================================== CREATING DECLARATION FILES ====================================
// Declaration files are files that describe the shape of an object or module. They have a .d.ts extension.

import { sayHello } from './newTax';

let tax3 = newTaxCalculation();
