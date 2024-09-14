// =================== CREATING CLASSES ===================
/**
 * A class serves as a blueprint for creating objects with specific properties and methods.
 */
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

    /**
     * Method to deposit an amount, throws error if invalid
     */
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        // Record a transaction and update balance
        this._balance += amount;
    }

    /**
     * Private method to calculate tax, only accessible within the class
     */
    private calculateTax(): number {
        return this._balance * 0.25;
    }

    /**
     * Getter - This is a read-only property, accessible like a field
     */
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

// =================== INSTANTIATING CLASSES | CREATING OBJECTS ===================
let account = new Account(101, 'John', 1500);
account.deposit(200); // Adds 200 to balance
console.log(account.balance); // 1700
console.log(account); // Account { id: 101, owner: 'John', balance: 1700 }
console.log(typeof account); // object
console.log(account instanceof Account); // true

/**
 * Access Modifiers
 * Public, Private, and Protected fields
 */
console.log(account.balance); // 1700
// account.balance = 100; // Setter is called (if enabled)
// account.balance; // Error: Property 'balance' is private and only accessible within the class

// =================== READ-ONLY AND OPTIONAL PROPERTIES ===================
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

// ==================== GETTERS AND SETTERS ====================
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

// ==================== INDEX SIGNATURES ====================
class Account5 {
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
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
seats.A2 = 'John';

// ==================== STATIC MEMBERS ====================
// Static members are shared across all instances of a class. 
// Static Property belongs to a class and not to the object.
class Ride {
    // Non-static way to track active rides
    activeRides: number = 0;

    start() { this.activeRides++ };
    stop() { this.activeRides-- };
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(ride1.activeRides); // 1
console.log(ride2.activeRides); // 1

// The static way
class RideSt {
    private static _activeRides: number = 0;

    start() { RideSt._activeRides++ };
    stop() { RideSt._activeRides-- };

    static get activeRides() { // Prevent setting activeRides directly
        return RideSt._activeRides;
    }
}

console.log(RideSt.activeRides); // 2

// ==================== INHERITANCE ====================
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
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
        console.log("Taking a test.");
    }
}

let student = new Student(1, "John", "Doe");
console.log(student.fullName); // John Doe

// ==================== METHOD OVERRIDING ====================
class Teacher extends Person {
    override get fullName() {
        return `Professor ${super.fullName}`;
    }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName); // Professor John Smith

// ==================== POLYMORPHISM ====================
class Principal extends Person {
    override get fullName() {
        return `Principal ${super.fullName}`;
    }
}

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

printNames([
    new Student(1, "John", "Smith"),
    new Teacher("Albert", "Einstein"),
    new Principal("Mary", "Smith"),
]);

// ==================== OPEN/CLOSED PRINCIPLE ====================
/**
 * The open/closed principle states that software entities should be open for extension,
 * but closed for modification.
 * 
 * Polymorphism and method overriding support this principle, ensuring new behaviors can be added
 * without modifying existing code.
 */

// ==================== PRIVATE VS PROTECTED MODIFIER ====================
/**
 * The key difference: protected members are inherited by child classes, 
 * whereas private members are not.
 * 
 * Use protected sparingly to avoid tight coupling between classes.
 */

class Human {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}

    private get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    protected walk() {
        console.log("Walking");
    }
}

// ==================== ABSTRACT CLASSES AND METHODS ====================
/**
 * Abstract classes provide a blueprint for other classes.
 */

abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void; // Abstract methods exist only in abstract classes
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle");
    }
}

// ==================== INTERFACES ====================
/**
 * Interfaces define the structure of objects/classes. They cannot implement methods, 
 * but only declare their signatures.
 */

interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) {}

    addEvent(): void {
        throw new Error("Method not implemented.");
    }

    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}
