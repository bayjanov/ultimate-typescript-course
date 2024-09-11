"use strict";
// Classes
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        this.balance += amount;
    }
}
// Creating Objects
let account = new Account(1, "John", 0);
account.deposit(100);
console.log(account.balance); // 500
console.log(account); // Account { id: 1, owner: 'John', balance: 500 }
console.log(account instanceof String); // true
// Union  
// if (typeof someObj === 'number') {}    ->  
// if you are using a type guard to narrow down the type and you are dealing with a custom object, you should always use the instanceof operator, not the typeof operator. This is because the typeof operator will always return 'object' for custom objects, regardless of their actual type, while the instanceof operator will return the correct type, like Account in this case.
