export {};

class User {
  constructor() {
    this.username = "";
    this.password = "";
  }

  input(username, password) {
    this.username = username;
    this.password = password;
  }

  display() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
  }
}

let user1 = new User();
user1.input("Dhana", "1234");
user1.display();
