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

    getBalance(): number { 
        return this._balance;
    }
}


// Creating Objects

let account = new Account(1, "John", 0);


// Access Modifiers
// Public, Private and Protected
console.log(account.getBalance()); 
// account.balance; // Error: Property 'balance' is private and only accessible within class 'Account'


