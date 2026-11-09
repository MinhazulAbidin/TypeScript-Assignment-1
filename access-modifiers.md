TypeScript OOP (Object-Oriented Programming)-এ Access Modifiers ব্যবহার করা হয় Class-এর Property এবং Method কোথা থেকে Access করা যাবে, সেটি নিয়ন্ত্রণ করার জন্য।

TypeScript-এ প্রধানত ৪টি Modifier আছে।
১। public
২। private
৩। protected
৪। readonly

1. Public: Default Access Modifier। এটি Class-এর ভিতরে, বাইরে এবং Child Clasৎ সব জায়গা থেকেই Property বা Method Access করা যায়। Example- 
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
const person = new Person("Minhaz");

console.log(person.name); 
console.log(person.getName());

এখানে name এবং getName() দুটোই public। তাই Class-এর বাইরে থেকেও এগুলো Access করা যাচ্ছে।

2. Private: এটি িউজ করলে কোনো Property বা Method শুধু সেই Class এর ভিতরেই Access করা যাবে। Class-এর বাইরে কিংবা Child Class থেকেও সরাসরি Access করা যাবে না। Example-

class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Minhaz", 5000);

console.log(account.accountHolder);
console.log(account.getBalance());

এখানে:
- accountHolder - বাইরে থেকে Access করা যাবে।
- balance - শুধু BankAccount Class-এর ভিতরে Access করা যাবে।
- getBalance() - Public হওয়ায় বাইরে থেকে Balance দেখা যাবে।

3. Protected: এটি ব্যবহার করলে Property বা Method দুটি জায়গা থেকে Access করা যাবে ইভেন নিজের Class এর ভিতরেও যাবে এন্ড Child Class এর ভিতরেও যাবে কিন্তু Class-এর বাইরে থেকে সরাসরি Access করা যাবে না। Example:

class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  public getManagerName(): string {
    return this.name;
  }
}

const manager = new Manager("Minhaz");

console.log(manager.getManagerName());

এখানে Employee হলো Parent Class এবং Manager হলো Child Class। name Property Protected হওয়ায় Employee-এর ভিতরে Access করা যাবে। Manager এর ভিতরে Access করা যাবে। বাইরে থেকে manager.name দিয়ে Access করা যাবে না। এটাই Protected এর মূল কাজ।

4. Readonly: readonly ব্যবহার করলে কোনো Property একবার Value পাওয়ার পর আর পরিবর্তন করা যাবে না। সাধারণত Constructor এর ভিতরে এর Value সেট করা হয়। Example:

lass User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user = new User(1, "Minhaz");

console.log(user.id);

user.name = "Karim";

এখানে id Readonly হওয়ায় পরিবর্তন করা যাবে না। কিন্তু  name public Property হওয়ায় পরিবর্তন করা যাবে।