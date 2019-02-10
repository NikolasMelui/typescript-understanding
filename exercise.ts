type BankAccount = { money: number; deposit: (val: number) => void };

const bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

const myself: { name: string; backAccount: BankAccount; hobbies: string[] } = {
  name: 'Nikolay',
  backAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};
myself.backAccount.deposit(3000);
console.log(myself);
