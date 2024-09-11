// Classes
class Account { 
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (this.balance <= 0) {
            throw new Error("Invalid amount!");
        }
        this.balance += amount;
    }
}

