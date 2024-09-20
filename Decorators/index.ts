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
    return  (constructor: any) => {
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


// ===================================== DECORATOR COMPOSITION =====================================
// You can apply multiple decorators to a single class.  The decorators are applied in the order they are listed.  The first
// decorator listed is the first one that is executed.

function Pipe(constructor: any) {
    console.log('Pipe Decorator called');
    constructor.prototype.pipe = true;
}

@Component2({selector: '#my-profile'})
@Pipe
class Pipe_ProfileComponent {

}


// ===================================== METHOD DECORATORS =====================================
// Method decorators are applied to the method of a class.  The method decorator is applied to the method immediately following
// the method declaration.


function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any[]) {  // to make this more generic, we can use a spread operator.
        console.log("Before");
        original.call(this, args);   
        console.log("After")
    }
}

class Person {

    @Log
    say(message: string) {
        console.log('Person says: ' + message);
    }
}



// ===================================== ACCESSOR DECORATORS =====================================
// Accessor decorators are applied to the GETTER or SETTER of a class.  The accessor decorator is applied to the accessor
// immediately following the accessor declaration.

function Capitalize(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get as Function;
    descriptor.get = function() {
        return original.call(this).toUpperCase();
    }
}

class Person2 {
    constructor(private _firstName: string = 'John', private _lastName: string = 'Doe') {}

    @Capitalize
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}

const person = new Person2('John', 'Doe');
console.log(person.fullName);  // JOHN DOE


// ===================================== PROPERTY DECORATORS =====================================
// Property decorators are applied to the property of a class.  The property decorator is applied to the property immediately
// following the property declaration.

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;
        
        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                }
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(8)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

const user  = new User('12345678');  
// const user = new User('1234567');  // Error: password should be at least 8 characters long

console.log(user.password);  // 12345678



// ===================================== PARAMETER DECORATORS =====================================
// Parameter decorators are applied to the parameter of a class method.  The parameter decorator is applied to the parameter
// immediately following the parameter declaration.

type WatchedParams = {
    methodName: string,
    parameterIndex: number
}

const watchedParams: WatchedParams[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParams.push({
        methodName, 
        parameterIndex
    });
}

class Vehicle {
    move(@Watch speed: number) {
        console.log(`Vehicle is moving at ${speed} km/hr`);
    }
}

console.log(watchedParams);  // [ { methodName: 'move', parameterIndex: 0 } ]

