
/* ========================================= GENERICS =========================================
 * 
 * In this section we are gonna talk about
 * Generic classes
 * Generic function
 * Generic interfaces
 * Generic constraints
 * Type mapping  -   Powerful technique to transform one type into another
 */



// ==================== UNDERSTANDING THE PROBLEM  ====================

// Shorlty, generics are a way to make components reusable while still maintaining type safety.
// Let's say we have a class that stores a list of items. We want to make this class reusable so that it can store any type of items. 



// =========================== GENERIC CLASSES =========================

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { }
}

// let pair = new KeyValuePair<number, string>(1, 'a');  // Here we can pass the types that we want for Key and Value
let pair = new KeyValuePair(1, 'a');     // If we don't specify the types, then the compiler can infer the types itself





// =========================== GENERIC FUNCTIONS =========================

/* function wrapInArray(value: number) {     
    return [value];
} 
*/

function wrapInArray<T>(value: T) {
    return [value];
}

// Auto infers the type. 
let numbers =  wrapInArray(2);
let strings =  wrapInArray("strings");   

// This function can also be used inside a class

class ArrayUtils {
    // we don't use the 'function keyword inside the class, we just omit it. The 'function keyword is used only for standalone functions
    static wrapInArray<T>(value:T) {     
        return [value];
    }
}

let nums = ArrayUtils.wrapInArray(1);



// =========================== GENERIC INTERFACES =========================

// Let's imagine we fetch the data from a website in the /users or products endpoints
// With generic interfaces we can define reusable interfaces


//  Result of calling the endpoints
interface Result<T> {
    data: T | null,              // null in case of error
    error: string | null,        // null in case NO error occurs
}

function fetch<T>(url: string): Result<T> {
    return {data: null, error: null} // example result
}

interface User {
    username: string
}

interface Product {
    title: string
}


// Using fetch with User and Product interfaces
// at this point we have to specify the generic type.
let resultUser = fetch<User>('url'); 
let resultProduct = fetch<Product>('url'); 
resultUser.data?.username;
resultProduct.data?.title;


// =========================== GENERIC CONSTRAINTS =========================
// We can restrict the types that can be used with generics



// Here we can pass any type to the function. No restrictions
function echo<T>(value: T): T {
    return value;
}

echo(1); // 1
echo("string"); // string
echo({object: "Object"}); // {name: "John"}




// Let's say we want to restrict the types to only objects
// We can do this by using the 'extends' keyword

function echoWithConstraints<T extends boolean | number | {name: string}>(value: T): T {
    return value;
}

echoWithConstraints(1); // 1
echoWithConstraints(true); // string
echoWithConstraints({name: "John"}); 
// echoWithConstraints("string");      // Error, because it doesn't match the constraints



/* We can also constraint by an interface */
interface IPerson {
    name: string,
    age: number
}

function echoWithInterface<T extends IPerson>(value: T): T {
    return value;
}

echoWithInterface({name: "John", age: 25});



/* We can also constraint by a class */
class Car {
    constructor(public brand: string) {}
}

function echoWithClass<T extends Car>(value: T): T {
    return value;
}

echoWithClass(new Car("BMW"));


/* We can also contraint by any classes that derive from a class */

class Animal {
    constructor(public name: string) {}
}

class Fox extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }
}

function echoWithClassConstraint<T extends Animal>(value: T): T {
    return value;
}

echoWithClassConstraint(new Fox("Fox", "Red Fox"));   // It is allowed because Fox is a subclass of Animal



// =========================== EXTENDING GENERIC CLASSES =========================

// Let's say we are building an ecommerce website. So here we can have objects like Products, Categories, Shopping Cart, etc.

interface IProduct {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    
    add(object: T): void {
        this._objects.push(object);
    }
}

// Scenario 1: We want to create a store that only accepts products
class CompressibleStore<T> extends Store<T> {
// class CompressibleStore extends Store<T> {// Error, because T is not defined
    compress(): void { }
}

let store = new CompressibleStore<IProduct>();
store.add({name: "Product 1", price: 100});
store.compress();


// Scenario 2: We are restricting the Generic type paramater to only objects that have a specific property

class SearchableStore<T extends {name: string}> extends Store<T> {    // Resctricting/Extending T with {name: string} object
    find(name: string): T | undefined {
        /* The compiler won't recognize the name property, that is why we 
         can (restrict/extend the T by {name: string}  object) */ 
        return this._objects.find(obj => obj.name === name);          
    }
}


// Scenario 3: Fixing the Generic Param to one specific type/interface. Because we want to have a store that only accepts products and performs product-specific operations only.  

class ProductStore extends Store<IProduct> {
    filterByCategory(category: string): IProduct[] {
        return [];
    }
}




// =========================== THE keyOf OPERATOR =========================

// The keyof operator is used to get the keys of an object


interface IProduct2 {
    name: string;
    price: number;
}

class Store2<T> {
    protected _objects: T[] = [];
    
    add(object: T): void {
        this._objects.push(object);
    }

    // if T is IProduct2
    // keyof T => "name" | "price"
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property ] === value);
    }
}


let store2 = new Store2<IProduct2>();
store2.add({name: "Product 1", price: 100});
store2.find("name", "Product 1");
store2.find("price", 100);

// store2.find("noneExistingProperty", 1); // Error, because the property 'noneExistingProperty' doesn't exist in the IProduct2 interface






// =========================== TYPE MAPPING =========================
// Type mapping is a powerful technique to transform one type into another. 

// Let's say we have a type that has all the properties of another type, but they are all optional

interface IProduct3 {
    name: string;
    price: number;
}

interface ICustomer {
    name: string;
    orders: number;
}


// We are gonna create a new type based on IProduct3, but in this new type we wanna add all the properties of IProduct3 dynamically, and make them readonly.

type ReadonlyProduct = {
    // Index signature
    // keyof 
    readonly [Property in keyof IProduct3]: IProduct3[Property]
}

let product: ReadonlyProduct = {
    name: "Product 1",
    price: 100
}

// product.name = "Product 2"; // Error, because the properties are readonly


// What if we want also a readonly Customer or Order or any other type?
// We can create a generic type that takes a type and returns a readonly version of that type


type ReadOnly<T> = {
    readonly [Property in keyof T]: T[Property]
}

type Optional<T> = {
    [Property in keyof T]?: T[Property]
}

type Nullable<T> = {
    [Property in keyof T]: T[Property] | null
}

// So the possibilities are endless. We can create any type of transformation we want. 


let readonlyProduct: Readonly<IProduct3> = {
    name: "Product 1",
    price: 100
}


let readonlyCustomer: ReadOnly<ICustomer> = {
    name: "John",
    orders: 10
}


// Because these types are pretty useful, TypeScript has already defined them for us.
// We can go and google: "typescript predefined utility types" 
// Link: https://www.typescriptlang.org/docs/handbook/utility-types.html


