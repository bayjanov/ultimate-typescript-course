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

let tax = calculateTax(1000);
console.log(tax);
