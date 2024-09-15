
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

