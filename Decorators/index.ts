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



// ===================================== PARAMETERIZED DECORATORS =====================================
// Decorators can also accept parameters.  This is useful when you want to pass information to the decorator at runtime.

type ComponentOptions = {
    selector: string
}


// Decorator Factory -  This function is acting as a Factory for creating a decorator
function Component2 (options: ComponentOptions) {
    return  (constructor: Function) => {
        console.log('Component Decorator called');
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.options = options;
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component into DOM');
        }
    }
}

 
// We are passing an object as an argument to the decorator, in this case we are passing an element in the DOM as a selector
@Component2({selector: '#my-profile'})  
class ParameterProfileComponent {

}
