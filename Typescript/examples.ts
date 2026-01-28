export {};

// -------------------- Map Example --------------------
let userMap = new Map<number, string>();
userMap.set(101, "Niti");
userMap.set(102, "Nitin");
userMap.set(103, "Jatin");

console.log(userMap.get(101));

// -------------------- Array + Loop --------------------
let items = ["laptop", "mouse", "keyboard"];
for (let item of items) {
  console.log("The value", item);
}

// -------------------- User Interface --------------------
interface User {
  id: number;
  name: string;
  salary: number;
}

let userData: User = {
  id: 101,
  name: "Niti",
  salary: 54545
};

// -------------------- Animal Interface --------------------
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}

  sound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

let obj = new Dog("dfdf");
obj.sound();

// -------------------- Extended User Interface --------------------
interface UserWithBonus extends User {
  display(): number;
}

let userDatanew: UserWithBonus = {
  id: 102,
  name: "Nitin",
  salary: 60000,
  display(): number {
    return this.salary * 0.1;
  }
};

// -------------------- Console Output --------------------
console.log("the id is :", userData.id);
console.log("the name is :", userData.name);
console.log("the salary is :", userData.salary);

console.log("the updated bonus is :", userDatanew.display());
