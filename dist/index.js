"use strict";
// Classes
class Account {
    // Parameter properties
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        // Record a transaction
        this._balance += amount;
    }
    calculateTax() {
        return this._balance * 0.25;
    }
    getBalance() {
        return this._balance;
    }
}
// Creating Objects
let account = new Account(1, "John", 0);
// Access Modifiers
// Public, Private and Protected
console.log(account.getBalance());
// account.balance; // Error: Property 'balance' is private and only accessible within class 'Account'
