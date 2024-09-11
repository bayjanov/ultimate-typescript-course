// Classes
class Account {
    // Fields
    nickname?: string; // Optional field

    // Parameter properties
    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        // Record a transaction
        this._balance += amount;
    }

    private calculateTax(): number {
        return this._balance * 0.25;
    }

    // Getter   -   This is a read-only property, accessible just like a field
    get balance(): number { 
        return this._balance;
    }

//     // Setter   -   This is our chance to validate the value before setting it
//     set balance(value: number) { 
//         if (value < 0) {
//             throw new Error("Invalid balance!");
//         }
//         this._balance = value;
//     }
}


// Creating Objects

let account = new Account(1, "John", 0);

// Access Modifiers
// Public, Private and Protected
console.log(account.balance); 
// account.balance = 100; // Setter is called
// account.balance; // Error: Property 'balance' is private and only accessible within class 'Account'


