// Classes
class Account { 
    readonly id: number; // now that we have readonly property, we can't change the value of id
    owner: string;
    balance: number;
    nickname?: string; // Optional property

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid amount!");
        }
        this.balance += amount;
    }
}


// Creating Objects

let account = new Account(1, "John", 0);
// account.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(account instanceof Account); // true
// Union  

// if (typeof someObj === 'number') {}    ->  // if you are using a type guard to narrow down the type and you are dealing with a custom object, you should always use the instanceof operator, not the typeof operator. This is because the typeof operator will always return 'object' for custom objects, regardless of their actual type, while the instanceof operator will return the correct type, like Account in this case.




