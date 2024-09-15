// ===================================== DECORATORS =====================================
// Decorators are a design pattern that is used to separate modification or decoration of a class without modifying the 
// original class.  Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, 
// property, or parameter.

// In order to enable decorators in TypeScript, you need to enable the experimentalDecorators compiler option either in your
// tsconfig.json file or when you are running the TypeScript compiler.

//  "experimentalDecorators": true,           /* Enable experimental support for legacy experimental decorators. */



// ===================================== CLASS DECORATORS =====================================

// Creating a decorator is simple.  A decorator is a function that is prefixed with the @ symbol, and is applied to the class
// immediately following the class declaration


function Component(constructor: Function) {
    console.log('Component Decorator called');
    constructor.prototype.uniqueID = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component into DOM');
    }
}
 
// @Component
// class ProfileComponent {

// }


// We could also solve this problem using inheritance. Instead of using a decorator, we could create a base class. 

class BaseComponent {
    insertInDOM() {
        console.log('Inserting the component into DOM');
    }
}

// @Component
class ProfileComponent extends BaseComponent {
}