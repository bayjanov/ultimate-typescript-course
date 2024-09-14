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

