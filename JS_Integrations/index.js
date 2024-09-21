"use strict";
// ================================ INTEGRATION WITH JS ================================
// How to run TS and JS code side by side
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * How to include JS code in TS projects
 * Type checking JS code using JSDocs
 * JSDocs
 * Declatation (Type Definition)
 * Using declaration files from @types/
 */
// ================================ How to include JS code in TS projects ================================
// Sometimes we need to include JS code in TS projects because you might have JS project and decide to introduce TS in it.
var tax_1 = require("./tax");
// By default, it will look for tax.ts file but will not find it because it is a JS file. 
//So it will throw an error "Could not find a declaration file for module './tax'."
// So we need to go to tsconfig.json file and set "allowJs" to true. This will allow TS to include JS files in the project.
var tax = (0, tax_1.calculateTax)(1000);
console.log(tax); // We get a compilation error if Module is CommonJS and we are using ES6 import/export syntax.
