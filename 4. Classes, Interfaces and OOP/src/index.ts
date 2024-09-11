// Classes
class Account { 
    readonly id: number; // now that we have readonly property, we can't change the value of id
    owner: string;
    private _balance: number; // Now balance is private, so we can't access it outside the class
    nickname?: string; // Optional property

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

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


