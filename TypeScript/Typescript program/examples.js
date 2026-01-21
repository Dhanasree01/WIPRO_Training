"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -------------------- Map Example --------------------
var userMap = new Map();
userMap.set(101, "Niti");
userMap.set(102, "Nitin");
userMap.set(103, "Jatin");
console.log(userMap.get(101));
// -------------------- Array + Loop --------------------
var items = ["laptop", "mouse", "keyboard"];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    console.log("The value", item);
}
var userData = {
    id: 101,
    name: "Niti",
    salary: 54545
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}());
var obj = new Dog("dfdf");
obj.sound();
var userDatanew = {
    id: 102,
    name: "Nitin",
    salary: 60000,
    display: function () {
        return this.salary * 0.1;
    }
};
// -------------------- Console Output --------------------
console.log("the id is :", userData.id);
console.log("the name is :", userData.name);
console.log("the salary is :", userData.salary);
console.log("the updated bonus is :", userDatanew.display());
