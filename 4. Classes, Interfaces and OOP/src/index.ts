// =================== CREATING CLASSES ===================
// A class serves as a blueprint for creating objects with specific properties and methods.
class Account {
    // Fields
    id: number;
    owner: string;
    nickname?: string; // Optional field
    private _balance: number; // Private balance, can only be accessed within the class

    // Parameter properties in the constructor
    constructor(
        id: number,
        owner: string,
        balance: number
    ) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    // Method to deposit an amount, throws error if invalid
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        // Record a transaction and update balance
        this._balance += amount;
    }

    // Private method to calculate tax, only accessible within the class
    private calculateTax(): number {
        return this._balance * 0.25;
    }

    // Getter - This is a read-only property, accessible like a field
    get balance(): number { 
        return this._balance;
    }

    // Setter - This is used to validate and set the balance (commented out by default)
    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error("Invalid balance!");
    //     this._balance = value;
    // }
}

// =================== INSTANTIATING CLASSES | CREATING OBJECTS===================
let account = new Account(101, 'John', 1500);
account.deposit(200); // Adds 200 to balance
console.log(account.balance); // 1700
console.log(account); // Account { id: 101, owner: 'John', balance: 1700 }
console.log(typeof account); // object
console.log(account instanceof Account); // true

// Access Modifiers
// Public, Private, and Protected fields
console.log(account.balance); // 1700
// account.balance = 100; // Setter is called (if enabled)
// account.balance; // Error: Property 'balance' is private and only accessible within the class

// Read-Only and Optional Properties
class Account1 {
    readonly id: number;
    owner: string;
    nickname?: string; // Optional property
    private _balance: number; // Private balance

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    // Deposit method, updating balance
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }

    // Getter for balance
    get balance(): number {
        return this._balance;
    }
}

// =================== ACCESS MODIFIERS ===================
class Account2 {
    readonly id: number;
    owner: string;
    nickname?: string; // Optional field
    private _balance: number; // Private balance

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    // Deposit method
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }

    // Getter method to access the private balance
    getBalance(): number {
        return this._balance;
    }
}

let account2 = new Account2(202, 'John', 2500);
console.log(account2.getBalance()); // 2500

// =================== CONSTRUCTOR PARAMETER PROPERTIES ===================
class Account3 {
    nickname?: string;

    constructor(
        public readonly id: number, // Auto-generates and initializes id
        public owner: string,       // Publicly accessible owner
        private _balance: number     // Private balance field
    ) {}

    // Deposit method
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }

    // Getter method for private balance
    getBalance(): number {
        return this._balance;
    }
}

//==================== GETTERS AND SETTERS ====================
class Account4 {
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) {}

    // Getter for balance
    get balance(): number {
        return this._balance;
    }

    // Setter for balance with validation
    set balance(value: number) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }

    // Deposit method
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }
}

let account4 = new Account4(303, 'John', 3000);
console.log(account4.balance); // 3000



//=============== INDEX SIGNATURES ===============

// Index signatures allow objects to have dynamic properties
class Account5 {
    nickname?: string;

    constructor(
        public readonly id: number, // Auto-generates and initializes id
        public owner: string,       // Publicly accessible owner
        private _balance: number     // Private balance field
    ) {}

}

class SeatAssignment {
    // A1, A2, ...
    // Mosh, John, ...
    // Index signature property
    [seatNumber: string]: string;

}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
// seats['A1'] = 'Bakhti'; // Same as seats.A1 = 'Bakhti';
seats.A2 = 'John';


// =================== STATIC MEMBERS ===================

// Static members are shared across all instances of a class. Static Propery belongs to a class and not to the object

class Ride {

    // THE NON STATIC WAY 

    // we wanna know how many active rides we have in our system
    activeRides: number = 0;

    start() { this.activeRides++ };
    stop() { this.activeRides--}
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// This shows only 1 because each of the objects are independent here. That is why we can use here static members
console.log(ride1.activeRides) // 1
console.log(ride2.activeRides) // 1


// THE STATIC WAY
class RideSt {

    private static _activeRides: number = 0;

    start() { RideSt._activeRides++ };
    stop() { RideSt._activeRides--}

    static get activeRides() {  // this is to avoid setting activeRides
        return RideSt._activeRides;
    }
}

let ride11 = new Ride();
ride1.start();

let ride22 = new Ride();
ride2.start();

console.log(RideSt.activeRides);




// =================== INHERITANCE ===================

class Person {
    constructor(
        public firstName: string, 
        public lastName: string,
    ) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log("Walking");
    }
}


class Student extends Person {
    constructor(
        public studentId: number,
        firstName: string,
        lastName: string,
    ) { 
        super(firstName, lastName); 
    }

    takeTest() {
        console.log("Taking a test.")
    }
}

let student =  new Student(1, "John", "john@gmail.com");

// Here we created both classes in the same file for demonstrational purposes. But the best practce is to create them in separate files.



// =================== METHOD OVERRIDING ===================
// Changing the implementation of the method that is being inherted from parent class, in the child class. 

class Teacher extends Person {
    override get fullName() {
        return 'Professor' + super.fullName;
    }

    // get fullName() {                         // if noImplicitOverride: true this will show an error
    //     return 'Professor' + super.fullName;
    // }
}

let teacher = new Teacher("John", "Smith")

// Now we could just create a new method instead of overriding the existing one. But it might cause some problems. 
// So we enable the following option in the tsconfig file:    
// "noImplicitOverride": true,         /* Ensure overriding members in derived classes are marked with an override modifier. */



